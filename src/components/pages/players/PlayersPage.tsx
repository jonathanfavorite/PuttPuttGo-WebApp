import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../contexts/GameContext";
import PlayerModel from "../../../models/PlayerModel";
import RGBModel from "../../../models/RGBModel";
import RGBSpecific from "../../../models/RGBSpecific";
import GolfBall from "../../atoms/golf-ball/GolfBall";
import { Arrow, Plus } from "../../atoms/icons/Icons";
import PlayerCard from "../../molecules/player-card/PlayerCard";
import PlayerScreenCard from "../../molecules/players-screen/PlayerCardScreen";
import "./PlayersPage.scss";

function PlayersPage() {
    const gameContext = useContext(GameContext);
    const navitate = useNavigate();
    const [modalOpened, setModalOpened] = React.useState(false);
    const [newPlayerName, setNewPlayerName] = React.useState("");
    const [selectedColor, setSelectedColor] = React.useState<RGBModel>(
        null as any
    );

    function handleDeleteButtonClick(n: number) {
        gameContext.removePlayer(n);
    }
    function handlePlayerClick(n: number) {}

    function selectBall(color: RGBModel) {
        setSelectedColor(color);
    }

    function handleModalOpen() {
        setModalOpened(true);
    }
    function handleCancelModal() {
        setModalOpened(false);
        setNewPlayerName("");
        setSelectedColor(null as any);
    }
    function addNewPlayerButton() {
        let newPlayer : PlayerModel = {
            id: gameContext.getPlayers().length,
            name: newPlayerName,
            color: selectedColor,
        }
        gameContext.addPlayer(newPlayer);
        setNewPlayerName("");
        setSelectedColor(null as any);
        setModalOpened(false);
    }

    let defaultColors = {
        default: "#000000",
    };

    return (
        <div className="players_page">
            {modalOpened && (
                <div className="new_players_modal_wrap">
                    <div className="new_players_modal_container">
                        <div
                            className="new_players_modal"
                            style={{
                                backgroundColor: selectedColor
                                    ? `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.6)`
                                    : "#426e37",
                            }}
                        >
                            <div className="heading">Add a new player</div>
                            <div className="input_wrap">
                                <input
                                    type="text"
                                    spellCheck="false"
                                    placeholder="Player name"
                                    value={newPlayerName}
                                    style={{
                                        backgroundColor: selectedColor
                                            ? `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.6)`
                                            : "#253521",
                                    }}
                                    onChange={(e) =>
                                        setNewPlayerName(e.target.value)
                                    }
                                />
                            </div>
                            <div className="color_wrap">
                                <div className="label">
                                    Choose your ball color
                                </div>
                                <div
                                    className="balls_list"
                                    style={{
                                        backgroundColor: selectedColor
                                            ? `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.2)`
                                            : "#253521",
                                    }}
                                >
                                    {gameContext.colorList.map((ball, i) => {
                                        console.log(ball);
                                        let style = {
                                            backgroundColor: "transparent",
                                        };
                                        if (selectedColor) {
                                            if (
                                                ball.name === selectedColor.name
                                            ) {
                                                style = {
                                                    backgroundColor: `rgba(${ball.r}, ${ball.g}, ${ball.b}, 0.2)`,
                                                };
                                            } else {
                                                console.log("no");
                                                style = {
                                                    backgroundColor:
                                                        "transparent",
                                                };
                                            }
                                        }

                                        return (
                                            <div
                                                className="ball_indi"
                                                style={style}
                                                onClick={() => selectBall(ball)}
                                                key={i}
                                            >
                                                <GolfBall
                                                    r={ball.r}
                                                    g={ball.g}
                                                    b={ball.b}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="button_wrap">
                                <div className="add"
                                onClick={() => addNewPlayerButton()}
                               
                                style={{
                                        backgroundColor: selectedColor
                                            ? `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 1)`
                                            : "",
                                    }}>Add Player</div>
                                <div
                                    className="cancel"
                                    onClick={handleCancelModal}
                                >
                                    Cancel
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="top_container">
                <div className="backbutton" onClick={() => navitate("/")}>
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
            <div className="players_container">
                {/* <div className="heading">Current Players: 1</div> */}
                <div className="add_player_button_wrap">
                    <div className="add_player" onClick={handleModalOpen}>
                        <div className="plus">
                            <Plus />
                        </div>
                        <span>Add Player</span>
                    </div>
                </div>

                <div className="players_list_wrap">
                    <div className="players_list">
                        {gameContext.getPlayers().map((player, i) => {
                            return (
                                <PlayerScreenCard
                                    deleteButtonClick={() =>
                                        handleDeleteButtonClick(player.id)
                                    }
                                    click={() => handlePlayerClick(player.id)}
                                    onDeleteButtonClick={() => handleDeleteButtonClick(player.id)}
                                    key={i}
                                    player={player}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="start_game_container">
                <div className="start_game_button">Start Game</div>
            </div>
        </div>
    );
}

export default PlayersPage;
