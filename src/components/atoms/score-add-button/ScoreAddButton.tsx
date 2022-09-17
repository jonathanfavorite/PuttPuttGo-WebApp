import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../contexts/GameContext";
import RGBModel from "../../../models/RGBModel";
import {isColorDark} from '../../../helpers/ColorHelper';
interface ScoreAddProps {
    score: number;
    handleScoreAdd: (score: number) => void;
}


function ScoreAddButton(props: ScoreAddProps) {
    const gameContext = useContext(GameContext);

    let defaultColors : RGBModel = {
        r: 255,
        g: 255,
        b: 255
    }

        if(gameContext.getCurrentPlayer()) {
            defaultColors = gameContext.getCurrentPlayer().color!;
        }

    
    return (
        <div
            className="table_cell"
            style={{
                backgroundColor: `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${0.7})`,
            }}
            onClick={() => props.handleScoreAdd(props.score)}
        >
            <span style={{
              color: !isColorDark(defaultColors) ? "#fff" : "#000"
            }}>{props.score}</span>
        </div>
    );
}

export default ScoreAddButton;
