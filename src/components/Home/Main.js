import React from 'react';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import getTheme from '../../Theme';

const Main = ({ menuState, onClick, darkState }) => {
  const paletteType = darkState ? 'dark' : 'light';

  const theme = getTheme(paletteType, 'default');

  return (
    <Fade in={true}>
      <Grid
        sx={{
          marginTop: '40vh',
          marginBottom: '35vh',
        }}
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          sx={{
            letterSpacing: {
              sm: theme.spacing(1.2),
              md: theme.spacing(0.5),
            },
            fontWeight: 700,
            fontFamily: 'Raleway',
          }}
          variant="h4"
          align="center"
          paragraph
        >
          {/* jaredscarr.com */}
        </Typography>
      </Grid>
    </Fade>
  );
}

export default Main;
