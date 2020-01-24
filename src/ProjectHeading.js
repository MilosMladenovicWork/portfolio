import React from 'react'
import './ProjectHeading.css'

function ProjectHeading(props){
  return(
    <div class='project-heading'>
      <h2 style={{color:props.colors.textColor}}>{props.text}</h2>
    </div>
  )
}

export default ProjectHeading