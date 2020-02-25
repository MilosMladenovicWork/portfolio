import React from 'react'
import SocialButton from './SocialButton'

function InstagramLink(props){
  return(
    <a href='http://instagram.com' rel="noopener noreferrer" target='_blank'>
      <SocialButton colors={props.colors} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.538 53.538"><path id="Path_18" data-name="Path 18" d="M2466.254,2455h31.03a11.312,11.312,0,0,1,11.254,11.254v31.03a11.312,11.312,0,0,1-11.254,11.254h-31.03A11.312,11.312,0,0,1,2455,2497.284v-31.03A11.312,11.312,0,0,1,2466.254,2455Zm31.877,8.775a1.113,1.113,0,0,1,0,2.226,1.113,1.113,0,0,1,0-2.226Zm-16.362,3.047a14.946,14.946,0,1,1-14.946,14.946A14.943,14.943,0,0,1,2481.769,2466.823Zm12.809,14.946a12.809,12.809,0,1,0-12.809,12.809A12.817,12.817,0,0,0,2494.578,2481.769Zm2.706-24.619h-31.03a9.11,9.11,0,0,0-9.1,9.1v31.03a9.11,9.11,0,0,0,9.1,9.1h31.03a9.11,9.11,0,0,0,9.1-9.1v-31.03a9.11,9.11,0,0,0-9.1-9.1Z" transform="translate(-2455 -2455)" fill={props.colors.accentColor}/></svg>}/>
    </a>
  )
}

export default InstagramLink