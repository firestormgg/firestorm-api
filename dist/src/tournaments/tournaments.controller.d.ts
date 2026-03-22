import { TournamentsService } from './tournaments.service';
export declare class TournamentsController {
    private readonly tournamentsService;
    constructor(tournamentsService: TournamentsService);
    getActive(): Promise<{
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
        status: import("../../generated/prisma/enums").TournamentStatus;
        start_at: Date;
        registration_deadline: Date;
        featured: boolean;
    }>;
    getRanking(id: number): Promise<({
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
        userId: number;
        tournamentId: number;
        totalPoints: number;
        position: number;
    })[]>;
    register(id: number, req: any): Promise<{
        message: string;
        slot: number;
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
            status: import("../../generated/prisma/enums").TournamentStatus;
            start_at: Date;
            registration_deadline: Date;
            featured: boolean;
        };
    }>;
}
