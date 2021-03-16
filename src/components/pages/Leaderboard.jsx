import React from 'react'
import '../leaderboard.css'

function Leaderboard() {
    return (
        <div className='hero'>
            <div className="hero-container">
            <video src="/videos/leaderboard.mp4" autoPlay loop muted type="video/mp4" className="bg"/>
            <div>
              <center><h1 className="lead">LEADERBOARD</h1></center>
              <table id="lBoard" className="tabla" align ="center">
                <tbody className='ranking'>
                    <tr className="vals">
                      <td>1</td>
                      <td>sanjay</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>2</td>
                      <td>wooo</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>3</td>
                      <td>hooo</td>
                      <td>21600</td>
                    </tr>

                    <tr className="vals">
                      <td>4</td>
                      <td>boo</td>
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
