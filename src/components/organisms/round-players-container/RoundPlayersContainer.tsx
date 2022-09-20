import React, { useContext, useEffect, useRef } from 'react'
import { GameContext } from '../../../contexts/GameContext'
import PlayerCard from '../../molecules/player-card/PlayerCard'

function RoundPlayersContainer() {
    const gameContext = useContext(GameContext);
    const playerRef = useRef<HTMLDivElement>(null);




    useEffect(() => {
  
    
    }, [gameContext.getCurrentPlayer()]);
  return (
    <div className='players_container'>

      {gameContext.getPlayers().map((player, i) => {
        return <PlayerCard playerRefx={playerRef} player={player} key={i} />
      })}

    </div>
  )
}

export default RoundPlayersContainer