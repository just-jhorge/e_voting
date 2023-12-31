import Link from "next/link";
import ElectionCard from "@/components/cards/ElectionCard";
import { ElectionType } from "../../../types";
import getUserElections from "@/actions/getAllElections";

export default async function Page() {
    const elections = await getUserElections();

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
                    {elections.length !== 0 ? (
                        elections.map((election, index) => {
                            const { election_name, open_date, close_date, election_type } = election;

                            const isElectionActive = (opening_date: string, closing_date: string) => {
                                const currentDate = new Date();
                                const openingDate = new Date(opening_date);
                                const closingDate = new Date(closing_date);

                                return currentDate >= openingDate && currentDate <= closingDate;
                            };

                            return (
                                <ElectionCard
                                    key={index}
                                    election_name={election_name}
                                    opening_date={new Date(open_date)}
                                    closing_date={new Date(close_date)}
                                    status={isElectionActive(open_date, close_date)}
                                    election_type={election_type as ElectionType}
                                />
                            );
                        })
                    ) : (
                        <p className="w-full col-span-4">
                            You have no elections, please create one{" "}
                            <Link href="/dashboard/add-election" className="text-blue-500 underline">
                                here
                            </Link>
                        </p>
                    )}
                </section>
            </div>
        </>
    );
}
