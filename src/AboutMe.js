import React from 'react'
import {motion} from 'framer-motion'
import Heading from './Heading'
import HomeText from './HomeText'
import DotDetail from './DotDetail'
import ProjectImage from './ProjectImage'
import BigDetail from './BigDetail'
import BigTriangle from './BigTriangle'
import MediumTriangle from './MediumTriangle'
import './AboutMe.css'
import Image from './images/project.png'

function AboutMe(props){
  return(
    <motion.div
      exit={{opacity:0}}
      animate={{opacity:1}} 
      initial={{opacity:0}}
      transition={{duration:0.25}}
      className='about-me'
    >
      <Heading text='About me' colors={props.colors}/>
      <ProjectImage image={Image} colors={props.colors}/>
      <HomeText 
        colors={props.colors} 
        speed={1}
        sentences={[
          `<span class='highlite'>My name is</span> Milos Mladenovic.
           <span class='highlite'>I am a</span> Front End Web Developer.
           <span class='highlite'>I have been developing</span> Websites and Web Applications for more than 1 year.
           <span class='highlite'>Technologies I use are:</span> HTML, CSS, JavaScript, SCSS, React, Node.js, MongoDB, Bootstrap, JQuery.
           <span class='highlite'>I am working with wide variety of</span> APIs.
           <span class='highlite'>My latest projects are</span> 
            <a href="/portfolio/${props.projects[0].projectName}/idea">${props.projects[0].projectName}</a>,
            <a href="/portfolio/${props.projects[1].projectName}/idea">${props.projects[1].projectName}</a>, 
            <a href="/portfolio/${props.projects[0].projectName}/idea">${props.projects[2].projectName}</a>.`
        ]
          }/>
      <DotDetail position={{top:0,left:0}} colors={props.colors}/>
      <DotDetail position={{bottom:0,right:0}} colors={props.colors}/>
      <BigDetail colors={props.colors} appContainer={props.appContainer}>
          <MediumTriangle {...props}/>
          <BigTriangle {...props}/>
      </BigDetail>
    </motion.div>
  )
}

export default AboutMe