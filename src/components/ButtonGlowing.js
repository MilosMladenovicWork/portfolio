import React from 'react'
import {motion} from 'framer-motion'
import './ButtonGlowing.css'

function ButtonGlowing(props){
  return(
    <motion.button
      animate={{y:["0vh", "-4vh", "0vh"]}} transition={{translateY:{duration:1}, loop:Infinity ,delay:1, repeatDelay:5 }} className='button-glowing' 
      style={{
        color:props.colors.mainColor,
        backgroundColor:props.colors.accentColor,
        boxShadow:props.colors.shadow,
        display:props.submit || props.submit === undefined ? 'block' : 'none' 
      }}
      onClick={
        props.clickHandler
      }
      >
      {props.text}
    </motion.button>
  )
}

export default ButtonGlowing