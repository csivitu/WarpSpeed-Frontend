import React, { useState, useEffect, useRef } from 'react'
import { requestOptions, updateleaderboard } from '../api/Request';
import './Game.css'
import useKeyPress from './hooks/usekeypress';
import wordarray from './words/file.json'

var loggedwords = []
var nologgedwords = 0  
var myarray = wordarray.wordlist;
var missedloggedwords = []
var userword = "";

var correctuserwords = [] 
var userloggedwords = 0;  
var correctuserloggedwords=0;
let x, y = 3000, z = 0;
var missedwordsss = 0;
var calc;



function Game() {
    const score=useRef(0)
    const userinput = useRef("")
    const [useword, setUseword] = useState("")
    const [game, setGame] = useState(true)
    const [missedwords, setMissedword] = useState(0)
    const stages=useRef("RD-01")

    useEffect(() => {
        if (game) {
            setMissedword(0)
            x = setInterval(Placeword, y);
        }
        return () => {
            if (game) {
                clearInterval(x);
                score.current = 0;
                loggedwords = [];
                y = 3000;
                z = 0;
                correctuserwords = []
                correctuserloggedwords=0;
                userloggedwords = 0
                nologgedwords = 0;
                missedloggedwords = [];
                missedwordsss = 0;
                stages.current="RD-01"
            }
        };
    }, [game])


    const Placeword = async () => {
        if (userloggedwords % 10 === 0 && userloggedwords!==0) {
            z = z + 500;
            y = (y - z);
        }
        if (missedwordsss < 10) {

            var word = myarray[Math.floor(Math.random() * myarray.length)];
            var newWord = document.createElement("div");
            nologgedwords += 1;
            newWord.innerHTML = word;
            newWord.id = word;
            loggedwords.push(word);
            newWord.style.color = "#ffffff"
            newWord.style.position = "absolute";
            newWord.style.top = Math.random() * 300 + "px";
            newWord.style.left = "0px";
            newWord.style.animationTimingFunction = "linear";
            newWord.style.animationName = "stage1";
            if (userloggedwords <= 10) {
                newWord.style.animationDuration = "10s";
            }
            else if (userloggedwords > 10 && userloggedwords <= 25) {
                newWord.style.animationDuration = "8s";
                stages.current="RD-02"
            }
            else if (userloggedwords > 25 && userloggedwords <= 50) {
                newWord.style.animationDuration = "6s";
                stages.current="RD-03"
            }
            else if (userloggedwords > 50 && userloggedwords<75) {
                newWord.style.animationDuration = "4s";
                stages.current="RD-04"
            }
            else if (userloggedwords > 75) {
                newWord.style.animationDuration = "2s";
                stages.current="DEATH"
            }
            document.getElementById("textwords").appendChild(newWord);
            newWord.addEventListener("animationend", () => {
                let re = /\+[0-9]/;
                let res = re.test(newWord.innerHTML)
                if (!res) {
                    setMissedword(missedwords => missedwords + 1)
                    newWord.remove();
                    missedwordsss += 1;
                    missedloggedwords.push(word);
                }
                else {
                    newWord.remove();
                }
            })
        }
        else {
            setGame(false);
            await updateleaderboard(correctuserwords)
        }
    }




    useKeyPress(key => {
        if (key === ' ' || key==="Enter") {
            Checkingword();
            userloggedwords += 1;
            userword = "";
            setUseword("");
        }
    });


    const Checkingword = () => {
        let a = loggedwords.indexOf(userinput.current.value.trim())
        if (a === 0 || a !== -1) {
            correctuserloggedwords+=1;
            correctuserwords.push(userinput.current.value.trim());
            var textwords = document.getElementById(userinput.current.value.trim());
            var l = userinput.current.value.trim().length;
            calc = l * 2;
            textwords.innerHTML = "+" + calc;
            score.current+= calc;

        }
        userinput.current.value = "";
    }

    return (
        <div className="main">
            {game ? (
                <>
                    <div className="gamewindowcontainer">
                        <div>
                            <h1>{stages.current}</h1>
                        </div>
                        <div id="userinputfield">
                            <input autoFocus="true" onPaste={(e)=>{e.preventDefault()
                            return false;}} 
                            onCopy={(e)=>{e.preventDefault()
                                return false;}}
                                type="text" ref={userinput} />
                        </div>
                        <div>
                            <h1 style={{ fontFamily: "GTAmericaThin" }}>{missedwords} missed</h1>
                        </div>
                        <div>
                            <h1 style={{ fontFamily: "GTAmericaThin" }}>{score.current}</h1>
                        </div>
                    </div>
                    <div id="textwords" />
                    <video className='gamebg' src='/videos/export_backg_crop.mp4' autoPlay muted loop />
                </>
            ) :
                <>
                    <div className="gamewindow1">
                        <div className="gameovervideo">
                            <div className="gameovertext">
                                <h1 className="gameoverscore">Your Score: {score.current} <br></br><br></br>Your correct words: {correctuserloggedwords}<br></br></h1> </div>
                            <video onClick={() => setGame(true)} src="/videos/gameover.mp4" autoPlay loop muted type="video/mp4" className="gameover" /></div>
                    </div>
                    <video className='gamebg' src='/videos/export_backg_crop.mp4' autoPlay loop muted />
                </>
            }
        </div>
    )
}

export default Game
