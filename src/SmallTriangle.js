import React from 'react'
import {motion} from 'framer-motion'

function SmallTriangle(props){
  return(
    <motion.svg drag dragConstraints={props.appContainer} animate={{rotate:[0, 10, -10, 0], translateY:[0, 20, -20, 0]}} transition={{duration:7.5,ease: 'easeInOut', loop:Infinity}} xmlns="http://www.w3.org/2000/svg" className='small-triangle' viewBox="0 0 172.664 189.664">
      <g id="Polygon_6" data-name="Polygon 6" transform="matrix(0.829, 0.559, -0.559, 0.829, 90.589, 0)" x='50%' y='50%' fill={props.colors.accentColor} opacity="0.12">
        <path d="M49.5,0,99,162H0Z" stroke="none"/>
        <path  d="M 49.49995803833008 3.422103881835938 L 1.3511962890625 161 L 97.6488037109375 161 L 49.49995803833008 3.422103881835938 M 49.49996185302734 0 L 99 162 L 7.62939453125e-06 162 L 49.49996185302734 0 Z" stroke="none" fill={props.colors.accentColor}/>
      </g>
    </motion.svg>
  )
}

export default SmallTriangle