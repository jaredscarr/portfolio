import React from 'react';

import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '40vh',
    marginBottom: '20vh',
  },
  title: {
    // letterSpacing: theme.spacing(0.8),
    // fontWieght: 'bold',
  },
}));

const About = ({ menuState, onClick }) => {
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
          variant="body1"
          align="center"
          paragraph
        >
          About Placeholder
        </Typography>
      </Grid>
    </Fade>
  );
}

export default About;