import CourseModel from "./CourseModel";
import HoleModel from "./HoleModel";
import PlayerModel from "./PlayerModel";
import ScoreModel from "./ScoreModel";

export default interface GameModel {
    id: number;
    course: CourseModel;
    players: PlayerModel[];
    scores: ScoreModel[];
    holes: HoleModel[];
    currentHole: number;
    currentPlayer: number;
}
    