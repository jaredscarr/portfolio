import React, { useRef, useState } from 'react'
import * as THREE from 'three';
import '../../App.css';
import { Canvas, useFrame } from 'react-three-fiber'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
}));

const Sphere = ({ args }) => {
  return (
    <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach="geometry" args={args} />
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

const TopLight = ({ brightness, color }) => {
  return (
    <hemisphereLight
      args={[0xffffbb, 0x080820, 0.5]}
      castShadow
    />
  );
}

const Eye = () => {
  const [pupilPosition, setPupilPosition] = useState()

  const pupil = useRef()

  useFrame(({ mouse }) => {
    setPupilPosition({
      position: { x: mouse.x * 6, y: mouse.y * 2 },
      rotation: { z: -mouse.x * 0.5, x: -mouse.x * 0.5, y: -mouse.y * 0.2 },
    });
  });
  // Update the ships position from the updated state.
  useFrame(() => {
    pupil.current.rotation.z = pupilPosition.rotation.z;
    pupil.current.rotation.y = pupilPosition.rotation.x;
    pupil.current.rotation.x = pupilPosition.rotation.y;
    pupil.current.position.y = pupilPosition.position.y;
    pupil.current.position.x = pupilPosition.position.x;
  });

  return (
    <group ref={pupil}>
      <mesh visible attach="geometry">
        <Sphere args={[[0.1, 16, 16]]} />
        <Sphere args={[[1, 16, 16]]} />
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
    <div className={classes.container}>
      <Canvas
        onCreated={({ gl }) => {
          gl.setClearColor(0x070712)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <TopLight />
        <Eye />
      </Canvas>
    </div>
  );
}

export default Scene;