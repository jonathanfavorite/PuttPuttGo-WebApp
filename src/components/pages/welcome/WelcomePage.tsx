import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

function WelcomePage() {

  const gameContext = useContext(GameContext);
  const navigate = useNavigate();

  function continueGameClick() {
    navigate("/game");
  }
  function newGameClick() {
    gameContext.resetAll();
    navigate("/players");
  }
  function rulesClick() {
    navigate("/rules");
  }

    return (
        <div className="welcome_screen">
            <div className="top_container"></div>
            <div className="header_container">
                <div className="header">Putt Putt Go!</div>
            </div>
            <div className="actions_container">
                <div className="actions_wrapper">
                    <div className="action_button" onClick={continueGameClick}>Continue Game</div>
                    <div className="action_button" onClick={newGameClick}>New Game</div>
                    <div className="action_button" onClick={rulesClick}>Rules</div>
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
