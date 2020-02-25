import React from 'react'
import './styles/FixedDownBar.css'

function FixedDownBar(props){
    return(
        <div className='fixed-down-bar'>
            {props.children}
        </div>
    )
}

export default FixedDownBar