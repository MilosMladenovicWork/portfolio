import React from 'react'
import './FixedDownBar.css'

function FixedDownBar(props){
    return(
        <div className='fixed-down-bar'>
            {props.children}
        </div>
    )
}

export default FixedDownBar