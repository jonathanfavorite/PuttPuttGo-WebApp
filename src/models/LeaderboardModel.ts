import PlayerModel from "./PlayerModel";

export default interface LeaderboardModel {
    player: PlayerModel;
    score: number;
}