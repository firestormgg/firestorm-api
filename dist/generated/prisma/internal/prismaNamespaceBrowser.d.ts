import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Tournament: "Tournament";
    readonly Registration: "Registration";
    readonly Notification: "Notification";
    readonly Match: "Match";
    readonly MatchResult: "MatchResult";
    readonly TournamentRanking: "TournamentRanking";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly pseudo: "pseudo";
    readonly email: "email";
    readonly password: "password";
    readonly ffid: "ffid";
    readonly avatar: "avatar";
    readonly role: "role";
    readonly rank: "rank";
    readonly points: "points";
    readonly country: "country";
    readonly wins: "wins";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const TournamentScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly game_mode: "game_mode";
    readonly max_players: "max_players";
    readonly current_players: "current_players";
    readonly entry_fee: "entry_fee";
    readonly prize_pool: "prize_pool";
    readonly status: "status";
    readonly start_at: "start_at";
    readonly registration_deadline: "registration_deadline";
    readonly featured: "featured";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum];
export declare const RegistrationScalarFieldEnum: {
    readonly id: "id";
    readonly slot: "slot";
    readonly userId: "userId";
    readonly tournamentId: "tournamentId";
    readonly createdAt: "createdAt";
    readonly payment_status: "payment_status";
};
export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly body: "body";
    readonly type: "type";
    readonly read: "read";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const MatchScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly round: "round";
    readonly map: "map";
    readonly room_id: "room_id";
    readonly room_password: "room_password";
    readonly status: "status";
    readonly scheduled_at: "scheduled_at";
    readonly started_at: "started_at";
    readonly finished_at: "finished_at";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum];
export declare const MatchResultScalarFieldEnum: {
    readonly id: "id";
    readonly matchId: "matchId";
    readonly userId: "userId";
    readonly placement: "placement";
    readonly kills: "kills";
    readonly points: "points";
    readonly createdAt: "createdAt";
};
export type MatchResultScalarFieldEnum = (typeof MatchResultScalarFieldEnum)[keyof typeof MatchResultScalarFieldEnum];
export declare const TournamentRankingScalarFieldEnum: {
    readonly id: "id";
    readonly tournamentId: "tournamentId";
    readonly userId: "userId";
    readonly totalPoints: "totalPoints";
    readonly position: "position";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TournamentRankingScalarFieldEnum = (typeof TournamentRankingScalarFieldEnum)[keyof typeof TournamentRankingScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
