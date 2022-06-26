import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@emotion/react';
import BackgroundCanvas from './components/Home/Canvas';
import getTheme from './Theme';
import Footer from './components/Home/Footer';

const App = () => {

  // state if the menu is open or closed
  const [menuState, setMenuState] = useState(true);
  // theme states
  const [darkState, setDarkState] = useState(true);

  const handleDarkThemeChange = () => {
    setDarkState(!darkState);
  };
  
  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);
  let backgroundColor = darkState ? theme.palette.primary.dark : theme.palette.primary.light;
  const backgroundRef = useRef(backgroundColor);
  // rerender the backgroundColor when the theme type changes
  useEffect(() => {
    backgroundRef.current = backgroundColor;
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{backgroundColor: backgroundColor}}>
        <BackgroundCanvas darkState={darkState} />
        <Box sx={{ position: 'absolute', bottom: 40, width: '100%' }}>
          <Footer darkState={darkState} handleDarkThemeChange={handleDarkThemeChange} />
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
