import React from 'react'

function CloseButton(props){
  return(
    <svg onClick={() => props.closeClicked()} style={{cursor:"pointer"}} class='close-button' xmlns="http://www.w3.org/2000/svg" width="29.121" height="29.121" viewBox="0 0 29.121 29.121">
      <g id="Group_38" data-name="Group 38" transform="translate(302.561 -228.439)">
        <line id="Line_8" data-name="Line 8" y1="27" x2="27" transform="translate(-301.5 229.5)" fill="none" stroke={props.colors.textColor} stroke-width="3"/>
        <line id="Line_9" data-name="Line 9" y1="27" x2="27" transform="translate(-274.5 229.5) rotate(90)" fill="none" stroke={props.colors.textColor} stroke-width="3"/>
      </g>
    </svg>
  )

}

export default CloseButton

