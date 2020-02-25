import React from 'react'
import './styles/Form.css'

function Form(props){
  return(
    <form method='POST' target='_blank' className='form' style={{
      color:props.colors.textColor,
      borderColor:props.colors.textColor
    }}>
      {props.children}
    </form>
  )
}

export default Form