"use client";

import * as z from "zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { signinSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

export default function Page() {
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const supabase = createClientComponentClient();

    const form = useForm<z.infer<typeof signinSchema>>({
        resolver: zodResolver(signinSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signinSchema>) => {
        try {
            setLoading(true);

            const { error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });

            if (!error) {
                router.push("/dashboard");
            } else if (error) {
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Something went wrong signing you in. Please try again",
                });
            }

            router.refresh();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="w-full h-[calc(100vh-11.5rem)] sm:h-[calc(100vh-7.5rem)]">
            <div className="container flex items-center justify-center h-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 sm:w-1/4 space-y-3">
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
                        <div className="w-full flex items-center justify-between text-sm">
                            <p>
                                New user?{" "}
                                <Link href="/auth/signup" className="text-blue-500">
                                    Sign up
                                </Link>
                            </p>
                            <Link href="/auth/signup" className="text-blue-500">
                                Forgot password?
                            </Link>
                        </div>
                        <Button type="submit" className="w-full">
                            {loading ? "Loading..." : "Sign in"}
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    );
}
