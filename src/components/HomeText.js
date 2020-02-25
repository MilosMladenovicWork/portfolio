import React from 'react'
import './HomeText.css'
import Typed from 'react-typed'

function HomeText(props){
  const stringArr = [];
  props.sentences.map((sentence) => stringArr.push(sentence))
  return(
    <p className='main-text' style={{color:props.colors.textColor}}>
      <Typed 
        strings={stringArr}
        typeSpeed={props.speed || 70}
        backSpeed={30}
        smartBackspace={true}
      />
    </p>
  )
}

export default HomeText