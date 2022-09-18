import React, { useContext, useEffect } from 'react'
import { GameContext } from '../../../contexts/GameContext';
import HoleModel from '../../../models/HoleModel';
import PlayerModel from '../../../models/PlayerModel';
import './DebugPage.scss';

function DebugPage() {
    const gameContext = useContext(GameContext);


    function golfBall(r: number, g: number, b: number) {
        //let darker = 
        let normal = `rgb(${r}, ${g}, ${b})`;
        let darkerVal = 20;
        let darker = `rgb(${r - darkerVal}, ${g - darkerVal}, ${b - darkerVal})`;
        return <>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 419.558 419.558">
<g>
	<circle style={{fill: normal}} cx="209.778" cy="209.78" r="209.78"/>
	<path style={{fill: darker}} d="M328.999,88.752c14.827,14.827,38.242,15.818,54.225,2.985   c-7.279-10.671-15.64-20.826-25.108-30.295c-10.089-10.089-20.954-18.93-32.397-26.535   C313.202,50.88,314.288,74.043,328.999,88.752z M180.093,180.094c-15.895,15.896-15.896,41.667,0.001,57.564   c15.895,15.895,41.667,15.895,57.563,0c15.895-15.896,15.896-41.668,0-57.564C221.761,164.199,195.989,164.199,180.093,180.094z    M300.273,20.477c-17.39-8.313-35.685-14.098-54.337-17.345c1.858,3.519,4.265,6.822,7.226,9.783   C265.911,25.665,285.009,28.177,300.273,20.477z M216.627,67.724c-15.896,15.895-15.895,41.666,0,57.563   c15.896,15.896,41.667,15.896,57.562,0c15.896-15.896,15.896-41.667,0-57.563C258.295,51.828,232.523,51.829,216.627,67.724z    M104.257,104.257c-15.895,15.896-15.895,41.668,0,57.563c15.896,15.896,41.668,15.896,57.563,0.001   c15.895-15.896,15.896-41.667,0-57.564C145.925,88.363,120.152,88.363,104.257,104.257z M255.93,255.931   c-15.895,15.895-15.895,41.666,0,57.563c15.896,15.896,41.668,15.895,57.563,0c15.896-15.896,15.896-41.668,0-57.563   C297.597,240.035,271.825,240.035,255.93,255.931z M292.464,143.56c-15.895,15.896-15.895,41.667,0.001,57.563   c15.895,15.896,41.667,15.896,57.563,0.001c15.895-15.895,15.895-41.668,0-57.563C334.131,127.665,308.359,127.666,292.464,143.56z    M368.301,276.959c9.816,9.816,23.397,13.563,36.094,11.255c9.546-23.718,14.583-48.827,15.11-74.013   c-15.801-10.453-37.288-8.721-51.205,5.195C352.404,235.293,352.405,261.063,368.301,276.959z M404.834,164.588   c3.413,3.413,7.283,6.089,11.411,8.036c-3.454-19.29-9.609-38.189-18.487-56.084C389.47,131.953,391.824,151.578,404.834,164.588z    M88.752,329c-14.711-14.711-37.873-15.797-53.844-3.281c7.604,11.443,16.444,22.307,26.534,32.396   c9.469,9.469,19.624,17.829,30.295,25.109C104.569,367.242,103.579,343.826,88.752,329z M116.54,397.759   c17.894,8.877,36.794,15.033,56.083,18.486c-1.947-4.129-4.622-7.998-8.035-11.41C151.577,391.824,131.952,389.47,116.54,397.759z    M140.792,49.451c15.895,15.894,41.667,15.895,57.562,0c13.39-13.391,15.499-33.789,6.33-49.389   c-25.744,0.623-51.391,5.969-75.544,16.013C127.796,27.963,131.673,40.332,140.792,49.451z M276.958,368.301   c-15.896-15.896-41.667-15.897-57.562-0.001c-13.917,13.916-15.649,35.404-5.196,51.205c25.186-0.527,50.295-5.564,74.013-15.109   C290.52,391.699,286.774,378.117,276.958,368.301z M383.718,327.091c-15.866-11.014-37.813-9.463-51.952,4.676   c-14.139,14.139-15.689,36.086-4.676,51.952c10.939-7.396,21.341-15.919,31.025-25.603   C367.799,348.432,376.324,338.029,383.718,327.091z M201.123,350.027c15.895-15.895,15.895-41.666-0.001-57.563   c-15.895-15.895-41.666-15.896-57.562,0c-15.896,15.896-15.896,41.668-0.001,57.563   C159.455,365.923,185.228,365.923,201.123,350.027z M85.983,85.984c13.523-13.523,15.534-34.191,6.047-49.848   c-10.778,7.326-21.033,15.752-30.588,25.307c-9.555,9.555-17.98,19.81-25.307,30.588C51.792,101.517,72.46,99.507,85.983,85.984z    M125.286,274.191c15.896-15.896,15.896-41.666,0-57.563c-15.896-15.895-41.667-15.896-57.562,0   c-15.895,15.895-15.896,41.667,0,57.563C83.619,290.087,109.391,290.085,125.286,274.191z M49.45,140.793   c-9.119-9.119-21.487-12.996-33.376-11.652C6.03,153.293,0.684,178.941,0.062,204.684c15.6,9.17,35.998,7.061,49.388-6.329   C65.346,182.459,65.345,156.687,49.45,140.793z M12.915,253.162c-2.96-2.96-6.265-5.367-9.783-7.225   c3.246,18.652,9.031,36.947,17.345,54.336C28.178,285.009,25.664,265.912,12.915,253.162z"/>
</g>
</svg>
        </>
    }

    function addDummyPlayers() {
        let players: PlayerModel[] = [
            { id: 0, name: "Jonathan" },
            { id: 1, name: "Jessica" },
            { id: 2, name: "Kate" },
            { id: 3, name: "Hayden" },
            { id: 4, name: "Hunter" },
        ];
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
        addDummyCourse();
        addDummyPlayers();
        addDummyHoles();

       
    }, []);

    function addAnotherPlayerTest() {
        let nextID = gameContext.getPlayers().length + 1;
        let newPlayer: PlayerModel = { id: nextID, name: "Player" + nextID };
        gameContext.addPlayer(newPlayer);
    }
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
        gameContext.addScore({ playerID: currentPlayer.id, holeID: currentHole, score: score, courseID: currentCourse });
        gameContext.toggleNextPlayer();
    }

    function showScoreButtons() {
        let buttons = [];
        let scores = [-1, 0, 1, 2, 3, 4, 5, 6];
        for (let i = 0; i < scores.length; i++) {
            buttons.push(
                <button key={i} onClick={() => handleScoreAdd(scores[i])}>
                    {scores[i]}
                </button>
            );
        }
        return buttons;
    }

    function handleCellClicked(playerID :number, holeNumber: number) {
        gameContext.setCurrentPlayer(playerID);
        gameContext.updateCurrentHole(holeNumber);
    }


    /*
  function generateScoreButtons() {
    let buttons = [];
    let scores = [-2, -1, 0, 1, 2, 3, 4, 5, 6];
    for (let i = 0; i < scores.length; i++) {
      buttons.push(
        <button key={i} onClick={() => handleScoreAdd(scores[i])}>{scores[i]}</button>
      );
    }
    return buttons;
  }
  */

    return (
        <>


<div className="ball">{golfBall(255, 0, 0)}</div>
<div className="ball">{golfBall(0, 255, 0)}</div>
<div className="ball">{golfBall(0, 0, 255)}</div>
<div className="ball">{golfBall(0, 255, 255)}</div>
<div className="ball">{golfBall(255, 0, 255)}</div>
<div className="ball">{golfBall(160, 90, 255)}</div>

            <div className="debug_wrap">
                <div className="debug">
                    <h2>Score Card</h2>
                    <div className="score_card">
                        <div className="score_card_header">
                            <div className="h">Hole</div>
                            <div className="h">Par</div>
                            {gameContext.getPlayers().map((player, index) => {
                                return (
                                    <div key={index} className={`h`}>
                                        {player.name.substring(0, 3)}
                                    </div>
                                );
                            })}
                        </div>

                        {gameContext.getHoles().map((hole, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <div className="score_row">
                                        <div className="r">{hole.number}</div>
                                        <div className="r">{hole.par}</div>

                                        {gameContext
                                            .getPlayers()
                                            .map((player, index) => {
                                                let highlighted =
                                                    gameContext.getCurrentPlayer()
                                                        .id == player.id &&
                                                    gameContext.getCurrentHole() ==
                                                        hole.number
                                                        ? "highlighted"
                                                        : "";

                                                return (
                                                    <div
                                                        key={index}
                                                        className={`r ${highlighted}`}
                                                        onClick={() => handleCellClicked(player.id, hole.number)}
                                                    >
                                                        {gameContext.getScoreByHoleAndPlayer(hole.number,player.id) != -10 && gameContext.getScoreByHoleAndPlayer(hole.number,player.id)}
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </React.Fragment>
                            );
                        })}

                        <div className="score_row">
                            <div className="r">Total</div>
                            <div className="r">
                                {gameContext.getTotalParsofHoles()}
                            </div>
                            {gameContext.getPlayers().map((player, index) => {
                                return <div key={index} className={`r`}>{gameContext.getPlayerTotalScore(player.id)}</div>;
                            })}
                        </div>
                    </div>
                </div>

                <div className="debug">
                    <h2>Players ({gameContext.getPlayers().length})</h2>
                    <button onClick={addAnotherPlayerTest}>
                        Add Another Player
                    </button>
                    <button onClick={nextPlayerTurn}>Next Player Turn</button>
                    <ul>
                        {gameContext.getPlayers().map((player, index) => {
                            return (
                                <li key={index}>
                                    {gameContext.getCurrentPlayer().id ==
                                        player.id && "◀"}
                                    {player.name}
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="debug">
                    <h2>Holes</h2>
                    <button>Add Hole</button>
                    <button onClick={toggleNextHole}>Next Hole</button>
                    <ul>
                        {gameContext.getHoles().map((hole, index) => {
                            return (
                                <li key={index}>
                                    {gameContext.getCurrentHole() ==
                                        hole.number && "◀"}
                                    {hole.number} (par {hole.par})
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="debug">
                    <h2>Game State</h2>

                    <div>
                        Player:{" "}
                        {gameContext.getCurrentPlayer() &&
                            gameContext.getCurrentPlayer().name}
                    </div>
                    <div>Current Hole: {gameContext.getCurrentHole()}</div>
                    <div>Holes Remaning: {gameContext.holesRemaning()}</div>

                    <div>Add Score</div>
                    <div className="score_buttons">{showScoreButtons()}</div>
                            <br />
                    <div>ScoreBoard</div>
                    {gameContext.getAllPlayersScores().map((score, index) => {
                        return (
                            <div key={index}>
                                {score.player.name} - ({score.score})
                            </div>)
                    })}

                </div>
            </div>

           

            {/* <h2>Course: {manager.getCourse()?.name}</h2>
    <h2>Holes: {manager.getCourse()?.holes.length}</h2>
    <h2>Players: {
      manager.getPlayers()?.map((player, index) => {
        return <span key={index}>{player.name}, </span>
      })
    }
    </h2>
    <h2>Current Hole: {manager.getCurrentHole()}</h2>


    <div className='current_player_card'>
      <h2>Current Player: {manager.getCurrentPlayer()?.name}</h2>
      <h2>Current Score: {manager.getCurrentPlayerScore()}</h2>
      <h2>Hole: {manager.getCurrentHole()}</h2>
      {generateScoreButtons()}
    </div> */}
        </>
    );
}

export default DebugPage