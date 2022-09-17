import React, { useContext } from 'react'
import { GameContext } from '../../../contexts/GameContext'
import PlayerCard from '../../molecules/player-card/PlayerCard'

function RoundPlayersContainer() {
    const gameContext = useContext(GameContext)
  return (
    <div className='players_container'>

      {gameContext.getPlayers().map((player, i) => {
        return <PlayerCard player={player} key={i} />
      })}

    </div>
  )
}

export default RoundPlayersContainer