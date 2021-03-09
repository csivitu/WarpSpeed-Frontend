import React from 'react'
import './Hero.css';
import '../App.css';

function Hero() {
    return (
        <div className='hero'>
            <div className="hero-container">
            <video src="/videos/base.mp4" autoPlay loop muted type="video/mp4" />
            </div>
        </div>
    )
}

export default Hero;
