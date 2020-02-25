import React from 'react'
import LightButton from './LightButton'
import Logo from './Logo'
import MenuButton from './MenuButton'
import MenuButtons from './MenuButtons'
import './styles/NavBar.css'

function NavBar(props){
  if(window.outerWidth >= 1200){
    return(
      <nav style={{backgroundColor:props.colors.mainColor}}>
        <Logo colors={props.colors}/>
        <MenuButtons colors={props.colors} toggleMenu={props.toggleMenu}/>
        <LightButton colors={props.colors} toggleLight={props.toggleLight}/>
      </nav>
    )
  }else{
    return (
      <nav style={{backgroundColor:props.colors.mainColor}}>
        <LightButton colors={props.colors} toggleLight={props.toggleLight}/>
        <Logo colors={props.colors}/>
        <MenuButton colors={props.colors} toggleMenu={props.toggleMenu} openMenu={props.openMenu}/>
      </nav>
    )
  }
}

export default NavBar