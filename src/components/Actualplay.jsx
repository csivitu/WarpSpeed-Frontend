import React, { Component } from 'react'
import Game from './Game'
import './buttons.css'
import firebase from '../firebase'

export default class Actualplay extends Component {
    state={
        visible:true
    };
    render() {
    return (
        <div>
            {this.state.visible ? (
            <div className="afterlogin">
                <ul>
                <li><button className="buttons" onClick={()=>{this.setState({visible:false});}}>Start</button> </li>
                <br></br>
                <li><button className="buttons" onClick={()=>firebase.auth().signOut()}>Sign out</button> </li>
                </ul>
            </div>
            )
            :
            (<div>
            <Game/>
            <button className="buttons" onClick={()=>firebase.auth().signOut()}> Sign out</button>
            </div>)
            }
        </div>
    )
}
}
