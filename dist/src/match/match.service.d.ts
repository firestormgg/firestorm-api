import { PrismaService } from '../prisma/prisma.service';
export declare class MatchService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    checkRegistration(userId: number): Promise<{
        registered: boolean;
    }>;
    checkIn(matchId: number, userId: number): Promise<{
        message: string;
        round: number;
        map: string;
        room_id: string;
        room_password: string;
    }>;
}
