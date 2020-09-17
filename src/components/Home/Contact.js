import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Code from '@material-ui/icons/Code'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  paper: {
    marginTop: theme.spacing(20),
    padding: theme.spacing(12),
  },
  email: {
    fontWeight: 'italic',
    paddingTop: theme.spacing(2),
    letterSpacing: theme.spacing(0.8),
  },
  spacing: {
    paddingTop: theme.spacing(2),
  },
  link: {
    margin: theme.spacing(2),
    textDecoration: 'none',
    '&:hover': {
      color: 'grey',
    },
  },
}));

export default function Experiments() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        <Container maxWidth="sm">
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.email} component="h3" variant="h5" align="center" color="textPrimary" gutterBottom>
              jaredscarr@gmail.com
            </Typography>
            <Typography className={classes.spacing} align="center" color="textPrimary" gutterBottom>
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
          </Paper>
        </Container>
      </main>
    </React.Fragment>
  );
}