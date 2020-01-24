import React from 'react'
import {useLocation} from 'react-router-dom'
import {motion} from 'framer-motion'
import Project from './Project'
import Heading from './Heading'
import Paragraph from './Paragraph'
import ButtonGlowing from './ButtonGlowing'
import FixedDownBar from './FixedDownBar'
import ButtonLeft from './ButtonLeft'
import ButtonRight from './ButtonRight'
import './ProjectPageProject.css'


function ProjectPageProject(props){
    const location = useLocation()
    const params = props.params;
    const page = props.project[props.params.page]
    let leftLink;
    let rightLink;
    if(params.page === 'idea'){
        leftLink = `${params.projectName}/technologies`
        rightLink = `${params.projectName}/technologies`
    }else if(params.page === 'technologies'){
        leftLink = `${params.projectName}/idea`
        rightLink = `${params.projectName}/idea`
    }

    return(
        <motion.div 
            className='portfolio-page-project'
            exit={{opacity:0}}
            animate={{opacity:1}} 
            initial={{opacity:0}}
        >
            <Heading text={props.project.projectName} colors={props.colors} />
            <Project image={page.image} text={page.subheading} colors={props.colors} detailPosition={props.project.detailPosition}/>
            <Paragraph text={page.paragraph} colors={props.colors}/>
            <FixedDownBar>
                <ButtonLeft colors={props.colors} link={leftLink}/>
                <ButtonGlowing text='VISIT' colors={props.colors}/>
                <ButtonRight colors={props.colors} link={rightLink}/>
            </FixedDownBar>
        </motion.div>
    )
}

export default ProjectPageProject