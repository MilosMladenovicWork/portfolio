import React from 'react'
import SocialButton from './SocialButton'

function LinkedinLink(props){
  return(
    <a href='http://linkedin.com' rel="noopener noreferrer" target='_blank'>
      <SocialButton colors={props.colors} svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.874 55.511"><path id="Path_13" data-name="Path 13" d="M2422.587,2472.765h12.022a1.1,1.1,0,0,1,1.1,1.114v1.39c2.688-2.661,4.523-2.635,9.505-2.57.616,0,1.324.013,2.635.013a11.941,11.941,0,0,1,8.483,3.553,12.156,12.156,0,0,1,3.54,8.535v24.6a1.114,1.114,0,0,1-1.114,1.114h-12.023a1.113,1.113,0,0,1-1.114-1.114V2488a4.968,4.968,0,0,0-4.956-4.956,5.07,5.07,0,0,0-3.33,1.245,4.943,4.943,0,0,0-1.626,3.029V2509.4a1.1,1.1,0,0,1-1.1,1.114h-12.022a1.114,1.114,0,0,1-1.115-1.114v-35.517A1.113,1.113,0,0,1,2422.587,2472.765Zm-18.25,0h12.022a1.111,1.111,0,0,1,1.1,1.114V2509.4a1.111,1.111,0,0,1-1.1,1.114h-12.022a1.113,1.113,0,0,1-1.114-1.114v-35.517A1.113,1.113,0,0,1,2404.337,2472.765Zm10.908,2.216h-9.807v33.3h9.807Zm-4.9-19.981a7.341,7.341,0,1,1-5.192,2.15A7.321,7.321,0,0,1,2410.342,2455Zm3.619,3.723a5.1,5.1,0,1,0,1.508,3.618A5.058,5.058,0,0,0,2413.96,2458.723Zm19.535,16.258h-9.807v33.3h9.807v-21.016a.368.368,0,0,1,.013-.118,7.079,7.079,0,0,1,2.36-4.523,7.274,7.274,0,0,1,4.8-1.809,7.207,7.207,0,0,1,7.185,7.185v20.282h9.794V2484.8a9.9,9.9,0,0,0-2.884-6.975,9.733,9.733,0,0,0-6.909-2.9c-.656,0-1.7-.013-2.662-.026-5.192-.065-6.4-.079-9.676,3.92a1.094,1.094,0,0,1-.9.485,1.113,1.113,0,0,1-1.114-1.114Z" transform="translate(-2403 -2455)" fill={props.colors.accentColor}/></svg>}/>
    </a>
  )
}

export default LinkedinLink