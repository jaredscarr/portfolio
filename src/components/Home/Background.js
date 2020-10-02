import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Background = ({ constructorArgs, position, wireframe }) => {
  const mesh = useRef();
 
  useFrame(() => (mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh} position={position} visible>
      <sphereBufferGeometry attach="geometry" args={constructorArgs} />
      <meshStandardMaterial attach="material" color="darkblue" wireframe />
    </mesh>
  );
};

export default Background;