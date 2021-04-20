import React from 'react';
import { useLocation } from 'react-router-dom';

import Theme from '../../Theme';

import { Link as MuiLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://jaredscarr.com/">
        jaredscarr.com
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = ({ darkState }) => {
  let color = 'transparent';
  const route = useLocation();

  if (route.pathname === '/projects') {
    color = darkState ? Theme.palette.primary.dark : Theme.palette.primary.main;
  }

  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: color,
      paddingTop: '5vh',
      paddingBottom: '3vh',
    },
  }));

  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
}

export default Footer;
