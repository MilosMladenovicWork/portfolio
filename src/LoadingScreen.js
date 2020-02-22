import React from 'react'
import CanvasThreeJs from './CanvasThreeJs'
import './LoadingScreen.css'

function LoadingScreen(props){
    return(
        <div 
            className='loading-screen'
            style={{
                display:props.loading === true ? 'flex' : 'none'
            }}
            >
            <CanvasThreeJs rotate={[0, -10, 10, 0]} {...props} distance={-4}/>
            <p style={{color:props.colors.accentColor}}>Loading</p>
        </div>
    )
}

export default LoadingScreen