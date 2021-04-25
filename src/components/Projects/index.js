import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import palm from './static/palm.png';
import dashboard from './static/dashboard.png';
import getTheme from '../../Theme';

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
  // {
  //   id: 3,
  //   title: "House Plants",
  //   image: palm,
  //   heading: "HousePlants",
  //   content: "A serverless application with React.",
  //   link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  // },
  // {
  //   id: 4,
  //   title: "IoT Moisture Dashboard",
  //   image: dashboard,
  //   heading: "Dashboard",
  //   content: "AWS IoT monitoring a plant.",
  //   link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  // },
  // {
  //   id: 5,
  //   title: "House Plants",
  //   image: palm,
  //   heading: "HousePlants",
  //   content: "A serverless application with React.",
  //   link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  // },
  // {
  //   id: 6,
  //   title: "IoT Moisture Dashboard",
  //   image: dashboard,
  //   heading: "Dashboard",
  //   content: "AWS IoT monitoring a plant.",
  //   link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  // },
]

const Project = ({ project }) => {
  const useStyles = makeStyles((theme) => ({
    cardMedia: {
      height: 300,
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

  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: darkState ? theme.palette.primary.dark : theme.palette.primary.light,
    },
    grid: {
      paddingTop: '30vh',
      paddingBottom: '10vh',
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root} elevation={0}>
        <Grid container className={classes.grid} spacing={2}>
          <Grid item xs={12}>
            <Grid className={classes.subContainer} container justify="space-evenly" spacing={10}>
              {projects.map( project => <Project key={project.id} project={project} /> )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default Projects;