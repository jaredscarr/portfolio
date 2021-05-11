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
  const [partyState, setPartyState] = useState(false)

  const handleDarkThemeChange = () => {
    setDarkState(!darkState)
  };

  const handlePartyThemeChange = () => {
    setPartyState(!partyState)
  };

  const onClickHandler = (event) => {
    if (menuState === true) {
      setMenuState(false)
    } else {
      setMenuState(true)
    }
  }

  const paletteType = darkState ? 'dark' : 'light'
  const themeType = partyState ? 'party' : 'default'
  const theme = getTheme(paletteType, themeType)
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
          partyState={partyState}
          navClick={onClickHandler}
          handleDarkThemeChange={handleDarkThemeChange}
          handlePartyThemeChange={handlePartyThemeChange}
        />
  		  <BackgroundCanvas
          menuState={menuState}
          darkState={darkState}
          partyState={partyState}
        />
      </Paper>
    </ThemeProvider>
  )
}

export default App;
