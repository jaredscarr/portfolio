import React, { useRef, useMemo, Fragment } from 'react'
import { Billboard, useTexture, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cloud = ({ size = 1, opacity = 0.1, speed = 0.4, spread = 10, length = 1.5, segments = 20, dir = 1, ...props }) => {
  const group = useRef()
  const texture = useTexture("/cloud.png")

  const clouds = useMemo(
    () =>
      [...new Array(segments)].map((_, index) => ({
        x: spread / 2 - Math.random() * spread,
        y: spread / 2 - Math.random() * spread,
        scale: 0.4 + Math.sin(((index + 1) / segments) * Math.PI) * ((0.2 + Math.random()) * 10) * size,
        density: Math.max(0.2, Math.random()),
        rotation: Math.max(0.002, 0.005 * Math.random()) * speed,
      })),
    [spread, segments, speed, size],
  )

  useFrame((state) =>
    group.current?.children.forEach((cloud, index) => {
      cloud.rotation.z += clouds[index].rotation * dir
      cloud.scale.setScalar(clouds[index].scale + (((1 + Math.sin(state.clock.getElapsedTime() / 10)) / 2) * index) / 10)
    }),
  )

  return (
    <group {...props}>
      <group position={[0, 0, (segments / 2) * length]} ref={group}>
        {clouds.map(({ x, y, scale, density }, index) => (
          <Billboard key={index} scale={[scale, scale, scale]} position={[x, y, -index * length]} lockZ>
            <meshStandardMaterial map={texture} transparent opacity={(scale / 6) * density * opacity} depthTest={false} />
          </Billboard>
        ))}
      </group>
    </group>
  )
}

const Clouds = ({ menuState }) => {
  return <Cloud size={2} rotation={[0, Math.PI / 2, 0]} position={[0, 75, -100]} scale={[10, 10, 10]} />
}

const NightSky = () => {
  return ( 
    <Stars
      radius={100} // Radius of the inner sphere (default=100)
      depth={50} // Depth of area where stars should fit (default=50)
      count={1000} // Amount of stars (default=5000)
      factor={4} // Size factor (default=4)
      saturation={0} // Saturation 0-1 (default=0)
      fade // Faded dots (default=false)
    />
  )
}

const Background = ({ menuState, darkState }) => {

  const sky = darkState ? <NightSky /> : undefined

  return (
    <Fragment>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      { sky }
      <Clouds menuState={menuState} />
    </Fragment>
  );
}

export default Background;