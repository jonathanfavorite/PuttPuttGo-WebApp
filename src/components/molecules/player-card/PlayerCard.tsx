import React, { forwardRef, useContext, useEffect } from "react";
import GolfBall from "../../atoms/golf-ball/GolfBall";
import "./PlayerCard.scss";
import PlayerModel from "../../../models/PlayerModel";
import RGBModel from "../../../models/RGBModel";
import { GameContext } from "../../../contexts/GameContext";
import { isColorDark } from "../../../helpers/ColorHelper";

interface PlayerProps {
    player: PlayerModel;
    playerRefx: any;
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
    
    if (gameContext.getCurrentPlayer() && gameContext.getCurrentPlayer().id === props.player.id) {
        myTurn = true;
    }

    function roundScoreColor() {
        /*
      !IsColorDark(colors) && myTurn
                                          ? "#fff"
                                          : "#000",*/
        let isDark = isColorDark(colors);
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
            data-id={props.player.id}
            ref={props.playerRefx}
            onClick={() => gameContext.setCurrentPlayer(props.player.id)}
            className={`player_card_wrap ${myTurn ? "myturn" : ""}`}
            style={{
                backgroundColor: myTurn
                    ? `rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.2)`
                    : "",
                backgroundBlendMode: myTurn ? "darken" : ""
            }}
        >
            <div className="ball">
                <div className="golf_ball_wrap" style={{
                    animationPlayState: myTurn ? "running" : "paused"
                }}>
                <GolfBall r={colors.r} g={colors.g} b={colors.b} />
                </div>
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
                <div className="score_total">Score: {myScore}</div>
                {/* <div className='score_total'>
                Current: {gameContext.getCurrentPlayer()?.id} My ID: {props.player.id}
                </div> */}
            </div>
            <div className="score_box">
                <div
                    className="round_score"
                    style={{
                        backgroundColor: myTurn
                            ? `rgb(${colors.r}, ${colors.g}, ${colors.b})`
                            : `rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.2)`,
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
