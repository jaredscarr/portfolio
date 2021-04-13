import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link as MuiLink } from '@material-ui/core';

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

const Footer = () => {
  return (
    <footer>
      <Copyright />
    </footer>
  );
}

export default Footer;
