import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppBar from './components/Navigation/AppBar';

import StickyFooter from './components/Footer/StickyFooter';

function App() {

  return (
    <Router>
      <AppBar />
      <StickyFooter />
    </Router>
  );
}

export default App;
