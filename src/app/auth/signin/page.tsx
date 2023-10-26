"use client";

import * as z from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    email: z.string().email().min(1, { message: "Field cannot be empty" }),
    password: z.string().min(8, { message: "At least 8 characters expected" }),
});

export default function Page() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async () => {
        console.log("Form submitted");
    };

    return (
        <main className="w-full h-[calc(100vh-11.5rem)] sm:h-[calc(100vh-7.5rem)]">
            <div className="container flex items-center justify-center h-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full sm:w-1/4 space-y-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="johndoe@company.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="********" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Link href="/" className="w-full text-sm text-blue-500">
                            Forgot password?
                        </Link>
                        <Button className="w-full">Submit</Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
