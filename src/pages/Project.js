import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import ProjectImage from '../components/ProjectImage'
import ProjectHeading from '../components/ProjectHeading'
import DotDetail from '../components/DotDetail'
import './styles/Project.css'

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