"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { newElectionSchema } from "@/lib/schemas";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export default function Page() {
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const supabase = createClientComponentClient();

    const form = useForm<z.infer<typeof newElectionSchema>>({
        resolver: zodResolver(newElectionSchema),
        defaultValues: {
            election_name: "",
            election_type: "",
        },
    });

    async function onSubmit(values: z.infer<typeof newElectionSchema>) {
        const {
            data: { session },
        } = await supabase.auth.getSession();

        const user_id = session?.user.id;

        try {
            setLoading(true);

            const { error } = await supabase.from("elections").insert({
                created_by: user_id,
                election_name: values.election_name,
                election_type: values.election_type,
                open_date: values.openDate.toLocaleDateString(),
                close_date: values.closeDate.toLocaleDateString(),
                voters: {},
                contestants: {},
            });

            if (!error) {
                toast({
                    title: "Success",
                    description: "Election created successfully.",
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: error.message,
                });
            }

            router.refresh();
            form.reset();
            router.push("/dashboard");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="w-full h-[calc(100vh-11.5rem)] sm:h-[calc(100vh-7.5rem)]">
            <div className="container flex items-center justify-center h-full">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-[95%] sm:w-2/5 space-y-7 bg-white shadow-sm px-6 py-8 rounded-sm"
                    >
                        <div className="space-y-3">
                            <FormField
                                control={form.control}
                                name="election_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Election name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Presidential Election" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="election_type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Election type</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Please select the type of election" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="one-to-one">One-to-One</SelectItem>
                                                <SelectItem value="one-to-many">One-to-Many</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                                <FormField
                                    control={form.control}
                                    name="openDate"
                                    render={({ field }) => (
                                        <FormItem className="w-full flex flex-col">
                                            <FormLabel>Open date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="closeDate"
                                    render={({ field }) => (
                                        <FormItem className="w-full flex flex-col">
                                            <FormLabel>Close date</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={field.value}
                                                        onSelect={field.onChange}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            {loading ? "Adding election..." : "Add Election"}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
