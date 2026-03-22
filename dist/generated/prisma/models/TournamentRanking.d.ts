import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TournamentRankingModel = runtime.Types.Result.DefaultSelection<Prisma.$TournamentRankingPayload>;
export type AggregateTournamentRanking = {
    _count: TournamentRankingCountAggregateOutputType | null;
    _avg: TournamentRankingAvgAggregateOutputType | null;
    _sum: TournamentRankingSumAggregateOutputType | null;
    _min: TournamentRankingMinAggregateOutputType | null;
    _max: TournamentRankingMaxAggregateOutputType | null;
};
export type TournamentRankingAvgAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    userId: number | null;
    totalPoints: number | null;
    position: number | null;
};
export type TournamentRankingSumAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    userId: number | null;
    totalPoints: number | null;
    position: number | null;
};
export type TournamentRankingMinAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    userId: number | null;
    totalPoints: number | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentRankingMaxAggregateOutputType = {
    id: number | null;
    tournamentId: number | null;
    userId: number | null;
    totalPoints: number | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TournamentRankingCountAggregateOutputType = {
    id: number;
    tournamentId: number;
    userId: number;
    totalPoints: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TournamentRankingAvgAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    totalPoints?: true;
    position?: true;
};
export type TournamentRankingSumAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    totalPoints?: true;
    position?: true;
};
export type TournamentRankingMinAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    totalPoints?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentRankingMaxAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    totalPoints?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TournamentRankingCountAggregateInputType = {
    id?: true;
    tournamentId?: true;
    userId?: true;
    totalPoints?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TournamentRankingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRankingWhereInput;
    orderBy?: Prisma.TournamentRankingOrderByWithRelationInput | Prisma.TournamentRankingOrderByWithRelationInput[];
    cursor?: Prisma.TournamentRankingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TournamentRankingCountAggregateInputType;
    _avg?: TournamentRankingAvgAggregateInputType;
    _sum?: TournamentRankingSumAggregateInputType;
    _min?: TournamentRankingMinAggregateInputType;
    _max?: TournamentRankingMaxAggregateInputType;
};
export type GetTournamentRankingAggregateType<T extends TournamentRankingAggregateArgs> = {
    [P in keyof T & keyof AggregateTournamentRanking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTournamentRanking[P]> : Prisma.GetScalarType<T[P], AggregateTournamentRanking[P]>;
};
export type TournamentRankingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRankingWhereInput;
    orderBy?: Prisma.TournamentRankingOrderByWithAggregationInput | Prisma.TournamentRankingOrderByWithAggregationInput[];
    by: Prisma.TournamentRankingScalarFieldEnum[] | Prisma.TournamentRankingScalarFieldEnum;
    having?: Prisma.TournamentRankingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TournamentRankingCountAggregateInputType | true;
    _avg?: TournamentRankingAvgAggregateInputType;
    _sum?: TournamentRankingSumAggregateInputType;
    _min?: TournamentRankingMinAggregateInputType;
    _max?: TournamentRankingMaxAggregateInputType;
};
export type TournamentRankingGroupByOutputType = {
    id: number;
    tournamentId: number;
    userId: number;
    totalPoints: number;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: TournamentRankingCountAggregateOutputType | null;
    _avg: TournamentRankingAvgAggregateOutputType | null;
    _sum: TournamentRankingSumAggregateOutputType | null;
    _min: TournamentRankingMinAggregateOutputType | null;
    _max: TournamentRankingMaxAggregateOutputType | null;
};
type GetTournamentRankingGroupByPayload<T extends TournamentRankingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TournamentRankingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TournamentRankingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TournamentRankingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TournamentRankingGroupByOutputType[P]>;
}>>;
export type TournamentRankingWhereInput = {
    AND?: Prisma.TournamentRankingWhereInput | Prisma.TournamentRankingWhereInput[];
    OR?: Prisma.TournamentRankingWhereInput[];
    NOT?: Prisma.TournamentRankingWhereInput | Prisma.TournamentRankingWhereInput[];
    id?: Prisma.IntFilter<"TournamentRanking"> | number;
    tournamentId?: Prisma.IntFilter<"TournamentRanking"> | number;
    userId?: Prisma.IntFilter<"TournamentRanking"> | number;
    totalPoints?: Prisma.IntFilter<"TournamentRanking"> | number;
    position?: Prisma.IntFilter<"TournamentRanking"> | number;
    createdAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TournamentRankingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TournamentRankingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    tournamentId_userId?: Prisma.TournamentRankingTournamentIdUserIdCompoundUniqueInput;
    tournamentId_position?: Prisma.TournamentRankingTournamentIdPositionCompoundUniqueInput;
    AND?: Prisma.TournamentRankingWhereInput | Prisma.TournamentRankingWhereInput[];
    OR?: Prisma.TournamentRankingWhereInput[];
    NOT?: Prisma.TournamentRankingWhereInput | Prisma.TournamentRankingWhereInput[];
    tournamentId?: Prisma.IntFilter<"TournamentRanking"> | number;
    userId?: Prisma.IntFilter<"TournamentRanking"> | number;
    totalPoints?: Prisma.IntFilter<"TournamentRanking"> | number;
    position?: Prisma.IntFilter<"TournamentRanking"> | number;
    createdAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "tournamentId_userId" | "tournamentId_position">;
export type TournamentRankingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TournamentRankingCountOrderByAggregateInput;
    _avg?: Prisma.TournamentRankingAvgOrderByAggregateInput;
    _max?: Prisma.TournamentRankingMaxOrderByAggregateInput;
    _min?: Prisma.TournamentRankingMinOrderByAggregateInput;
    _sum?: Prisma.TournamentRankingSumOrderByAggregateInput;
};
export type TournamentRankingScalarWhereWithAggregatesInput = {
    AND?: Prisma.TournamentRankingScalarWhereWithAggregatesInput | Prisma.TournamentRankingScalarWhereWithAggregatesInput[];
    OR?: Prisma.TournamentRankingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TournamentRankingScalarWhereWithAggregatesInput | Prisma.TournamentRankingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"TournamentRanking"> | number;
    tournamentId?: Prisma.IntWithAggregatesFilter<"TournamentRanking"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"TournamentRanking"> | number;
    totalPoints?: Prisma.IntWithAggregatesFilter<"TournamentRanking"> | number;
    position?: Prisma.IntWithAggregatesFilter<"TournamentRanking"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentRanking"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TournamentRanking"> | Date | string;
};
export type TournamentRankingCreateInput = {
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutRankingsInput;
    user: Prisma.UserCreateNestedOneWithoutRankingsInput;
};
export type TournamentRankingUncheckedCreateInput = {
    id?: number;
    tournamentId: number;
    userId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingUpdateInput = {
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRankingsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutRankingsNestedInput;
};
export type TournamentRankingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingCreateManyInput = {
    id?: number;
    tournamentId: number;
    userId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingUpdateManyMutationInput = {
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingListRelationFilter = {
    every?: Prisma.TournamentRankingWhereInput;
    some?: Prisma.TournamentRankingWhereInput;
    none?: Prisma.TournamentRankingWhereInput;
};
export type TournamentRankingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TournamentRankingTournamentIdUserIdCompoundUniqueInput = {
    tournamentId: number;
    userId: number;
};
export type TournamentRankingTournamentIdPositionCompoundUniqueInput = {
    tournamentId: number;
    position: number;
};
export type TournamentRankingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRankingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type TournamentRankingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRankingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TournamentRankingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    totalPoints?: Prisma.SortOrder;
    position?: Prisma.SortOrder;
};
export type TournamentRankingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput> | Prisma.TournamentRankingCreateWithoutUserInput[] | Prisma.TournamentRankingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutUserInput | Prisma.TournamentRankingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentRankingCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
};
export type TournamentRankingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput> | Prisma.TournamentRankingCreateWithoutUserInput[] | Prisma.TournamentRankingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutUserInput | Prisma.TournamentRankingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.TournamentRankingCreateManyUserInputEnvelope;
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
};
export type TournamentRankingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput> | Prisma.TournamentRankingCreateWithoutUserInput[] | Prisma.TournamentRankingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutUserInput | Prisma.TournamentRankingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentRankingUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentRankingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentRankingCreateManyUserInputEnvelope;
    set?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    disconnect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    delete?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    update?: Prisma.TournamentRankingUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentRankingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentRankingUpdateManyWithWhereWithoutUserInput | Prisma.TournamentRankingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
};
export type TournamentRankingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput> | Prisma.TournamentRankingCreateWithoutUserInput[] | Prisma.TournamentRankingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutUserInput | Prisma.TournamentRankingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.TournamentRankingUpsertWithWhereUniqueWithoutUserInput | Prisma.TournamentRankingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.TournamentRankingCreateManyUserInputEnvelope;
    set?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    disconnect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    delete?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    update?: Prisma.TournamentRankingUpdateWithWhereUniqueWithoutUserInput | Prisma.TournamentRankingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.TournamentRankingUpdateManyWithWhereWithoutUserInput | Prisma.TournamentRankingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
};
export type TournamentRankingCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRankingCreateWithoutTournamentInput[] | Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput | Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentRankingCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
};
export type TournamentRankingUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRankingCreateWithoutTournamentInput[] | Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput | Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.TournamentRankingCreateManyTournamentInputEnvelope;
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
};
export type TournamentRankingUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRankingCreateWithoutTournamentInput[] | Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput | Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentRankingUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRankingUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentRankingCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    disconnect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    delete?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    update?: Prisma.TournamentRankingUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRankingUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentRankingUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentRankingUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
};
export type TournamentRankingUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput> | Prisma.TournamentRankingCreateWithoutTournamentInput[] | Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput | Prisma.TournamentRankingCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.TournamentRankingUpsertWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRankingUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.TournamentRankingCreateManyTournamentInputEnvelope;
    set?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    disconnect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    delete?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    connect?: Prisma.TournamentRankingWhereUniqueInput | Prisma.TournamentRankingWhereUniqueInput[];
    update?: Prisma.TournamentRankingUpdateWithWhereUniqueWithoutTournamentInput | Prisma.TournamentRankingUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.TournamentRankingUpdateManyWithWhereWithoutTournamentInput | Prisma.TournamentRankingUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
};
export type TournamentRankingCreateWithoutUserInput = {
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tournament: Prisma.TournamentCreateNestedOneWithoutRankingsInput;
};
export type TournamentRankingUncheckedCreateWithoutUserInput = {
    id?: number;
    tournamentId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingCreateOrConnectWithoutUserInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput>;
};
export type TournamentRankingCreateManyUserInputEnvelope = {
    data: Prisma.TournamentRankingCreateManyUserInput | Prisma.TournamentRankingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type TournamentRankingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRankingUpdateWithoutUserInput, Prisma.TournamentRankingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TournamentRankingCreateWithoutUserInput, Prisma.TournamentRankingUncheckedCreateWithoutUserInput>;
};
export type TournamentRankingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateWithoutUserInput, Prisma.TournamentRankingUncheckedUpdateWithoutUserInput>;
};
export type TournamentRankingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.TournamentRankingScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateManyMutationInput, Prisma.TournamentRankingUncheckedUpdateManyWithoutUserInput>;
};
export type TournamentRankingScalarWhereInput = {
    AND?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
    OR?: Prisma.TournamentRankingScalarWhereInput[];
    NOT?: Prisma.TournamentRankingScalarWhereInput | Prisma.TournamentRankingScalarWhereInput[];
    id?: Prisma.IntFilter<"TournamentRanking"> | number;
    tournamentId?: Prisma.IntFilter<"TournamentRanking"> | number;
    userId?: Prisma.IntFilter<"TournamentRanking"> | number;
    totalPoints?: Prisma.IntFilter<"TournamentRanking"> | number;
    position?: Prisma.IntFilter<"TournamentRanking"> | number;
    createdAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"TournamentRanking"> | Date | string;
};
export type TournamentRankingCreateWithoutTournamentInput = {
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutRankingsInput;
};
export type TournamentRankingUncheckedCreateWithoutTournamentInput = {
    id?: number;
    userId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingCreateOrConnectWithoutTournamentInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput>;
};
export type TournamentRankingCreateManyTournamentInputEnvelope = {
    data: Prisma.TournamentRankingCreateManyTournamentInput | Prisma.TournamentRankingCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type TournamentRankingUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    update: Prisma.XOR<Prisma.TournamentRankingUpdateWithoutTournamentInput, Prisma.TournamentRankingUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.TournamentRankingCreateWithoutTournamentInput, Prisma.TournamentRankingUncheckedCreateWithoutTournamentInput>;
};
export type TournamentRankingUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.TournamentRankingWhereUniqueInput;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateWithoutTournamentInput, Prisma.TournamentRankingUncheckedUpdateWithoutTournamentInput>;
};
export type TournamentRankingUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.TournamentRankingScalarWhereInput;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateManyMutationInput, Prisma.TournamentRankingUncheckedUpdateManyWithoutTournamentInput>;
};
export type TournamentRankingCreateManyUserInput = {
    id?: number;
    tournamentId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingUpdateWithoutUserInput = {
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRankingsNestedInput;
};
export type TournamentRankingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingCreateManyTournamentInput = {
    id?: number;
    userId: number;
    totalPoints?: number;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TournamentRankingUpdateWithoutTournamentInput = {
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRankingsNestedInput;
};
export type TournamentRankingUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPoints?: Prisma.IntFieldUpdateOperationsInput | number;
    position?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TournamentRankingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    totalPoints?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRanking"]>;
export type TournamentRankingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    totalPoints?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRanking"]>;
export type TournamentRankingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    totalPoints?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tournamentRanking"]>;
export type TournamentRankingSelectScalar = {
    id?: boolean;
    tournamentId?: boolean;
    userId?: boolean;
    totalPoints?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TournamentRankingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tournamentId" | "userId" | "totalPoints" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["tournamentRanking"]>;
export type TournamentRankingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentRankingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TournamentRankingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TournamentRankingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TournamentRanking";
    objects: {
        tournament: Prisma.$TournamentPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        tournamentId: number;
        userId: number;
        totalPoints: number;
        position: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["tournamentRanking"]>;
    composites: {};
};
export type TournamentRankingGetPayload<S extends boolean | null | undefined | TournamentRankingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload, S>;
export type TournamentRankingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TournamentRankingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TournamentRankingCountAggregateInputType | true;
};
export interface TournamentRankingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TournamentRanking'];
        meta: {
            name: 'TournamentRanking';
        };
    };
    findUnique<T extends TournamentRankingFindUniqueArgs>(args: Prisma.SelectSubset<T, TournamentRankingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TournamentRankingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TournamentRankingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TournamentRankingFindFirstArgs>(args?: Prisma.SelectSubset<T, TournamentRankingFindFirstArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TournamentRankingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TournamentRankingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TournamentRankingFindManyArgs>(args?: Prisma.SelectSubset<T, TournamentRankingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TournamentRankingCreateArgs>(args: Prisma.SelectSubset<T, TournamentRankingCreateArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TournamentRankingCreateManyArgs>(args?: Prisma.SelectSubset<T, TournamentRankingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TournamentRankingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TournamentRankingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TournamentRankingDeleteArgs>(args: Prisma.SelectSubset<T, TournamentRankingDeleteArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TournamentRankingUpdateArgs>(args: Prisma.SelectSubset<T, TournamentRankingUpdateArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TournamentRankingDeleteManyArgs>(args?: Prisma.SelectSubset<T, TournamentRankingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TournamentRankingUpdateManyArgs>(args: Prisma.SelectSubset<T, TournamentRankingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TournamentRankingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TournamentRankingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TournamentRankingUpsertArgs>(args: Prisma.SelectSubset<T, TournamentRankingUpsertArgs<ExtArgs>>): Prisma.Prisma__TournamentRankingClient<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TournamentRankingCountArgs>(args?: Prisma.Subset<T, TournamentRankingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TournamentRankingCountAggregateOutputType> : number>;
    aggregate<T extends TournamentRankingAggregateArgs>(args: Prisma.Subset<T, TournamentRankingAggregateArgs>): Prisma.PrismaPromise<GetTournamentRankingAggregateType<T>>;
    groupBy<T extends TournamentRankingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TournamentRankingGroupByArgs['orderBy'];
    } : {
        orderBy?: TournamentRankingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TournamentRankingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentRankingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TournamentRankingFieldRefs;
}
export interface Prisma__TournamentRankingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TournamentRankingFieldRefs {
    readonly id: Prisma.FieldRef<"TournamentRanking", 'Int'>;
    readonly tournamentId: Prisma.FieldRef<"TournamentRanking", 'Int'>;
    readonly userId: Prisma.FieldRef<"TournamentRanking", 'Int'>;
    readonly totalPoints: Prisma.FieldRef<"TournamentRanking", 'Int'>;
    readonly position: Prisma.FieldRef<"TournamentRanking", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"TournamentRanking", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"TournamentRanking", 'DateTime'>;
}
export type TournamentRankingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    where: Prisma.TournamentRankingWhereUniqueInput;
};
export type TournamentRankingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    where: Prisma.TournamentRankingWhereUniqueInput;
};
export type TournamentRankingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TournamentRankingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TournamentRankingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TournamentRankingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentRankingCreateInput, Prisma.TournamentRankingUncheckedCreateInput>;
};
export type TournamentRankingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TournamentRankingCreateManyInput | Prisma.TournamentRankingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TournamentRankingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    data: Prisma.TournamentRankingCreateManyInput | Prisma.TournamentRankingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TournamentRankingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TournamentRankingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateInput, Prisma.TournamentRankingUncheckedUpdateInput>;
    where: Prisma.TournamentRankingWhereUniqueInput;
};
export type TournamentRankingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TournamentRankingUpdateManyMutationInput, Prisma.TournamentRankingUncheckedUpdateManyInput>;
    where?: Prisma.TournamentRankingWhereInput;
    limit?: number;
};
export type TournamentRankingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TournamentRankingUpdateManyMutationInput, Prisma.TournamentRankingUncheckedUpdateManyInput>;
    where?: Prisma.TournamentRankingWhereInput;
    limit?: number;
    include?: Prisma.TournamentRankingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TournamentRankingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    where: Prisma.TournamentRankingWhereUniqueInput;
    create: Prisma.XOR<Prisma.TournamentRankingCreateInput, Prisma.TournamentRankingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TournamentRankingUpdateInput, Prisma.TournamentRankingUncheckedUpdateInput>;
};
export type TournamentRankingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
    where: Prisma.TournamentRankingWhereUniqueInput;
};
export type TournamentRankingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRankingWhereInput;
    limit?: number;
};
export type TournamentRankingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TournamentRankingSelect<ExtArgs> | null;
    omit?: Prisma.TournamentRankingOmit<ExtArgs> | null;
    include?: Prisma.TournamentRankingInclude<ExtArgs> | null;
};
export {};
