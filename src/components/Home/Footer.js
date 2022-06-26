import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Switch from '@mui/material/Switch';
import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Copyright = () => {
  return (
    <Typography
      fontSize={10}
      color="textSecondary"
      align="center">
      {'Copyright © '}
        jaredscarr.com{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = ({ darkState, handleDarkThemeChange }) => {
  // const paletteType = darkState ? 'dark' : 'light';
  let icon =  darkState ? <Brightness3Icon /> : <Brightness4Icon />;

  return (
    <footer>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-end"
      >
        <Grid item xs={6} sm={6} md={3}>
          <Link
            color="inherit"
            variant="inherit"
            href="https://www.linkedin.com/in/jaredscarr"
            target="_blank"
            rel="noreferrer moopener"
          >
            <Typography
              align="center"
              color="textPrimary"
            > 
              <LinkedIn />
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Link
            color="inherit"
            variant="inherit"
            href="https://github.com/jaredscarr"
            target="_blank"
            rel="noreferrer moopener"
          >
            <Typography
              align="center"
              color="textPrimary"
            >
              <GitHub />
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Typography
            align="center"
            color="textPrimary">
            {icon}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
        <Typography
          align="center"
          color="textPrimary"
        >
          <Switch checked={darkState} onChange={handleDarkThemeChange} size="small" color="secondary"/>
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Copyright />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
