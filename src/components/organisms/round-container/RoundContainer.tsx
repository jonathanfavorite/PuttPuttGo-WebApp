import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/GameContext";
import { isColorDark } from "../../../helpers/ColorHelper";
import RGBModel from "../../../models/RGBModel";
import "./RoundContainer.scss";

function RoundContainer() {
    const gameContext = useContext(GameContext);
    const navigate = useNavigate();
    const itemRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gameContext.getPlayers().length <= 0) {
            navigate("/");
        }
    }, []);

    function chooseRound(round: number) {
        gameContext.updateCurrentHole(round);
        if (gameContext.holesRemaning() <= 0) {
        } else {
            gameContext.updateCurrentHole(round);
            gameContext.setCurrentPlayer(0);
        }

       
    }

    let defaultColors: RGBModel = {
        r: 255,
        g: 255,
        b: 255,
    };
    if (gameContext.getCurrentPlayer()) {
        defaultColors = gameContext.getCurrentPlayer().color!;
    }

    let numbers = [];
    for (let i = 0; i < 21; i++) {
        numbers.push(i);
    }

    function getCorrectChild(n: number) {
        let real = null;
        if (itemRef.current && listRef.current) {
            for (let i = 0; i < listRef.current.children.length; i++) {
                if (
                    parseInt(
                        listRef.current.children[i].getAttribute("data-id")!
                    ) ===
                    n - 1
                ) {
                    real = listRef.current.children[i];
                    break;
                }
            }
        }
        return real;
    }

    const [warningHoles, setWarningHoles] = React.useState<number[]>([]);

    function showWarningOnThisHole(n: number) {
        if (warningHoles.includes(n)) {
            return true;
        }
        return false;
    }

    function findWarnings() {
        let warningIDS : number[] = [];
        for(let i = 0; i < gameContext.getHoles().length; i++) {
            let hole = gameContext.getHoles()[i];
            for(let j = 0; j < gameContext.getPlayers().length; j++) {
                let player = gameContext.getPlayers()[j];
                if(gameContext.getScoreByHoleAndPlayer(hole.number, player.id) === -10)
                {
                    if(!warningIDS.includes(hole.number)) {

                    warningIDS.push(hole.number);
                    }
                }
            }
        }
       setWarningHoles(warningIDS);
    }

    useEffect(() => {
        let real = getCorrectChild(gameContext.getCurrentHole());
        if (real) {
            console.log(real);
            real.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }




    }, [gameContext.getCurrentHole()]);

    return (
        <div className="round_container">
            <div className="hole_text">Hole</div>
            <div className="round_list">
                <div className="real_list" ref={listRef}>
                    {gameContext.getHoles().map((hole, i) => {
                        let isActive = gameContext.getCurrentHole() === i + 1;
                        let activeStyle = {};
                        return (
                            <div
                                ref={itemRef}
                                data-id={i}
                                className={`round_button ${
                                    gameContext.getCurrentHole() === i + 1
                                        ? "active"
                                        : ""
                                }`}
                                key={i}
                                onClick={() => chooseRound(i + 1)}
                            >
                                {showWarningOnThisHole(hole.number) &&<div className="round_warning">!</div>}
                                {hole.number}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default RoundContainer;
