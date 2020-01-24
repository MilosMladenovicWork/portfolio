import React from 'react'
import './Paragraph.css'
import Typed from '../node_modules/react-typed'

function Paragraph(props){
  return(
    <p className='paragraph' style={{color:props.colors.textColor}}>
      <Typed
        strings={[props.text]}
        typeSpeed={40}
        onComplete={(self) =>{
          setTimeout(() => {
            self.cursor.style.opacity = 0
          }, 1000)
        }}
      />
    </p>
  )
}

export default Paragraph