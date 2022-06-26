import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from '@mui/material/Box';

import Background from './Background';
import { state } from './util';

const BackgroundCanvas = ({ menuState, darkState }) => {
  

  return (
    <Box sx={{height: '100vh'}}>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
        <Suspense fallback="Loading ... ">
          <Background menuState={menuState} darkState={darkState} />
        </Suspense>
      </Canvas>
    </Box>
  );
}

export default BackgroundCanvas;
