import Link from "next/link";
type ElectionType = "ONE-TO-ONE" | "ONE-TO-MANY";

interface ElectionCardProps {
    election_name: string;
    opening_date: Date;
    closing_date: Date;
    status: boolean;
    election_type: ElectionType;
}

const ElectionCard: React.FC<ElectionCardProps> = ({
    election_name,
    opening_date,
    closing_date,
    status,
    election_type,
}) => {
    return (
        <Link href="/dashboard/election/12">
            <div
                className={`border border-gray-300 shadow-sm rounded-sm ${
                    status ? "bg-green-100" : "bg-red-100"
                } min-h-[5rem] p-3`}
            >
                <h3 className="mb-3 font-semibold">{election_name}</h3>
                <div className="text-sm sm:text-base">
                    <p>Open date: {opening_date.toDateString()}</p>
                    <p>Close date: {closing_date.toDateString()}</p>
                    <p>Status: {status ? "Active" : "Closed"}</p>
                    <p>Election type: {election_type}</p>
                </div>
            </div>
        </Link>
    );
};

export default ElectionCard;
