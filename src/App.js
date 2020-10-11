import React from 'react'
import './App.css'
import Home from './components/Home/Home';
import FloatSwarm from './components/Projects/FloatSwarm'
import Terrain from './components/Projects/Terrain'
import Horizon from './components/Projects/Horizon'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


const App = () => {

  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/floatswarm" element={<FloatSwarm />} />
        <Route path="/terrain" element={<Terrain />} />
        <Route path="/horizon" element={<Horizon />} />
      </Routes>
    </Router>
  )
}

export default App;
