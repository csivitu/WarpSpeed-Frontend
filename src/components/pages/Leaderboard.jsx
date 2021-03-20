import React,{useState,useEffect,useRef} from 'react'
import '../leaderboard.css'
import firebase from 'firebase'
import { db } from '../../firebase';
import { getleaderboard } from '../../api/Request';

function Leaderboard() {
const data=useRef([])
var arr=[]
 const [state,setState]=useState(0)
useEffect(() => {
  async function fetchdata(){
  let data1=await getleaderboard()
  data.current=data1;
  setState(state+1)
  }
  fetchdata()
  }, [])

  
    return (
        <div className='hero'>
            <div className="hero-container">
            <video src="/videos/leaderboard.mp4" autoPlay loop muted type="video/mp4" className="bg"/>
            <div>
              <center><h1 className="lead">LEADERBOARD</h1></center>
              <table id="lBoard" className="tabla" align ="center">
                <tbody className='ranking'>
                  {
                    data.current.map((item,index)=>(
                      <tr className="vals">
                      <td>{index+1}</td>
                      <td>{item.username}</td>
                      <td>{item.score}</td>
                    </tr>)
                    )
                  }
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    )
}

export default Leaderboard
