import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(req: any): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        userId: number;
        body: string;
        type: import("../../generated/prisma/enums").NotificationType;
        read: boolean;
    }[]>;
    countUnread(req: any): Promise<{
        count: number;
    }>;
    markAsRead(id: number, req: any): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        userId: number;
        body: string;
        type: import("../../generated/prisma/enums").NotificationType;
        read: boolean;
    }>;
    markAllAsRead(req: any): Promise<{
        message: string;
    }>;
}
