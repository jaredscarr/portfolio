import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import {
  Link as RouterLink
} from "react-router-dom"
import terrain from './static/terrain.png'
import horizon from './static/horizon.png'
import swarm from './static/swarm.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
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
}));

const experiments = [
  {
    title: "Float",
    image: swarm,
    heading: "Float",
    content: "Sprite objects with movement triggered by mouse movement",
    link: "/floatswarm"
  },
  {
    title: "Moving Ground",
    image: horizon,
    heading: "Movement",
    content: "Playing with camera rotation and movement while rotating objects",
    link: "/horizon"
  },
  {
    title: "Terrain",
    image: terrain,
    heading: "Terrain",
    content: "Terrain example with rough shading",
    link: "/terrain"
  },
]

const Experiments = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.root}>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {experiments.map((exp) => (
              <Grid item key={exp.link} xs={12} sm={6} md={4}>
                <Link component={RouterLink} to={exp.link} underline="none">
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
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Experiments;