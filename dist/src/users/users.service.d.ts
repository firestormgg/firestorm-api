import { PrismaService } from '../prisma/prisma.service';
import { User } from 'generated/prisma/client';
import { CreateUserDto } from './validator/create-user.dto';
import { UpdateUserDto } from './validator/update-user.dto';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateUserDto): Promise<Omit<User, 'password'>>;
    findAll(): Promise<Omit<User, 'password'>[]>;
    findOne(id: number): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<User | null>;
    findByPseudo(pseudo: string): Promise<Omit<User, 'password'> | null>;
    update(id: number, dto: UpdateUserDto): Promise<Omit<User, 'password'>>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findWithRegistrations(id: number): Promise<{
        registrations: ({
            tournament: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                description: string | null;
                game_mode: string;
                max_players: number;
                current_players: number;
                entry_fee: number;
                prize_pool: number;
                status: import("generated/prisma/client").TournamentStatus;
                start_at: Date;
                registration_deadline: Date;
                featured: boolean;
            };
        } & {
            id: number;
            createdAt: Date;
            slot: number;
            userId: number;
            tournamentId: number;
            payment_status: string;
        })[];
        id: number;
        pseudo: string;
        email: string;
        ffid: string | null;
        avatar: string | null;
        role: import("generated/prisma/client").Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateStats(id: number, stats: {
        rank?: number;
        points?: number;
        wins?: number;
    }): Promise<Omit<User, 'password'>>;
    uploadAvatar(userId: number, file: Express.Multer.File): Promise<{
        avatar: string;
    }>;
    private exclude;
}
