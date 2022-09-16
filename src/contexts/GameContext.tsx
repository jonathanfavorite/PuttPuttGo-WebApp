import React, { createContext, useEffect, useState } from "react";
import CourseModel from "../models/CourseModel";
import PlayerModel from "../models/PlayerModel";
import ScoreModel from "../models/ScoreModel";
import HoleModel from "../models/HoleModel";
import LeaderboardModel from "../models/LeaderboardModel";
import GameModel from "../models/GameModel";

interface GameContextProps {
    resetAll: () => void;

    updateCourse: (course: CourseModel) => void;
    getCourse: () => CourseModel;

    addPlayer: (player: PlayerModel) => void;
    setPlayersAll: (players: PlayerModel[]) => void;
    getCurrentPlayer: () => PlayerModel;
    setCurrentPlayer: (n: number) => void;
    getPlayers: () => PlayerModel[];
    getPlayerTotalScore: (id: number) => number;
    toggleNextPlayer: () => void;

    addHole: (hole: HoleModel) => void;
    setHolesAll: (holes: HoleModel[]) => void;
    getHoles: () => HoleModel[];
    getCurrentHole: () => number;
    updateCurrentHole: (n: number) => void;
    toggleNextHole: () => void;
    holesRemaning: () => number;
    getTotalParsofHoles: () => number;

    addScore: (score: ScoreModel) => void;
    setScoresAll: (scores: ScoreModel[]) => void;
    getScoreByHoleAndPlayer: (hole: number, playerID: number) => number;
    getAllPlayersScores: () => LeaderboardModel[];

}

const GameContext = createContext<GameContextProps>(null as any);

