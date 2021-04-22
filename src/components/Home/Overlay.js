import React from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

const Overlay = ({ menuState, onClick, onChange, darkState }) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      width: '100%',
      zIndex: 1,
    },
    appBarRoot: {
      flexGrow: 1,
      backgroundColor: 'transparent',
    },
    themeSwitch: {
      marginLeft: 'auto',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} color="inherit" elevation={0}>
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
      <Route path="/projects" render={() => <Projects darkState={darkState} />} />
      <Route path="/contact" component={ContactForm} />
      <ExternalLinks darkState={darkState} />
      <Footer darkState={darkState} />
    </div>
  );
}

export default Overlay;
