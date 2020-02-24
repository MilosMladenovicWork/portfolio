import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import ProjectImage from './ProjectImage'
import ProjectHeading from './ProjectHeading'
import DotDetail from './DotDetail'
import './Project.css'

function Project(props){
  return(
    <VisibilitySensor partialVisibility={true}>
      {( {isVisible} ) => (
          <div class='project' style={{opacity: isVisible ? 1 : 0, transition: "1s"}}>
            <ProjectImage image={props.image} colors={props.colors}/>
            <ProjectHeading text={props.text} colors={props.colors}/>
            <DotDetail colors={props.colors} position={props.detailPosition} />
          </div>
      )}
    </VisibilitySensor>
  )
}

export default Project