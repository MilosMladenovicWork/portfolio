import React from 'react'
import MenuButtons from './MenuButtons.js'
import FixedDownBar from './FixedDownBar'
import InstagramLink from './InstagramLink'
import FacebookLink from './FacebookLink'
import LinkedinLink from './LinkedinLink'
import './Menu.css'

function Menu(props){

    return(
    <div className='menu' style={{
        backgroundColor:props.colors.mainColor,
        boxShadow:props.colors.shadow,
        transform: props.openMenu ? 'translateX(-50%) translateY(0)' : null,
        display:window.outerWidth >= 1200 ? 'none':'block'
        }}>
        <MenuButtons colors={props.colors} toggleMenu={props.toggleMenu}/>
        <FixedDownBar colors={props.colors}>
            <InstagramLink colors={props.colors}/>
            <FacebookLink colors={props.colors}/>
            <LinkedinLink colors={props.colors}/>
        </FixedDownBar>
    </div>
    )
}

export default Menu