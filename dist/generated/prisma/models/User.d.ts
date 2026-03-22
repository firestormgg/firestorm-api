import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
    rank: number | null;
    points: number | null;
    wins: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
    rank: number | null;
    points: number | null;
    wins: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    pseudo: string | null;
    email: string | null;
    password: string | null;
    ffid: string | null;
    avatar: string | null;
    role: $Enums.Role | null;
    rank: number | null;
    points: number | null;
    country: string | null;
    wins: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    pseudo: string | null;
    email: string | null;
    password: string | null;
    ffid: string | null;
    avatar: string | null;
    role: $Enums.Role | null;
    rank: number | null;
    points: number | null;
    country: string | null;
    wins: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    pseudo: number;
    email: number;
    password: number;
    ffid: number;
    avatar: number;
    role: number;
    rank: number;
    points: number;
    country: number;
    wins: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
    rank?: true;
    points?: true;
    wins?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
    rank?: true;
    points?: true;
    wins?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    pseudo?: true;
    email?: true;
    password?: true;
    ffid?: true;
    avatar?: true;
    role?: true;
    rank?: true;
    points?: true;
    country?: true;
    wins?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    pseudo?: true;
    email?: true;
    password?: true;
    ffid?: true;
    avatar?: true;
    role?: true;
    rank?: true;
    points?: true;
    country?: true;
    wins?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    pseudo?: true;
    email?: true;
    password?: true;
    ffid?: true;
    avatar?: true;
    role?: true;
    rank?: true;
    points?: true;
    country?: true;
    wins?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    pseudo: string;
    email: string;
    password: string;
    ffid: string | null;
    avatar: string | null;
    role: $Enums.Role;
    rank: number;
    points: number;
    country: string | null;
    wins: number;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    pseudo?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    ffid?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    rank?: Prisma.IntFilter<"User"> | number;
    points?: Prisma.IntFilter<"User"> | number;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    wins?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    rankings?: Prisma.TournamentRankingListRelationFilter;
    registrations?: Prisma.RegistrationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    matchResults?: Prisma.MatchResultListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pseudo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    ffid?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    rankings?: Prisma.TournamentRankingOrderByRelationAggregateInput;
    registrations?: Prisma.RegistrationOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    matchResults?: Prisma.MatchResultOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    pseudo?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    ffid?: Prisma.StringNullableFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    rank?: Prisma.IntFilter<"User"> | number;
    points?: Prisma.IntFilter<"User"> | number;
    country?: Prisma.StringNullableFilter<"User"> | string | null;
    wins?: Prisma.IntFilter<"User"> | number;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    rankings?: Prisma.TournamentRankingListRelationFilter;
    registrations?: Prisma.RegistrationListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    matchResults?: Prisma.MatchResultListRelationFilter;
}, "id" | "pseudo" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pseudo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    ffid?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    pseudo?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    ffid?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    rank?: Prisma.IntWithAggregatesFilter<"User"> | number;
    points?: Prisma.IntWithAggregatesFilter<"User"> | number;
    country?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    wins?: Prisma.IntWithAggregatesFilter<"User"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pseudo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    ffid?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pseudo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    ffid?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pseudo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    ffid?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    points?: Prisma.SortOrder;
    wins?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRegistrationsInput, Prisma.UserUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRegistrationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRegistrationsInput, Prisma.UserUncheckedCreateWithoutRegistrationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRegistrationsInput;
    upsert?: Prisma.UserUpsertWithoutRegistrationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRegistrationsInput, Prisma.UserUpdateWithoutRegistrationsInput>, Prisma.UserUncheckedUpdateWithoutRegistrationsInput>;
};
export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.UserUpsertWithoutNotificationsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.UserUpdateWithoutNotificationsInput>, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserCreateNestedOneWithoutMatchResultsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMatchResultsInput, Prisma.UserUncheckedCreateWithoutMatchResultsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMatchResultsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutMatchResultsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutMatchResultsInput, Prisma.UserUncheckedCreateWithoutMatchResultsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutMatchResultsInput;
    upsert?: Prisma.UserUpsertWithoutMatchResultsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutMatchResultsInput, Prisma.UserUpdateWithoutMatchResultsInput>, Prisma.UserUncheckedUpdateWithoutMatchResultsInput>;
};
export type UserCreateNestedOneWithoutRankingsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRankingsInput, Prisma.UserUncheckedCreateWithoutRankingsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRankingsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRankingsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRankingsInput, Prisma.UserUncheckedCreateWithoutRankingsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRankingsInput;
    upsert?: Prisma.UserUpsertWithoutRankingsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRankingsInput, Prisma.UserUpdateWithoutRankingsInput>, Prisma.UserUncheckedUpdateWithoutRankingsInput>;
};
export type UserCreateWithoutRegistrationsInput = {
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRegistrationsInput, Prisma.UserUncheckedCreateWithoutRegistrationsInput>;
};
export type UserUpsertWithoutRegistrationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRegistrationsInput, Prisma.UserUncheckedUpdateWithoutRegistrationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRegistrationsInput, Prisma.UserUncheckedCreateWithoutRegistrationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRegistrationsInput, Prisma.UserUncheckedUpdateWithoutRegistrationsInput>;
};
export type UserUpdateWithoutRegistrationsInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutNotificationsInput = {
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
};
export type UserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutNotificationsInput, Prisma.UserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutNotificationsInput, Prisma.UserUncheckedUpdateWithoutNotificationsInput>;
};
export type UserUpdateWithoutNotificationsInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutMatchResultsInput = {
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutMatchResultsInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rankings?: Prisma.TournamentRankingUncheckedCreateNestedManyWithoutUserInput;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutMatchResultsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutMatchResultsInput, Prisma.UserUncheckedCreateWithoutMatchResultsInput>;
};
export type UserUpsertWithoutMatchResultsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutMatchResultsInput, Prisma.UserUncheckedUpdateWithoutMatchResultsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutMatchResultsInput, Prisma.UserUncheckedCreateWithoutMatchResultsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutMatchResultsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutMatchResultsInput, Prisma.UserUncheckedUpdateWithoutMatchResultsInput>;
};
export type UserUpdateWithoutMatchResultsInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutMatchResultsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rankings?: Prisma.TournamentRankingUncheckedUpdateManyWithoutUserNestedInput;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutRankingsInput = {
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRankingsInput = {
    id?: number;
    pseudo: string;
    email: string;
    password: string;
    ffid?: string | null;
    avatar?: string | null;
    role?: $Enums.Role;
    rank?: number;
    points?: number;
    country?: string | null;
    wins?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    registrations?: Prisma.RegistrationUncheckedCreateNestedManyWithoutUserInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput;
    matchResults?: Prisma.MatchResultUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRankingsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRankingsInput, Prisma.UserUncheckedCreateWithoutRankingsInput>;
};
export type UserUpsertWithoutRankingsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRankingsInput, Prisma.UserUncheckedUpdateWithoutRankingsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRankingsInput, Prisma.UserUncheckedCreateWithoutRankingsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRankingsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRankingsInput, Prisma.UserUncheckedUpdateWithoutRankingsInput>;
};
export type UserUpdateWithoutRankingsInput = {
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRankingsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pseudo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    ffid?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    rank?: Prisma.IntFieldUpdateOperationsInput | number;
    points?: Prisma.IntFieldUpdateOperationsInput | number;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    wins?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    registrations?: Prisma.RegistrationUncheckedUpdateManyWithoutUserNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput;
    matchResults?: Prisma.MatchResultUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    rankings: number;
    registrations: number;
    notifications: number;
    matchResults: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rankings?: boolean | UserCountOutputTypeCountRankingsArgs;
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs;
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs;
    matchResults?: boolean | UserCountOutputTypeCountMatchResultsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRankingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TournamentRankingWhereInput;
};
export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegistrationWhereInput;
};
export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type UserCountOutputTypeCountMatchResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatchResultWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pseudo?: boolean;
    email?: boolean;
    password?: boolean;
    ffid?: boolean;
    avatar?: boolean;
    role?: boolean;
    rank?: boolean;
    points?: boolean;
    country?: boolean;
    wins?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    rankings?: boolean | Prisma.User$rankingsArgs<ExtArgs>;
    registrations?: boolean | Prisma.User$registrationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    matchResults?: boolean | Prisma.User$matchResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pseudo?: boolean;
    email?: boolean;
    password?: boolean;
    ffid?: boolean;
    avatar?: boolean;
    role?: boolean;
    rank?: boolean;
    points?: boolean;
    country?: boolean;
    wins?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pseudo?: boolean;
    email?: boolean;
    password?: boolean;
    ffid?: boolean;
    avatar?: boolean;
    role?: boolean;
    rank?: boolean;
    points?: boolean;
    country?: boolean;
    wins?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    pseudo?: boolean;
    email?: boolean;
    password?: boolean;
    ffid?: boolean;
    avatar?: boolean;
    role?: boolean;
    rank?: boolean;
    points?: boolean;
    country?: boolean;
    wins?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pseudo" | "email" | "password" | "ffid" | "avatar" | "role" | "rank" | "points" | "country" | "wins" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rankings?: boolean | Prisma.User$rankingsArgs<ExtArgs>;
    registrations?: boolean | Prisma.User$registrationsArgs<ExtArgs>;
    notifications?: boolean | Prisma.User$notificationsArgs<ExtArgs>;
    matchResults?: boolean | Prisma.User$matchResultsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        rankings: Prisma.$TournamentRankingPayload<ExtArgs>[];
        registrations: Prisma.$RegistrationPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        matchResults: Prisma.$MatchResultPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: $Enums.Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rankings<T extends Prisma.User$rankingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$rankingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TournamentRankingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    registrations<T extends Prisma.User$registrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.User$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    matchResults<T extends Prisma.User$matchResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$matchResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly pseudo: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly ffid: Prisma.FieldRef<"User", 'String'>;
    readonly avatar: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly rank: Prisma.FieldRef<"User", 'Int'>;
    readonly points: Prisma.FieldRef<"User", 'Int'>;
    readonly country: Prisma.FieldRef<"User", 'String'>;
    readonly wins: Prisma.FieldRef<"User", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$rankingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$registrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
export type User$matchResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
