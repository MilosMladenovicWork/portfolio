import React from 'react'
import {Link} from 'react-router-dom'
import ProjectImage from './ProjectImage'
import ProjectHeading from './ProjectHeading'
import DotDetail from './DotDetail'
import BigDetail from './BigDetail.js'
import MediumTriangle from './MediumTriangle.js'
import './Project.css'

function Project(props){
  return(
      <div class='project'>
        <ProjectImage image={props.image} colors={props.colors}/>
        <ProjectHeading text={props.text} colors={props.colors}/>
        <DotDetail colors={props.colors} position={props.detailPosition} />
      </div>
  )
}

export default Project