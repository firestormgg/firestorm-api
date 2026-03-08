import { PrismaClient } from "generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

/* ══════════════════════════════════════════
   PRISMA CLIENT — Adapter PostgreSQL
   PrismaPg est l'adapter optimisé pour
   les connexions PostgreSQL (Supabase)
   Il utilise le pool de connexions natif
   au lieu du driver par défaut
══════════════════════════════════════════ */
const pool = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter: pool,
  log:
    process.env.NODE_ENV === 'development'
      ? ['query', 'error', 'warn']
      : ['error'],
});

export default prisma;