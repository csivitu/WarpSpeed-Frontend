import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import "./Navbar.css";
import soundURL from "./sfx/hover.wav";

function Navbar() {
  const [play, { stop }] = useSound(soundURL, { volume: 0.5 });

  return (
    <nav className="bottom">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&autoplay=1&loop=1&autopause=0"
        frameBorder="0"
        allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="background_music"
      ></iframe>
      <div className="btns">
        <div className="btnsitem">
          <Link
            to="/"
            className="nav-links"
            onMouseEnter={() => {
              play();
            }}
            onMouseLeave={() => {
              stop();
            }}
          >
            Base
          </Link>
        </div>
        <div className="btnsitem">
          <Link
            to="/leaderboard"
            className="nav-links"
            onMouseEnter={() => {
              play();
            }}
            onMouseLeave={() => {
              stop();
            }}
          >
            Leaderboard
          </Link>
        </div>
        <div className="btnsitem">
          <Link
            to="/play"
            className="nav-links"
            onMouseEnter={() => {
              play();
            }}
            onMouseLeave={() => {
              stop();
            }}
          >
            Play
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
