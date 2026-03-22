import { AdminService } from './admin.service';
import { CreateTournamentDto } from './validators/create-tournament.dto';
import { CreateMatchDto } from './validators/create-match.dto';
import { UpdateMatchDto } from './validators/update-match.dto';
import { AddResultsDto } from './validators/add-results.dto';
import { Role } from 'generated/prisma/enums';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getStats(): Promise<{
        totalUsers: number;
        totalTournaments: number;
        activeTournament: ({
            _count: {
                registrations: number;
            };
        } & {
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
        }) | null;
        recentRegistrations: ({
            user: {
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
            };
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
        totalRevenue: number;
    }>;
    getAllTournaments(): Promise<({
        _count: {
            registrations: number;
        };
    } & {
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
    })[]>;
    createTournament(dto: CreateTournamentDto): Promise<{
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
    }>;
    updateTournamentStatus(id: number, body: {
        status: string;
    }): Promise<{
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
    }>;
    getRegistrations(id: number): Promise<({
        user: {
            id: number;
            pseudo: string;
            email: string;
            ffid: string | null;
            avatar: string | null;
            country: string | null;
        };
    } & {
        id: number;
        createdAt: Date;
        slot: number;
        userId: number;
        tournamentId: number;
        payment_status: string;
    })[]>;
    cancelRegistration(id: number, userId: number): Promise<{
        message: string;
    }>;
    confirmPayment(id: number, userId: number): Promise<{
        message: string;
    }>;
    broadcastNotification(id: number, body: {
        title: string;
        body: string;
    }): Promise<{
        message: string;
    }>;
    computeRanking(id: number): Promise<{
        message: string;
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
    getTournamentMatches(id: number): Promise<({
        results: ({
            user: {
                id: number;
                pseudo: string;
                avatar: string | null;
            };
        } & {
            id: number;
            points: number;
            createdAt: Date;
            userId: number;
            matchId: number;
            placement: number;
            kills: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").MatchStatus;
        tournamentId: number;
        round: number;
        map: string;
        room_id: string | null;
        room_password: string | null;
        scheduled_at: Date;
        started_at: Date | null;
        finished_at: Date | null;
    })[]>;
    createMatch(dto: CreateMatchDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").MatchStatus;
        tournamentId: number;
        round: number;
        map: string;
        room_id: string | null;
        room_password: string | null;
        scheduled_at: Date;
        started_at: Date | null;
        finished_at: Date | null;
    }>;
    updateMatch(id: number, dto: UpdateMatchDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("generated/prisma/enums").MatchStatus;
        tournamentId: number;
        round: number;
        map: string;
        room_id: string | null;
        room_password: string | null;
        scheduled_at: Date;
        started_at: Date | null;
        finished_at: Date | null;
    }>;
    getMatchResults(id: number): Promise<({
        user: {
            id: number;
            pseudo: string;
            ffid: string | null;
            avatar: string | null;
        };
    } & {
        id: number;
        points: number;
        createdAt: Date;
        userId: number;
        matchId: number;
        placement: number;
        kills: number;
    })[]>;
    addResults(id: number, dto: AddResultsDto): Promise<{
        id: number;
        points: number;
        createdAt: Date;
        userId: number;
        matchId: number;
        placement: number;
        kills: number;
    }[]>;
}
