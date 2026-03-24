import { PrismaService } from '../prisma/prisma.service';
import { TournamentStatus } from 'generated/prisma/enums';
export declare class TournamentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getActive(): Promise<{
        id: number;
        title: string;
        description: string | null;
        game_mode: string;
        max_players: number;
        current_players: number;
        entry_fee: number;
        prize_pool: number;
        status: TournamentStatus;
        start_at: Date;
        registration_deadline: Date;
        featured: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findById(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        game_mode: string;
        max_players: number;
        current_players: number;
        entry_fee: number;
        prize_pool: number;
        status: TournamentStatus;
        start_at: Date;
        registration_deadline: Date;
        featured: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getRanking(tournamentId: number): Promise<({
        user: {
            id: number;
            pseudo: string;
            avatar: string | null;
            country: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tournamentId: number;
        userId: number;
        totalPoints: number;
        position: number;
    })[]>;
    register(tournamentId: number, userId: number): Promise<{
        message: string;
        slot: number;
        tournament: {
            id: number;
            title: string;
            description: string | null;
            game_mode: string;
            max_players: number;
            current_players: number;
            entry_fee: number;
            prize_pool: number;
            status: TournamentStatus;
            start_at: Date;
            registration_deadline: Date;
            featured: boolean;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
