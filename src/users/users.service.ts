import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { createClient } from '@supabase/supabase-js';
import { User } from 'generated/prisma/client';
import { CreateUserDto } from './validator/create-user.dto';
import { UpdateUserDto } from './validator/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  /* ══════════════════════════════════════════
     CRÉER UN UTILISATEUR
  ══════════════════════════════════════════ */
  async create(dto: CreateUserDto): Promise<Omit<User, 'password'>> {
    const existingEmail = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existingEmail) throw new ConflictException('Cet email est déjà utilisé');

    const existingPseudo = await this.prisma.user.findUnique({
      where: { pseudo: dto.pseudo },
    });
    if (existingPseudo) throw new ConflictException('Ce pseudo est déjà pris');

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        pseudo:   dto.pseudo,
        email:    dto.email,
        password: hashedPassword,
        ffid:     dto.ffid,
        avatar:   dto.avatar,
        country:  dto.country,
      },
    });

    return this.exclude(user, ['password']);
  }

  /* ══════════════════════════════════════════
     TROUVER TOUS LES UTILISATEURS
  ══════════════════════════════════════════ */
  async findAll(): Promise<Omit<User, 'password'>[]> {
    const users = await this.prisma.user.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return users.map((user) => this.exclude(user, ['password']));
  }

  /* ══════════════════════════════════════════
     TROUVER UN USER PAR ID
  ══════════════════════════════════════════ */
  async findOne(id: number): Promise<Omit<User, 'password'>> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException(`Utilisateur #${id} introuvable`);
    return this.exclude(user, ['password']);
  }

  /* ══════════════════════════════════════════
     TROUVER UN USER PAR EMAIL
  ══════════════════════════════════════════ */
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  /* ══════════════════════════════════════════
     TROUVER UN USER PAR PSEUDO
  ══════════════════════════════════════════ */
  async findByPseudo(pseudo: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findUnique({ where: { pseudo } });
    if (!user) return null;
    return this.exclude(user, ['password']);
  }

  /* ══════════════════════════════════════════
     METTRE À JOUR UN USER
  ══════════════════════════════════════════ */
  async update(id: number, dto: UpdateUserDto): Promise<Omit<User, 'password'>> {
    await this.findOne(id);

    if (dto.pseudo) {
      const existing = await this.prisma.user.findUnique({ where: { pseudo: dto.pseudo } });
      if (existing && existing.id !== id) throw new ConflictException('Ce pseudo est déjà pris');
    }

    const data: any = { ...dto };
    if (dto.password) {
      data.password = await bcrypt.hash(dto.password, 10);
    }

    const updated = await this.prisma.user.update({ where: { id }, data });
    return this.exclude(updated, ['password']);
  }

  /* ══════════════════════════════════════════
     SUPPRIMER UN USER
  ══════════════════════════════════════════ */
  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.prisma.user.delete({ where: { id } });
    return { message: `Utilisateur #${id} supprimé avec succès` };
  }

  /* ══════════════════════════════════════════
     TROUVER UN USER AVEC SES INSCRIPTIONS
  ══════════════════════════════════════════ */
  async findWithRegistrations(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        registrations: {
          include: { tournament: true },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
    if (!user) throw new NotFoundException(`Utilisateur #${id} introuvable`);
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  /* ══════════════════════════════════════════
     METTRE À JOUR LES STATS
  ══════════════════════════════════════════ */
  async updateStats(
    id: number,
    stats: { rank?: number; points?: number; wins?: number },
  ): Promise<Omit<User, 'password'>> {
    await this.findOne(id);
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        ...(stats.rank   !== undefined && { rank:   stats.rank }),
        ...(stats.points !== undefined && { points: stats.points }),
        ...(stats.wins   !== undefined && { wins:   stats.wins }),
      },
    });
    return this.exclude(updated, ['password']);
  }

  /* ══════════════════════════════════════════
     UPLOAD AVATAR → SUPABASE STORAGE
  ══════════════════════════════════════════ */
  async uploadAvatar(userId: number, file: Express.Multer.File): Promise<{ avatar: string }> {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!,
    );

    const ext      = file.mimetype.split('/')[1];
    const filePath = `avatars/${userId}-${Date.now()}.${ext}`;

    const { error } = await supabase.storage
      .from('avatar')
      .upload(filePath, file.buffer, { contentType: file.mimetype, upsert: true });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from('avatar').getPublicUrl(filePath);
    const avatarUrl = data.publicUrl;

    await this.prisma.user.update({ where: { id: userId }, data: { avatar: avatarUrl } });
    return { avatar: avatarUrl };
  }

  /* ══════════════════════════════════════════
     HELPER PRIVÉ — Exclure des champs
  ══════════════════════════════════════════ */
  private exclude<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keys.includes(key as K)),
    ) as Omit<T, K>;
  }
}