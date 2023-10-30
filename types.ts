export type ElectionStatus = "CLOSED" | "OPEN";
export type ElectionType = "ONE-TO-ONE" | "ONE-TO-MANY";

export type Election = {
    close_date: string;
    contestants: JSON;
    created_at: string;
    created_by: string;
    election_id: string;
    election_name: string;
    election_type: string;
    open_date: string;
    voters: JSON;
};
