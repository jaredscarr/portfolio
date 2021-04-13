import React from "react"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link as MuiLink } from '@material-ui/core'
import Code from '@material-ui/icons/Code'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles((theme) => ({
  linkPosition: {
    marginTop: theme.spacing(5),
  },
  link: {
    margin: theme.spacing(2),
  },
}));

const ExternalLinks = () => {
  
  const classes = useStyles()

  return (
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
  );
}

export default ExternalLinks;
