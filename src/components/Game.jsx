import React, { useState, Component } from 'react'
import useKeyPress from '../hooks/useKeyPress';
import { generate } from '../utils/words';
import './Game.css'
import wordarray from "./file.json"



var myarray = wordarray.wordlist;

var randomItem1 = myarray[Math.floor(Math.random()*myarray.length)];
var randomItem2 = myarray[Math.floor(Math.random()*myarray.length)];
var randomItem3 = myarray[Math.floor(Math.random()*myarray.length)];
var randomItem4 = myarray[Math.floor(Math.random()*myarray.length)];
var randomItem5 = myarray[Math.floor(Math.random()*myarray.length)];

function Game() {
    useKeyPress(key => {
    console.log(key)
    console.log("hi");
    
  });
  
    return (
        <div className='Menu'>
            <div className="videodiv">
                <div className="textwords"> 
                <h1>{randomItem1}</h1>
                <h1>{randomItem2}</h1>
                <h1>{randomItem3}</h1>
                <h1>{randomItem4}</h1>
                <h1>{randomItem4}</h1>

                </div>
                
                <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop></video>
            </div>
        </div>
        
    )
}

export default Game
