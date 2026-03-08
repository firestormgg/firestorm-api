import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TournamentsModule } from './tournaments/tournaments.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/Env.config';
import { PrismaModule } from './prisma/prisma.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TournamentsModule,
    NotificationsModule,
    ConfigModule.forRoot({
      isGlobal: true,      // pas besoin de l'importer dans chaque module
      envFilePath: '.env', // fichier .env à la racine
      validate,            // valide les variables au démarrage
    }),
    PrismaModule,
    MatchModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
