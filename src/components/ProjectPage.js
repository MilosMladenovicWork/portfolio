import React from 'react'
import {useLocation} from 'react-router-dom'
import ProjectPageProject from './ProjectPageProject'

function ProjectPage(props){
  const location = useLocation()
  const project = props.projects.filter((project) => project.projectName === props.match.params.projectName )
  return(
      <div className='portfolio-project'>
            <ProjectPageProject 
              params={props.match.params}
              colors={props.colors}
              project={project[0]}
            />
      </div>
  )
}

export default ProjectPage