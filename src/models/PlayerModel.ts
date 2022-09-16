import RGBModel from "./RGBModel";

export default interface PlayerModel {
    id: number;
    name: string;
    color?: RGBModel;
}