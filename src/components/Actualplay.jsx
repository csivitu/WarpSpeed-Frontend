import React, { Component } from 'react'
import Game from './Game'
import './buttons.css'
import firebase from '../firebase'
import Sound1 from './sounds/poping-up.mp3'
import {Howl,Howler} from "howler";




// const audioClips = [
//     {sound:Sound1, label:'Start'},
//     ]
//     SoundPlay = (src) => {
//         const sound = new Howl({
//             src
//         })
//         sound.play();
//     }
//     RenderButtonAndSound = () => {
//         return audioClips.map((soundObj, index) => {
//             <button key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
//                 {soundObj.label}
//             </button>
//         })
//     }

export default class Actualplay extends Component {
    state={
        visible:true
    };
    
    
    render() {
    Howler.volume(100.0)
    return (
        <div>
            {this.state.visible ? (
            <div className="afterlogin">
                <ul>
                <li><button className="buttons" 
                 onClick={()=>{
                this.setState({visible:false});
            }}>
                Start
                </button> </li>
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