import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchPayload>;
export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
export type MatchAvgAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    round: number | null;
};
export type MatchSumAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    round: number | null;
};
export type MatchMinAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    round: number | null;
    map: string | null;
    room_id: string | null;
    room_password: string | null;
    status: $Enums.MatchStatus | null;
    scheduled_at: Date | null;
    started_at: Date | null;
    finished_at: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchMaxAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    round: number | null;
    map: string | null;
    room_id: string | null;
    room_password: string | null;
    status: $Enums.MatchStatus | null;
    scheduled_at: Date | null;
    started_at: Date | null;
    finished_at: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MatchCountAggregateOutputType = {
    id: number;
    tournamentId: number;
    round: number;
    map: number;
    room_id: number;
    room_password: number;
    status: number;
    scheduled_at: number;
    started_at: number;
    finished_at: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MatchAvgAggregateInputType = {
    id?: true;
    tournamentId?: true;
    round?: true;
};
export type MatchSumAggregateInputType = {
    id?: true;
    tournamentId?: true;
    round?: true;
};
export type MatchMinAggregateInputType = {
    id?: true;
    tournamentId?: true;
    round?: true;
    map?: true;
    room_id?: true;
    room_password?: true;
    status?: true;
    scheduled_at?: true;
    started_at?: true;
    finished_at?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchMaxAggregateInputType = {
    id?: true;
    tournamentId?: true;
    round?: true;
    map?: true;
    room_id?: true;
    room_password?: true;
    status?: true;
    scheduled_at?: true;
    started_at?: true;
    finished_at?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MatchCountAggregateInputType = {
    id?: true;
    tournamentId?: true;
    round?: true;
    map?: true;
    room_id?: true;
    room_password?: true;
    status?: true;
    scheduled_at?: true;
    started_at?: true;
    finished_at?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithRelationInput | Prisma.MatchOrderByWithRelationInput[];
    cursor?: Prisma.MatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchCountAggregateInputType;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatch[P]> : Prisma.GetScalarType<T[P], AggregateMatch[P]>;
};
export type MatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    orderBy?: Prisma.MatchOrderByWithAggregationInput | Prisma.MatchOrderByWithAggregationInput[];
    by: Prisma.MatchScalarFieldEnum[] | Prisma.MatchScalarFieldEnum;
    having?: Prisma.MatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchCountAggregateInputType | true;
    _avg?: MatchAvgAggregateInputType;
    _sum?: MatchSumAggregateInputType;
    _min?: MatchMinAggregateInputType;
    _max?: MatchMaxAggregateInputType;
};
export type MatchGroupByOutputType = {
    id: number;
    tournamentId: number;
    round: number;
    map: string;
    room_id: string | null;
    room_password: string | null;
    status: $Enums.MatchStatus;
    scheduled_at: Date;
    started_at: Date | null;
    finished_at: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MatchCountAggregateOutputType | null;
    _avg: MatchAvgAggregateOutputType | null;
    _sum: MatchSumAggregateOutputType | null;
    _min: MatchMinAggregateOutputType | null;
    _max: MatchMaxAggregateOutputType | null;
};
type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchGroupByOutputType[P]>;
}>>;
export type MatchWhereInput = {
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    id?: Prisma.IntFilter<"Match"> | number;
    tournamentId?: Prisma.IntFilter<"Match"> | number;
    round?: Prisma.IntFilter<"Match"> | number;
    map?: Prisma.StringFilter<"Match"> | string;
    room_id?: Prisma.StringNullableFilter<"Match"> | string | null;
    room_password?: Prisma.StringNullableFilter<"Match"> | string | null;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFilter<"Match"> | Date | string;
    started_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    finished_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    results?: Prisma.MatchResultListRelationFilter;
};
export type MatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
    map?: Prisma.SortOrder;
    room_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    room_password?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    started_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    finished_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    results?: Prisma.MatchResultOrderByRelationAggregateInput;
};
export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    tournamentId_round?: Prisma.MatchTournamentIdRoundCompoundUniqueInput;
    AND?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    OR?: Prisma.MatchWhereInput[];
    NOT?: Prisma.MatchWhereInput | Prisma.MatchWhereInput[];
    tournamentId?: Prisma.IntFilter<"Match"> | number;
    round?: Prisma.IntFilter<"Match"> | number;
    map?: Prisma.StringFilter<"Match"> | string;
    room_id?: Prisma.StringNullableFilter<"Match"> | string | null;
    room_password?: Prisma.StringNullableFilter<"Match"> | string | null;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFilter<"Match"> | Date | string;
    started_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    finished_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    results?: Prisma.MatchResultListRelationFilter;
}, "id" | "tournamentId_round">;
export type MatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
    map?: Prisma.SortOrder;
    room_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    room_password?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    started_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    finished_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MatchCountOrderByAggregateInput;
    _avg?: Prisma.MatchAvgOrderByAggregateInput;
    _max?: Prisma.MatchMaxOrderByAggregateInput;
    _min?: Prisma.MatchMinOrderByAggregateInput;
    _sum?: Prisma.MatchSumOrderByAggregateInput;
};
export type MatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchScalarWhereWithAggregatesInput | Prisma.MatchScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    tournamentId?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    round?: Prisma.IntWithAggregatesFilter<"Match"> | number;
    map?: Prisma.StringWithAggregatesFilter<"Match"> | string;
    room_id?: Prisma.StringNullableWithAggregatesFilter<"Match"> | string | null;
    room_password?: Prisma.StringNullableWithAggregatesFilter<"Match"> | string | null;
    status?: Prisma.EnumMatchStatusWithAggregatesFilter<"Match"> | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
    started_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null;
    finished_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Match"> | Date | string;
};
export type MatchCreateInput = {
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchesInput;
    results?: Prisma.MatchResultCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateInput = {
    id?: number;
    tournamentId: number;
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    results?: Prisma.MatchResultUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchUpdateInput = {
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchesNestedInput;
    results?: Prisma.MatchResultUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    results?: Prisma.MatchResultUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchCreateManyInput = {
    id?: number;
    tournamentId: number;
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchUpdateManyMutationInput = {
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchListRelationFilter = {
    every?: Prisma.MatchWhereInput;
    some?: Prisma.MatchWhereInput;
    none?: Prisma.MatchWhereInput;
};
export type MatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchTournamentIdRoundCompoundUniqueInput = {
    tournamentId: number;
    round: number;
};
export type MatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
    map?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    room_password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    finished_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
};
export type MatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
    map?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    room_password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    finished_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
    map?: Prisma.SortOrder;
    room_id?: Prisma.SortOrder;
    room_password?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    scheduled_at?: Prisma.SortOrder;
    started_at?: Prisma.SortOrder;
    finished_at?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MatchSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    round?: Prisma.SortOrder;
};
export type MatchScalarRelationFilter = {
    is?: Prisma.MatchWhereInput;
    isNot?: Prisma.MatchWhereInput;
};
export type MatchCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput> | Prisma.MatchCreateWithoutTournamentInput[] | Prisma.MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutTournamentInput | Prisma.MatchCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.MatchCreateManyTournamentInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput> | Prisma.MatchCreateWithoutTournamentInput[] | Prisma.MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutTournamentInput | Prisma.MatchCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.MatchCreateManyTournamentInputEnvelope;
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
};
export type MatchUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput> | Prisma.MatchCreateWithoutTournamentInput[] | Prisma.MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutTournamentInput | Prisma.MatchCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutTournamentInput | Prisma.MatchUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.MatchCreateManyTournamentInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutTournamentInput | Prisma.MatchUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutTournamentInput | Prisma.MatchUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type MatchUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput> | Prisma.MatchCreateWithoutTournamentInput[] | Prisma.MatchUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutTournamentInput | Prisma.MatchCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.MatchUpsertWithWhereUniqueWithoutTournamentInput | Prisma.MatchUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.MatchCreateManyTournamentInputEnvelope;
    set?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    disconnect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    delete?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    connect?: Prisma.MatchWhereUniqueInput | Prisma.MatchWhereUniqueInput[];
    update?: Prisma.MatchUpdateWithWhereUniqueWithoutTournamentInput | Prisma.MatchUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.MatchUpdateManyWithWhereWithoutTournamentInput | Prisma.MatchUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
};
export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type MatchCreateNestedOneWithoutResultsInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutResultsInput, Prisma.MatchUncheckedCreateWithoutResultsInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutResultsInput;
    connect?: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateOneRequiredWithoutResultsNestedInput = {
    create?: Prisma.XOR<Prisma.MatchCreateWithoutResultsInput, Prisma.MatchUncheckedCreateWithoutResultsInput>;
    connectOrCreate?: Prisma.MatchCreateOrConnectWithoutResultsInput;
    upsert?: Prisma.MatchUpsertWithoutResultsInput;
    connect?: Prisma.MatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MatchUpdateToOneWithWhereWithoutResultsInput, Prisma.MatchUpdateWithoutResultsInput>, Prisma.MatchUncheckedUpdateWithoutResultsInput>;
};
export type MatchCreateWithoutTournamentInput = {
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    results?: Prisma.MatchResultCreateNestedManyWithoutMatchInput;
};
export type MatchUncheckedCreateWithoutTournamentInput = {
    id?: number;
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    results?: Prisma.MatchResultUncheckedCreateNestedManyWithoutMatchInput;
};
export type MatchCreateOrConnectWithoutTournamentInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput>;
};
export type MatchCreateManyTournamentInputEnvelope = {
    data: Prisma.MatchCreateManyTournamentInput | Prisma.MatchCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type MatchUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.MatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchUpdateWithoutTournamentInput, Prisma.MatchUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutTournamentInput, Prisma.MatchUncheckedCreateWithoutTournamentInput>;
};
export type MatchUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.MatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutTournamentInput, Prisma.MatchUncheckedUpdateWithoutTournamentInput>;
};
export type MatchUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.MatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyWithoutTournamentInput>;
};
export type MatchScalarWhereInput = {
    AND?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    OR?: Prisma.MatchScalarWhereInput[];
    NOT?: Prisma.MatchScalarWhereInput | Prisma.MatchScalarWhereInput[];
    id?: Prisma.IntFilter<"Match"> | number;
    tournamentId?: Prisma.IntFilter<"Match"> | number;
    round?: Prisma.IntFilter<"Match"> | number;
    map?: Prisma.StringFilter<"Match"> | string;
    room_id?: Prisma.StringNullableFilter<"Match"> | string | null;
    room_password?: Prisma.StringNullableFilter<"Match"> | string | null;
    status?: Prisma.EnumMatchStatusFilter<"Match"> | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFilter<"Match"> | Date | string;
    started_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    finished_at?: Prisma.DateTimeNullableFilter<"Match"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Match"> | Date | string;
};
export type MatchCreateWithoutResultsInput = {
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutMatchesInput;
};
export type MatchUncheckedCreateWithoutResultsInput = {
    id?: number;
    tournamentId: number;
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchCreateOrConnectWithoutResultsInput = {
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateWithoutResultsInput, Prisma.MatchUncheckedCreateWithoutResultsInput>;
};
export type MatchUpsertWithoutResultsInput = {
    update: Prisma.XOR<Prisma.MatchUpdateWithoutResultsInput, Prisma.MatchUncheckedUpdateWithoutResultsInput>;
    create: Prisma.XOR<Prisma.MatchCreateWithoutResultsInput, Prisma.MatchUncheckedCreateWithoutResultsInput>;
    where?: Prisma.MatchWhereInput;
};
export type MatchUpdateToOneWithWhereWithoutResultsInput = {
    where?: Prisma.MatchWhereInput;
    data: Prisma.XOR<Prisma.MatchUpdateWithoutResultsInput, Prisma.MatchUncheckedUpdateWithoutResultsInput>;
};
export type MatchUpdateWithoutResultsInput = {
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutMatchesNestedInput;
};
export type MatchUncheckedUpdateWithoutResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCreateManyTournamentInput = {
    id?: number;
    round: number;
    map: string;
    room_id?: string | null;
    room_password?: string | null;
    status?: $Enums.MatchStatus;
    scheduled_at: Date | string;
    started_at?: Date | string | null;
    finished_at?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MatchUpdateWithoutTournamentInput = {
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    results?: Prisma.MatchResultUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    results?: Prisma.MatchResultUncheckedUpdateManyWithoutMatchNestedInput;
};
export type MatchUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    round?: Prisma.IntFieldUpdateOperationsInput | number;
    map?: Prisma.StringFieldUpdateOperationsInput | string;
    room_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    room_password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus;
    scheduled_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    started_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    finished_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchCountOutputType = {
    results: number;
};
export type MatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    results?: boolean | MatchCountOutputTypeCountResultsArgs;
};
export type MatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchCountOutputTypeSelect<ExtArgs> | null;
};
export type MatchCountOutputTypeCountResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchResultWhereInput;
};
export type MatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    round?: boolean;
    map?: boolean;
    room_id?: boolean;
    room_password?: boolean;
    status?: boolean;
    scheduled_at?: boolean;
    started_at?: boolean;
    finished_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    results?: boolean | Prisma.Match$resultsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    round?: boolean;
    map?: boolean;
    room_id?: boolean;
    room_password?: boolean;
    status?: boolean;
    scheduled_at?: boolean;
    started_at?: boolean;
    finished_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    round?: boolean;
    map?: boolean;
    room_id?: boolean;
    room_password?: boolean;
    status?: boolean;
    scheduled_at?: boolean;
    started_at?: boolean;
    finished_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["match"]>;
