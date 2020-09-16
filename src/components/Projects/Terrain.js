import React, { Suspense } from 'react'
import * as THREE from 'three';
import '../../App.css';
import { Canvas, Dom, useResource, useUpdate } from 'react-three-fiber'
import { makeStyles } from '@material-ui/core/styles'
import Camera from './Camera'
import { noise } from './Helpers/perlin'

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  loading: {
    padding: theme.spacing(2),
    transform: 'translate3d(-50%, -50%, 0)',
  }
}));

const Lights = () => {

  const [ref, pLight1] = useResource()
  const [ref2, pLight2] = useResource()

  return (
    <group>
      <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} castShadow/>
      <pointLight
        ref={ref}
        intensity={1.1}
        position={[-6, 3, -6]}
        color={0xffcc77}
        castShadow
      />
      <pointLight
        ref={ref2}
        intensity={1.1}
        position={[6, 3, 6]}
        color={0xffcc77}
        castShadow
      />
    </group>
  )
}

const Terrain = () => {
  const mesh = useUpdate(({ geometry }) => {
    noise.seed(Math.random());

    let pos = geometry.getAttribute("position");
    let pa = pos.array;
    const hVerts = geometry.parameters.heightSegments + 1;
    const wVerts = geometry.parameters.widthSegments + 1;

    for (let j = 0; j < hVerts; j++) {
      for (let i = 0; i < wVerts; i++) {
        const ex = 1.1;
        pa[3 * (j * wVerts + i) + 2] =
          (noise.simplex2(i / 100, j / 100) +
            noise.simplex2((i + 200) / 50, j / 50) * Math.pow(ex, 1) +
            noise.simplex2((i + 400) / 25, j / 25) * Math.pow(ex, 2) +
            noise.simplex2((i + 600) / 12.5, j / 12.5) * Math.pow(ex, 3) +
            +(noise.simplex2((i + 800) / 6.25, j / 6.25) * Math.pow(ex, 4))) /
          2;
      }
    }

    pos.needsUpdate = true;
  });

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2 + 0.4, 0, 0]} position={[0, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[25, 25, 75, 75]} />
      <meshPhongMaterial
        attach="material"
        color={0Xc56f01}
        specular={0Xc56f01}
        shininess={3}
        flatShading
      />
    </mesh>
  );
};  

const Scene = () => {

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Canvas
        gl={{ alpha: false, antialias: false, logarithmicDepthBuffer: true }}
        camera={{ zoom: 40, position: [0, 0, 500] }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x070712)
          gl.toneMapping = THREE.ACESFilmicToneMapping
          gl.outputEncoding = THREE.sRGBEncoding
        }}
      >
        <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
          <Camera enableZoom={false} autoRotate={true}/>
          <Lights />
          <Terrain />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;