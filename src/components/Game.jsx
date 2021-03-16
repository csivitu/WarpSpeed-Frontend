import React, { useState, useEffect } from 'react'
import './Game.css' 
import useKeyPress from './hooks/usekeypress';
import wordarray from './words/file.json'


var loggedwords=[] 
var nologgedwords=0  //this needs to be sent to backend
var myarray=wordarray.wordlist;
var missedloggedwords=[]
var userword="";
var score=0;
var missedwords=0;
var correctuserwords=[]  //this needs to be sent to backend
var userloggedwords=0;  //this needs to be sent to backend
let x,y=3000,z=0;
var stages=["stage1","stage2","stages3","stages4"]

function Game() {
    const [game,setGame]=useState(true)
    useEffect(() => {
        if (game){
            x=setInterval(Placeword,y);
        }
        return () => {
            clearInterval(x);
            score=0;
            loggedwords=[];
            y=3000;
            z=0;
            correctuserwords=[]
            userloggedwords=0
            missedwords=0;
            nologgedwords=0;
            missedloggedwords=[];
        };
    }, [game])


    const Placeword = () =>{
        if (userloggedwords%10==0){
            console.log("userloggedwords is working")
            z=z+100;
            y=(y-z);
            console.log(y)
        }
        if (missedwords<10){
            console.log("if condition is working");
            var word=myarray[Math.floor(Math.random()*myarray.length)];
            var newWord=document.createElement("div");
            nologgedwords+=1;
            newWord.innerHTML=word;
            newWord.className="wordd";
            newWord.id=word;
            loggedwords.push(word);
            console.log(loggedwords);
            newWord.style.color="#ffffff"
            newWord.style.position="absolute";
            newWord.style.top=Math.random() * 300 + "px";
            newWord.style.left="0px";
            newWord.style.animationName="stage1";
            if (userloggedwords<=10){
                //newWord.style.animationName="stage1";
                newWord.style.animationDuration="10s"; 
                console.log("stage1")
            }
            else if(userloggedwords>10 && userloggedwords<=50){
                newWord.style.animationDuration="8s";
                //newWord.style.animationName="stage2";
                console.log("stage2")
            }
            else if(userloggedwords>50 && userloggedwords<=125){
                newWord.style.animationDuration="6s";
                //newWord.style.animationName="stage3";
                console.log("stage3");
            }
            else if(userloggedwords>125)
            {
                newWord.style.animationDuration="4s";
                //newWord.style.animationName="stage4";
                console.log("stage4")
            }
            //newWord.style.transitionTimingFunction="linear";
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
            userloggedwords+=1;
            userword="";
        }
    });
    const Checkingword = () =>{
        let a=loggedwords.indexOf(userword)
        if (a==0 || a!=-1){
            correctuserwords.push(userword);
            var textwords=document.getElementById(userword);
            textwords.innerHTML="+100";
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
                    <h1 className="score">SCORE:{score} MISSED WORDS:{missedwords}</h1>
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
