import React from 'react'
import {motion} from 'framer-motion'

function BigTriangle(props){
  return(
    <motion.svg drag dragConstraints={props.appContainer} animate={{rotate:[0, 10, -10, 0], translateY:[0, 20, -20, 0]}} transition={{duration:20, ease: 'easeInOut', loop:Infinity}} xmlns="http://www.w3.org/2000/svg" className='big-triangle' viewBox="0 0 343 562">
      <g id="Polygon_4" data-name="Polygon 4" fill={props.colors.accentColor} opacity="0.6">
        <path d="M 342.3246765136719 561.5 L 0.6753259301185608 561.5 L 171.5 1.713021397590637 L 342.3246765136719 561.5 Z" stroke="none"/>
        <path d="M 171.5 3.426025390625 L 1.35064697265625 561 L 341.6493530273438 561 L 171.5 3.426025390625 M 171.5 0 L 343 562 L 0 562 L 171.5 0 Z" stroke="none" fill={props.colors.accentColor}/>
      </g>
    </motion.svg>
  )
}

export default BigTriangle
