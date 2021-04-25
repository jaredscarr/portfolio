import React from 'react';
import { useLocation } from 'react-router-dom';

import Code from '@material-ui/icons/Code';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link as MuiLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import getTheme from '../../Theme';


const ExternalLinks = ({ darkState }) => {
  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);
  const route = useLocation();
  let background = 'inherit';

  if (route.pathname === '/projects') {
    background = darkState ? theme.palette.primary.dark : theme.palette.primary.light;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: background,
      paddingTop: '10vh',
    },
    linkPosition: {
      marginTop: theme.spacing(5),
    },
    link: {
      margin: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.linkPosition} align="center"> 
        <MuiLink
          color="inherit"
          variant="inherit"
          className={classes.link}
          href="https://www.linkedin.com/in/jaredscarr"
          target="_blank"
          rel="noreferrer moopener"
        >
          <LinkedIn />
        </MuiLink>
        <MuiLink
          color="inherit"
          variant="inherit" 
          className={classes.link}
          href="https://codesandbox.io/u/jaredscarr"
          target="_blank"
          rel="noreferrer moopener"
        >
          <Code />
        </MuiLink>
        <MuiLink
          color="inherit"
          variant="inherit"
          className={classes.link}
          href="https://github.com/jaredscarr"
          target="_blank"
          rel="noreferrer moopener"
        >
          <GitHub />
        </MuiLink>
      </Typography>
    </div>
  );
}

export default ExternalLinks;
