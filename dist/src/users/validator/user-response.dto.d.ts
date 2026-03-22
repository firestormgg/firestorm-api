import { Role } from 'generated/prisma/enums';
export declare class UserResponseDto {
    id: number;
    pseudo: string;
    email: string;
    ffid: string | null;
    avatar: string | null;
    role: Role;
    rank: number;
    points: number;
    wins: number;
    createdAt: Date;
    updatedAt: Date;
}
