import React from 'react'
import {motion} from 'framer-motion'
import { Canvas } from 'react-three-fiber'
import Box from './Octahedron.js'
import './Canvas.css'

function CanvasThreeJs(props){
  return (
    <motion.div drag dragConstraints={props.appContainer} animate={{rotate:props.rotate, translateY:[0, 20, -20, 0]}} transition={{duration:20, ease: 'easeInOut', loop:Infinity}} className='canvas'>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, props.distance]} {...props} />
      </Canvas>
    </motion.div>
  )
}

export default CanvasThreeJs