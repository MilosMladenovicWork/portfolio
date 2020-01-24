import React from 'react'
import './Heading.css'
import Typed from '../node_modules/react-typed'



function Heading(props){
  return(
    <h1 className='heading' style={{color:props.colors.textColor, textAlign:props.textAlign}}>
      <Typed
        strings={[props.text]}
        typeSpeed={70}
        onComplete={(self) =>{
          setTimeout(() => {
            self.cursor.style.opacity = 0
          }, 1000)
        }}
      />
    </h1>
    )
}

export default Heading;