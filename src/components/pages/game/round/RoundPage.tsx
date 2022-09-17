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