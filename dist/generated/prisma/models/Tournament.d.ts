import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TournamentModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentPayload>;
export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
export type TournamentAvgAggregateOutputType = {
    id: number | null;
    max_players: number | null;
    current_players: number | null;
    entry_fee: number | null;
    prize_pool: number | null;
};
export type TournamentSumAggregateOutputType = {
    id: number | null;
    max_players: number | null;
    current_players: number | null;
    entry_fee: number | null;
    prize_pool: number | null;
};
export type TournamentMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    game_mode: string | null;
    max_players: number | null;
    current_players: number | null;
    entry_fee: number | null;
    prize_pool: number | null;
    status: $Enums.TournamentStatus | null;
    start_at: Date | null;
    registration_deadline: Date | null;
    featured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    description: string | null;
    game_mode: string | null;
    max_players: number | null;
    current_players: number | null;
    entry_fee: number | null;
    prize_pool: number | null;
    status: $Enums.TournamentStatus | null;
    start_at: Date | null;
    registration_deadline: Date | null;
    featured: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    game_mode: number;
    max_players: number;
    current_players: number;
    entry_fee: number;
    prize_pool: number;
    status: number;
    start_at: number;
    registration_deadline: number;
    featured: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TournamentAvgAggregateInputType = {
    id?: true;
    max_players?: true;
    current_players?: true;
    entry_fee?: true;
    prize_pool?: true;
};
export type TournamentSumAggregateInputType = {
    id?: true;
    max_players?: true;
    current_players?: true;
    entry_fee?: true;
    prize_pool?: true;
};
export type TournamentMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_mode?: true;
    max_players?: true;
    current_players?: true;
    entry_fee?: true;
    prize_pool?: true;
    status?: true;
    start_at?: true;
    registration_deadline?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_mode?: true;
    max_players?: true;
    current_players?: true;
    entry_fee?: true;
    prize_pool?: true;
    status?: true;
    start_at?: true;
    registration_deadline?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    game_mode?: true;
    max_players?: true;
    current_players?: true;
    entry_fee?: true;
    prize_pool?: true;
    status?: true;
    start_at?: true;
    registration_deadline?: true;
    featured?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TournamentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TournamentCountAggregateInputType;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
    [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournament[P]> : Prisma.GetScalarType<T[P], AggregateTournament[P]>;
};
export type TournamentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithAggregationInput | Prisma.TournamentOrderByWithAggregationInput[];
    by: Prisma.TournamentScalarFieldEnum[] | Prisma.TournamentScalarFieldEnum;
    having?: Prisma.TournamentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentCountAggregateInputType | true;
    _avg?: TournamentAvgAggregateInputType;
    _sum?: TournamentSumAggregateInputType;
    _min?: TournamentMinAggregateInputType;
    _max?: TournamentMaxAggregateInputType;
};
export type TournamentGroupByOutputType = {
    id: number;
    title: string;
    description: string | null;
    game_mode: string;
    max_players: number;
    current_players: number;
    entry_fee: number;
    prize_pool: number;
    status: $Enums.TournamentStatus;
    start_at: Date;
    registration_deadline: Date;
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: TournamentCountAggregateOutputType | null;
    _avg: TournamentAvgAggregateOutputType | null;
    _sum: TournamentSumAggregateOutputType | null;
    _min: TournamentMinAggregateOutputType | null;
    _max: TournamentMaxAggregateOutputType | null;
};
type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentGroupByOutputType[P]>;
}>>;
export type TournamentWhereInput = {
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    id?: Prisma.IntFilter<"Tournament"> | number;
    title?: Prisma.StringFilter<"Tournament"> | string;
    description?: Prisma.StringNullableFilter<"Tournament"> | string | null;
    game_mode?: Prisma.StringFilter<"Tournament"> | string;
    max_players?: Prisma.IntFilter<"Tournament"> | number;
    current_players?: Prisma.IntFilter<"Tournament"> | number;
    entry_fee?: Prisma.IntFilter<"Tournament"> | number;
    prize_pool?: Prisma.IntFilter<"Tournament"> | number;
    status?: Prisma.EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    registration_deadline?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    featured?: Prisma.BoolFilter<"Tournament"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    rankings?: Prisma.TournamentRankingListRelationFilter;
    registrations?: Prisma.RegistrationListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
};
export type TournamentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_mode?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    start_at?: Prisma.SortOrder;
    registration_deadline?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rankings?: Prisma.TournamentRankingOrderByRelationAggregateInput;
    registrations?: Prisma.RegistrationOrderByRelationAggregateInput;
    matches?: Prisma.MatchOrderByRelationAggregateInput;
};
export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    OR?: Prisma.TournamentWhereInput[];
    NOT?: Prisma.TournamentWhereInput | Prisma.TournamentWhereInput[];
    title?: Prisma.StringFilter<"Tournament"> | string;
    description?: Prisma.StringNullableFilter<"Tournament"> | string | null;
    game_mode?: Prisma.StringFilter<"Tournament"> | string;
    max_players?: Prisma.IntFilter<"Tournament"> | number;
    current_players?: Prisma.IntFilter<"Tournament"> | number;
    entry_fee?: Prisma.IntFilter<"Tournament"> | number;
    prize_pool?: Prisma.IntFilter<"Tournament"> | number;
    status?: Prisma.EnumTournamentStatusFilter<"Tournament"> | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    registration_deadline?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    featured?: Prisma.BoolFilter<"Tournament"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Tournament"> | Date | string;
    rankings?: Prisma.TournamentRankingListRelationFilter;
    registrations?: Prisma.RegistrationListRelationFilter;
    matches?: Prisma.MatchListRelationFilter;
}, "id">;
export type TournamentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    game_mode?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    start_at?: Prisma.SortOrder;
    registration_deadline?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TournamentCountOrderByAggregateInput;
    _avg?: Prisma.TournamentAvgOrderByAggregateInput;
    _max?: Prisma.TournamentMaxOrderByAggregateInput;
    _min?: Prisma.TournamentMinOrderByAggregateInput;
    _sum?: Prisma.TournamentSumOrderByAggregateInput;
};
export type TournamentScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentScalarWhereWithAggregatesInput | Prisma.TournamentScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Tournament"> | string | null;
    game_mode?: Prisma.StringWithAggregatesFilter<"Tournament"> | string;
    max_players?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    current_players?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    entry_fee?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    prize_pool?: Prisma.IntWithAggregatesFilter<"Tournament"> | number;
    status?: Prisma.EnumTournamentStatusWithAggregatesFilter<"Tournament"> | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    registration_deadline?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    featured?: Prisma.BoolWithAggregatesFilter<"Tournament"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Tournament"> | Date | string;
};
export type TournamentCreateInput = {
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutTournamentInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateInput = {
    id?: number;
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutTournamentInput;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutTournamentNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutTournamentNestedInput;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateManyInput = {
    id?: number;
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    game_mode?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    start_at?: Prisma.SortOrder;
    registration_deadline?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
};
export type TournamentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    game_mode?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    start_at?: Prisma.SortOrder;
    registration_deadline?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    game_mode?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    start_at?: Prisma.SortOrder;
    registration_deadline?: Prisma.SortOrder;
    featured?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    max_players?: Prisma.SortOrder;
    current_players?: Prisma.SortOrder;
    entry_fee?: Prisma.SortOrder;
    prize_pool?: Prisma.SortOrder;
};
export type TournamentScalarRelationFilter = {
    is?: Prisma.TournamentWhereInput;
    isNot?: Prisma.TournamentWhereInput;
};
export type EnumTournamentStatusFieldUpdateOperationsInput = {
    set?: $Enums.TournamentStatus;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type TournamentCreateNestedOneWithoutRegistrationsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRegistrationsInput, Prisma.TournamentUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRegistrationsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRegistrationsInput, Prisma.TournamentUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRegistrationsInput;
    upsert?: Prisma.TournamentUpsertWithoutRegistrationsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutRegistrationsInput, Prisma.TournamentUpdateWithoutRegistrationsInput>, Prisma.TournamentUncheckedUpdateWithoutRegistrationsInput>;
};
export type TournamentCreateNestedOneWithoutMatchesInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutMatchesInput;
    upsert?: Prisma.TournamentUpsertWithoutMatchesInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutMatchesInput, Prisma.TournamentUpdateWithoutMatchesInput>, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentCreateNestedOneWithoutRankingsInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRankingsInput, Prisma.TournamentUncheckedCreateWithoutRankingsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRankingsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateOneRequiredWithoutRankingsNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentCreateWithoutRankingsInput, Prisma.TournamentUncheckedCreateWithoutRankingsInput>;
    connectOrCreate?: Prisma.TournamentCreateOrConnectWithoutRankingsInput;
    upsert?: Prisma.TournamentUpsertWithoutRankingsInput;
    connect?: Prisma.TournamentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TournamentUpdateToOneWithWhereWithoutRankingsInput, Prisma.TournamentUpdateWithoutRankingsInput>, Prisma.TournamentUncheckedUpdateWithoutRankingsInput>;
};
export type TournamentCreateWithoutRegistrationsInput = {
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutRegistrationsInput = {
    id?: number;
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutRegistrationsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRegistrationsInput, Prisma.TournamentUncheckedCreateWithoutRegistrationsInput>;
};
export type TournamentUpsertWithoutRegistrationsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutRegistrationsInput, Prisma.TournamentUncheckedUpdateWithoutRegistrationsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRegistrationsInput, Prisma.TournamentUncheckedCreateWithoutRegistrationsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutRegistrationsInput, Prisma.TournamentUncheckedUpdateWithoutRegistrationsInput>;
};
export type TournamentUpdateWithoutRegistrationsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutRegistrationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutMatchesInput = {
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutTournamentInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutMatchesInput = {
    id?: number;
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutTournamentInput;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutMatchesInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
};
export type TournamentUpsertWithoutMatchesInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutMatchesInput, Prisma.TournamentUncheckedCreateWithoutMatchesInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutMatchesInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutMatchesInput, Prisma.TournamentUncheckedUpdateWithoutMatchesInput>;
};
export type TournamentUpdateWithoutMatchesInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutTournamentNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutMatchesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutTournamentNestedInput;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCreateWithoutRankingsInput = {
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchCreateNestedManyWithoutTournamentInput;
};
export type TournamentUncheckedCreateWithoutRankingsInput = {
    id?: number;
    title: string;
    description?: string | null;
    game_mode: string;
    max_players: number;
    current_players?: number;
    entry_fee?: number;
    prize_pool: number;
    status?: $Enums.TournamentStatus;
    start_at: Date | string;
    registration_deadline: Date | string;
    featured?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutTournamentInput;
    matches?: Prisma.MatchUncheckedCreateNestedManyWithoutTournamentInput;
};
export type TournamentCreateOrConnectWithoutRankingsInput = {
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRankingsInput, Prisma.TournamentUncheckedCreateWithoutRankingsInput>;
};
export type TournamentUpsertWithoutRankingsInput = {
    update: Prisma.XOR<Prisma.TournamentUpdateWithoutRankingsInput, Prisma.TournamentUncheckedUpdateWithoutRankingsInput>;
    create: Prisma.XOR<Prisma.TournamentCreateWithoutRankingsInput, Prisma.TournamentUncheckedCreateWithoutRankingsInput>;
    where?: Prisma.TournamentWhereInput;
};
export type TournamentUpdateToOneWithWhereWithoutRankingsInput = {
    where?: Prisma.TournamentWhereInput;
    data: Prisma.XOR<Prisma.TournamentUpdateWithoutRankingsInput, Prisma.TournamentUncheckedUpdateWithoutRankingsInput>;
};
export type TournamentUpdateWithoutRankingsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUpdateManyWithoutTournamentNestedInput;
};
export type TournamentUncheckedUpdateWithoutRankingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    game_mode?: Prisma.StringFieldUpdateOperationsInput | string;
    max_players?: Prisma.IntFieldUpdateOperationsInput | number;
    current_players?: Prisma.IntFieldUpdateOperationsInput | number;
    entry_fee?: Prisma.IntFieldUpdateOperationsInput | number;
    prize_pool?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumTournamentStatusFieldUpdateOperationsInput | $Enums.TournamentStatus;
    start_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registration_deadline?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutTournamentNestedInput;
    matches?: Prisma.MatchUncheckedUpdateManyWithoutTournamentNestedInput;
};
export type TournamentCountOutputType = {
    rankings: number;
    registrations: number;
    matches: number;
};
export type TournamentCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rankings?: boolean | TournamentCountOutputTypeCountRankingsArgs;
    registrations?: boolean | TournamentCountOutputTypeCountRegistrationsArgs;
    matches?: boolean | TournamentCountOutputTypeCountMatchesArgs;
};
export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentCountOutputTypeSelect<ExtArgs> | null;
};
export type TournamentCountOutputTypeCountRankingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRankingWhereInput;
};
export type TournamentCountOutputTypeCountRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
};
export type TournamentCountOutputTypeCountMatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
};
export type TournamentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_mode?: boolean;
    max_players?: boolean;
    current_players?: boolean;
    entry_fee?: boolean;
    prize_pool?: boolean;
    status?: boolean;
    start_at?: boolean;
    registration_deadline?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rankings?: boolean | Prisma.Tournament$rankingsArgs<ExtArgs>;
    registrations?: boolean | Prisma.Tournament$registrationsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_mode?: boolean;
    max_players?: boolean;
    current_players?: boolean;
    entry_fee?: boolean;
    prize_pool?: boolean;
    status?: boolean;
    start_at?: boolean;
    registration_deadline?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_mode?: boolean;
    max_players?: boolean;
    current_players?: boolean;
    entry_fee?: boolean;
    prize_pool?: boolean;
    status?: boolean;
    start_at?: boolean;
    registration_deadline?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["tournament"]>;
