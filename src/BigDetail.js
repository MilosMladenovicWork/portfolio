import React from 'react'
import './BigDetail.css'
import {motion} from 'framer-motion'

function BigDetail(props){
  return(
    <div class='big-detail'>
      {props.children}
    </div>
  )
}

export default BigDetail