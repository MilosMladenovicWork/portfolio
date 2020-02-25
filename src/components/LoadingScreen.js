import React from 'react'
import CanvasThreeJs from './CanvasThreeJs'
import './LoadingScreen.css'

function LoadingScreen(props){
    return(
        <div 
            className='loading-screen'
            style={{
                display:props.loading === true ? 'flex' : 'none',
                backgroundColor:props.colors.mainColor
            }}
            >
            <CanvasThreeJs {...props} distance={-4}/>
            <p style={{color:props.colors.accentColor}}>Loading</p>
        </div>
    )
}

export default LoadingScreen