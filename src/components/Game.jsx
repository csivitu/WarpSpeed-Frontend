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
var correctuserwords=[]  //this needs to be sent to backend
var userloggedwords=0;  //this needs to be sent to backend
let x,y=3000,z=0;
//var stages=["stage1","stage2","stages3","stages4"]
var missedwordsss=0;
function Game() {
    const [game,setGame]=useState(true)
    const [missedwords,setMissedword]=useState(0)
    useEffect(() => {
        if (game){
            setMissedword(0)
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
            nologgedwords=0;
            missedloggedwords=[];
            missedwordsss=0;
        };
    }, [game])


    const Placeword = () =>{
        console.log(userloggedwords)
        if (userloggedwords%10===0){
            console.log("userloggedwords is working")
            z=z+100;
            y=(y-z);
        }
        if (missedwordsss<10){
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
            else if(userloggedwords>10 && userloggedwords<=25){
                newWord.style.animationDuration="8s";
                //newWord.style.animationName="stage2";
                console.log("stage2")
            }
            else if(userloggedwords>25 && userloggedwords<=50){
                newWord.style.animationDuration="6s";
                //newWord.style.animationName="stage3";
                console.log("stage3");
            }
            else if(userloggedwords>50)
            {
                newWord.style.animationDuration="4s";
                //newWord.style.animationName="stage4";
                console.log("stage4")
            }
            //newWord.style.transitionTimingFunction="linear";
            document.getElementById("textwords").appendChild(newWord);
            console.log("this is the score "+score);
            newWord.addEventListener("animationend",()=>{
                if (newWord.innerHTML!=="+100"){
                    setMissedword(missedwords=>missedwords+1)
                    newWord.remove();
                    missedwordsss+=1;
                    }
                else{
                    console.log("missed wordsss:"+missedwordsss)        
                    newWord.remove();
                    missedloggedwords.push(word);
                }
            })
        }
        else{
        setGame(false);
    }
    }

    

    useKeyPress(key => {

        if (key!==' '){
            userword+=key;
        }
        console.log(userword);
        if (key===' '){
            Checkingword();
            userloggedwords+=1;
            userword="";
        }
    });
    const Checkingword = () =>{
        let a=loggedwords.indexOf(userword)
        if (a===0 || a!==-1){
            correctuserwords.push(userword);
            var textwords=document.getElementById(userword);
            textwords.innerHTML="+100";
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
                    <video className='gamebg' src='/videos/gamebakground.mp4' autoPlay muted loop /> 
                </div>
                </>
        ):
        <>
        <div className="gamewindow1">
            <video onClick={()=>setGame(true)} src="/videos/gameover.mp4" autoPlay loop muted type="video/mp4" className="gameover" />
        </div>
        <video className='gamebg' src='/videos/gamebg.mp4' autoPlay loop muted />
        </>
        }
        </div>
    )
}

export default Game
