import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import RGBModel from "../../../models/RGBModel";
import './RoundContainer.scss';


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
  
function RoundContainer() {
    const gameContext = useContext(GameContext);

    function chooseRound(round: number) {
        gameContext.updateCurrentHole(round);
        gameContext.setCurrentPlayer(0);
    }

    let defaultColors : RGBModel = {
        r: 255,
        g: 255,
        b: 255
    }
    if(gameContext.getCurrentPlayer().color) {
        defaultColors = gameContext.getCurrentPlayer().color!;
    }
    
    return (
        <div className="round_container">
            <div className="hole_text">Hole</div>
            <div className="round_list">
                {gameContext.getHoles().map((hole, i) => {
                    let isActive = gameContext.getCurrentHole() === i + 1;
                    let activeStyle = {
                        backgroundColor: `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${1})`,
                        color: !IsColorDark(defaultColors) ? "#fff" : "#000"
                    }
                    return (
                        <div
                            className={`round_button ${
                                gameContext.getCurrentHole() === i + 1
                                    ? "active"
                                    : ""
                            }`}
                            style={{
                                backgroundColor: isActive ? activeStyle.backgroundColor : "",
                                color: isActive ? activeStyle.color : "#fff"
                            }}
                            key={i}
                            onClick={() => chooseRound(i + 1)}
                        >
                            {hole.number}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RoundContainer;
