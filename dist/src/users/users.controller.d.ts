import { UsersService } from './users.service';
import { UpdateUserDto } from './validator/update-user.dto';
import { Role } from 'generated/prisma/enums';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyRegistrations(req: any): Promise<({
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
            status: import("generated/prisma/enums").TournamentStatus;
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
    })[]>;
    uploadAvatar(req: any, file: Express.Multer.File): Promise<{
        avatar: string;
    }>;
    getMe(req: any): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    getMyTournaments(req: any): Promise<{
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
                status: import("generated/prisma/enums").TournamentStatus;
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
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMe(req: any, dto: UpdateUserDto): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    deleteMe(req: any): Promise<{
        message: string;
    }>;
    findAll(): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">[]>;
    findOne(id: number): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    update(id: number, dto: UpdateUserDto): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    remove(id: number): Promise<{
        message: string;
    }>;
    updateStats(id: number, stats: {
        rank?: number;
        points?: number;
        wins?: number;
    }): Promise<Omit<{
        id: number;
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        role: Role;
        rank: number;
        points: number;
        country: string | null;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
}
