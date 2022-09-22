import React, { useContext, useEffect } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";
import PlayerModel from "../../../models/PlayerModel";
import HoleModel from "../../../models/HoleModel";

function WelcomePage() {
    const gameContext = useContext(GameContext);
    const navigate = useNavigate();

    function continueGameClick() {
        navigate("/game");
    }
    function newGameClick() {
      //  gameContext.resetAll();
        navigate("/players");
    }
    function rulesClick() {
        navigate("/test");
    }


function clearDataClick() {
        gameContext.resetAll();
    }
      
  function addDummyPlayers() {
    let players: PlayerModel[] = [
        { id: 0, name: "Jonathan", color: gameContext.getColorByName("purple")!},
        { id: 1, name: "Jessica", color: gameContext.getColorByName("red")!},
        { id: 2, name: "Kate", color: gameContext.getColorByName("green")!},
        { id: 3, name: "Hayden", color: gameContext.getColorByName("blue")!},
        { id: 4, name: "Hunter", color: gameContext.getColorByName("pink")!},
        { id: 5, name: "Shanan", color: gameContext.getColorByName("orange")!}
    ];
    console.log(players);
    gameContext.setPlayersAll(players);
}
function addDummyCourse() {
    gameContext.updateCourse({ id: 1, name: "Castle Golf" });
}
function addDummyHoles() {
    let holes: HoleModel[] = [
        { courseID: 1, number: 1, par: 2, optional: false },
        { courseID: 1, number: 2, par: 2, optional: false },
        { courseID: 1, number: 3, par: 2, optional: false },
        { courseID: 1, number: 4, par: 3, optional: false },
        { courseID: 1, number: 5, par: 2, optional: false },
        { courseID: 1, number: 6, par: 2, optional: false },
        { courseID: 1, number: 7, par: 2, optional: false },
        { courseID: 1, number: 8, par: 3, optional: false },
        { courseID: 1, number: 9, par: 3, optional: false },
        { courseID: 1, number: 10, par: 2, optional: false },
        { courseID: 1, number: 11, par: 4, optional: false },
        { courseID: 1, number: 12, par: 2, optional: false },
        { courseID: 1, number: 13, par: 2, optional: false },
        { courseID: 1, number: 14, par: 2, optional: false },
        { courseID: 1, number: 15, par: 2, optional: false },
        { courseID: 1, number: 16, par: 2, optional: false },
        { courseID: 1, number: 17, par: 2, optional: false },
        { courseID: 1, number: 18, par: 3, optional: false }

    ];
    gameContext.setHolesAll(holes);
}

useEffect(() => {
    addDummyHoles();
    addDummyCourse();
}, []);

function dummyDataClick() {
    gameContext.resetAll();
    addDummyCourse();
    addDummyPlayers();
    addDummyHoles();
}




    return (
        <div className="welcome_screen">
            <div className="top_container"></div>
            <div className="header_container">
                <div className="header">Putt Putt Go!</div>
            </div>
            <div className="actions_container">
                <div className="actions_wrapper">
                    {gameContext.currentGameExists() && (
                        <div
                            className="action_button"
                            onClick={continueGameClick}
                        >
                            Continue Game
                        </div>
                    )}
                    <div className="action_button" onClick={newGameClick}>
                        New Game
                    </div>
                    <div className="action_button" onClick={rulesClick}>
                        Rules
                    </div>
                    <div className="action_button" onClick={dummyDataClick}>
                        Add Dummy Data
                    </div>
                    <div className="action_button" onClick={clearDataClick}>
                        Clear Data
                    </div>
                    <div className="action_button" onClick={() => navigate("game/results")}>Test</div>
                </div>
            </div>
            <div className="bottom_container">
                PuttPuttGo &copy; 2022
                <br />
                All Rights Reserved
            </div>
        </div>
    );
}

export default WelcomePage;
