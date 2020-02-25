import React from 'react'
import './styles/ButtonClassic.css'

function ButtonClassic(props){
  return(
  <button className='button-classic' style={{
    backgroundColor:props.colors.mainColor,
    color:props.colors.accentColor,
    boxShadow:props.colors.shadow
  }}>
    {props.text}
  </button>
  )
}

export default ButtonClassic