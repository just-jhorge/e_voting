import ElectionCard from "@/components/cards/ElectionCard";
import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <>
            <div className="container space-y-5 sm:space-y-10">
                <section className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Your elections</h3>
                    <Link
                        href="/dashboard/add-election"
                        className="border border-slate-800 hover:bg-slate-800 hover:text-white transition text-slate-800 flex items-center justify-center text-sm py-2 px-3 rounded-sm"
                    >
                        Add Election
                    </Link>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                    <ElectionCard />
                </section>
            </div>
        </>
    );
}