export type TournamentSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    game_mode?: boolean;
    max_players?: boolean;
    current_players?: boolean;
    entry_fee?: boolean;
    prize_pool?: boolean;
    status?: boolean;
    start_at?: boolean;
    registration_deadline?: boolean;
    featured?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TournamentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "game_mode" | "max_players" | "current_players" | "entry_fee" | "prize_pool" | "status" | "start_at" | "registration_deadline" | "featured" | "createdAt" | "updatedAt", ExtArgs["result"]["tournament"]>;
export type TournamentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rankings?: boolean | Prisma.Tournament$rankingsArgs<ExtArgs>;
    registrations?: boolean | Prisma.Tournament$registrationsArgs<ExtArgs>;
    matches?: boolean | Prisma.Tournament$matchesArgs<ExtArgs>;
    _count?: boolean | Prisma.TournamentCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TournamentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $TournamentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Tournament";
    objects: {
        rankings: Prisma.$TournamentRankingPayload<ExtArgs>[];
        registrations: Prisma.$RegistrationPayload<ExtArgs>[];
        matches: Prisma.$MatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        description: string | null;
        game_mode: string;
        max_players: number;
        current_players: number;
        entry_fee: number;
        prize_pool: number;
        status: $Enums.TournamentStatus;
        start_at: Date;
        registration_deadline: Date;
        featured: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tournament"]>;
    composites: {};
};
export type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentPayload, S>;
export type TournamentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TournamentCountAggregateInputType | true;
};
export interface TournamentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Tournament'];
        meta: {
            name: 'Tournament';
        };
    };
    findUnique<T extends TournamentFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TournamentFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TournamentFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TournamentCreateArgs>(args: Prisma.SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TournamentCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TournamentDeleteArgs>(args: Prisma.SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TournamentUpdateArgs>(args: Prisma.SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TournamentDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TournamentUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TournamentUpsertArgs>(args: Prisma.SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TournamentCountArgs>(args?: Prisma.Subset<T, TournamentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentCountAggregateOutputType> : number>;
    aggregate<T extends TournamentAggregateArgs>(args: Prisma.Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>;
    groupBy<T extends TournamentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TournamentFieldRefs;
}
export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rankings<T extends Prisma.Tournament$rankingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$rankingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    registrations<T extends Prisma.Tournament$registrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matches<T extends Prisma.Tournament$matchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Tournament$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TournamentFieldRefs {
    readonly id: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly title: Prisma.FieldRef<"Tournament", 'String'>;
    readonly description: Prisma.FieldRef<"Tournament", 'String'>;
    readonly game_mode: Prisma.FieldRef<"Tournament", 'String'>;
    readonly max_players: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly current_players: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly entry_fee: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly prize_pool: Prisma.FieldRef<"Tournament", 'Int'>;
    readonly status: Prisma.FieldRef<"Tournament", 'TournamentStatus'>;
    readonly start_at: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly registration_deadline: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly featured: Prisma.FieldRef<"Tournament", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Tournament", 'DateTime'>;
}
export type TournamentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where?: Prisma.TournamentWhereInput;
    orderBy?: Prisma.TournamentOrderByWithRelationInput | Prisma.TournamentOrderByWithRelationInput[];
    cursor?: Prisma.TournamentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentScalarFieldEnum | Prisma.TournamentScalarFieldEnum[];
};
export type TournamentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
};
export type TournamentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TournamentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    data: Prisma.TournamentCreateManyInput | Prisma.TournamentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TournamentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    where?: Prisma.TournamentWhereInput;
    limit?: number;
};
export type TournamentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentUpdateManyMutationInput, Prisma.TournamentUncheckedUpdateManyInput>;
    where?: Prisma.TournamentWhereInput;
    limit?: number;
};
export type TournamentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentCreateInput, Prisma.TournamentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TournamentUpdateInput, Prisma.TournamentUncheckedUpdateInput>;
};
export type TournamentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
    where: Prisma.TournamentWhereUniqueInput;
};
export type TournamentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentWhereInput;
    limit?: number;
};
export type Tournament$rankingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    where?: Prisma.TournamentRankingWhereInput;
    orderBy?: Prisma.TournamentRankingOrderByWithRelationInput | Prisma.TournamentRankingOrderByWithRelationInput[];
    cursor?: Prisma.TournamentRankingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TournamentRankingScalarFieldEnum | Prisma.TournamentRankingScalarFieldEnum[];
};
export type Tournament$registrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegistrationScalarFieldEnum | Prisma.RegistrationScalarFieldEnum[];
};
export type Tournament$matchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchScalarFieldEnum | Prisma.MatchScalarFieldEnum[];
};
export type TournamentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentSelect<ExtArgs> | null;
    omit?: Prisma.TournamentOmit<ExtArgs> | null;
    include?: Prisma.TournamentInclude<ExtArgs> | null;
};
export {};
