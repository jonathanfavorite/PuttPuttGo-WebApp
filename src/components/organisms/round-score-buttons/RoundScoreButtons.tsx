import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../contexts/GameContext";
import RGBModel from "../../../models/RGBModel";
import ScoreAddButton from "../../atoms/score-add-button/ScoreAddButton";
import "./RoundScoreButtons.scss";



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

function RoundScoreButtons() {
    const gameContext = useContext(GameContext);

    function nextPlayerTurn() {
        gameContext.toggleNextPlayer();
    }
    function toggleNextHole() {
        gameContext.toggleNextHole();
    }
    function handleScoreAdd(score: number) {
        let currentPlayer = gameContext.getCurrentPlayer();
        let currentCourse = gameContext.getCourse().id;
        let currentHole = gameContext.getCurrentHole();
        gameContext.addScore({
            playerID: currentPlayer.id,
            holeID: currentHole,
            score: score,
            courseID: currentCourse,
        });
        gameContext.toggleNextPlayer();
    }

    // How the buttons are displayed on the screen
    let layout = [
        [1, 2, 3],
        [4, 5, 6],
        [-1, 7, 0],
    ];

    let defaultColors : RGBModel = {
        r: 255,
        g: 255,
        b: 255
    }

        if(gameContext.getCurrentPlayer()) {
            defaultColors = gameContext.getCurrentPlayer().color!;
        }


   

    return (
        <div className="round_buttons_wrap fixed_buttons_container container_bottom">
            <div className="buttons_container">
                <div className="buttons_main">
                    <div className="buttons_table">
                        <div className="table_row top_cell">
                            {layout[0].map((score, index) => {
                                return (
                                    <ScoreAddButton key={index}
                                        score={score}
                                        handleScoreAdd={() =>
                                            handleScoreAdd(score)
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className="table_row">
                            {layout[1].map((score, index) => {
                                return (
                                    <ScoreAddButton key={index}
                                        score={score}
                                        handleScoreAdd={() =>
                                            handleScoreAdd(score)
                                        }
                                    />
                                );
                            })}
                        </div>
                        <div className="table_row">
                            {layout[2].map((score, index) => {
                                return (
                                    <ScoreAddButton key={index}
                                        score={score}
                                        handleScoreAdd={() =>
                                            handleScoreAdd(score)
                                        }
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="buttons_right">
                    {/* <div className='top_cell' onClick={nextPlayerTurn}>NEXT<br />PLAYER</div> */}
                    <div className="bottom_cell"
                    style={{
                        backgroundColor: `rgba(${defaultColors.r}, ${defaultColors.g}, ${defaultColors.b}, ${1})`,
                        color: !IsColorDark(defaultColors) ? "white" : "black"
                    }}
                    onClick={toggleNextHole}>
                        NEXT
                        <br />
                        HOLE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoundScoreButtons;
