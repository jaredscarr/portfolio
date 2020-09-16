import * as THREE from 'three'
import '../../App.css';
import React, { useCallback, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import Swarm from './Swarm'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles();

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <div className={classes.container} onMouseMove={onMouseMove}>
      <Canvas
        gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
        camera={{ fov: 75, position: [0, 0, 70] }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x070712)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[100, 100, 100]} intensity={2.2} />
        <pointLight position={[-100, -100, -100]} intensity={5} color="white" />
        <Swarm mouse={mouse} count={25} />
      </Canvas>
    </div>
  )
}

export default Home;