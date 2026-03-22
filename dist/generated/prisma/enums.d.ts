export declare const Role: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const TournamentStatus: {
    readonly OPEN: "OPEN";
    readonly SOON: "SOON";
    readonly FULL: "FULL";
    readonly ONGOING: "ONGOING";
    readonly FINISHED: "FINISHED";
};
export type TournamentStatus = (typeof TournamentStatus)[keyof typeof TournamentStatus];
export declare const NotificationType: {
    readonly INFO: "INFO";
    readonly SUCCESS: "SUCCESS";
    readonly WARNING: "WARNING";
    readonly DANGER: "DANGER";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const MatchStatus: {
    readonly PENDING: "PENDING";
    readonly LIVE: "LIVE";
    readonly FINISHED: "FINISHED";
};
export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus];
