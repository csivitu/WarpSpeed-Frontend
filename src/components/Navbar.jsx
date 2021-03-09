import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <>
        <nav className="bottom">
            <div className="btns">
                <ul>
                <li style={{marginRight:'15em'}}><Link to="/" className="nav-links"> Base </Link> </li>
                <li style={{marginRight:'15em'}}><Link to="/leaderboard" className="nav-links">Leaderboard </Link> </li>
                <li style={{marginRight:'15em'}}><Link to="/play" className="nav-links">Play </Link> </li>
                <li style={{marginRight:'15em'}}><Link to="/actualplay" className="nav-links">ActualPlay </Link> </li>
                </ul>
            </div>
        </nav>
        </>

    );
}

export default Navbar
