import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/GameContext";
import { Arrow } from "../../atoms/icons/Icons";
import "./PlayersPage.scss";

function PlayersPage() {

    const gameContext = useContext(GameContext);
    const navitate = useNavigate();
    

    return (
        <div className="players_page">
            <div className="top_container">
                <div className="backbutton" onClick={() => navitate("/") }>
                    <Arrow />
                    <span>Back</span>
                </div>
            </div>
            <div className="header_container">
                <div className="header">Players</div>
                <div className="subheader">
                    Add / Edit players (maximum of 6)
                </div>
            </div>
            <div className="players_list"></div>
            <div className="bottom_container"></div>
        </div>
    );
}

export default PlayersPage;
