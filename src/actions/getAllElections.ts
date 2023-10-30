import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Election } from "../../types";

const getUserElections = async (): Promise<Election[]> => {
    const supabase = createServerComponentClient({ cookies });

    const {
        data: { session },
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
        .from("elections")
        .select("*")
        .eq("created_by", session?.user.id)
        .order("created_at", { ascending: false });

    if (error) {
        console.log(error);
        return [];
    }

    return (data as any) || [];
};

export default getUserElections;
