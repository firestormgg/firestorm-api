import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  /* ══════════════════════════════════════════
     TOUTES LES NOTIFICATIONS DU USER
     Les plus récentes en premier
  ══════════════════════════════════════════ */
  async findAllForUser(userId: number) {
    return this.prisma.notification.findMany({
      where:   { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /* ══════════════════════════════════════════
     MARQUER UNE NOTIFICATION COMME LUE
  ══════════════════════════════════════════ */
  async markAsRead(id: number, userId: number) {
    const notif = await this.prisma.notification.findFirst({
      where: { id, userId },
    });

    if (!notif) throw new NotFoundException('Notification introuvable');

    return this.prisma.notification.update({
      where: { id },
      data:  { read: true },
    });
  }

  /* ══════════════════════════════════════════
     MARQUER TOUTES COMME LUES
  ══════════════════════════════════════════ */
  async markAllAsRead(userId: number) {
    await this.prisma.notification.updateMany({
      where: { userId, read: false },
      data:  { read: true },
    });

    return { message: 'Toutes les notifications marquées comme lues' };
  }

  /* ══════════════════════════════════════════
     NOMBRE DE NON LUES
     Pour le badge dans la navbar
  ══════════════════════════════════════════ */
  async countUnread(userId: number) {
    const count = await this.prisma.notification.count({
      where: { userId, read: false },
    });

    return { count };
  }
}