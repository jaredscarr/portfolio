import React, { Fragment } from 'react'
import * as THREE from 'three';
import '../../App.css';
import { Canvas } from 'react-three-fiber'
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
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

const Light = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

const FillLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={brightness}
      color={color}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}

const RimLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={brightness}
      color={color}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}

const GroundPlane = () => {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

const BackDrop = () => {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

const Scene = () => {

  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.overlay}>
        <ProjectNavBar url={"/terrain"} />
      </div>
      <div className={classes.container}>
        <Canvas
          onCreated={({ gl }) => {
            gl.setClearColor(0x070712)
            gl.toneMapping = THREE.ACESFilmicToneMapping
            gl.outputEncoding = THREE.sRGBEncoding
          }}
        >
          <Light />
          <FillLight />
          <RimLight />
          <Sphere />
          <BackDrop />
          <GroundPlane />
        </Canvas>
      </div>
    </Fragment>
  );
}

export default Scene;