"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <main className="h-[calc(100vh-11.5rem)] sm:h-[calc(100vh-7.5rem)] flex items-center justify-center">
            <div className="text-center space-y-3">
                <h3>Not Found</h3>
                <p>Failed to fetch resource requested</p>
                <div className="flex items-center justify-center gap-2">
                    <Button onClick={() => router.back()}>Go Back</Button>
                    <Button onClick={() => router.replace("/")}>Go Home</Button>
                </div>
            </div>
        </main>
    );
}
