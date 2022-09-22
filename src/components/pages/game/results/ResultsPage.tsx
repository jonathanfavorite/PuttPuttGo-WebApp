import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../../../contexts/GameContext";
import GolfBall from "../../../atoms/golf-ball/GolfBall";
import "./ResultsPage.scss";

function ResultsPage() {
    const gameContext = useContext(GameContext);
    const navigate = useNavigate();
    let arr = [];
    for (let x = 0; x < 3; x++) {
        arr.push(x);
    }
    let darker = -30;
    let darkerText = (n: number) => {
      return -n * 0.7;
    };
    return (
        <div className="results_page">
            <div className="top_container" onClick={() => navigate("/")}>back</div>

            <div className="body">
                <div className="results_hero">
                  <div className="hero_title">
                    {/* <span>CONGRATULATIONS</span> */}
                    <b>GAME OVER!</b>
                  </div>
                  <div className="hero_list">
                        {gameContext.getAllPlayersScores().map((indi, i) => {
                          if(i < 3) {
                            let r = indi.player.color!.r;
                            let g = indi.player.color!.g;
                            let b = indi.player.color!.b;
                          return <div className='hero_indi' key={i}
                            style={{
                              
                            }}
                          >
                            
                            <div className='whitebg' style={{
                              backgroundColor: `rgba(${indi.player.color!.r}, ${indi.player.color!.g}, ${indi.player.color!.b}, 0.8)`,
                              borderColor: `rgba(${indi.player.color!.r + darker}, ${indi.player.color!.g + darker}, ${indi.player.color!.b + darker}, 1)`,
                            }}></div>
                            <div className="inside">
                          <div className='ball_wrap'>
                              <GolfBall r={indi.player.color!.r} g={indi.player.color!.g} b={indi.player.color!.b} />
                              <div className='score' style={{
                                color: `rgba(${r + darkerText(r)}, ${g + darkerText(g)}, ${b + darkerText(b)}, 1)`,
                              }}>
                                <span>{indi.score}</span>
                                <b>points</b>
                              </div>
                              </div>
                          <div className='name' style={{
                            color: `rgba(${r + darkerText(r)}, ${g + darkerText(g)}, ${b + darkerText(b)}, 1)`,
                          }}>{indi.player.name}</div>
                           
                          </div>
                          
                        </div>
                          }
                        })}
                  </div>
                </div>
                <div className="content">
                {/* {arr.map((x, i) => {
                    return <div>test</div>;
                })} */}
                </div>
            </div>
            <div className="bottom_container"></div>
        </div>
    );
}

export default ResultsPage;
