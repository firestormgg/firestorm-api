import { MatchService } from './match.service';
export declare class MatchController {
    private readonly matchesService;
    constructor(matchesService: MatchService);
    getNext(): Promise<{
        status: import("../../generated/prisma/enums").MatchStatus;
        map: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        tournamentId: number;
        round: number;
        room_id: string | null;
        room_password: string | null;
        scheduled_at: Date;
        started_at: Date | null;
        finished_at: Date | null;
    }>;
    checkRegistration(req: any): Promise<{
        registered: boolean;
    }>;
    checkIn(id: number, req: any): Promise<{
        message: string;
        round: number;
        map: string;
        room_id: string;
        room_password: string;
    }>;
}
