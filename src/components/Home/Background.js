import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'; 
import { useSnapshot } from 'valtio';
import { Minimap } from './Minimap';
import { state, damp } from './util';

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const scroll = useScroll();
  const { clicked, urls } = useSnapshot(state);
  const [hovered, hover] = useState(false);
  // const click = () => (state.clicked = index === clicked ? null : index);
  const click = () => {
    state.clicked = index === clicked ? null : index;
    if (index === clicked) {
      if(ref.current.href !=null) {
        window.open(ref.current.href, "_blank");
      }
    }
  }
  const over = () => hover(true);
  const out = () => hover(false);

  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length);
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta);
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta);
    if (clicked !== null && index < clicked) ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta);
    if (clicked !== null && index > clicked) ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta);
    if (clicked === null || clicked === index) ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta);
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta);
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1);
  })

  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} href={props.href} />
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  const hrefs = [
    'https://master.d3me9qsquudsan.amplifyapp.com/',
    'https://main.d3npdl9pvgwz4b.amplifyapp.com/',
    'https://www.linkedin.com/in/jaredscarr',
    'https://github.com/jaredscarr',
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,  
  ] // TODO: map hrefs to the right keys

  return (
    <ScrollControls horizontal damping={10} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} href={hrefs[i]} />)}
      </Scroll>
    </ScrollControls>
  )
}

const Background = ({ darkState }) => {

  return (
    <Items />
  );
}

export default Background;