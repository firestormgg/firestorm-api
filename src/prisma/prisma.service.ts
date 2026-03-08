import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const pool = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    });

    super({
      adapter: pool,
      log:
        process.env.NODE_ENV === 'development'
          ? ['query', 'error', 'warn']
          : ['error'],
    });
  }

  /* ══════════════════════════════════════════
     CONNEXION AU DÉMARRAGE
  ══════════════════════════════════════════ */
  async onModuleInit() {
    try {
      await this.$connect();
      this.logger.log('✅ Connecté à Supabase (PostgreSQL)');
    } catch (error) {
      this.logger.error('❌ Impossible de se connecter à Supabase', error);
      throw error;
    }
  }

  /* ══════════════════════════════════════════
     DÉCONNEXION À L'ARRÊT
  ══════════════════════════════════════════ */
  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('🔌 Déconnecté de Supabase');
  }
}