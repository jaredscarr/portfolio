import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade';
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
    content: "Keep track and get information on your indoor plants. A serverless application with AWS and react.",
    link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  },
  {
    id: 2,
    title: "IoT Moisture Dashboard",
    image: dashboard,
    heading: "IoT Dashboard",
    content: "Monitor soil moisture with a Raspberry Pi registred as an IoT device through AWS. Dashboard built with react and recharts.",
    link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  },
  // {
  //   id: 3,
  //   title: "House Plants",
  //   image: palm,
  //   heading: "HousePlants",
  //   content: "Keep track and get information on your indoor plants. A serverless application with AWS and react.",
  //   link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  // },
  // {
  //   id: 4,
  //   title: "IoT Moisture Dashboard",
  //   image: dashboard,
  //   heading: "IoT Dashboard",
  //   content: "Monitor soil moisture with a Raspberry Pi registred as an IoT device through AWS. Dashboard built with react and recharts.",
  //   link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  // },
  // {
  //   id: 5,
  //   title: "House Plants",
  //   image: palm,
  //   heading: "HousePlants",
  //   content: "Keep track and get information on your indoor plants. A serverless application with AWS and react.",
  //   link: "https://master.d3me9qsquudsan.amplifyapp.com/"
  // },
  // {
  //   id: 6,
  //   title: "IoT Moisture Dashboard",
  //   image: dashboard,
  //   heading: "IoT Dashboard",
  //   content: "Monitor soil moisture with a Raspberry Pi registred as an IoT device through AWS. Dashboard built with react and recharts.",
  //   link: "https://main.d3npdl9pvgwz4b.amplifyapp.com/"
  // },
]

const Project = ({ project }) => {
  const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 300,
    },
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
            <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
              {project.heading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
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
      <Fade in={true}>
        <Paper className={classes.root} elevation={0}>
          <Grid container className={classes.grid} spacing={2}>
            <Grid item xs={12}>
              <Grid className={classes.subContainer} container justify="space-evenly" spacing={10}>
                {projects.map( project => <Project key={project.id} project={project} /> )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Fade>
    </ThemeProvider>
  );
}

export default Projects;