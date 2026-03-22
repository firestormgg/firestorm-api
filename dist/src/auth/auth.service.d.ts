import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './validators/register.dto';
import { AuthResponseDto } from './validators/auth-response.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        pseudo: string;
        email: string;
        ffid: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums").Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    register(dto: RegisterDto): Promise<AuthResponseDto>;
    login(user: any): Promise<AuthResponseDto>;
    me(userId: number): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: import("../../generated/prisma/enums").Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    private generateToken;
}
