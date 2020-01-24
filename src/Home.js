import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import './Home.css'
import Heading from './Heading.js'
import HomeText from './HomeText.js'
import ButtonGlowing from './ButtonGlowing.js'
import ButtonClassic from './ButtonClassic.js'
import DotDetail from './DotDetail.js'
import BigDetail from './BigDetail.js'
import BigTriangle from './BigTriangle.js'
import SmallTriangle from './SmallTriangle.js'
import MediumTriangle from './MediumTriangle.js'
import Tip from './Tip.js'

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
          `<span class='highlite'>My name is</span> Milos Mladenovic.`,
          `<span class='highlite'> I am a</span> Front End Web Developer.`
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
        <SmallTriangle {...props}/>
        <BigTriangle {...props}/>
        <MediumTriangle {...props}/>
      </BigDetail>
      <Tip colors={props.colors} delay={10} text={'You can change theme by pressing lamp button!'}/>
    </motion.div>
  )
}

export default Home;