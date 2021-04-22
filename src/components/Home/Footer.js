import React from 'react';
import { useLocation } from 'react-router-dom';

import { Link as MuiLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import getTheme from '../../Theme';

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
  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);
  const route = useLocation();
  let background = 'inherit';

  if (route.pathname === '/projects') {
    background = darkState ? theme.palette.primary.dark : theme.palette.primary.light;
  }

  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: background,
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
