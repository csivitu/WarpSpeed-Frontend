import React, { useState } from 'react'
import './Game.css' 
import useKeyPress from './hooks/usekeypress';
import { generate } from './Words'

const initialWords=generate()
var userword="";

const Placeword = () =>{
    var words=" " /* add the array of words here */
    var word="Apple"
    var newWord=document.createElement("div");
    newWord.innerHTML=word;
    newWord.className=word;


    newWord.style.color="#ffffff"
    newWord.style.position="fixed"
    newWord.style.top="0px";
    newWord.style.right="0px";

}


function Game() {
    const [leftPadding,setLeftPadding]=useState(
        new Array(20).fill('').join(''),
    );
    const [outgoingChars,setOutgoingChars]=useState('');
    const [currentChar,setCurrentChar]=useState(initialWords.charAt(0));
    const [incomingChars,setIncomingChars]=useState(initialWords.substr(1));


    useKeyPress(key => {
        console.log(key);
        if (key!=' '){
            userword+=key;
        }
        console.log(userword);
    });
    function CheckingWord(){
        console.log(initialWords);
        if (userword.localeCompare(initialWords)===0){
            document.getElementById("textword").style.display="none";

        }
    }
    return (
           
        <div className="main">
            <div className="gamewindow">
                <div id="textwords">
                {Placeword} 
            

                        
                </div>
                <video className='gamebg' src='/videos/gamebg.mp4' autoPlay muted loop></video> 
            </div>
        </div>
    )
}

export default Game
