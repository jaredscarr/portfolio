
import { createMuiTheme } from '@material-ui/core/styles'
import lightGreen from '@material-ui/core/colors/lightGreen'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import blueGrey from '@material-ui/core/colors/blueGrey'

const partyTheme = (type) => {
  return createMuiTheme({
    palette: {
      type: type,
      primary: {
        main: purple[700],
      },
      secondary: {
        main: lightGreen['A400'],
      },
      text: {
        secondary: pink['A400'],
      },
    },
  });
}

const defaultTheme = (type) => {
  return createMuiTheme({
    palette: {
      type: type,
      primary: {
        main: blueGrey[900],
      },
      secondary: {
        main: blueGrey[300],
      },
    },
  });
}

const getTheme = (type, theme='default') => {
  if (theme === 'party') {
    return partyTheme(type)
  }

  return defaultTheme(type)
}

export default getTheme;