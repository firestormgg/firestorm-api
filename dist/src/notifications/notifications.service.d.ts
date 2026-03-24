import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllForUser(userId: number): Promise<{
        type: import("../../generated/prisma/enums").NotificationType;
        title: string;
        id: number;
        createdAt: Date;
        userId: number;
        body: string;
        read: boolean;
    }[]>;
    markAsRead(id: number, userId: number): Promise<{
        type: import("../../generated/prisma/enums").NotificationType;
        title: string;
        id: number;
        createdAt: Date;
        userId: number;
        body: string;
        read: boolean;
    }>;
    markAllAsRead(userId: number): Promise<{
        message: string;
    }>;
    countUnread(userId: number): Promise<{
        count: number;
    }>;
}
