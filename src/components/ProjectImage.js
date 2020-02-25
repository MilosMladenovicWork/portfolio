import React from 'react'
import './ProjectImage.css'

function ProjectImage(props){
  return(
    <div className='project-image'>
      <img src={props.image} style={{boxShadow:props.colors.shadow}}/>
    </div>
  )
}

export default ProjectImage