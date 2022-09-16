import React, { useContext, useEffect } from "react";
import GolfBall from "../../atoms/golf-ball/GolfBall";
import "./PlayerCard.scss";
import PlayerModel from "../../../models/PlayerModel";
import RGBModel from "../../../models/RGBModel";
import { GameContext } from "../../../contexts/GameContext";

interface PlayerProps {
    player: PlayerModel;
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

function PlayerCard(props: PlayerProps) {
    let gameContext = useContext(GameContext);

    let colors: RGBModel = {
        r: 255,
        g: 255,
        b: 255,
    };
    if (props.player.color) {
        colors = props.player.color;
    }

    let myTurn = false;
    if (gameContext.getCurrentPlayer().id === props.player.id) {
        myTurn = true;
    }

    function roundScoreColor() {
        /*
      !IsColorDark(colors) && myTurn
                                          ? "#fff"
                                          : "#000",*/
        let isDark = IsColorDark(colors);
        if (myTurn) {
          return !isDark ? "#fff" : "#000";
        }
        return "#fff";
    }

    let myScore = gameContext.getPlayerTotalScore(props.player.id);
    useEffect(() => {
      myScore = gameContext.getPlayerTotalScore(props.player.id);
    }, [gameContext.getPlayerTotalScore(props.player.id)]);

    return (
        // conditionally set player_card_wrap class

        <div
            onClick={() => gameContext.setCurrentPlayer(props.player.id)}
            className={`player_card_wrap ${myTurn ? "myturn" : ""}`}
        >
            <div className="ball">
                <GolfBall r={colors.r} g={colors.g} b={colors.b} />
            </div>
            <div className="description">
                {myTurn && <div className="myturn_text">Your Turn!</div>}
                <div
                    className="name"
                    style={{
                        color: `rgb(${colors.r}, ${colors.g}, ${colors.b})`,
                    }}
                >
                    {props.player.name}
                </div>
                <div className="score_total">
                    Score: {myScore}
                </div>
            </div>
            <div className="score_box">
                <div
                    className="round_score"
                    style={{
                        backgroundColor: myTurn
                            ? `rgb(${colors.r}, ${colors.g}, ${colors.b})`
                            : "#2d2b2f",
                    }}
                >
                    <span
                        style={{
                            color: roundScoreColor(),
                        }}
                    >
                        {gameContext.getScoreByHoleAndPlayer(
                            gameContext.getCurrentHole(),
                            props.player.id
                        ) != -10
                            ? gameContext.getScoreByHoleAndPlayer(
                                  gameContext.getCurrentHole(),
                                  props.player.id
                              )
                            : ""}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PlayerCard;
