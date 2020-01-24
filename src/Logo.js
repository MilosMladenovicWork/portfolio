import React from 'react'
import {Link} from 'react-router-dom'

function Logo(props){
  return(
    <Link to='/' className='logo'>
      <svg xmlns="http://www.w3.org/2000/svg" width="144.121" height="52.121" viewBox="0 0 144.121 52.121">
        <g id="Group_37" data-name="Group 37" transform="translate(-138.439 -20.439)">
          <g id="Group_1" data-name="Group 1" transform="translate(496 36)">
            <line style={{transition:'0.5s'}} id="Line_1" data-name="Line 1" y1="37" x2="37" transform="translate(-356.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_2" data-name="Line 2" x2="37" y2="37" transform="translate(-321.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_3" data-name="Line 3" y1="37" x2="37" transform="translate(-286.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_4" data-name="Line 4" x2="37" y2="37" transform="translate(-251.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
          </g>
          <g id="Group_2" data-name="Group 2" transform="translate(-75 57) rotate(180)" opacity="0.12">
            <line style={{transition:'0.5s'}} id="Line_1-2" data-name="Line 1" y1="37" x2="37" transform="translate(-356.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_2-2" data-name="Line 2" x2="37" y2="37" transform="translate(-321.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_3-2" data-name="Line 3" y1="37" x2="37" transform="translate(-286.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
            <line style={{transition:'0.5s'}} id="Line_4-2" data-name="Line 4" x2="37" y2="37" transform="translate(-251.5 -14.5)" fill="none" stroke={props.colors.accentColor} stroke-width="3"/>
          </g>
        </g>
      </svg>
    </Link>
  )
}

export default Logo;