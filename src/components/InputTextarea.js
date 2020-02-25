import React from 'react'

function InputTextarea(props){
  return(
    <textarea 
      onChange={(e)=>{props.changeHandler(e)}}
      value={props.form[props.name]}
      placeholder={props.placeholder}
      name={props.name}
      style={{
        borderBottom:`3px solid ${props.colors.textColor}`,
        color:props.colors.textColor}}>
    </textarea>
  )
}

export default InputTextarea