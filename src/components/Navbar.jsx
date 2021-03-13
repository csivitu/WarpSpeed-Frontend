import React from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import './Navbar.css';
import soundURL from './sfx/hover.wav'

function Navbar() {
    const [play,{stop}]=useSound(
        soundURL,{volume:1});
        
    const [isHovering, setIsHovering] = React.useState(false);

    return (
        <nav className="bottom">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&autoplay=1&loop=1&autopause=0" frameborder="0" allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="btns">
                <ul id="navbarlist">
                    <li style={{marginRight:'15em'}}>
                        <Link to="/" className="nav-links" 
                        onMouseEnter={()=>{setIsHovering(true);play();}}
                        onMouseLeave={() => {setIsHovering(false);stop();}}>Base 
                        </Link> 
                    </li>
                    <li style={{marginRight:'15em'}}>
                        <Link to="/leaderboard" className="nav-links"
                        onMouseEnter={()=>{setIsHovering(true);play();}}
                        onMouseLeave={() => {setIsHovering(false);stop();}}>
                        Leaderboard 
                        </Link> 
                    </li>
                    <li style={{marginRight:'15em'}}>
                        <Link to="/play" className="nav-links"
                        onMouseEnter={()=>{setIsHovering(true);play();}}
                        onMouseLeave={() => {setIsHovering(false);stop();}}>
                        Play 
                        </Link> 
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar
