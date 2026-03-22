import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForUser(userId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        userId: number;
        body: string;
        type: import("../../generated/prisma/enums").NotificationType;
        read: boolean;
    }[]>;
    markAsRead(id: number, userId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        userId: number;
        body: string;
        type: import("../../generated/prisma/enums").NotificationType;
        read: boolean;
    }>;
    markAllAsRead(userId: number): Promise<{
        message: string;
    }>;
    countUnread(userId: number): Promise<{
        count: number;
    }>;
}
