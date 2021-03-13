import React from 'react'
import '../leaderboard.css'

function Leaderboard() {
    return (
        <div className='hero'>
            <div className="hero-container">
            <video src="/videos/background.mp4" autoPlay loop muted type="video/mp4" className="bg"/>
            <div>
              <center><h1>L E A D E R B O A R D</h1></center>
              <table id="lBoard" class="tabla" align ="center">
                <tbody className='ranking'>
                    <tr className="vals">
                      <td>#1</td>
                      <td>LOGIC</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>#1</td>
                      <td>LOGIC</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>#1</td>
                      <td>LOGIC</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>#1</td>
                      <td>LOGIC</td>
                      <td>21600</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
    )
}

export default Leaderboard
