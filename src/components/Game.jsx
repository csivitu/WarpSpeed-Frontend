import React, { useState, useEffect, useRef } from 'react'
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
var calc;



function Game() {
    const userinput=useRef("")
    const [useword,setUseword]=useState("")
    const [game,setGame]=useState(true)
    const [missedwords,setMissedword]=useState(0)
    const [stages,setStages]=useState("RD-01")
    useEffect(() => {
        if (game){
            setMissedword(0)
            x=setInterval(Placeword,y);
        }
        return () => {
            if (game){
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
            }
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
            //newWord.className="wordd";
            newWord.id=word;
            loggedwords.push(word);
            console.log(loggedwords);
            newWord.style.color="#ffffff"
            newWord.style.position="absolute";
            newWord.style.top=Math.random() * 300 + "px";
            newWord.style.left="0px";
            newWord.style.animationTimingFunction="linear";
            newWord.style.animationName="stage1";
            if (userloggedwords<=10){
                //newWord.style.animationName="stage1";
                newWord.style.animationDuration="10s"; 
            }
            else if(userloggedwords>10 && userloggedwords<=25){
                newWord.style.animationDuration="8s";
                //newWord.style.animationName="stage2";
                setStages("RD-02")
            }
            else if(userloggedwords>25 && userloggedwords<=50){
                newWord.style.animationDuration="6s";
                //newWord.style.animationName="stage3";
                setStages("RD-03")
            }
            else if(userloggedwords>50)
            {
                newWord.style.animationDuration="4s";
                //newWord.style.animationName="stage4";
                setStages("RD-04")
            }
            else if(userloggedwords>75)
            {
                newWord.style.animationDuration="2s";
                setStages("DEATH")
            }
            //newWord.style.transitionTimingFunction="linear";
            document.getElementById("textwords").appendChild(newWord);
            console.log("this is the score "+score);
            newWord.addEventListener("animationend",()=>{
                let re = /\+[0-9]/;
                let res = re.test(newWord.innerHTML) //return true or false
                if (!res){
                    setMissedword(missedwords=>missedwords+1)
                    newWord.remove();
                    missedwordsss+=1;
                    missedloggedwords.push(word);
                    console.log("missed wordsss:"+missedwordsss)
                }
                else{        
                    newWord.remove();
                }
            })
        }
        else{
        setGame(false);
    }
    }


    

    useKeyPress(key => {
        if (key===' '){
            console.log(userinput.current.value)
            Checkingword();
            userloggedwords+=1;
            userword="";
            setUseword("");
        }
    });
    

    const Checkingword = () =>{
        let a=loggedwords.indexOf(userinput.current.value.trim())
        console.log(userinput.current.value)
        console.log(correctuserwords)
        if (a===0 || a!==-1){
            correctuserwords.push(userinput.current.value.trim());
            var textwords=document.getElementById(userinput.current.value.trim());
            var l=userinput.current.value.trim().length;
            calc=l*2;
            textwords.innerHTML="+"+calc;
            score+=calc;
            
        }
        userinput.current.value=""; 
    }
    
    return (
        <div className="main">
            {game ? (
                <>
                <input type="text" ref={userinput} />
                <div className="gamewindow">
                
                    <div className="gamewindowcontainer">
                            <div>
                                <h1>{stages}</h1>
                            </div>
                            <div>
                            </div>
                            <div>
                                <h1 style={{fontFamily:"GTAmericaThin"}}>{missedwords} missed</h1>
                            </div>
                            </div>
                    <div id="textwords"/> 
                    <video className='gamebg' src='/videos/export_backg_crop.mp4' autoPlay muted loop /> 
                </div>
                </>
        ):
        <>
        <div className="gamewindow1">
            <h1 className="gameoverscore">Your Score:{score} <br></br>Your correct words:{userloggedwords}<br></br></h1>
            <video onClick={()=>setGame(true)} src="/videos/gameover.mp4" autoPlay loop muted type="video/mp4" className="gameover"/>
        </div>
        <video className='gamebg' src='/videos/export_backg_crop.mp4' autoPlay loop muted />
        </>
        }
        </div>
    )
}

export default Game
