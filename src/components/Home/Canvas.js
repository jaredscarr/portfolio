import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';

import { makeStyles } from '@material-ui/core/styles';

import Background from './Background';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
}));

const BackgroundCanvas = ({ menuState, darkState }) => {
  
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Canvas className={classes.canvas} postition={[0, 0, 0]}>
        <Suspense fallback="Loading ... ">
          <Background menuState={menuState} darkState={darkState} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default BackgroundCanvas;
