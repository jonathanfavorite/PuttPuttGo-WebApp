import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../../../contexts/GameContext';
import HoleModel from '../../../../models/HoleModel';
import PlayerModel from '../../../../models/PlayerModel';
import { Arrow } from '../../../atoms/icons/Icons';
import PlayerCard from '../../../molecules/player-card/PlayerCard';
import RoundContainer from '../../../organisms/round-container/RoundContainer';
import RoundHeader from '../../../organisms/round-header/RoundHeader';
import RoundPlayersContainer from '../../../organisms/round-players-container/RoundPlayersContainer';
import RoundScoreButtons from '../../../organisms/round-score-buttons/RoundScoreButtons';
import './RoundPage.scss'

function RoundPage() {
  const gameContext = useContext(GameContext);
  
  function addDummyPlayers() {
    let players: PlayerModel[] = [
        { id: 0, name: "Jonathan", color: gameContext.colorList.yellow},
        { id: 1, name: "Jessica", color: gameContext.colorList.red},
        { id: 2, name: "Kate", color: gameContext.colorList.green },
        { id: 3, name: "Hayden", color: gameContext.colorList.blue },
        { id: 4, name: "Hunter", color: gameContext.colorList.pink  },
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







  return (
    <div className='container_wrap'>
    <div className="round_page">
    
    <RoundHeader />

    <RoundContainer />
    

    <RoundPlayersContainer />

    <RoundScoreButtons />
   
    
</div>
</div>
  )
}

export default RoundPage