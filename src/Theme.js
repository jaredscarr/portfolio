
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import brown from '@material-ui/core/colors/brown';

const getTheme = (type) => {
  return createMuiTheme({
    palette: {
      type: type,
      primary: {
        main: brown[100],
      },
      secondary: {
        main: brown[700],
      },
    },
  });
}

export default getTheme;