import React, { useState, useCallback } from 'react';

import palm from './static/palm.png';
import dashboard from './static/dashboard.png';


import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '20vh',
    flexGrow: 1,
  },
  card: {
    height: '100%',
  },
  cardMedia: {
    height: 300,
    width: 300,
  },
  cardContent: {
    flexGrow: 1,
  },
  projNav: {
    marginTop: theme.spacing(2),
  }
}));

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
    content: "AWS IoT Moisture Sensor.",
    link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  },
]

const Project = ({ project }) => {
  const classes = useStyles();

  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000} onEntering={(e)=> console.log('enter', e)}>
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
    </Slide>
  );
}

const projectList = projects.map((project) => {
  return <Project key={project.id} project={project} />
});

const Projects = () => {
  const classes = useStyles();
  const [projectIndex, setProjectIndex] = useState(0);

  const handleForward = () => {
    if (projectIndex === projects.length - 1) {
      setProjectIndex(0);
    } else {
      setProjectIndex(projectIndex + 1);
    }
  };

  const handleBackward = () => {
    if (projectIndex === 0) {
      setProjectIndex(projects.length - 1);
    } else {
      setProjectIndex(projectIndex - 1);
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          {projectList[projectIndex]}
        </Grid>
      </Grid>
      <Grid
        className={classes.projNav}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <ArrowBackIosIcon onClick={handleBackward} />
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon onClick={handleForward} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;