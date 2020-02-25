import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonClassic from './ButtonClassic.js'
import './styles/MenuButtons.css'
import './styles/activeLink.css'

function MenuButtons(props){
    return(
    <div className='menu-buttons'>
        <NavLink exact to='/' activeClassName='activeLink' onClick={() => props.toggleMenu()}>
            <ButtonClassic text='HOME' colors={props.colors}/>
        </NavLink> 
        <NavLink exact to='/portfolio' activeClassName='activeLink' onClick={() => props.toggleMenu()}>
            <ButtonClassic text='VIEW MY WORK' colors={props.colors}/>
        </NavLink>
        <NavLink exact to='/about' activeClassName='activeLink' onClick={() => props.toggleMenu()}>
            <ButtonClassic text='ABOUT ME' colors={props.colors}/>
        </NavLink>
        <NavLink exact to='/contact' activeClassName='activeLink' onClick={() => props.toggleMenu()}>
            <ButtonClassic text='CONTACT ME' colors={props.colors}/>
        </NavLink>
    </div>
    )
}

export default MenuButtons