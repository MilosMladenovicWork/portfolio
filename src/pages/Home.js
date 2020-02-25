import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Heading from '../components/Heading.js'
import HomeText from '../components/HomeText.js'
import ButtonGlowing from '../components/ButtonGlowing.js'
import ButtonClassic from '../components/ButtonClassic.js'
import DotDetail from '../components/DotDetail.js'
import BigDetail from '../components/BigDetail.js'
import Tip from '../components/Tip.js'
import CanvasThreeJs from '../components/CanvasThreeJs'
import './styles/Home.css'

function Home(props){

  return(
    <motion.div
      exit={{opacity:0}}
      animate={{opacity:1}} 
      initial={{opacity:0}}
      transition={{duration:0.25}}
      className='home'
      >
      <Heading text='WELCOME!' colors={props.colors}/>
      <HomeText 
        colors={props.colors} 
        sentences={[
          `<span class='highlite'> I am building</span> stunning websites.`,
          `<span class='highlite'>My name is</span> Milos Mladenovic.`,
        ]
          }/>
      <Link to='/portfolio' style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
        <ButtonGlowing text='VIEW MY WORK' colors={props.colors}/>
      </Link>
      <Link to='/contact' style={{display:'flex', alignItems:'center', textDecoration:'none'}}>
        <ButtonClassic text='CONTACT ME' colors={props.colors}/>
      </Link>
      <DotDetail position={{top:0,left:0}} colors={props.colors}/>
      <DotDetail position={{bottom:0,right:0}} colors={props.colors}/>
      <BigDetail colors={props.colors} appContainer={props.appContainer}>
        <CanvasThreeJs rotate={[20, 0, -20, 20]} {...props} distance={-4}/>
        <CanvasThreeJs rotate={[0, -10, 10, 0]} {...props} distance={1}/>
        <CanvasThreeJs rotate={[-10, 10, 0, -10]}  {...props} distance={-1}/>
      </BigDetail>
      <Tip colors={props.colors} delay={10} text={'You can change theme by pressing lamp button!'}/>
    </motion.div>
  )
}

export default Home;