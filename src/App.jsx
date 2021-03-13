import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Leaderboard from './components/pages/Leaderboard';
import Play from './components/pages/Play';
function App() {
  return (
    <div className="app">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0&autoplay=1&loop=1&autopause=0" frameborder="0" allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Leaderboard' exact component={Leaderboard}/>
        <Route path='/Play' exact component={Play}/>
      </Switch>
      <Navbar/>
      </Router>
      </div>
  );
}

export default App;
