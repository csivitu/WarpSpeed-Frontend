import React, { useState, useEffect } from "react";
import "../leaderboard.css";
import { getleaderboard } from "../../api/Request";

function Leaderboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getleaderboard();
      setData(res);
    })();
  }, []);

  return (
    <div className="hero">
      <div className="hero-container">
        <video
          src="/videos/leaderboard.mp4"
          autoPlay
          loop
          muted
          type="video/mp4"
          className="bg"
        />
        <div>
          <center>
            <h1 className="lead">LEADERBOARD</h1>
            <table id="lBoard" className="tabla" align="center">
              <tbody className="ranking">
                {data.map((item, index) => (
                  <tr className="vals">
                    <td>{index + 1}</td>
                    <td>{item.username}</td>
                    <td>{item.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
