-- CreateTable
CREATE TABLE "TournamentRanking" (
    "id" SERIAL NOT NULL,
    "tournamentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "totalPoints" INTEGER NOT NULL DEFAULT 0,
    "position" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TournamentRanking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TournamentRanking_tournamentId_userId_key" ON "TournamentRanking"("tournamentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "TournamentRanking_tournamentId_position_key" ON "TournamentRanking"("tournamentId", "position");

-- AddForeignKey
ALTER TABLE "TournamentRanking" ADD CONSTRAINT "TournamentRanking_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TournamentRanking" ADD CONSTRAINT "TournamentRanking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
