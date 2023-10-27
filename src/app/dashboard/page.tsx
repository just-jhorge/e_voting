import Link from "next/link";
import React from "react";

export default function Page() {
    return (
        <>
            <div className="container">
                <section className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Your elections</h3>
                    <Link
                        href="/dashboard/add-election"
                        className="bg-slate-800 flex items-center justify-center text-sm text-white py-2 px-3 rounded-sm"
                    >
                        Add Election
                    </Link>
                </section>
            </div>
        </>
    );
}
