import React, { useEffect, useContext } from 'react'
import { GameContext } from '../../../../contexts/GameContext';
import HoleModel from '../../../../models/HoleModel';
import PlayerModel from '../../../../models/PlayerModel';
import { Arrow } from '../../../atoms/icons/Icons';
import PlayerCard from '../../../molecules/player-card/PlayerCard';
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
function chooseRound(round: number)
{
  gameContext.updateCurrentHole(round);
  gameContext.setCurrentPlayer(0);
}



























  function showHolesButtons() {
    const holes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    return holes.map((hole, i) => {
      return <div 
              className={`round_button ${i === 0 ? 'active' : ''}`}
               key={i}

               >
              {hole}
            </div>
    });
  }
  function showScoreButtons() {
    let buttons = [];
    let scores = [-1, 0, 1, 2, 3, 4, 5, 6];
    for (let i = 0; i < scores.length; i++) {
        buttons.push(
            <div className='round_button active' key={i}>
                {scores[i]}
            </div>
        );
    }
    return buttons;
}

  return (
    <div className='container_wrap'>
    <div className="round_page">
    
    <div className='round_header'>
      <div className='round_header_left'><div className='back_arrow'><Arrow /><span>Back</span></div></div>
      <div className='round_header_center'>
        <div className='app_name'>PuttPuttGo</div>
        <div className='course_name'>PuttPutt-Go</div>
        <div className='course_info'>
          <div className='round'>HOLE<span>#{gameContext.getCurrentHole()}</span></div>
          <div className='players'>PLAYERS<span>{gameContext.getPlayers().length}</span></div>
        </div>
      </div>
      <div className='round_header_right' onClick={() => gameContext.clearLocalStorage()}>clear</div>
    </div>


    <div className='round_container'>
      <div className='hole_text'>Hole</div>
      <div className='round_list'>
        {gameContext.getHoles().map((hole, i) => {

          return <div 
          className={`round_button ${gameContext.getCurrentHole() === i + 1 ? 'active' : ''}`} 
          key={i}
          onClick={() => chooseRound(i + 1)}
          >
            {hole.number}
          </div>
          
        })}
            
      </div>
    </div>

    <div className='players_container'>

      {gameContext.getPlayers().map((player, i) => {
        return <PlayerCard player={player} key={i} />
      })}

    </div>


   
    <div className='fixed_buttons_container container_bottom'>
      
      <div className='buttons_container'>
        <div className='buttons_main'>
      
          <div className='buttons_table'>
            <div className='table_row top_cell'>
            <div className='table_cell' onClick={() => handleScoreAdd(1)}><span>1</span></div>
            <div className='table_cell' onClick={() => handleScoreAdd(2)}><span>2</span></div>

            <div className='table_cell' onClick={() => handleScoreAdd(3)}><span>3</span></div>
      
            </div>
            <div className='table_row'>
            <div className='table_cell' onClick={() => handleScoreAdd(4)}><span>4</span></div>
            <div className='table_cell' onClick={() => handleScoreAdd(5)}><span>5</span></div>
            <div className='table_cell' onClick={() => handleScoreAdd(6)}><span>6</span></div>
           
              
              
              
            </div>
            <div className='table_row'>
            <div className='table_cell' onClick={() => handleScoreAdd(-1)}><span>-1</span></div>
           
            <div className='table_cell' onClick={() => handleScoreAdd(7)}><span>7</span></div>
            <div className='table_cell' onClick={() => handleScoreAdd(0)}><span>0</span></div>
              
            </div>
          </div>

        </div>
        <div className='buttons_right'>
          {/* <div className='top_cell' onClick={nextPlayerTurn}>NEXT<br />PLAYER</div> */}
          <div className='bottom_cell' onClick={toggleNextHole}>NEXT<br />HOLE</div>
        </div>
      </div>

    </div>
</div>
</div>
  )
}

export default RoundPage