import React from 'react'
import Navbar from '../Navbar'
import Application from '../Application'

function Play() {
    return (
        <div>
            <div className="sign-up">
                <Application />
                <video src="/videos/background.mp4" autoPlay loop muted type="video/mp4" className="bg" />
            </div>
        </div>
    )
}

export default Play
