export declare enum MatchStatus {
    PENDING = "PENDING",
    LIVE = "LIVE",
    FINISHED = "FINISHED"
}
export declare class UpdateMatchDto {
    status: MatchStatus;
    room_id?: string;
    room_password?: string;
}
