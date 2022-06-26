
import { createTheme } from '@mui/material/styles';
import lightBlue from '@mui/material/colors/lightBlue';
import blueGrey from '@mui/material/colors/blueGrey';

const defaultTheme = (type) => {
  return createTheme({
    palette: {
      mode: type,
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
  return defaultTheme(type);
}

export default getTheme;