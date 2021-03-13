import React, { useState } from 'react'
import './Game.css' 
import useKeyPress from './hooks/usekeypress';
import { generate } from './Words'

const initialWords=generate()

const Placeword = () =>{
    var words="Hello, This," /* add the array of words here */
    var word="Apple"
    var newWord=document.createElement("div");
    newWord.innerHTML=word;
    newWord.className=word;
    console.log("This function is being executed");

    newWord.style.color="#ffffff"
    newWord.style.position="fixed"
    newWord.style.top="0px";
    newWord.style.right="0px";

}
var userword="";


function Game() {
    const [leftPadding,setLeftPadding]=useState(
        new Array(20).fill('').join(''),
    );
    const [outgoingChars,setOutgoingChars]=useState('');
    const [currentChar,setCurrentChar]=useState(initialWords.charAt(0));
    const [incomingChars,setIncomingChars]=useState(initialWords.substr(1));


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
        if (userword==="Hello"){
            document.getElementById("textwords").style.display="none";
            console.log("this function executed");

        }
    }
    
    return (
           
        <div className="main">
            <div className="gamewindow">
                <div id="textwords">
                    <h1>Hello</h1>
            

                        
                </div>
                <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop></video> 
            </div>
        </div>
    )
}

export default Game
