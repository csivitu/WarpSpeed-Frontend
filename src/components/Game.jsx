import React from 'react'
import './Game.css' 

const Checking=<h1>Hello </h1>



function Game() {
    return (
        <div className="main">
            <div className="gamewindow">
                <div className="textwords"> 
                {Checking}
                </div>
                <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop></video>
            </div>
        </div>
    )
}

export default Game
