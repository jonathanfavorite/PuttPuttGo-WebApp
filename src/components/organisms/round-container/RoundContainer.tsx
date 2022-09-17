import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/GameContext";
import { isColorDark } from "../../../helpers/ColorHelper";
import RGBModel from "../../../models/RGBModel";
import './RoundContainer.scss';

  
function RoundContainer() {
    const gameContext = useContext(GameContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(gameContext.getPlayers().length <= 0) {

            navigate("/");
        }
       
    }, []);


    function chooseRound(round: number) {
        gameContext.updateCurrentHole(round);
        gameContext.setCurrentPlayer(0);
    }

    let defaultColors : RGBModel = {
        r: 255,
        g: 255,
        b: 255
    }
    if(gameContext.getCurrentPlayer()) {
        defaultColors = gameContext.getCurrentPlayer().color!;
    }
     
  
   
    
    return (
        <div className="round_container" style={{
            backgroundColor: defaultColors ? `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${0.1})` : "#000000"
        }}>
            <div className="hole_text">Hole</div>
            <div className="round_list">
                {gameContext.getHoles().map((hole, i) => {
                    let isActive = gameContext.getCurrentHole() === i + 1;
                    let activeStyle = {
                        backgroundColor: `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${1})`,
                        color: !isColorDark(defaultColors) ? "#fff" : "#000"
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