function GameContextProvider(props: any) {
    const [course, setCourse] = useState<CourseModel>(null as any);
    const [players, setPlayers] = useState<PlayerModel[]>([]);
    const [scores, setScores] = useState<ScoreModel[]>([]);
    const [holes, setHoles] = useState<HoleModel[]>([]);
    const [currentHole, setCurrentHole] = useState<number>(0);
    const [currentPlayer, setCurrentPlayer] = useState<number>(0);
    const [foundLocalStorage, setFoundLocalStorage] = useState<boolean>(false);

    useEffect(() => {
        // check if players exists in localstorage
        if (localStorage.getItem("game")) {
            let game : GameModel = JSON.parse(localStorage.getItem("game") as string);
            setCourse(game.course);
            setPlayers(game.players);
            setScores(game.scores);
            setHoles(game.holes);
            setCurrentHole(game.currentHole);
            setCurrentPlayer(game.currentPlayer);
            setFoundLocalStorage(true);
        }
        else
        {
            console.log("no game data exists");
        }
    
   }, []);

   useEffect(() => {
    SaveAllToLocalStorage();
   }, [players, scores, course, holes, currentHole, currentPlayer]);
 

   const SaveAllToLocalStorage = () => {
        let game : GameModel = {
            id: 0,
            course: course,
            players: players,
            scores: scores,
            holes: holes,
            currentHole: currentHole,
            currentPlayer: currentPlayer
        }
        localStorage.setItem("game", JSON.stringify(game));
   }

    // Implementation of the GameContextProps
    const resetAll = () => {
        setCourse(null as any);
        localStorage.clear();
    };

    const updateCourse = (course: CourseModel) => {
        setCourse(old =>course);
    };
    const getCourse = () => {
        return course;
    };

    // PLAYERS FUNCTIONALITY
    const addPlayer = (player: PlayerModel) => {
        setPlayers((old) => [...players, player]);
    };
    const setPlayersAll = (players: PlayerModel[]) => {
        setPlayers(players);
    };
    const getCurrentPlayer = () => {
        return players[currentPlayer] ? players[currentPlayer] : (null as any);
    };
    const getPlayers = () => {
        return players;
    };
    const toggleNextPlayer = () => {
        if (currentPlayer < players.length - 1) {
            setCurrentPlayer(currentPlayer + 1);
        } else {
            setCurrentPlayer(0);
            if(holesRemaning() > 0) {
               // toggleNextHole();
            }
        }
    };

    // SCORES
    const getPlayerTotalScore = (id: number) => {
        let total: number = 0;
        for (let i = 0; i < scores.length; i++) {
            if (scores[i].playerID == id) {
                total += scores[i].score;
            }
        }
        return total;
    };
    const addScore = (score: ScoreModel) => {
        let alreadyExists = false;
        for (let i = 0; i < scores.length; i++) {
            if (
                scores[i].playerID == score.playerID &&
                scores[i].holeID == score.holeID
            ) {
               // console.log("exists");
                // record already exists, update it
                scores[i].score = score.score;
                alreadyExists = true;
                break;
            }
        }

        if (alreadyExists) {
            setScores((old) => scores);
        } else {
            setScores((old) => [...scores, score]);
        }
    };
    const setScoresAll = (scores: ScoreModel[]) => {
        setScores(scores);
    };
    const getScoreByHoleAndPlayer = (hole: number, playerID: number) => {
        for (let i = 0; i < scores.length; i++) {
            if (scores[i].holeID == hole && scores[i].playerID == playerID) {
                return scores[i].score;
            }
        }
        return -10;
    };

    const getAllPlayersScores = () => {
       let leaderboard : LeaderboardModel[] = [];
         for (let i = 0; i < players.length; i++) {
            let player = players[i];
            let score = getPlayerTotalScore(player.id);
            leaderboard.push({player: player, score: score});
        }

        // Sort the leaderboard
        leaderboard.sort((a, b) => {
            return a.score - b.score;
        });
        return leaderboard;
    };

    //HOLE
    const addHole = (hole: HoleModel) => {
        setHoles((old) => [...holes, hole]);
    };
    const setHolesAll = (allHoles: HoleModel[]) => {
        setHoles(allHoles);
    };
    const getHoles = () => {
        return holes;
    };

    const getCurrentHole = () => {
        return holes[currentHole] ? holes[currentHole].number : 1;
    };

    const updateCurrentHole = (n: number) => {
        setCurrentHole(n - 1);
    };

    const toggleNextHole = () => {
        if (currentHole < holes.length - 1) {
            setCurrentHole(currentHole + 1);
            setCurrentPlayer(0);
        } else {
            setCurrentHole(0);
        }
    };
    const holesRemaning = () => {
        return holes.length - currentHole - 1;
    };
    const getTotalParsofHoles = () => {
        let total: number = 0;
        for (let i = 0; i < holes.length; i++) {
            total += holes[i].par;
        }
        return total;
    };

    let contextValues: GameContextProps = {
        resetAll: resetAll,

        updateCourse: updateCourse,
        getCourse: getCourse,

        addPlayer: addPlayer,
        setPlayersAll: setPlayersAll,
        getCurrentPlayer: getCurrentPlayer,
        setCurrentPlayer: setCurrentPlayer,
        getPlayers: getPlayers,
        getPlayerTotalScore: getPlayerTotalScore,
        toggleNextPlayer: toggleNextPlayer,

        addHole: addHole,
        setHolesAll: setHolesAll,
        getHoles: getHoles,
        getCurrentHole: getCurrentHole,
        updateCurrentHole: updateCurrentHole,
        toggleNextHole: toggleNextHole,
        holesRemaning: holesRemaning,
        getTotalParsofHoles: getTotalParsofHoles,

        addScore: addScore,
        setScoresAll: setScoresAll,
        getScoreByHoleAndPlayer: getScoreByHoleAndPlayer,
        getAllPlayersScores: getAllPlayersScores,
    };

    return (
        <GameContext.Provider value={contextValues}>
            {props.children}
        </GameContext.Provider>
    );
}

export { GameContext, GameContextProvider };
