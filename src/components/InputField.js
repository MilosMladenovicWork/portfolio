import React from 'react'

function InputField(props){
  return(
    <input 
      onChange={(e)=>{props.changeHandler(e)}}
      type='text' 
      value={props.form[props.name]}
      placeholder={props.placeholder} 
      name={props.name}
      style={{
        borderBottom:`3px solid ${props.colors.textColor}`,
        color:props.colors.textColor}}
    />
  )
}

export default InputField