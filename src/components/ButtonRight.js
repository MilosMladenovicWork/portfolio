import React from 'react'
import {Link} from 'react-router-dom'
import './styles/ButtonRight.css'

function ButtonRight(props){
    return(
        <div className='button-right'
            style={{
                color:props.colors.textColor,
                boxShadow:props.colors.shadow,
                backgroundColor:props.colors.mainColor
                }}
            >
            <Link to={{
            pathname:`/portfolio/${props.link}`,
            state:{
                position:props.detailPosition
            }
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke={props.colors.textColor} fill={props.colors.textColor} d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill='none' d="M0 0h24v24H0V0z"/></svg>
            </Link>
        </div>
    )
}

export default ButtonRight