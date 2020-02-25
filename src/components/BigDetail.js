import React from 'react'
import './styles/BigDetail.css'

function BigDetail(props){
  return(
    <div class='big-detail'>
      {props.children}
    </div>
  )
}

export default BigDetail