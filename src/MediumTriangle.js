import React from 'react'
import {motion} from 'framer-motion'

function MediumTriangle(props){
  return(
    <motion.svg drag dragConstraints={props.appContainer} animate={{rotate:[0, 10, -10, 0], translateY:[0, 20, -20, 0]}} transition={{duration:10, ease: 'easeInOut', loop:Infinity}} xmlns="http://www.w3.org/2000/svg" className='medium-triangle' viewBox="0 0 420.886 346.187">
      <g id="Polygon_5" data-name="Polygon 5" transform="translate(0 204.352) rotate(-67)" fill={props.colors.accentColor} opacity="0.41">
        <path d="M 221.3242645263672 362.5 L 0.675743043422699 362.5 L 111 1.709862351417542 L 221.3242645263672 362.5 Z" stroke="none"/>
        <path d="M 111 3.419677734375 L 1.351470947265625 362 L 220.6485290527344 362 L 111 3.419677734375 M 111 0 L 222 363 L 0 363 L 111 0 Z" stroke="none" fill={props.colors.accentColor}/>
      </g>
    </motion.svg>
  )
}

export default MediumTriangle