"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const supabase_js_1 = require("@supabase/supabase-js");
const bcrypt = __importStar(require("bcrypt"));
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const existingEmail = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existingEmail)
            throw new common_1.ConflictException('Cet email est déjà utilisé');
        const existingPseudo = await this.prisma.user.findUnique({
            where: { pseudo: dto.pseudo },
        });
        if (existingPseudo)
            throw new common_1.ConflictException('Ce pseudo est déjà pris');
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                pseudo: dto.pseudo,
                email: dto.email,
                password: hashedPassword,
                ffid: dto.ffid,
                avatar: dto.avatar,
                country: dto.country,
            },
        });
        return this.exclude(user, ['password']);
    }
    async findAll() {
        const users = await this.prisma.user.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return users.map((user) => this.exclude(user, ['password']));
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException(`Utilisateur #${id} introuvable`);
        return this.exclude(user, ['password']);
    }
    async findByEmail(email) {
        return this.prisma.user.findUnique({ where: { email } });
    }
    async findByPseudo(pseudo) {
        const user = await this.prisma.user.findUnique({ where: { pseudo } });
        if (!user)
            return null;
        return this.exclude(user, ['password']);
    }
    async update(id, dto) {
        await this.findOne(id);
        if (dto.pseudo) {
            const existing = await this.prisma.user.findUnique({ where: { pseudo: dto.pseudo } });
            if (existing && existing.id !== id)
                throw new common_1.ConflictException('Ce pseudo est déjà pris');
        }
        const data = { ...dto };
        if (dto.password) {
            data.password = await bcrypt.hash(dto.password, 10);
        }
        const updated = await this.prisma.user.update({ where: { id }, data });
        return this.exclude(updated, ['password']);
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.user.delete({ where: { id } });
        return { message: `Utilisateur #${id} supprimé avec succès` };
    }
    async findWithRegistrations(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            include: {
                registrations: {
                    include: { tournament: true },
                    orderBy: { createdAt: 'desc' },
                },
            },
        });
        if (!user)
            throw new common_1.NotFoundException(`Utilisateur #${id} introuvable`);
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async updateStats(id, stats) {
        await this.findOne(id);
        const updated = await this.prisma.user.update({
            where: { id },
            data: {
                ...(stats.rank !== undefined && { rank: stats.rank }),
                ...(stats.points !== undefined && { points: stats.points }),
                ...(stats.wins !== undefined && { wins: stats.wins }),
            },
        });
        return this.exclude(updated, ['password']);
    }
    async uploadAvatar(userId, file) {
        const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);
        const ext = file.mimetype.split('/')[1];
        const filePath = `avatars/${userId}-${Date.now()}.${ext}`;
        const { error } = await supabase.storage
            .from('avatar')
            .upload(filePath, file.buffer, { contentType: file.mimetype, upsert: true });
        if (error)
            throw new Error(error.message);
        const { data } = supabase.storage.from('avatar').getPublicUrl(filePath);
        const avatarUrl = data.publicUrl;
        await this.prisma.user.update({ where: { id: userId }, data: { avatar: avatarUrl } });
        return { avatar: avatarUrl };
    }
    exclude(obj, keys) {
        return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map