import React, {useState, useEffect} from 'react'
import './styles/Tip.css'
import CloseButton from './CloseButton.js'
import {motion, useAnimation} from 'framer-motion'

function Tip(props){

  const [close, setClose] = useState(false)

  const closeClicked = () => {
    setClose((prevState) => {
      return !prevState
    })
  }

  const controls = useAnimation()

  useEffect(() => {
    if(props.open === false){
      if(close === false){
        setClose(true)
      }
    }else if(props.open === true){
      if(close === true ){
        setClose(false)
      }
    }
  }, [props.open])

  if(close){
    controls.start({
      y:'100vh',
      transition:{
        delay:0,
        duration:5
      }
    })
  }else{
    controls.start({
      y:'0vh'
    })
  }

  return(
    <motion.div animate={controls} transition={{duration:1, delay:props.delay, type:'spring', stiffness:150}} class='tip' style={{
      backgroundColor:props.colors.mainColor,
      boxShadow:props.colors.shadow
      }}>
      <p style={{color:props.colors.accentColor}}>{props.title || 'Did you know?'}</p>
      <p style={{color:props.colors.textColor}}>{props.text}</p>
      <div class='close-container'>
        <CloseButton closeClicked={closeClicked} colors={props.colors}/>
      </div>
    </motion.div>
  )
}

export default Tip