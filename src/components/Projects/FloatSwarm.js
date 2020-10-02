import * as THREE from 'three'
import '../../App.css';
import React, { useCallback, useRef, useMemo, Fragment } from 'react'
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

const Swarm = ({ count, mouse }) => {
  const mesh = useRef()
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -20 + Math.random() * 40
      const yFactor = -20 + Math.random() * 40
      const zFactor = -20 + Math.random() * 40
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame(state => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle
      t = particle.t += speed / 2
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 5)
      particle.mx += (mouse.current[0] - particle.mx) * 0.02
      particle.my += (-mouse.current[1] - particle.my) * 0.02
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.set(s, s, s)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })
  
  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshPhongMaterial attach="material" color={0x0f0e0a} />
    </instancedMesh>
  )
}

const FloatSwarm = () => {
  const classes = useStyles();

  const mouse = useRef([0, 0])
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]), [])

  return (
    <Fragment>
      <div className={classes.overlay}>
        <ProjectNavBar next_url={"/horizon"} />
      </div>
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
    </Fragment>
  )
}

export default FloatSwarm;