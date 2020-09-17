import React, { Fragment } from 'react'
import './App.css'
import AppBar from './components/Navigation/AppBar'
import Contact from './components/Home/Contact'
import Experiments from './components/Projects/Experiments'
import Home from './components/Home/Home';
import Terrain from './components/Projects/Terrain'
import Horizon from './components/Projects/Horizon'
import Sphere from './components/Projects/Sphere'
import { Switch, Route } from "react-router-dom"

const App = () => {

  return (
    <Fragment>
      <AppBar />
      <Switch>
        <Route path="/horizon" exact component={Horizon} />
        <Route path="/sphere" exact component={Sphere} />
        <Route path="/terrain" exact component={Terrain} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/experiments" exact component={Experiments} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Fragment>
  );
}

export default App;
