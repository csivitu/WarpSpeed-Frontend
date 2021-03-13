import React, { useState, useEffect } from 'react'
import './Game.css' 
import useKeyPress from './hooks/usekeypress';
import wordarray from './words/file.json'

var loggedwords=[]
var myarray=wordarray.wordlist;
var userword="";
var score=0;

const Placeword = () =>{
    var word=myarray[Math.floor(Math.random()*myarray.length)];
    var newWord=document.createElement("div");
    newWord.innerHTML=word;
    newWord.id=word;
    loggedwords.push(word);
    console.log(loggedwords);
    newWord.style.color="#ffffff"
    newWord.style.position="absolute"
    newWord.style.top=Math.random() * 300 + "px";
    document.getElementById("textwords").appendChild(newWord);
    console.log("this is the score"+score);
}

function Game() {
    useEffect(() => {
        let x=setInterval(Placeword,5000);
        return () => {
            clearInterval(x);
        };
    }, [])

    useKeyPress(key => {
        if (key!=' '){
            userword+=key;
        }
        console.log(userword);
        if (key==' '){
            Checkingword();
            userword="";

        }
    });
    const Checkingword = () =>{
        let a=loggedwords.indexOf(userword)
        if (loggedwords.indexOf(userword)==0 || loggedwords.indexOf(userword)!=-1){
            var textwords=document.getElementById(userword);
            textwords.parentNode.removeChild(textwords)
            console.log("Checkingword is being executed");
            loggedwords.splice(a,1);
            score+=100;
        }
    }
    
    return (
           
        <div className="main">
            <div className="abovegamewindow">
            <h1>Score:{score}</h1> 
            </div>
            <div className="gamewindow">
                <div id="textwords"/> 
                <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop /> 
            </div>
        </div>
    )
}

export default Game
