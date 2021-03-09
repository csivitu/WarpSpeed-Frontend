import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Application from '../Application'
import UserProvider from '../../Providers/UserProvider'

function Play() {
    return (
        <div>
            <div className="sign-up">
            <UserProvider>
        <Application />
            </UserProvider>
            </div>
            <Hero />
            <Navbar />
        </div>
    )
}

export default Play
