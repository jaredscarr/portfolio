import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import About from './About';
import ContactForm from './ContactForm';
import DropDown from '../Navigation/DropDown';
import ExternalLinks from './ExternalLinks';
import Footer from './Footer';
import Main from './Main';
import Projects from '../Projects/index';

import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
  },
  appBarRoot: {
    flexGrow: 1,
  },
  themeSwitch: {
    marginLeft: 'auto',
  },
}));

const Overlay = ({ menuState, onClick, onChange, darkState, darkTheme }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} color="transparent" elevation={0}>
        <Toolbar>
          <DropDown onClick={onClick} menuState={menuState} />
          <FormControlLabel
            className={classes.themeSwitch}
            control={<Switch checked={darkState} onChange={onChange} />}
            label="dark"
          />
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={ContactForm} />
      <Footer />
      <ExternalLinks />
    </div>
  );
}

export default Overlay;
