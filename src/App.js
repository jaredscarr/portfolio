import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

import BackgroundCanvas from './components/Home/Canvas';
import Overlay from './components/Home/Overlay';
import getTheme from './Theme';

const App = () => {

  const [menuState, setMenuState] = useState(true);
  const [darkState, setDarkState] = useState(false);

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

  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: darkState ? theme.palette.primary.dark : theme.palette.primary.light,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
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
      </Paper>
    </ThemeProvider>
  )
}

export default App;
