import React from 'react';
import { useLocation } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

import palm from './static/palm.png';
import dashboard from './static/dashboard.png';
import Theme from '../../Theme';

const projects = [
  {
    id: 1,
    title: "House Plants",
    image: palm,
    heading: "HousePlants",
    content: "A serverless application with React.",
    link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  },
  {
    id: 2,
    title: "IoT Moisture Dashboard",
    image: dashboard,
    heading: "Dashboard",
    content: "AWS IoT monitoring a plant.",
    link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  },
  {
    id: 3,
    title: "House Plants",
    image: palm,
    heading: "HousePlants",
    content: "A serverless application with React.",
    link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  },
  {
    id: 4,
    title: "IoT Moisture Dashboard",
    image: dashboard,
    heading: "Dashboard",
    content: "AWS IoT monitoring a plant.",
    link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  },
]

const Project = ({ project }) => {
  const useStyles = makeStyles((theme) => ({
    cardMedia: {
      height: 200,
      width: 300,
    },
  }));

  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.card}>
        <Link href={project.link} underline="none">
          <CardMedia
            className={classes.cardMedia}
            image={project.image}
            title={project.title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {project.heading}
            </Typography>
            <Typography>
              {project.content}
            </Typography>
          </CardContent>
        </Link> 
      </Card>
    </Grid>
  );
}

const Projects = ({ darkState }) => {
  let color = 'transparent';
  let paddingTop = '20vh';
  const route = useLocation();

  if (route.pathname === '/projects') {
    color = darkState ? Theme.palette.primary.dark : Theme.palette.primary.main;
    paddingTop = '15vh';
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: paddingTop,
      flexGrow: 1,
      background: color,
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="space-evenly" spacing={10}>
          {projects.map( project => <Project key={project.id} project={project} /> )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Projects;