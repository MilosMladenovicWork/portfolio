import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonLeft.css'

function ButtonLeft(props){
    return(
        <div 
            className='button-left'
            style={{
                color:props.colors.textColor,
                boxShadow:props.colors.shadow,
                backgroundColor:props.colors.mainColor
                }}>
            <Link to={{
                pathname:`/portfolio/${props.link}`,
                state:{
                    position:props.detailPosition
                }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke={props.colors.textColor} fill={props.colors.textColor} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
            </Link>
        </div>
    )
}

export default ButtonLeft