import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '30vh',
    marginBottom: '30vh',
  },
  title: {
    letterSpacing: theme.spacing(0.8),
    fontWieght: 'bold',
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} gutterBottom variant="h2" align="center">
        About Placeholder
      </Typography>
    </Container>
  );
}

export default About;
