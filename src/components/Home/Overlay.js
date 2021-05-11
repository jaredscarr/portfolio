import React from 'react'
import { Route } from 'react-router-dom'

import About from './About'
import ContactForm from './ContactForm'
import ExternalLinks from './ExternalLinks'
import Footer from './Footer'
import Main from './Main'
import Nav from '../Navigation/Nav'
import Projects from '../Projects/index'
import ThemeToggle from '../Navigation/ThemeToggle'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'

const Overlay = ({ navClick, handleDarkThemeChange, darkState, handlePartyThemeChange, partyState }) => {

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
  }));

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} color="inherit" elevation={0}>
        <Toolbar>
          <Nav navClick={navClick} />
          <ThemeToggle
            darkState={darkState}
            partyState={partyState}
            handleDarkThemeChange={handleDarkThemeChange}
            handlePartyThemeChange={handlePartyThemeChange} />
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/projects" render={() => <Projects darkState={darkState} />} />
      <Route path="/contact" component={ContactForm} />
      <ExternalLinks darkState={darkState} partyState={partyState} />
      <Footer darkState={darkState} partyState={partyState} />
    </div>
  );
}

export default Overlay;
