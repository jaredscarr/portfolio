import React from 'react'
import { Link as RouterLink } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'rgb(7, 7, 18)',
    color: 'grey',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
    fontWieght: 'bold',
    letterSpacing: theme.spacing(0.4),
    color: 'grey',
    '&:hover': {
      color: 'white',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Link component={RouterLink} to="/" className={classes.link} underline="none">
            <Typography variant="subtitle2">HOME</Typography>
          </Link>
          <Link component={RouterLink} to="/experiments" className={classes.link} underline="none">
            <Typography variant="subtitle2">EXPERIMENTS</Typography>
          </Link>
           <Link component={RouterLink} to="/contact" className={classes.link} underline="none">
            <Typography variant="subtitle2">CONTACT</Typography>
          </Link>
          <Typography variant="h6" className={classes.title}></Typography>
          <Link
            color="inherit"
            underline="none"
            variant="inherit"
            className={classes.link}
            href="https://www.linkedin.com/in/jaredscarr"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
