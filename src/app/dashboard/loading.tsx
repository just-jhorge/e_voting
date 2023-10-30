import Link from "next/link";
import style from "@/styles/skeleton.module.css";

export default function loading() {
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
                    {[...new Array(20)].map((_, index) => (
                        <div key={index} className="border border-gray-300 shadow-sm rounded-sm min-h-[5rem] p-3">
                            <h3 className={`${style.skeleton} w-4/5 h-3 mb-5`}></h3>
                            <div>
                                <p className={`${style.skeleton} w-full h-3 mb-3`}></p>
                                <p className={`${style.skeleton} w-full h-3 mb-3`}></p>
                                <p className={`${style.skeleton} w-full h-3 mb-3`}></p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
