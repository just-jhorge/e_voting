import Link from "next/link";

interface ElectionCardProps {}

const ElectionCard: React.FC<ElectionCardProps> = () => {
    return (
        <Link href="/dashboard/election/12">
            <div className="border border-gray-300 shadow-sm rounded-sm bg-white min-h-[5rem] p-3">
                This is an election card
            </div>
        </Link>
    );
};

export default ElectionCard;
