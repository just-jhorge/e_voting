"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { toast } from "../ui/use-toast";

export default function LogoutButton() {
    const router = useRouter();
    const supabase = createClientComponentClient();

    const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            router.push("/auth/signin");
            router.refresh();
        } else if (error) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Something went wrong signing out. Please try again!",
            });
        }
    };
    return (
        <Button variant="destructive" onClick={logout}>
            Logout
        </Button>
    );
}
