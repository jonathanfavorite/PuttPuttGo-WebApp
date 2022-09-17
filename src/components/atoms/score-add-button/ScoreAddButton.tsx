import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import RGBModel from "../../../models/RGBModel";

interface ScoreAddProps {
    score: number;
    handleScoreAdd: (score: number) => void;
}


function IsColorDark(rgb: RGBModel) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  r = rgb.r;
  g = rgb.g;
  b = rgb.b;

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
      return true;
  } else {
      return false;
  }
}

function ScoreAddButton(props: ScoreAddProps) {
    const gameContext = useContext(GameContext);

    let defaultColors : RGBModel = {
        r: 255,
        g: 255,
        b: 255
    }
    if(gameContext.getCurrentPlayer().color) {
        defaultColors = gameContext.getCurrentPlayer().color!;
    }
    return (
        <div
            className="table_cell"
            style={{
                backgroundColor: `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${1})`,
            }}
            onClick={() => props.handleScoreAdd(props.score)}
        >
            <span style={{
              color: !IsColorDark(defaultColors) ? "#fff" : "#000"
            }}>{props.score}</span>
        </div>
    );
}

export default ScoreAddButton;
