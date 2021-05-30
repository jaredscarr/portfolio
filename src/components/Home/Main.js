import React from 'react';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '40vh',
    marginBottom: '35vh',
  },
  title: {
    [theme.breakpoints.up('sm')] : {
      letterSpacing: theme.spacing(1.2),
    },
    letterSpacing: theme.spacing(0.5),
    fontWeight: 700,
    fontFamily: 'Raleway',
  },
}));

const Main = ({ menuState, onClick }) => {
  const classes = useStyles();

  return (
    <Fade in={true}>
      <Grid
        className={classes.root}
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography
          className={classes.title}
          variant="h4"
          align="center"
          paragraph
        >
          jaredscarr.com
        </Typography>
      </Grid>
    </Fade>
  );
}

export default Main;
