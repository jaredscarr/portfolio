import React, { useRef, Fragment } from 'react'
import * as THREE from 'three'
import '../../App.css'
import { Canvas, useFrame } from 'react-three-fiber'
import { makeStyles } from '@material-ui/core/styles'
import ProjectNavBar from '../Navigation/ProjectNavBar'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    margin: theme.spacing(3),
  },
}));

const Sphere = () => {
  return (
    <mesh visible userData={{ test: "hello" }} castShadow>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        color="blue"
        wireframe
        metalness={0.1}
      />
    </mesh>
  );
}

const TopLight = ({ brightness, color }) => {
  return (
    <hemisphereLight
      args={[0xffffbb, 0x080820, 0.5]}
      castShadow
    />
  );
}

const GROUND_HEIGHT = -20;

const MovingGround = () => {
  const terrain = useRef();

  useFrame(() => {
    terrain.current.position.z += 0.3;
  });

  return (
    <mesh
      visible
      position={[0, GROUND_HEIGHT, 0]}
      rotation={[-Math.PI / 2, -8, 0]}
      ref={terrain}
    >
      <planeBufferGeometry attach="geometry" args={[2000, 2000, 128, 128]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        roughness={1}
        metalness={0}
        wireframe
      />
    </mesh>
  );
}

const MainObject = () => {

  const ship = useRef()

  useFrame(() => {
    ship.current.rotation.y += 0.03
  });

  return (
    <group ref={ship}>
      <mesh visible attach="geometry">
        <Sphere />
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
}

const Scene = () => {

  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.overlay}>
        <ProjectNavBar prev_url="/floatswarm" next_url="/sphere" />
      </div>
      <div className={classes.container}>
        <Canvas
          onCreated={({ gl, camera }) => {
            gl.setClearColor(0x070712)
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
            camera.rotation.x = 0.01
            camera.rotation.x = 0.01
            camera.rotation.z = -1.45
            camera.position.x = 6
            camera.position.z = 15
          }}
        >
          <TopLight />
          <pointLight position={[10, 10, 100]} /> 
          <MainObject />
          <MovingGround />
        </Canvas>
      </div>
    </Fragment>
  );
}

export default Scene;