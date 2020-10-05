import React, { Suspense, Fragment, useRef, useState } from "react"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Canvas } from "react-three-fiber"
import Background from './Background'
import Experiments from '../Projects/index'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Code from '@material-ui/icons/Code'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import { useFormik } from 'formik'

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
  formLayout: {
    marginBottom: theme.spacing(4),
  },
  textFieldLayout: {
    margin: theme.spacing(2),
  },
  submitButton: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    // marginBottom: theme.spacing(4),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        jaredscarr.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 500) {
    errors.message = 'Must be 500 characters or less';
  }

  return errors;
};

const Home = () => {
  
  const classes = useStyles()
  const ref = useRef()
  const [formVisible, setFormVisibility] = useState(false)

  // remove these blocks?
  const [values, setValues] = React.useState({})
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submit')
  }

  const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       message: '',
     },
     validate,
     onSubmit: values => {
       console.log(values)
     },
   })

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
              <Canvas postition={[0, 0, 0]}>
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
          <Typography className={classes.title} variant="h4" align="center" color="textPrimary" paragraph>
            jaredscarr.com
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={-1}>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={1} style={{ textAlign: "center" }}>
          <Experiments />
        </ParallaxLayer>
        <ParallaxLayer offset={3.1} speed={0} style={{ textAlign: "center" }}>
          <div className={classes.formLayout}>
            <form
              onSubmit={formik.handleSubmit}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="name"
                className={classes.textFieldLayout}
                label="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (<div>{formik.errors.name}</div>) : null}
              <TextField
                id="email"
                className={classes.textFieldLayout}
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (<div>{formik.errors.email}</div>) : null}
              <div>
                <TextField
                  id="message"
                  className={classes.textFieldLayout}
                  label="Message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                  multiline
                />
                {formik.touched.message && formik.errors.message ? (<div>{formik.errors.message}</div>) : null}
              </div>
              <div className={classes.submitButton}>
                <Button type="submit" variant="outlined" >Submit</Button>
              </div>
            </form>
          </div>
          <Typography className={classes.linkPosition} align="center">
            <Link
              color="inherit"
              variant="inherit"
              className={classes.link}
              href="https://www.linkedin.com/in/jaredscarr"
              target="_blank"
              rel="noreferrer moopener"
            >
              <LinkedIn />
            </Link>
            <Link
              color="inherit"
              variant="inherit" 
              className={classes.link}
              href="https://codesandbox.io/u/jaredscarr"
              target="_blank"
              rel="noreferrer moopener"
            >
              <Code />
            </Link>
            <Link
              color="inherit"
              variant="inherit"
              className={classes.link}
              href="https://github.com/jaredscarr"
              target="_blank"
              rel="noreferrer moopener"
            >
              <GitHub />
            </Link>
          </Typography>
        </ParallaxLayer>
      </Parallax>
    </Fragment>
  );
}

export default Home;
