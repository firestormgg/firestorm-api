import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: [] | [options: import("passport-local").IStrategyOptionsWithRequest] | [options: import("passport-local").IStrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        pseudo: string;
        email: string;
        ffid: string | null;
        avatar: string | null;
        country: string | null;
        id: number;
        role: import("../../../generated/prisma/enums").Role;
        rank: number;
        points: number;
        wins: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
