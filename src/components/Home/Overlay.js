import React from 'react';
import { Routes, Route } from 'react-router-dom';

// import About from './About';
// import ContactForm from './ContactForm';
import Main from './Main';
import Nav from '../Navigation/Nav';
// import Projects from '../Projects/index';
import Box from '@mui/material/Box';

const Overlay = ({ navClick, handleDarkThemeChange, darkState, backgroundColor }) => {

  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <Nav navClick={navClick} handleDarkThemeChange={handleDarkThemeChange} />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects darkState={darkState} />} /> */}
        {/* <Route path="/contact" element={<ContactForm darkState={darkState} />} /> */}
      </Routes>
    </Box>
  );
}

export default Overlay;
