import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'

import BackgroundCanvas from './components/Home/Canvas'
import Overlay from './components/Home/Overlay'
import getTheme from './Theme'

const App = () => {

  // state if the menu is open or closed
  const [menuState, setMenuState] = useState(true)
  // theme states
  const [darkState, setDarkState] = useState(true)

  const handleDarkThemeChange = () => {
    setDarkState(!darkState)
  };

  const onClickHandler = (event) => {
    if (menuState === true) {
      setMenuState(false)
    } else {
      setMenuState(true)
    }
  }

  const paletteType = darkState ? 'dark' : 'light'
  const theme = getTheme(paletteType)
  let backgroundColor = darkState ? theme.palette.primary.dark : theme.palette.primary.light
  // rerender the backgroundColor when the theme type changes
  useEffect(() => {
    backgroundColor = darkState ? theme.palette.primary.dark : theme.palette.primary.light
  })

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: backgroundColor,
    },
  }));

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Overlay
          darkState={darkState}
          navClick={onClickHandler}
          handleDarkThemeChange={handleDarkThemeChange}
        />
  		  <BackgroundCanvas
          darkState={darkState}
        />
      </Paper>
    </ThemeProvider>
  )
}

export default App;
