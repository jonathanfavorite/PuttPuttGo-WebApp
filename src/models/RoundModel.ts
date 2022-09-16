import HoleModel from "./HoleModel";
import PlayerModel from "./PlayerModel";

export default interface RoundModel {
    id: number;
    courseID: number;
    players: PlayerModel[];
    holeID: number;
}