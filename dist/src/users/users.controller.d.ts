import { UsersService } from './users.service';
import { UpdateUserDto } from './validator/update-user.dto';
import { Role } from 'generated/prisma/enums';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMyRegistrations(req: any): Promise<({
        tournament: {
            status: import("generated/prisma/enums").TournamentStatus;
            description: string | null;
            title: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            game_mode: string;
            max_players: number;
            current_players: number;
            entry_fee: number;
            prize_pool: number;
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
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    getMyTournaments(req: any): Promise<{
        registrations: ({
            tournament: {
                status: import("generated/prisma/enums").TournamentStatus;
                description: string | null;
                title: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                game_mode: string;
                max_players: number;
                current_players: number;
                entry_fee: number;
                prize_pool: number;
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
        pseudo: string;
        email: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateMe(req: any, dto: UpdateUserDto): Promise<Omit<{
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    deleteMe(req: any): Promise<{
        message: string;
    }>;
    findAll(): Promise<Omit<{
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">[]>;
    findOne(id: number): Promise<Omit<{
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
    update(id: number, dto: UpdateUserDto): Promise<Omit<{
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
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
        pseudo: string;
        email: string;
        password: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }, "password">>;
}
