
import { createMuiTheme } from '@material-ui/core/styles'
import lightBlue from '@material-ui/core/colors/lightBlue'
import blueGrey from '@material-ui/core/colors/blueGrey'

const defaultTheme = (type) => {
  return createMuiTheme({
    palette: {
      type: type,
      primary: {
        main: blueGrey[900],
      },
      secondary: {
        main: lightBlue[100],
      },
    },
  });
}

const getTheme = (type, theme='default') => {
  return defaultTheme(type)
}

export default getTheme;