import React, { useState, useEffect } from 'react'
import './Game.css' 
import useKeyPress from './hooks/usekeypress';
import wordarray from './words/file.json'
import './buttons.css'


var loggedwords=[]
var myarray=wordarray.wordlist;
var missedloggedwords=[]
var userword="";
var score=0;
var missedwords=0;

function Game() {
    const [game,setGame]=useState(true)
    useEffect(() => {
        let x;
        if (game){
        x=setInterval(Placeword,3000);}
        return () => {
            clearInterval(x);
            score=0;
            loggedwords=[]
            missedwords=0;
        };
    }, [game])


    const Placeword = () =>{
        if (missedwords<10){
            console.log("if condition is working");
            var word=myarray[Math.floor(Math.random()*myarray.length)];
            var newWord=document.createElement("div");
            newWord.innerHTML=word;
            newWord.id=word;
            loggedwords.push(word);
            console.log(loggedwords);
            newWord.style.color="#ffffff"
            newWord.style.position="absolute";
            newWord.style.top=Math.random() * 300 + "px";
            newWord.style.left="0px";
            newWord.style.animationName="words";
            newWord.style.animationDuration="10s";
            newWord.style.transitionTimingFunction="linear";
            document.getElementById("textwords").appendChild(newWord);
            console.log("this is the score "+score,"missed words:"+missedwords+missedloggedwords);
            console.log(game);
            newWord.addEventListener("animationend",()=>{
                missedwords+=1;
                newWord.remove();
                missedloggedwords.push(word);
                console.log("div deleted");
            })
            
        }
        else{
        setGame(false);
        console.log("checking false");
    }
    }
    

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
            score+=100;
        }
    }
    
    return (
        
        <div className="main">
            {game ? (
                <>
                <div className="gamewindow">
                    <div id="textwords"/> 
                    <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop /> 
                </div>
                </>
        ):
        <>
        <div className="gamewindow">
            <button className="playagainbtn" onClick={()=>setGame(true)}> Play Again</button>
            <video src="/videos/gameover.mp4" autoPlay loop muted type="video/mp4" className="gameover"/>
            <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop />
        </div>
        </>
        }
        </div>
    )
}

export default Game
