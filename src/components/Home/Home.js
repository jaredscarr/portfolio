import React, { Suspense, Fragment, useRef } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Canvas } from "react-three-fiber"
import Background from './Background'
import Experiments from '../Projects/index'
import ContactForm from './ContactForm'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link as MuiLink } from '@material-ui/core'
import Code from '@material-ui/icons/Code'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  navroot: {
    flexGrow: 1,
    background: 'rgb(7, 7, 18)',
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
  title: {
    letterSpacing: theme.spacing(0.8),
    fontWieght: 'bold',
  },
  subtitle: {
    letterSpacing: theme.spacing(0.8),
  },
  linkPosition: {
    marginTop: theme.spacing(5),
  },
  link: {
    margin: theme.spacing(2),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        jaredscarr.com
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Home = () => {
  
  const classes = useStyles()
  const ref = useRef()

  return (
    <Fragment>
      <AppBar position="static" className={classes.navroot}>
        <Toolbar>
          <Typography
            className={classes.navlink}
            variant="subtitle2"
            onClick={() => ref.current.scrollTo(0)}
          >
            HOME
          </Typography>
          <Typography
            className={classes.navlink}
            variant="subtitle2"
            onClick={() => ref.current.scrollTo(1)}
          >
            EXPERIMENTS
          </Typography>
          <Typography
            className={classes.navlink}
            variant="subtitle2"
            onClick={() => ref.current.scrollTo(3)}
          >
            CONNECT
          </Typography>
        </Toolbar>
      </AppBar>
      <Parallax pages={4} ref={ref}>
        <div>
          <ParallaxLayer
            offset={0}
            speed={-1.1}
            factor={0.9}
            style={{ opacity: 0.3 }}
            onClick={() => ref.current.scrollTo(1)}
          >
            <Suspense fallback="Loading ... ">
              <Canvas id="canvas" postition={[0, 0, 0]}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Background
                  constructorArgs={[1, 8, 6, 0, Math.PI * 2, 0, Math.PI * 2]}
                  position={[0, 0, 0]}
                />
              </Canvas>
            </Suspense>
          </ParallaxLayer>
        </div>
        <ParallaxLayer
          offset={0.4}
          speed={0}
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
          onClick={() => ref.current.scrollTo(1)}
        >
          <Typography id="websiteTitle" className={classes.title} variant="h4" align="center" color="textPrimary" paragraph>
            jaredscarr.com
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={-1}>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1} style={{ textAlign: "center" }}>
          <Experiments />
        </ParallaxLayer>
        <ParallaxLayer offset={3.05} speed={0} style={{ textAlign: "center" }}>
          <ContactForm />
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={0} style={{ textAlign: "center" }}>
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
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
}

export default Home;
