import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const supabase = createServerComponentClient({ cookies });
    const session = await supabase.auth.getSession();

    if (!session) {
        redirect("/auth/signin");
    } else if (session) {
        return <main className="bg-neutral-50 py-5 sm:py-10 min-h-[calc(100vh-3.5rem)]">{children}</main>;
    }
}
