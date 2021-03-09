import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Leaderboard from './components/pages/Leaderboard';
import Play from './components/pages/Play';
import Actualplay from './components/pages/Actualplay';
function App() {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Leaderboard' exact component={Leaderboard}/>
        <Route path='/Play' exact component={Play}/>
        <Route path='/Actualplay' exact component={Actualplay}/>
      </Switch>
      <Navbar/>
      </Router>
      </div>
  );
}

export default App;
