import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHub from '@material-ui/icons/GitHub';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';

import Home from '../Home/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'black',
    color: 'grey',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginRight: theme.spacing(2),
    color: 'grey',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}></Typography>
            <Link
              color="inherit"
              variant="inherit"
              className={classes.link}
              href="https://www.linkedin.com/in/jaredscarr"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn />
            </Link>
            <Link
              color="inherit"
              variant="inherit"
              className={classes.link}
              href="https://github.com/jaredscarr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </Link>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
