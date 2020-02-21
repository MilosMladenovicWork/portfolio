import React, {useState,useEffect} from 'react'
import {motion} from 'framer-motion'
import {validate} from 'validate.js'
import Heading from './Heading'
import DotDetail from './DotDetail'
import FixedDownBar from './FixedDownBar'
import InstagramLink from './InstagramLink'
import FacebookLink from './FacebookLink'
import LinkedinLink from './LinkedinLink'
import ButtonGlowing from './ButtonGlowing'
import BigTriangle from './BigTriangle'
import BigDetail from './BigDetail'
import SmallTriangle from './SmallTriangle'
import MediumTriangle from './MediumTriangle'
import CanvasThreeJs from './CanvasThreeJs'
import Form from './Form'
import Tip from './Tip'
import './Contact.css'


function Contact(props){
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
    submit:false
  }
  )

  const [serverMessage, setServerMessage] = useState(null)

  const [notification, setNotification] = useState(false)

  const constraints = {
    email:{
      email:true
    },
    name:{
      length:{
        minimum:1
      }
    },
    message:{
      length:{
        minimum:1
      }
    }
  }

  const formValidation = () => {
    if(validate({email:form.email, name:form.name, message:form.message}, constraints) === undefined){
      setForm(function(prevState) {
        return {
          ...prevState,
          submit:true
        }
      })
    }else{
      setForm(function(prevState) {
        return {
          ...prevState,
          submit:false
        }
      })
    }
  }

  async function postFormData(url, data){
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method:'POST',
      mode:'cors',
      body:JSON.stringify({
        name:data.name,
        email:data.email,
        message:data.message
      })
    });

    return response.json()
  }

  useEffect(()=>{
    formValidation()
  }, [form.email, form.name, form.message])

  const changeHandler = (e) => {
    let inputName = e.target.name
    let value = e.target.value
    setForm(function(prevState) {
      return {
        ...prevState,
        [inputName]:value
      }
    })
  }

  const clickHandler = (e) => {
    e.preventDefault()
    setNotification(false)
    postFormData('https://server-personal-use.herokuapp.com/contact', form)
      .then((data) => {
        setServerMessage(data.message)
        setNotification(true)
        console.log(data)
      }).catch(e => console.log(e));
  }


  return(
    <motion.div
      exit={{opacity:0}}
      animate={{opacity:1}} 
      initial={{opacity:0}}
      transition={{duration:0.25}}
      className='contact'
    >
      <Heading text='Contact me' colors={props.colors}/>
      <Form colors={props.colors}>
        <input 
          onChange={(e)=>{changeHandler(e)}}
          type='text' 
          value={form.name}
          placeholder='Name' 
          name='name' 
          style={{
            borderBottom:`3px solid ${props.colors.textColor}`,
            color:props.colors.textColor}}
        />
        <input 
          onChange={(e)=>{changeHandler(e)}}
          value={form.email}
          type='email' 
          placeholder='Email' 
          name='email' 
          style={{
            borderBottom:`3px solid ${props.colors.textColor}`,
            color:props.colors.textColor}}
        />
        <textarea 
          onChange={(e)=>{changeHandler(e)}}
          value={form.message}
          placeholder='Message'
          name='message'
          style={{
            borderBottom:`3px solid ${props.colors.textColor}`,
            color:props.colors.textColor}}>
        </textarea>
        <ButtonGlowing
          colors={props.colors} 
          submit={form.submit} 
          clickHandler={clickHandler}
          text={'Submit'} />
      </Form>
      <FixedDownBar>
        <InstagramLink colors={props.colors}/>
        <FacebookLink colors={props.colors}/>
        <LinkedinLink colors={props.colors}/>
      </FixedDownBar>
      <DotDetail position={{top:0,left:0}} colors={props.colors}/>
      <DotDetail position={{bottom:0,right:0}} colors={props.colors}/>
      <BigDetail colors={props.colors} appContainer={props.appContainer}>
        {/* <SmallTriangle {...props}/>
        <BigTriangle {...props}/>
        <MediumTriangle {...props}/> */}
        <CanvasThreeJs rotate={[20, 0, -20, 20]} {...props} distance={-4}/>
        <CanvasThreeJs rotate={[0, -10, 10, 0]} {...props} distance={1}/>
        <CanvasThreeJs rotate={[-10, 10, 0, -10]}  {...props} distance={-1}/>
      </BigDetail>
      <Tip colors={props.colors} title={'Hi there!'} open={notification} text={serverMessage}/>
    </motion.div>
  )
}



export default Contact