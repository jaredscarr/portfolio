import React from 'react'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import AppBar from './components/Navigation/AppBar'
import Experiments from './components/Projects/Experiments'
import Home from './components/Home/Home';
import Terrain from './components/Projects/Terrain'
import Horizon from './components/Projects/Horizon'
import Sphere from './components/Projects/Sphere'
import {
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/horizon" exact component={Horizon} />
        <Route path="/sphere" exact component={Sphere} />
        <Route path="/terrain" exact component={Terrain} />
        <Route path="/experiments" exact component={Experiments} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
