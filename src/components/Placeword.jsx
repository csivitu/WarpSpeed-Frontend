import React from 'react'


const Placeword = props =>{
    var words=" " /* add the array of words here */
    var word="Apple"
    var newWord=document.createElement("div");
    newWord.innerHTML=word;
    newWord.className=word;

    newWord.style.color="#ff0000";
    newWord.style.top=Math.random()*300+"px";
    newWord.style.right=1000-(Math.random()*500)+"px";


}

export default Placeword
