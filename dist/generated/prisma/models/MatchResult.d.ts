import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MatchResultModel = runtime.Types.Result.DefaultSelection<Prisma.$MatchResultPayload>;
export type AggregateMatchResult = {
    _count: MatchResultCountAggregateOutputType | null;
    _avg: MatchResultAvgAggregateOutputType | null;
    _sum: MatchResultSumAggregateOutputType | null;
    _min: MatchResultMinAggregateOutputType | null;
    _max: MatchResultMaxAggregateOutputType | null;
};
export type MatchResultAvgAggregateOutputType = {
    id: number | null;
    matchId: number | null;
    userId: number | null;
    placement: number | null;
    kills: number | null;
    points: number | null;
};
export type MatchResultSumAggregateOutputType = {
    id: number | null;
    matchId: number | null;
    userId: number | null;
    placement: number | null;
    kills: number | null;
    points: number | null;
};
export type MatchResultMinAggregateOutputType = {
    id: number | null;
    matchId: number | null;
    userId: number | null;
    placement: number | null;
    kills: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type MatchResultMaxAggregateOutputType = {
    id: number | null;
    matchId: number | null;
    userId: number | null;
    placement: number | null;
    kills: number | null;
    points: number | null;
    createdAt: Date | null;
};
export type MatchResultCountAggregateOutputType = {
    id: number;
    matchId: number;
    userId: number;
    placement: number;
    kills: number;
    points: number;
    createdAt: number;
    _all: number;
};
export type MatchResultAvgAggregateInputType = {
    id?: true;
    matchId?: true;
    userId?: true;
    placement?: true;
    kills?: true;
    points?: true;
};
export type MatchResultSumAggregateInputType = {
    id?: true;
    matchId?: true;
    userId?: true;
    placement?: true;
    kills?: true;
    points?: true;
};
export type MatchResultMinAggregateInputType = {
    id?: true;
    matchId?: true;
    userId?: true;
    placement?: true;
    kills?: true;
    points?: true;
    createdAt?: true;
};
export type MatchResultMaxAggregateInputType = {
    id?: true;
    matchId?: true;
    userId?: true;
    placement?: true;
    kills?: true;
    points?: true;
    createdAt?: true;
};
export type MatchResultCountAggregateInputType = {
    id?: true;
    matchId?: true;
    userId?: true;
    placement?: true;
    kills?: true;
    points?: true;
    createdAt?: true;
    _all?: true;
};
export type MatchResultAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchResultWhereInput;
    orderBy?: Prisma.MatchResultOrderByWithRelationInput | Prisma.MatchResultOrderByWithRelationInput[];
    cursor?: Prisma.MatchResultWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatchResultCountAggregateInputType;
    _avg?: MatchResultAvgAggregateInputType;
    _sum?: MatchResultSumAggregateInputType;
    _min?: MatchResultMinAggregateInputType;
    _max?: MatchResultMaxAggregateInputType;
};
export type GetMatchResultAggregateType<T extends MatchResultAggregateArgs> = {
    [P in keyof T & keyof AggregateMatchResult]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatchResult[P]> : Prisma.GetScalarType<T[P], AggregateMatchResult[P]>;
};
export type MatchResultGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchResultWhereInput;
    orderBy?: Prisma.MatchResultOrderByWithAggregationInput | Prisma.MatchResultOrderByWithAggregationInput[];
    by: Prisma.MatchResultScalarFieldEnum[] | Prisma.MatchResultScalarFieldEnum;
    having?: Prisma.MatchResultScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatchResultCountAggregateInputType | true;
    _avg?: MatchResultAvgAggregateInputType;
    _sum?: MatchResultSumAggregateInputType;
    _min?: MatchResultMinAggregateInputType;
    _max?: MatchResultMaxAggregateInputType;
};
export type MatchResultGroupByOutputType = {
    id: number;
    matchId: number;
    userId: number;
    placement: number;
    kills: number;
    points: number;
    createdAt: Date;
    _count: MatchResultCountAggregateOutputType | null;
    _avg: MatchResultAvgAggregateOutputType | null;
    _sum: MatchResultSumAggregateOutputType | null;
    _min: MatchResultMinAggregateOutputType | null;
    _max: MatchResultMaxAggregateOutputType | null;
};
type GetMatchResultGroupByPayload<T extends MatchResultGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatchResultGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatchResultGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatchResultGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatchResultGroupByOutputType[P]>;
}>>;
export type MatchResultWhereInput = {
    AND?: Prisma.MatchResultWhereInput | Prisma.MatchResultWhereInput[];
    OR?: Prisma.MatchResultWhereInput[];
    NOT?: Prisma.MatchResultWhereInput | Prisma.MatchResultWhereInput[];
    id?: Prisma.IntFilter<"MatchResult"> | number;
    matchId?: Prisma.IntFilter<"MatchResult"> | number;
    userId?: Prisma.IntFilter<"MatchResult"> | number;
    placement?: Prisma.IntFilter<"MatchResult"> | number;
    kills?: Prisma.IntFilter<"MatchResult"> | number;
    points?: Prisma.IntFilter<"MatchResult"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchResult"> | Date | string;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MatchResultOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    match?: Prisma.MatchOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MatchResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    matchId_userId?: Prisma.MatchResultMatchIdUserIdCompoundUniqueInput;
    matchId_placement?: Prisma.MatchResultMatchIdPlacementCompoundUniqueInput;
    AND?: Prisma.MatchResultWhereInput | Prisma.MatchResultWhereInput[];
    OR?: Prisma.MatchResultWhereInput[];
    NOT?: Prisma.MatchResultWhereInput | Prisma.MatchResultWhereInput[];
    matchId?: Prisma.IntFilter<"MatchResult"> | number;
    userId?: Prisma.IntFilter<"MatchResult"> | number;
    placement?: Prisma.IntFilter<"MatchResult"> | number;
    kills?: Prisma.IntFilter<"MatchResult"> | number;
    points?: Prisma.IntFilter<"MatchResult"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchResult"> | Date | string;
    match?: Prisma.XOR<Prisma.MatchScalarRelationFilter, Prisma.MatchWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "matchId_userId" | "matchId_placement">;
export type MatchResultOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MatchResultCountOrderByAggregateInput;
    _avg?: Prisma.MatchResultAvgOrderByAggregateInput;
    _max?: Prisma.MatchResultMaxOrderByAggregateInput;
    _min?: Prisma.MatchResultMinOrderByAggregateInput;
    _sum?: Prisma.MatchResultSumOrderByAggregateInput;
};
export type MatchResultScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatchResultScalarWhereWithAggregatesInput | Prisma.MatchResultScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatchResultScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatchResultScalarWhereWithAggregatesInput | Prisma.MatchResultScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    matchId?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    placement?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    kills?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    points?: Prisma.IntWithAggregatesFilter<"MatchResult"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MatchResult"> | Date | string;
};
export type MatchResultCreateInput = {
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutResultsInput;
    user: Prisma.UserCreateNestedOneWithoutMatchResultsInput;
};
export type MatchResultUncheckedCreateInput = {
    id?: number;
    matchId: number;
    userId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultUpdateInput = {
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutResultsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMatchResultsNestedInput;
};
export type MatchResultUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultCreateManyInput = {
    id?: number;
    matchId: number;
    userId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultUpdateManyMutationInput = {
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultListRelationFilter = {
    every?: Prisma.MatchResultWhereInput;
    some?: Prisma.MatchResultWhereInput;
    none?: Prisma.MatchResultWhereInput;
};
export type MatchResultOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MatchResultMatchIdUserIdCompoundUniqueInput = {
    matchId: number;
    userId: number;
};
export type MatchResultMatchIdPlacementCompoundUniqueInput = {
    matchId: number;
    placement: number;
};
export type MatchResultCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchResultAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type MatchResultMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchResultMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MatchResultSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    matchId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    placement?: Prisma.SortOrder;
    kills?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
};
export type MatchResultCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput> | Prisma.MatchResultCreateWithoutUserInput[] | Prisma.MatchResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutUserInput | Prisma.MatchResultCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MatchResultCreateManyUserInputEnvelope;
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
};
export type MatchResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput> | Prisma.MatchResultCreateWithoutUserInput[] | Prisma.MatchResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutUserInput | Prisma.MatchResultCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MatchResultCreateManyUserInputEnvelope;
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
};
export type MatchResultUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput> | Prisma.MatchResultCreateWithoutUserInput[] | Prisma.MatchResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutUserInput | Prisma.MatchResultCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MatchResultUpsertWithWhereUniqueWithoutUserInput | Prisma.MatchResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MatchResultCreateManyUserInputEnvelope;
    set?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    disconnect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    delete?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    update?: Prisma.MatchResultUpdateWithWhereUniqueWithoutUserInput | Prisma.MatchResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MatchResultUpdateManyWithWhereWithoutUserInput | Prisma.MatchResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
};
export type MatchResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput> | Prisma.MatchResultCreateWithoutUserInput[] | Prisma.MatchResultUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutUserInput | Prisma.MatchResultCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MatchResultUpsertWithWhereUniqueWithoutUserInput | Prisma.MatchResultUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MatchResultCreateManyUserInputEnvelope;
    set?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    disconnect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    delete?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    update?: Prisma.MatchResultUpdateWithWhereUniqueWithoutUserInput | Prisma.MatchResultUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MatchResultUpdateManyWithWhereWithoutUserInput | Prisma.MatchResultUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
};
export type MatchResultCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput> | Prisma.MatchResultCreateWithoutMatchInput[] | Prisma.MatchResultUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutMatchInput | Prisma.MatchResultCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchResultCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
};
export type MatchResultUncheckedCreateNestedManyWithoutMatchInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput> | Prisma.MatchResultCreateWithoutMatchInput[] | Prisma.MatchResultUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutMatchInput | Prisma.MatchResultCreateOrConnectWithoutMatchInput[];
    createMany?: Prisma.MatchResultCreateManyMatchInputEnvelope;
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
};
export type MatchResultUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput> | Prisma.MatchResultCreateWithoutMatchInput[] | Prisma.MatchResultUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutMatchInput | Prisma.MatchResultCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchResultUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchResultUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchResultCreateManyMatchInputEnvelope;
    set?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    disconnect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    delete?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    update?: Prisma.MatchResultUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchResultUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchResultUpdateManyWithWhereWithoutMatchInput | Prisma.MatchResultUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
};
export type MatchResultUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput> | Prisma.MatchResultCreateWithoutMatchInput[] | Prisma.MatchResultUncheckedCreateWithoutMatchInput[];
    connectOrCreate?: Prisma.MatchResultCreateOrConnectWithoutMatchInput | Prisma.MatchResultCreateOrConnectWithoutMatchInput[];
    upsert?: Prisma.MatchResultUpsertWithWhereUniqueWithoutMatchInput | Prisma.MatchResultUpsertWithWhereUniqueWithoutMatchInput[];
    createMany?: Prisma.MatchResultCreateManyMatchInputEnvelope;
    set?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    disconnect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    delete?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    connect?: Prisma.MatchResultWhereUniqueInput | Prisma.MatchResultWhereUniqueInput[];
    update?: Prisma.MatchResultUpdateWithWhereUniqueWithoutMatchInput | Prisma.MatchResultUpdateWithWhereUniqueWithoutMatchInput[];
    updateMany?: Prisma.MatchResultUpdateManyWithWhereWithoutMatchInput | Prisma.MatchResultUpdateManyWithWhereWithoutMatchInput[];
    deleteMany?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
};
export type MatchResultCreateWithoutUserInput = {
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
    match: Prisma.MatchCreateNestedOneWithoutResultsInput;
};
export type MatchResultUncheckedCreateWithoutUserInput = {
    id?: number;
    matchId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultCreateOrConnectWithoutUserInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput>;
};
export type MatchResultCreateManyUserInputEnvelope = {
    data: Prisma.MatchResultCreateManyUserInput | Prisma.MatchResultCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MatchResultUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchResultUpdateWithoutUserInput, Prisma.MatchResultUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MatchResultCreateWithoutUserInput, Prisma.MatchResultUncheckedCreateWithoutUserInput>;
};
export type MatchResultUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchResultUpdateWithoutUserInput, Prisma.MatchResultUncheckedUpdateWithoutUserInput>;
};
export type MatchResultUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MatchResultScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchResultUpdateManyMutationInput, Prisma.MatchResultUncheckedUpdateManyWithoutUserInput>;
};
export type MatchResultScalarWhereInput = {
    AND?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
    OR?: Prisma.MatchResultScalarWhereInput[];
    NOT?: Prisma.MatchResultScalarWhereInput | Prisma.MatchResultScalarWhereInput[];
    id?: Prisma.IntFilter<"MatchResult"> | number;
    matchId?: Prisma.IntFilter<"MatchResult"> | number;
    userId?: Prisma.IntFilter<"MatchResult"> | number;
    placement?: Prisma.IntFilter<"MatchResult"> | number;
    kills?: Prisma.IntFilter<"MatchResult"> | number;
    points?: Prisma.IntFilter<"MatchResult"> | number;
    createdAt?: Prisma.DateTimeFilter<"MatchResult"> | Date | string;
};
export type MatchResultCreateWithoutMatchInput = {
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMatchResultsInput;
};
export type MatchResultUncheckedCreateWithoutMatchInput = {
    id?: number;
    userId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultCreateOrConnectWithoutMatchInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput>;
};
export type MatchResultCreateManyMatchInputEnvelope = {
    data: Prisma.MatchResultCreateManyMatchInput | Prisma.MatchResultCreateManyMatchInput[];
    skipDuplicates?: boolean;
};
export type MatchResultUpsertWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    update: Prisma.XOR<Prisma.MatchResultUpdateWithoutMatchInput, Prisma.MatchResultUncheckedUpdateWithoutMatchInput>;
    create: Prisma.XOR<Prisma.MatchResultCreateWithoutMatchInput, Prisma.MatchResultUncheckedCreateWithoutMatchInput>;
};
export type MatchResultUpdateWithWhereUniqueWithoutMatchInput = {
    where: Prisma.MatchResultWhereUniqueInput;
    data: Prisma.XOR<Prisma.MatchResultUpdateWithoutMatchInput, Prisma.MatchResultUncheckedUpdateWithoutMatchInput>;
};
export type MatchResultUpdateManyWithWhereWithoutMatchInput = {
    where: Prisma.MatchResultScalarWhereInput;
    data: Prisma.XOR<Prisma.MatchResultUpdateManyMutationInput, Prisma.MatchResultUncheckedUpdateManyWithoutMatchInput>;
};
export type MatchResultCreateManyUserInput = {
    id?: number;
    matchId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultUpdateWithoutUserInput = {
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    match?: Prisma.MatchUpdateOneRequiredWithoutResultsNestedInput;
};
export type MatchResultUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    matchId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultCreateManyMatchInput = {
    id?: number;
    userId: number;
    placement: number;
    kills?: number;
    points?: number;
    createdAt?: Date | string;
};
export type MatchResultUpdateWithoutMatchInput = {
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMatchResultsNestedInput;
};
export type MatchResultUncheckedUpdateWithoutMatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultUncheckedUpdateManyWithoutMatchInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    placement?: Prisma.IntFieldUpdateOperationsInput | number;
    kills?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MatchResultSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    userId?: boolean;
    placement?: boolean;
    kills?: boolean;
    points?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchResult"]>;
export type MatchResultSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    userId?: boolean;
    placement?: boolean;
    kills?: boolean;
    points?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchResult"]>;
export type MatchResultSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    matchId?: boolean;
    userId?: boolean;
    placement?: boolean;
    kills?: boolean;
    points?: boolean;
    createdAt?: boolean;
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["matchResult"]>;
export type MatchResultSelectScalar = {
    id?: boolean;
    matchId?: boolean;
    userId?: boolean;
    placement?: boolean;
    kills?: boolean;
    points?: boolean;
    createdAt?: boolean;
};
export type MatchResultOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "matchId" | "userId" | "placement" | "kills" | "points" | "createdAt", ExtArgs["result"]["matchResult"]>;
export type MatchResultInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MatchResultIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MatchResultIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    match?: boolean | Prisma.MatchDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MatchResultPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MatchResult";
    objects: {
        match: Prisma.$MatchPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        matchId: number;
        userId: number;
        placement: number;
        kills: number;
        points: number;
        createdAt: Date;
    }, ExtArgs["result"]["matchResult"]>;
    composites: {};
};
export type MatchResultGetPayload<S extends boolean | null | undefined | MatchResultDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatchResultPayload, S>;
export type MatchResultCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatchResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatchResultCountAggregateInputType | true;
};
export interface MatchResultDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MatchResult'];
        meta: {
            name: 'MatchResult';
        };
    };
    findUnique<T extends MatchResultFindUniqueArgs>(args: Prisma.SelectSubset<T, MatchResultFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatchResultFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatchResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatchResultFindFirstArgs>(args?: Prisma.SelectSubset<T, MatchResultFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatchResultFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatchResultFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatchResultFindManyArgs>(args?: Prisma.SelectSubset<T, MatchResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatchResultCreateArgs>(args: Prisma.SelectSubset<T, MatchResultCreateArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatchResultCreateManyArgs>(args?: Prisma.SelectSubset<T, MatchResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatchResultCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatchResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatchResultDeleteArgs>(args: Prisma.SelectSubset<T, MatchResultDeleteArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatchResultUpdateArgs>(args: Prisma.SelectSubset<T, MatchResultUpdateArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatchResultDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatchResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatchResultUpdateManyArgs>(args: Prisma.SelectSubset<T, MatchResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatchResultUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatchResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatchResultUpsertArgs>(args: Prisma.SelectSubset<T, MatchResultUpsertArgs<ExtArgs>>): Prisma.Prisma__MatchResultClient<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatchResultCountArgs>(args?: Prisma.Subset<T, MatchResultCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatchResultCountAggregateOutputType> : number>;
    aggregate<T extends MatchResultAggregateArgs>(args: Prisma.Subset<T, MatchResultAggregateArgs>): Prisma.PrismaPromise<GetMatchResultAggregateType<T>>;
    groupBy<T extends MatchResultGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatchResultGroupByArgs['orderBy'];
    } : {
        orderBy?: MatchResultGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatchResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatchResultFieldRefs;
}
export interface Prisma__MatchResultClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    match<T extends Prisma.MatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MatchDefaultArgs<ExtArgs>>): Prisma.Prisma__MatchClient<runtime.Types.Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatchResultFieldRefs {
    readonly id: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly matchId: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly userId: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly placement: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly kills: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly points: Prisma.FieldRef<"MatchResult", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MatchResult", 'DateTime'>;
}
export type MatchResultFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    where: Prisma.MatchResultWhereUniqueInput;
};
export type MatchResultFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    where: Prisma.MatchResultWhereUniqueInput;
};
export type MatchResultFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchResultFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchResultFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MatchResultCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchResultCreateInput, Prisma.MatchResultUncheckedCreateInput>;
};
export type MatchResultCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatchResultCreateManyInput | Prisma.MatchResultCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatchResultCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    data: Prisma.MatchResultCreateManyInput | Prisma.MatchResultCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MatchResultIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MatchResultUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchResultUpdateInput, Prisma.MatchResultUncheckedUpdateInput>;
    where: Prisma.MatchResultWhereUniqueInput;
};
export type MatchResultUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatchResultUpdateManyMutationInput, Prisma.MatchResultUncheckedUpdateManyInput>;
    where?: Prisma.MatchResultWhereInput;
    limit?: number;
};
export type MatchResultUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatchResultUpdateManyMutationInput, Prisma.MatchResultUncheckedUpdateManyInput>;
    where?: Prisma.MatchResultWhereInput;
    limit?: number;
    include?: Prisma.MatchResultIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MatchResultUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    where: Prisma.MatchResultWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatchResultCreateInput, Prisma.MatchResultUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatchResultUpdateInput, Prisma.MatchResultUncheckedUpdateInput>;
};
export type MatchResultDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
    where: Prisma.MatchResultWhereUniqueInput;
};
export type MatchResultDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchResultWhereInput;
    limit?: number;
};
export type MatchResultDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatchResultSelect<ExtArgs> | null;
    omit?: Prisma.MatchResultOmit<ExtArgs> | null;
    include?: Prisma.MatchResultInclude<ExtArgs> | null;
};
export {};
