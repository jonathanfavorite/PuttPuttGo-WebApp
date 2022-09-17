import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { GameContext } from '../../../contexts/GameContext'
import { Arrow } from '../../atoms/icons/Icons'
import './RoundHeader.scss'

function RoundHeader() {
    const gameContext = useContext(GameContext);
    const navigate = useNavigate();
    function clickedReset() {
        gameContext.resetAll();
        navigate("/");
    }
  return (
    <div className='round_header'>
      <div className='round_header_left'><div className='back_arrow'><Arrow /><span onClick={() => navigate("/")}>Back</span></div></div>
      <div className='round_header_center'>
        <div className='app_name'>PuttPuttGo</div>
        <div className='course_name'>PuttPutt-Go</div>
        <div className='course_info'>
          <div className='round'>HOLE<span>#{gameContext.getCurrentHole()}</span></div>
          <div className='players'>PLAYERS<span>{gameContext.getPlayers().length}</span></div>
        </div>
      </div>
      <div className='round_header_right' onClick={clickedReset}>clear</div>
    </div>
  )
}

export default RoundHeader