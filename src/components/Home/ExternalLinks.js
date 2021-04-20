import React from 'react';
import { useLocation } from 'react-router-dom';

import Theme from '../../Theme';

import Code from '@material-ui/icons/Code';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import { Link as MuiLink } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const ExternalLinks = ({ darkState }) => {
  let color = 'transparent';
  const theme = useTheme();
  const vpWidth = useMediaQuery(theme.breakpoints.down('sm'));
  const route = useLocation();

  if (route.pathname === '/projects') {
    color = darkState ? Theme.palette.primary.dark : Theme.palette.primary.main;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: color,
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
