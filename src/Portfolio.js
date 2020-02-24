import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Heading from './Heading.js'
import Project from './Project.js'
import './Portfolio.css'

function Portfolio(props){


  const projects = props.projects.map((project) => 
  <Link to={`/portfolio/${project.projectName}/idea`}>
    <Project 
      text={project.projectName} 
      image={project.idea.image}
      detailPosition={project.detailPosition}
      colors={props.colors}
    />
  </Link>
    )

  return(
      <motion.div 
        exit={{y:'100%'}}
        animate={{y:'0vh'}} 
        initial={{y:'100%'}}
        className='portfolio'
      >
        <Heading text='MY WORK' colors={props.colors} textAlign='center'/>
        {projects}
      </motion.div>
  )
}

export default Portfolio