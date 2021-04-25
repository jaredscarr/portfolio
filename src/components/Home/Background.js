import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring, animated } from 'react-spring/three';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import getTheme from '../../Theme';

// const getHexInt = (color) => return parseInt(color.substr(1), 16);

// function Box(props) {

//   const mesh = useRef()
//   useFrame(() => (mesh.current.rotation.x += 0.01))

//   return (
//     <animated.mesh
//         {...props}
//         ref={mesh}
//       >
//         <boxGeometry
//           attach="geometry"
//           args={[2, 2, 2, 32, 32, 32]}
//         />
//         <animated.meshStandardMaterial attach="material" color={props.color} />
//       </animated.mesh>
//   )
// }

function OctahedronGeometry(props) {

  const mesh = useRef();
  // add dependency array
  // what is this being used for / as? is the animation being handled in the spring or here?
  useEffect(() => mesh.current.rotation.x += 2);

  return (
    <animated.mesh
        {...props}
        ref={mesh}
      >
        <octahedronGeometry
          attach="geometry"
          args={props.args}
        />
        <animated.meshStandardMaterial attach="material" color={props.color} wireframe={props.wireframe} />
      </animated.mesh>
  )
}

const Menu = ({ menuState, darkState }) => {

  const paletteType = darkState ? 'dark' : 'light';
  const theme = getTheme(paletteType);

  const vertices = [[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]];
  const { color, pos, ...props } = useSpring({
    color: darkState ? theme.palette.secondary.light : theme.palette.secondary.dark,
    pos: menuState ? [0, 0, 0] : [0, 0, 2],
    'material-opacity': menuState ? 0.25 : 0.6,
    scale: menuState ? [1, 1, 1] : [1.5, 1.5, 1.5],
    rotation: menuState ? [0, 0, 0] : [THREE.Math.degToRad(180), 0, THREE.Math.degToRad(45)],
    config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
  });

  return (
    <group>
      <animated.line position={pos}>
        <bufferGeometry attach="geometry" vertices={vertices.map(v => new THREE.Vector3(...v))} />
        <animated.lineBasicMaterial attach="material" color={color} />
      </animated.line>
      <animated.mesh {...props}>
        <octahedronGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color={darkState ? theme.palette.primary.dark : theme.palette.primary.light} />
      </animated.mesh>
    </group>
  );
}

// const BackDrop = ({ darkState }) => {

//   const dark = Theme.palette.primary.dark;
//   const light = Theme.palette.primary.main;

//   return (
//     <mesh receiveShadow position={[0, -1, -5]}>
//       <planeBufferGeometry attach="geometry" args={[500, 500]} />
//       <meshStandardMaterial attach="material" color={darkState ? dark : light} />
//     </mesh>
//   );
// }

const Background = ({ menuState, darkState }) => {

  // const octaOneProps = useSpring({
  //   position: menuState ? [-2, 0, 0] : [2, 0, 0],
  //   scale: menuState ? [0, 0, 0] : [0.4, 0.4, 0.4],
  //   config: {
  //     duration: 4000
  //   }
    // to: {
    //   position: [2, 0, 0],
    //   scale: menuState ? [0, 0, 0] : [0.4, 0.4, 0.4],
    // },
    // from: {
    //   position: [-2, 0, 0],
    //   scale: menuState ? [0.4, 0.4, 0.4] : [0, 0, 0],
    // },
    // config: {
    //   duration: 2000,
    // }
  // });

  // const octaTwoProps = useSpring({
  //   to: {
  //     position: [-2, 0, 0],
  //     scale: menuState ? [0.4, 0.4, 0.4] : [0, 0, 0],
  //   },
  //   from: {
  //     position: [2, 0, 0],
  //     scale: menuState ? [0, 0, 0] : [0.4, 0.4, 0.4],
  //   },
  //   config: {
  //     duration: 3000,
  //   }
  // });


  // const menuProps = useSpring({
  //   position: menuState ? [-10, 10, 0] : [0, 0, 0],
  // });

    return (
      <React.Fragment>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Menu menuState={menuState} darkState={darkState}/>
      </React.Fragment>
    );

  // return (
  //   <React.Fragment>
  //     <BackDrop darkState={darkState} />
  //     <ambientLight />
  //     <pointLight position={[10, 10, 10]} />
  //     <Menu menuState={menuState} darkState={darkState}/>
  //   </React.Fragment>
  // );

	// return (
 //    <React.Fragment>
 //      <ambientLight />
 //      <pointLight position={[10, 10, 10]} />
 //      <OctahedronGeometry args={[2, 1]} position={octaOneProps.position} scale={octaOneProps.scale} color='blue' wireframe={true} />
 //    </React.Fragment>
 //  );
}

export default Background;