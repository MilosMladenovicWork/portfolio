import React from 'react'
import Typed from 'react-typed'
import './styles/Heading.css'



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