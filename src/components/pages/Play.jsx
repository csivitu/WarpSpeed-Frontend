import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Login from '../Login'
import Application from '../Application'
import userslice from '../../features/userslice'

function Play() {
    return (
        <div>
            <div className="sign-up">
        <Application />
            </div>
            <Hero />
            <Navbar />
        </div>
    )
}

export default Play
