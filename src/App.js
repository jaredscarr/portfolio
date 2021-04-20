import React, { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import BackgroundCanvas from './components/Home/Canvas';
import Overlay from './components/Home/Overlay';
     
// delete app.css
const App = () => {

  const [menuState, setMenuState] = useState(true);
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
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
    <ThemeProvider theme={darkTheme}>
      <Overlay
        menuState={menuState}
        darkState={darkState}
        onClick={onClickHander}
        onChange={handleThemeChange}
      />
		  <BackgroundCanvas
        menuState={menuState}
        darkState={darkState}
      />
    </ThemeProvider>
  )
}

export default App;
