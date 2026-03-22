import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RegistrationModel = runtime.Types.Result.DefaultSelection<Prisma.$RegistrationPayload>;
export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null;
    _avg: RegistrationAvgAggregateOutputType | null;
    _sum: RegistrationSumAggregateOutputType | null;
    _min: RegistrationMinAggregateOutputType | null;
    _max: RegistrationMaxAggregateOutputType | null;
};
export type RegistrationAvgAggregateOutputType = {
    id: number | null;
    slot: number | null;
    userId: number | null;
    tournamentId: number | null;
};
export type RegistrationSumAggregateOutputType = {
    id: number | null;
    slot: number | null;
    userId: number | null;
    tournamentId: number | null;
};
export type RegistrationMinAggregateOutputType = {
    id: number | null;
    slot: number | null;
    userId: number | null;
    tournamentId: number | null;
    createdAt: Date | null;
    payment_status: string | null;
};
export type RegistrationMaxAggregateOutputType = {
    id: number | null;
    slot: number | null;
    userId: number | null;
    tournamentId: number | null;
    createdAt: Date | null;
    payment_status: string | null;
};
export type RegistrationCountAggregateOutputType = {
    id: number;
    slot: number;
    userId: number;
    tournamentId: number;
    createdAt: number;
    payment_status: number;
    _all: number;
};
export type RegistrationAvgAggregateInputType = {
    id?: true;
    slot?: true;
    userId?: true;
    tournamentId?: true;
};
export type RegistrationSumAggregateInputType = {
    id?: true;
    slot?: true;
    userId?: true;
    tournamentId?: true;
};
export type RegistrationMinAggregateInputType = {
    id?: true;
    slot?: true;
    userId?: true;
    tournamentId?: true;
    createdAt?: true;
    payment_status?: true;
};
export type RegistrationMaxAggregateInputType = {
    id?: true;
    slot?: true;
    userId?: true;
    tournamentId?: true;
    createdAt?: true;
    payment_status?: true;
};
export type RegistrationCountAggregateInputType = {
    id?: true;
    slot?: true;
    userId?: true;
    tournamentId?: true;
    createdAt?: true;
    payment_status?: true;
    _all?: true;
};
export type RegistrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithRelationInput | Prisma.RegistrationOrderByWithRelationInput[];
    cursor?: Prisma.RegistrationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegistrationCountAggregateInputType;
    _avg?: RegistrationAvgAggregateInputType;
    _sum?: RegistrationSumAggregateInputType;
    _min?: RegistrationMinAggregateInputType;
    _max?: RegistrationMaxAggregateInputType;
};
export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
    [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegistration[P]> : Prisma.GetScalarType<T[P], AggregateRegistration[P]>;
};
export type RegistrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    orderBy?: Prisma.RegistrationOrderByWithAggregationInput | Prisma.RegistrationOrderByWithAggregationInput[];
    by: Prisma.RegistrationScalarFieldEnum[] | Prisma.RegistrationScalarFieldEnum;
    having?: Prisma.RegistrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegistrationCountAggregateInputType | true;
    _avg?: RegistrationAvgAggregateInputType;
    _sum?: RegistrationSumAggregateInputType;
    _min?: RegistrationMinAggregateInputType;
    _max?: RegistrationMaxAggregateInputType;
};
export type RegistrationGroupByOutputType = {
    id: number;
    slot: number;
    userId: number;
    tournamentId: number;
    createdAt: Date;
    payment_status: string;
    _count: RegistrationCountAggregateOutputType | null;
    _avg: RegistrationAvgAggregateOutputType | null;
    _sum: RegistrationSumAggregateOutputType | null;
    _min: RegistrationMinAggregateOutputType | null;
    _max: RegistrationMaxAggregateOutputType | null;
};
type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegistrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegistrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegistrationGroupByOutputType[P]>;
}>>;
export type RegistrationWhereInput = {
    AND?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    OR?: Prisma.RegistrationWhereInput[];
    NOT?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    id?: Prisma.IntFilter<"Registration"> | number;
    slot?: Prisma.IntFilter<"Registration"> | number;
    userId?: Prisma.IntFilter<"Registration"> | number;
    tournamentId?: Prisma.IntFilter<"Registration"> | number;
    createdAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    payment_status?: Prisma.StringFilter<"Registration"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
};
export type RegistrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    tournament?: Prisma.TournamentOrderByWithRelationInput;
};
export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    userId_tournamentId?: Prisma.RegistrationUserIdTournamentIdCompoundUniqueInput;
    AND?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    OR?: Prisma.RegistrationWhereInput[];
    NOT?: Prisma.RegistrationWhereInput | Prisma.RegistrationWhereInput[];
    slot?: Prisma.IntFilter<"Registration"> | number;
    userId?: Prisma.IntFilter<"Registration"> | number;
    tournamentId?: Prisma.IntFilter<"Registration"> | number;
    createdAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    payment_status?: Prisma.StringFilter<"Registration"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tournament?: Prisma.XOR<Prisma.TournamentScalarRelationFilter, Prisma.TournamentWhereInput>;
}, "id" | "userId_tournamentId">;
export type RegistrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
    _count?: Prisma.RegistrationCountOrderByAggregateInput;
    _avg?: Prisma.RegistrationAvgOrderByAggregateInput;
    _max?: Prisma.RegistrationMaxOrderByAggregateInput;
    _min?: Prisma.RegistrationMinOrderByAggregateInput;
    _sum?: Prisma.RegistrationSumOrderByAggregateInput;
};
export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegistrationScalarWhereWithAggregatesInput | Prisma.RegistrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegistrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegistrationScalarWhereWithAggregatesInput | Prisma.RegistrationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    slot?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    userId?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    tournamentId?: Prisma.IntWithAggregatesFilter<"Registration"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Registration"> | Date | string;
    payment_status?: Prisma.StringWithAggregatesFilter<"Registration"> | string;
};
export type RegistrationCreateInput = {
    slot: number;
    createdAt?: Date | string;
    payment_status?: string;
    user: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
    tournament: Prisma.TournamentCreateNestedOneWithoutRegistrationsInput;
};
export type RegistrationUncheckedCreateInput = {
    id?: number;
    slot: number;
    userId: number;
    tournamentId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationUpdateInput = {
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRegistrationsNestedInput;
};
export type RegistrationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationCreateManyInput = {
    id?: number;
    slot: number;
    userId: number;
    tournamentId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationUpdateManyMutationInput = {
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationListRelationFilter = {
    every?: Prisma.RegistrationWhereInput;
    some?: Prisma.RegistrationWhereInput;
    none?: Prisma.RegistrationWhereInput;
};
export type RegistrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegistrationUserIdTournamentIdCompoundUniqueInput = {
    userId: number;
    tournamentId: number;
};
export type RegistrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
};
export type RegistrationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type RegistrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
};
export type RegistrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    payment_status?: Prisma.SortOrder;
};
export type RegistrationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    slot?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    tournamentId?: Prisma.SortOrder;
};
export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput> | Prisma.RegistrationCreateWithoutUserInput[] | Prisma.RegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutUserInput | Prisma.RegistrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RegistrationCreateManyUserInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput> | Prisma.RegistrationCreateWithoutUserInput[] | Prisma.RegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutUserInput | Prisma.RegistrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.RegistrationCreateManyUserInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput> | Prisma.RegistrationCreateWithoutUserInput[] | Prisma.RegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutUserInput | Prisma.RegistrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutUserInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RegistrationCreateManyUserInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutUserInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutUserInput | Prisma.RegistrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput> | Prisma.RegistrationCreateWithoutUserInput[] | Prisma.RegistrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutUserInput | Prisma.RegistrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutUserInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.RegistrationCreateManyUserInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutUserInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutUserInput | Prisma.RegistrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput> | Prisma.RegistrationCreateWithoutTournamentInput[] | Prisma.RegistrationUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTournamentInput | Prisma.RegistrationCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.RegistrationCreateManyTournamentInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput> | Prisma.RegistrationCreateWithoutTournamentInput[] | Prisma.RegistrationUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTournamentInput | Prisma.RegistrationCreateOrConnectWithoutTournamentInput[];
    createMany?: Prisma.RegistrationCreateManyTournamentInputEnvelope;
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
};
export type RegistrationUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput> | Prisma.RegistrationCreateWithoutTournamentInput[] | Prisma.RegistrationUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTournamentInput | Prisma.RegistrationCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutTournamentInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.RegistrationCreateManyTournamentInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutTournamentInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutTournamentInput | Prisma.RegistrationUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput> | Prisma.RegistrationCreateWithoutTournamentInput[] | Prisma.RegistrationUncheckedCreateWithoutTournamentInput[];
    connectOrCreate?: Prisma.RegistrationCreateOrConnectWithoutTournamentInput | Prisma.RegistrationCreateOrConnectWithoutTournamentInput[];
    upsert?: Prisma.RegistrationUpsertWithWhereUniqueWithoutTournamentInput | Prisma.RegistrationUpsertWithWhereUniqueWithoutTournamentInput[];
    createMany?: Prisma.RegistrationCreateManyTournamentInputEnvelope;
    set?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    disconnect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    delete?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    connect?: Prisma.RegistrationWhereUniqueInput | Prisma.RegistrationWhereUniqueInput[];
    update?: Prisma.RegistrationUpdateWithWhereUniqueWithoutTournamentInput | Prisma.RegistrationUpdateWithWhereUniqueWithoutTournamentInput[];
    updateMany?: Prisma.RegistrationUpdateManyWithWhereWithoutTournamentInput | Prisma.RegistrationUpdateManyWithWhereWithoutTournamentInput[];
    deleteMany?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
};
export type RegistrationCreateWithoutUserInput = {
    slot: number;
    createdAt?: Date | string;
    payment_status?: string;
    tournament: Prisma.TournamentCreateNestedOneWithoutRegistrationsInput;
};
export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: number;
    slot: number;
    tournamentId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationCreateOrConnectWithoutUserInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput>;
};
export type RegistrationCreateManyUserInputEnvelope = {
    data: Prisma.RegistrationCreateManyUserInput | Prisma.RegistrationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutUserInput, Prisma.RegistrationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutUserInput, Prisma.RegistrationUncheckedCreateWithoutUserInput>;
};
export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutUserInput, Prisma.RegistrationUncheckedUpdateWithoutUserInput>;
};
export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.RegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyWithoutUserInput>;
};
export type RegistrationScalarWhereInput = {
    AND?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
    OR?: Prisma.RegistrationScalarWhereInput[];
    NOT?: Prisma.RegistrationScalarWhereInput | Prisma.RegistrationScalarWhereInput[];
    id?: Prisma.IntFilter<"Registration"> | number;
    slot?: Prisma.IntFilter<"Registration"> | number;
    userId?: Prisma.IntFilter<"Registration"> | number;
    tournamentId?: Prisma.IntFilter<"Registration"> | number;
    createdAt?: Prisma.DateTimeFilter<"Registration"> | Date | string;
    payment_status?: Prisma.StringFilter<"Registration"> | string;
};
export type RegistrationCreateWithoutTournamentInput = {
    slot: number;
    createdAt?: Date | string;
    payment_status?: string;
    user: Prisma.UserCreateNestedOneWithoutRegistrationsInput;
};
export type RegistrationUncheckedCreateWithoutTournamentInput = {
    id?: number;
    slot: number;
    userId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationCreateOrConnectWithoutTournamentInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput>;
};
export type RegistrationCreateManyTournamentInputEnvelope = {
    data: Prisma.RegistrationCreateManyTournamentInput | Prisma.RegistrationCreateManyTournamentInput[];
    skipDuplicates?: boolean;
};
export type RegistrationUpsertWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegistrationUpdateWithoutTournamentInput, Prisma.RegistrationUncheckedUpdateWithoutTournamentInput>;
    create: Prisma.XOR<Prisma.RegistrationCreateWithoutTournamentInput, Prisma.RegistrationUncheckedCreateWithoutTournamentInput>;
};
export type RegistrationUpdateWithWhereUniqueWithoutTournamentInput = {
    where: Prisma.RegistrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateWithoutTournamentInput, Prisma.RegistrationUncheckedUpdateWithoutTournamentInput>;
};
export type RegistrationUpdateManyWithWhereWithoutTournamentInput = {
    where: Prisma.RegistrationScalarWhereInput;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyWithoutTournamentInput>;
};
export type RegistrationCreateManyUserInput = {
    id?: number;
    slot: number;
    tournamentId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationUpdateWithoutUserInput = {
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
    tournament?: Prisma.TournamentUpdateOneRequiredWithoutRegistrationsNestedInput;
};
export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    tournamentId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationCreateManyTournamentInput = {
    id?: number;
    slot: number;
    userId: number;
    createdAt?: Date | string;
    payment_status?: string;
};
export type RegistrationUpdateWithoutTournamentInput = {
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutRegistrationsNestedInput;
};
export type RegistrationUncheckedUpdateWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationUncheckedUpdateManyWithoutTournamentInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    slot?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payment_status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RegistrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot?: boolean;
    userId?: boolean;
    tournamentId?: boolean;
    createdAt?: boolean;
    payment_status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot?: boolean;
    userId?: boolean;
    tournamentId?: boolean;
    createdAt?: boolean;
    payment_status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    slot?: boolean;
    userId?: boolean;
    tournamentId?: boolean;
    createdAt?: boolean;
    payment_status?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["registration"]>;
export type RegistrationSelectScalar = {
    id?: boolean;
    slot?: boolean;
    userId?: boolean;
    tournamentId?: boolean;
    createdAt?: boolean;
    payment_status?: boolean;
};
export type RegistrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "slot" | "userId" | "tournamentId" | "createdAt" | "payment_status", ExtArgs["result"]["registration"]>;
export type RegistrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type RegistrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type RegistrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tournament?: boolean | Prisma.TournamentDefaultArgs<ExtArgs>;
};
export type $RegistrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Registration";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        tournament: Prisma.$TournamentPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        slot: number;
        userId: number;
        tournamentId: number;
        createdAt: Date;
        payment_status: string;
    }, ExtArgs["result"]["registration"]>;
    composites: {};
};
export type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegistrationPayload, S>;
export type RegistrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegistrationCountAggregateInputType | true;
};
export interface RegistrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Registration'];
        meta: {
            name: 'Registration';
        };
    };
    findUnique<T extends RegistrationFindUniqueArgs>(args: Prisma.SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegistrationFindFirstArgs>(args?: Prisma.SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegistrationFindManyArgs>(args?: Prisma.SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegistrationCreateArgs>(args: Prisma.SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegistrationCreateManyArgs>(args?: Prisma.SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegistrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegistrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegistrationDeleteArgs>(args: Prisma.SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegistrationUpdateArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegistrationUpdateManyArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegistrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegistrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegistrationUpsertArgs>(args: Prisma.SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma.Prisma__RegistrationClient<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegistrationCountArgs>(args?: Prisma.Subset<T, RegistrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegistrationCountAggregateOutputType> : number>;
    aggregate<T extends RegistrationAggregateArgs>(args: Prisma.Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>;
    groupBy<T extends RegistrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegistrationGroupByArgs['orderBy'];
    } : {
        orderBy?: RegistrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegistrationFieldRefs;
}
export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tournament<T extends Prisma.TournamentDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TournamentDefaultArgs<ExtArgs>>): Prisma.Prisma__TournamentClient<runtime.Types.Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegistrationFieldRefs {
    readonly id: Prisma.FieldRef<"Registration", 'Int'>;
    readonly slot: Prisma.FieldRef<"Registration", 'Int'>;
    readonly userId: Prisma.FieldRef<"Registration", 'Int'>;
    readonly tournamentId: Prisma.FieldRef<"Registration", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Registration", 'DateTime'>;
    readonly payment_status: Prisma.FieldRef<"Registration", 'String'>;
}
export type RegistrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RegistrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationCreateInput, Prisma.RegistrationUncheckedCreateInput>;
};
export type RegistrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegistrationCreateManyInput | Prisma.RegistrationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegistrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    data: Prisma.RegistrationCreateManyInput | Prisma.RegistrationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegistrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegistrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationUpdateInput, Prisma.RegistrationUncheckedUpdateInput>;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyInput>;
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
};
export type RegistrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegistrationUpdateManyMutationInput, Prisma.RegistrationUncheckedUpdateManyInput>;
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
    include?: Prisma.RegistrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegistrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegistrationCreateInput, Prisma.RegistrationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegistrationUpdateInput, Prisma.RegistrationUncheckedUpdateInput>;
};
export type RegistrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
    where: Prisma.RegistrationWhereUniqueInput;
};
export type RegistrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
    limit?: number;
};
export type RegistrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegistrationSelect<ExtArgs> | null;
    omit?: Prisma.RegistrationOmit<ExtArgs> | null;
    include?: Prisma.RegistrationInclude<ExtArgs> | null;
};
export {};