export type MatchSelectScalar = {
    id?: boolean;
    tournamentId?: boolean;
    round?: boolean;
    map?: boolean;
    room_id?: boolean;
    room_password?: boolean;
    status?: boolean;
    scheduled_at?: boolean;
    started_at?: boolean;
    finished_at?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tournamentId" | "round" | "map" | "room_id" | "room_password" | "status" | "scheduled_at" | "started_at" | "finished_at" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>;
export type MatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    results?: boolean | Prisma.Match$resultsArgs<ExtArgs>;
    _count?: boolean | Prisma.MatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type MatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type $MatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Match";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        results: Prisma.$MatchResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tournamentId: number;
        round: number;
        map: string;
        room_id: string | null;
        room_password: string | null;
        status: $Enums.MatchStatus;
        scheduled_at: Date;
        started_at: Date | null;
        finished_at: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["match"]>;
    composites: {};
};
export type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchPayload, S>;
export type MatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchCountAggregateInputType | true;
};
export interface MatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Match'];
        meta: {
            name: 'Match';
        };
    };
    findUnique<T extends MatchFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchFindManyArgs>(args?: Prisma.SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchCreateArgs>(args: Prisma.SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchDeleteArgs>(args: Prisma.SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchUpdateArgs>(args: Prisma.SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchUpsertArgs>(args: Prisma.SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchCountArgs>(args?: Prisma.Subset<T, MatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchCountAggregateOutputType> : number>;
    aggregate<T extends MatchAggregateArgs>(args: Prisma.Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>;
    groupBy<T extends MatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchFieldRefs;
}
export interface Prisma__MatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    results<T extends Prisma.Match$resultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Match$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchFieldRefs {
    readonly id: Prisma.FieldRef<"Match", 'Int'>;
    readonly tournamentId: Prisma.FieldRef<"Match", 'Int'>;
    readonly round: Prisma.FieldRef<"Match", 'Int'>;
    readonly map: Prisma.FieldRef<"Match", 'String'>;
    readonly room_id: Prisma.FieldRef<"Match", 'String'>;
    readonly room_password: Prisma.FieldRef<"Match", 'String'>;
    readonly status: Prisma.FieldRef<"Match", 'MatchStatus'>;
    readonly scheduled_at: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly started_at: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly finished_at: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Match", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Match", 'DateTime'>;
}
export type MatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
};
export type MatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.MatchCreateManyInput | Prisma.MatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type MatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchUpdateManyMutationInput, Prisma.MatchUncheckedUpdateManyInput>;
    where?: Prisma.MatchWhereInput;
    limit?: number;
    include?: Prisma.MatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchCreateInput, Prisma.MatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchUpdateInput, Prisma.MatchUncheckedUpdateInput>;
};
export type MatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
    where: Prisma.MatchWhereUniqueInput;
};
export type MatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchWhereInput;
    limit?: number;
};
export type Match$resultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    where?: Prisma.MatchResultWhereInput;
    orderBy?: Prisma.MatchResultOrderByWithRelationInput | Prisma.MatchResultOrderByWithRelationInput[];
    cursor?: Prisma.MatchResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatchResultScalarFieldEnum | Prisma.MatchResultScalarFieldEnum[];
};
export type MatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchSelect<ExtArgs> | null;
    omit?: Prisma.MatchOmit<ExtArgs> | null;
    include?: Prisma.MatchInclude<ExtArgs> | null;
};
export {};
