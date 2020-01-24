import React, {useState, useEffect, useRef} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import NavBar from './NavBar.js'
import Home from './Home.js'
import Menu from './Menu.js'
import Portfolio from './Portfolio.js'
import ProjectPage from './ProjectPage.js'
import AboutMe from './AboutMe.js'
import Contact from './Contact.js'
import ProjectImage from './images/project.png'

function App() {
  const appContainer = useRef(null)
  let location = useLocation()

  const [mainColor, setMainColor] = useState()
  const [accentColor, setAccentColor] = useState()
  const [textColor, setTextColor] = useState()
  const [shadow, setShadow] = useState()
  const [lightTheme, setLightTheme] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [projects, setProjects] = useState([
    {
      idea:{
        image:ProjectImage, 
        subheading:"IDEA",
        paragraph:'Some sample idea.',
      },
      technologies:{
        image:ProjectImage, 
        subheading:'TECHNOLOGIES',
        paragraph:'Some sample technology'
      },
      projectName:'Perun',
      detailPosition:{bottom:0,left:0},
      address:'google.com'
    },
    {
      idea:{
        image:ProjectImage, 
        subheading:"IDEA",
        paragraph:'Some sample idea.',
      },
      technologies:{
        image:ProjectImage, 
        subheading:'TECHNOLOGIES',
        paragraph:'Some sample technology'
      },
      projectName:'Peru',
      detailPosition:{bottom:0,right:0},
      address:'google.com'
    },
    {
      idea:{
        image:ProjectImage, 
        subheading:"IDEA",
        paragraph:'Some sample idea.',
      },
      technologies:{
        image:ProjectImage, 
        subheading:'TECHNOLOGIES',
        paragraph:'Some sample technology'
      },
      projectName:'Per',
      detailPosition:{bottom:0,left:0},
      address:'google.com'
    },
  ])

  
  useEffect(() => {
    if(lightTheme === true){
      setMainColor('rgb(243,243,243)')
      setTextColor('#051427')
      setAccentColor('#1a4982')
      setShadow('5px 5px 6px rgba(0, 0, 0, 0.35), -5px -5px 6px rgba(255, 255, 255, 1)')
    }else if(lightTheme === false){
      setMainColor('#020B16')
      setAccentColor('#00FFFF')
      setTextColor('#ffffff')
      setShadow('5px 5px 6px rgba(0, 0, 0, 0.57), -5px -5px 6px rgba(255, 255, 255, 0.03)')
    }
  }, [lightTheme])

  const toggleLight = () =>{
    setLightTheme((prevState) => {
      return !prevState
    })
  }

  const toggleMenu = () =>{
    setOpenMenu((prevState) => {
      return !prevState
    })
  }

  return (
    <div className="App" ref={appContainer} style={{backgroundColor:mainColor}}>
      <Menu colors={{mainColor, accentColor, textColor, shadow}} openMenu={openMenu} toggleMenu={toggleMenu}/>
      <NavBar 
      colors={{mainColor, accentColor, textColor}} 
      toggleLight={toggleLight}
      toggleMenu={toggleMenu}
      openMenu={openMenu}
      />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact render={(props) => <Home appContainer={appContainer} colors={{mainColor, accentColor, textColor, shadow}}/>}/>
          <Route path='/portfolio' exact 
            render={(props) => 
              <Portfolio 
              colors={{mainColor, accentColor, textColor, shadow}} 
              projects={projects}
              />}
          />
          <Route path='/about' exact
            render={(props) =>
              <AboutMe appContainer={appContainer} projects={projects} colors={{mainColor,accentColor,textColor,shadow}}/>
            }
          />
          <Route path='/contact' exact
            render={(props) =>
              <Contact projects={projects} colors={{mainColor,accentColor,textColor,shadow}}/>
            }
          />
          <Switch location={location} key={location.pathname}>
            <Route path='/portfolio/:projectName/:page' exact render={(props) => <ProjectPage
              {...props}
              colors={{mainColor, accentColor, textColor, shadow}}
              projects={projects}
              />}/> 
          </Switch>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
