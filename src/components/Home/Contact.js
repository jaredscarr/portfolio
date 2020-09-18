import React, { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import Code from '@material-ui/icons/Code'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

//TODO: check this link in the copyright section and see if it works or needs adjustment. Maybe remove.
function Copyright() {
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

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroSubtitle: {
    marginTop: theme.spacing(10),
    letterSpacing: theme.spacing(0.8),
  },
  linkPosition: {
    marginTop: theme.spacing(5),
  },
  link: {
    margin: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
  },
}));

export default function Experiments() {
  const classes = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.root}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.heroSubtitle} variant="h6" align="center" color="textSecondary" paragraph>
              jaredscarr@gmail.com
            </Typography>
            <Typography className={classes.linkPosition} align="center">
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
                href="https://codesandbox.io/u/jaredscarr"
                target="_blank"
                rel="noreferrer"
              >
                <Code />
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
            </Typography>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </Fragment>
  );
}
