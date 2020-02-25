import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import './Box.css'

function Box(props){
  const mesh = useRef()
  
  useFrame(() => (mesh.current.rotation.y += 0.01))
  
  return (
      <mesh
        {...props}
        ref={mesh}
        scale={[1.2, 2, 1]}
        >
        <octahedronGeometry attach="geometry" />
        <meshPhysicalMaterial  attach="material" metalness={0.4} color={props.colors.accentColor} />
      </mesh>
  )
}

export default Box