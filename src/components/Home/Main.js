import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '40vh',
    marginBottom: '35vh',
  },
  title: {
    letterSpacing: theme.spacing(0.8),
    fontWieght: 'bold',
  },
}));

const Main = ({ menuState, onClick }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      spacing={0}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Typography
        id="websiteTitle"
        className={classes.title}
        variant="h4"
        align="center"
        paragraph
      >
        jaredscarr.com
      </Typography>
    </Grid>
  );
}

export default Main;
