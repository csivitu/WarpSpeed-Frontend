import React, { Component } from 'react'
import './buttons.css'
import firebase from '../firebase'
import { Link } from 'react-router-dom';
import { logout } from '../api/Request';


const Actualplay =()=>{
    async function signout() {
        firebase.auth().signOut()
        await logout()
        
    }
    
    return (
        <div>
            <div className="container">
                <div className="afterlogin">
                    <ul>
                    <li><Link to="/Game"><button className="buttons" >Start</button></Link> </li>
                    <br></br>
                    <li><button className="buttons" onClick={signout}>Sign out</button> </li>
                    </ul>
                </div>
                <video src="/videos/loginpage.mp4" autoPlay loop muted type="video/mp4" className="bg" />
            </div>
        </div>
    )
}

export default Actualplay