import React from 'react'
import { useLocation } from 'react-router-dom'

import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { Link as MuiLink } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import getTheme from '../../Theme'


const ExternalLinks = ({ darkState, partyState }) => {
  const paletteType = darkState ? 'dark' : 'light'
  const themeType = partyState ? 'party' : 'default'
  const theme = getTheme(paletteType, themeType)
  const route = useLocation();
  let background = 'inherit';

  if (route.pathname === '/projects') {
    background = darkState ? theme.palette.primary.dark : theme.palette.primary.light
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: background,
    },
  }));
  
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={10}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <MuiLink
            color="inherit"
            variant="inherit"
            className={classes.link}
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
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink
            color="inherit"
            variant="inherit"
            className={classes.link}
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
          </MuiLink>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExternalLinks;
