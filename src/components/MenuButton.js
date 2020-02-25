import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import CloseButton from './CloseButton.js'

function MenuButton(props){
  const controlsOpen = useAnimation()
  const controlsClose = useAnimation()
  
  if(props.openMenu){
    controlsClose.start({
      rotate:360,
      scale:1,
      opacity:1,
      transition:{
        type:'spring'
      }
    })
    controlsOpen.start({
      rotate:360,
      scale:0,
      opacity:0,
      transition:{
        type:'spring'
      }
    })
  }else{
    controlsClose.start({
      scale:0,
      opacity:0,
      rotate:0,
      transition:{
        type:'spring'
      }
    })
    controlsOpen.start({
      rotate:0,
      opacity:1,
      scale:1,
      transition:{
        type:'spring'
      }
    })
  }

  const closeClicked = () =>{

  }

  return(
    <motion.div class='menu-button'  onClick={() => {props.toggleMenu()}} style={{cursor:"pointer"}}>
      <motion.div animate={controlsOpen} class='open-menu'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 27">
          <g id="Group_4" data-name="Group 4" transform="translate(-463.5 -37)">
            <line style={{transition:'0.5s'}} id="Line_5" data-name="Line 5" x2="37" transform="translate(463.5 38.5)" fill="none" stroke={props.colors.textColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_6" data-name="Line 6" x2="37" transform="translate(463.5 50.5)" fill="none" stroke={props.colors.textColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_7" data-name="Line 7" x2="37" transform="translate(463.5 62.5)" fill="none" stroke={props.colors.textColor} stroke-width="3"/>
          </g>
        </svg>
      </motion.div>
      <motion.div class='close-menu' style={{transform:'scale(0)', opacity:0}}  animate={controlsClose}>
        <CloseButton closeClicked={closeClicked} colors={props.colors}/>
      </motion.div>
    </motion.div>
  )
}

export default MenuButton;