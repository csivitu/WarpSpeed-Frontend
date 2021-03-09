import React from 'react'
import Hero from '../Hero'
import '../button.css'
import { Link } from 'react-router-dom'
import Game from '../Game'
function Actualplay() {
    return (
        <div>
            <button className='playbtn' onClick={Game}>
            Play
            </button>
        </div>
    )
}

export default Actualplay