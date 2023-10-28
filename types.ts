export type ElectionStatus = "CLOSED" | "OPEN";
export type ElectionType = "ONE-TO-ONE" | "ONE-TO-MANY";

export type Election = {
    election_name: string;
    opening_date: Date;
    closing_date: Date;
    election_status: ElectionStatus;
    election_type: ElectionType;
};
