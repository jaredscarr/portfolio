import React, { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange, lightBlue, deepPurple, deepOrange } from "@material-ui/core/colors";

// import './App.css';
import BackgroundCanvas from './components/Home/Canvas';
import Overlay from './components/Home/Overlay';
     

const App = () => {

	const [menuState, setMenuState] = useState(true);
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const onClickHander = (event) => {
    if (menuState === true) {
      setMenuState(false);
    } else {
      setMenuState(true);
    }
  } 

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Overlay
          menuState={menuState}
          darkState={darkState}
          theme={darkTheme}
          onClick={onClickHander}
          onChange={handleThemeChange} />
			  <BackgroundCanvas
          menuState={menuState}
          darkState={darkState} />
      </ThemeProvider>
	  </div>
  )
}

export default App;
