import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(req: any): Promise<{
        type: import("../../generated/prisma/enums").NotificationType;
        title: string;
        id: number;
        createdAt: Date;
        userId: number;
        body: string;
        read: boolean;
    }[]>;
    countUnread(req: any): Promise<{
        count: number;
    }>;
    markAsRead(id: number, req: any): Promise<{
        type: import("../../generated/prisma/enums").NotificationType;
        title: string;
        id: number;
        createdAt: Date;
        userId: number;
        body: string;
        read: boolean;
    }>;
    markAllAsRead(req: any): Promise<{
        message: string;
    }>;
}
