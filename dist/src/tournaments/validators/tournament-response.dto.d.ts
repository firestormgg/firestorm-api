export declare class TournamentResponseDto {
    id: number;
    title: string;
    description: string | null;
    game_mode: string;
    max_players: number;
    current_players: number;
    entry_fee: number;
    prize_pool: number;
    status: string;
    start_at: Date;
    registration_deadline: Date;
    createdAt: Date;
    updatedAt: Date;
}
