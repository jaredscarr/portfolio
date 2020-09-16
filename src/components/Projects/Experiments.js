import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {
  Link as RouterLink
} from "react-router-dom";
import terrain from './static/terrain.png'
import horizon from './static/horizon.png'
import sphere from './static/sphere.png'

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
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(3),
  },
}));

const experiments = [
  {
    title: "Moving Ground",
    image: horizon,
    heading: "Movement",
    content: "Playing with camera rotation and movement while rotating objects",
    link: "/horizon"
  },
  {
    title: "Lighting",
    image: sphere,
    heading: "Lighting",
    content: "Backdrop, object, and lighting",
    link: "/sphere"
  },
  {
    title: "Terrain",
    image: terrain,
    heading: "Terrain",
    content: "Terrain example with rough shading",
    link: "/terrain"
  },
]

export default function Experiments() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h3" variant="h4" align="center" color="textPrimary" gutterBottom>
              Experiments
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Here are some fun things that I've done while learning about WebGl, Three.js, Blender, React and other tools. 
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {experiments.map((exp) => (
              <Grid item key={exp.link} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={exp.image}
                    title={exp.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {exp.heading}
                    </Typography>
                    <Typography>
                      {exp.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link component={RouterLink} to={exp.link}>
                      <Typography>View</Typography>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Link
                    color="inherit"
                    variant="inherit"
                    className={classes.link}
                    href="https://www.codepen.io/jaredscarr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outlined" color="primary">
                      More on Codepen
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}