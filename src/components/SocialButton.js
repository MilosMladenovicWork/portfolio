import React from 'react'
import './styles/SocialButton.css'

function SocialButton(props){
  return(
    <div 
      class='social-button'
      style={{
        boxShadow:props.colors.shadow,
        backgroundColor:props.colors.mainColor
      }}
    >
      {props.svg}
    </div>
  )
}

export default SocialButton