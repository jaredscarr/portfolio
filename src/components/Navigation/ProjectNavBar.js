import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {
  Link as RouterLink
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
  },
  navroot: {
    flexGrow: 1,
    background: 'transparent',
    color: 'grey',
  },
  navlink: {
    marginRight: theme.spacing(2),
    fontWieght: 'bold',
    letterSpacing: theme.spacing(0.4),
    color: 'grey',
    '&:hover': {
      color: 'white',
    },
  },
}));

const NavButton = ({ url }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" className={classes.navroot}>
      <Toolbar>
        <Link component={RouterLink} to="/" className={classes.link} underline="none">
          <Typography className={classes.navlink} variant="subtitle2">HOME</Typography>
        </Link>
        {url &&
          <Link component={RouterLink} to={url} className={classes.link} underline="none">
            <Typography className={classes.navlink} variant="subtitle2">NEXT</Typography>
          </Link>
        }
      </Toolbar>
    </AppBar>
  );
}

export default NavButton;