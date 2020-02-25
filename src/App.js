import React, {useState, useEffect, useRef} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import './App.css';
import NavBar from './components/NavBar.js'
import Home from './pages/Home.js'
import Menu from './components/Menu.js'
import Portfolio from './pages/Portfolio.js'
import ProjectPage from './components/ProjectPage.js'
import AboutMe from './pages/AboutMe.js'
import Contact from './pages/Contact.js'
import MovieZoneImage from './images/MovieZone.png'
import MovieZoneTechnologies from './images/MovieZoneTechnologies.png'
import RealEstateImage from './images/RealEstate.png'
import RealEstateTechnologies from './images/RealEstateTechnologies.png'
import PerunImage from './images/PerunImage.png'
import PerunTechnologies from './images/PerunTechnologies.png'
import CoffeeShopImage from './images/CoffeeShopImage.png'
import CoffeeShopTechnologies from './images/CoffeeShopTechnologies.png'
import CosmoBakeryImage from './images/CosmoBakeryImage.png'
import CosmoBakeryTechnologies from './images/CosmoBakeryTechnologies.png'
import VetClinicImage from './images/VetClinicImage.png'
import VetClinicTechnologies from './images/VetClinicTechnologies.png'
import AngelasPortfolioImage from './images/AngelasPortfolioImage.png'
import AngelasPortfolioTechnologies from './images/AngelasPortfolioTechnologies.png'
import ProjectImage from './images/project.png'

function App() {
  const appContainer = useRef(null)
  let location = useLocation()

  const [mainColor, setMainColor] = useState()
  const [accentColor, setAccentColor] = useState()
  const [textColor, setTextColor] = useState()
  const [shadow, setShadow] = useState()
  const [lightTheme, setLightTheme] = useState(0)
  const [themeArray, setThemeArray] = useState([
    {
      mainColor:'#020B16',
      accentColor:'#00FFFF',
      textColor:'#ffffff',
      shadow:'5px 5px 6px rgba(0, 0, 0, 0.57), -5px -5px 6px rgba(255, 255, 255, 0.03)'
    },
    {
      mainColor:'rgb(243,243,243)',
      accentColor:'#1a4982',
      textColor:'#051427',
      shadow:'5px 5px 6px rgba(0, 0, 0, 0.35), -5px -5px 6px rgba(255, 255, 255, 1)'
    },
    {
      mainColor:'rgb(11,11,11)',
      accentColor:'rgb(255, 237, 2)',
      textColor:'#ffffff',
      shadow:'5px 5px 6px rgba(0, 0, 0, 0.57), -5px -5px 6px rgba(255, 255, 255, 0.03)'
    },
    {
      mainColor:'rgb(255,151,135)',
      accentColor:'rgb(109,18,157)',
      textColor:'#ffffff',
      shadow:'5px 5px 6px rgba(0, 0, 0, 0.07), -5px -5px 6px rgba(255, 255, 255, 0.03)'
    },
  ])
  const [openMenu, setOpenMenu] = useState(false)
  const [projects, setProjects] = useState([
    {
      idea:{
        image:PerunImage, 
        subheading:"IDEA",
        paragraph:'I built this website from design my client from Fiverr made in AdobeXD.',
      },
      technologies:{
        image:PerunTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'Techhnologies I used are: HTML, SCSS, JavaScript, APIs: sal.js, swiper.js, intersectionObserver, laxxx.js, pace.js.'
      },
      projectName:'Perun',
      detailPosition:{bottom:0,left:0},
      address:'https://perunperun.netlify.com'
    },
    {
      idea:{
        image:RealEstateImage, 
        subheading:"IDEA",
        paragraph:'This is the project I have done for my client on Fiverr. He wanted something simple and modern and we agreed upon this design.',
      },
      technologies:{
        image:RealEstateTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'Technologies I used are HTML, SCSS, JavaScript, APIs: swiper.js, sal.js, formspree.io'
      },
      projectName:'Real Estate',
      detailPosition:{bottom:0,right:0},
      address:'https://realestatereal.netlify.com'
    },
    {
      idea:{
        image:MovieZoneTechnologies, 
        subheading:"IDEA",
        paragraph:'I came to idea when I asked myself what I would want to get from web application. As we can all agree, there is not enough time during the week to binge watch all of the latest movie trailers or read long descriptions about them. This application would provide people with fast and always up to date database of movies they can search or see what is new.',
      },
      technologies:{
        image:MovieZoneImage, 
        subheading:'TECHNOLOGIES',
        paragraph:'For this project I used HTML, CSS, JavaScript(React), Redux, APIs: color-thief, swiper.js, TMdb.'
      },
      projectName:'MovieZone',
      detailPosition:{bottom:0,left:0},
      address:'https://moviezonemovie.netlify.com'
    },
    {
      idea:{
        image:CosmoBakeryImage, 
        subheading:"IDEA",
        paragraph:'By making this website I practiced working with JavaScript and designing the website. I did not use any JS libraries and tried to do everything from scratch.',
      },
      technologies:{
        image:CosmoBakeryTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'For this project I used HTML, CSS, JavaScript.'
      },
      projectName:'CosmoBakery',
      detailPosition:{bottom:0,right:0},
      address:'https://cosmobakery.netlify.com'
    },
    {
      idea:{
        image:AngelasPortfolioImage, 
        subheading:"IDEA",
        paragraph:'I designed and developed this website for my client from Fiverr. She wanted minimalistic design and she was satisfied with it.',
      },
      technologies:{
        image:AngelasPortfolioTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'For this project I used HTML, CSS, JavaScript'
      },
      projectName:'Angelas Portfolio',
      detailPosition:{bottom:0,left:0},
      address:'https://angelasportfolio.netlify.com'
    },
    {
      idea:{
        image:VetClinicImage, 
        subheading:"IDEA",
        paragraph:'I made this website to practice responsive design and use of API.',
      },
      technologies:{
        image:VetClinicTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'For this project I used HTML, CSS, JavaScript, APIs: swiper.js'
      },
      projectName:'VetClinic',
      detailPosition:{bottom:0,right:0},
      address:'https://vetclinicvet.netlify.com'
    },
    {
      idea:{
        image:CoffeeShopImage, 
        subheading:"IDEA",
        paragraph:'Small project of mine where I was learning responsive design and basics of JavaScript.',
      },
      technologies:{
        image:CoffeeShopTechnologies, 
        subheading:'TECHNOLOGIES',
        paragraph:'For this project I used: HTML, CSS, JavaScript, Photoshop'
      },
      projectName:'CoffeeShop',
      detailPosition:{bottom:0,left:0},
      address:'https://coffeeshopcoffee.netlify.com'
    },
  ])

  
  useEffect(() => {
    if(themeArray.length === lightTheme){
      return setLightTheme(0)
    }
    setMainColor(themeArray[lightTheme].mainColor)
    setTextColor(themeArray[lightTheme].textColor)
    setAccentColor(themeArray[lightTheme].accentColor)
    setShadow(themeArray[lightTheme].shadow)
  }, [lightTheme])

  const toggleLight = () =>{
    setLightTheme((prevState) => {
      return prevState + 1
    })
  }

  const toggleMenu = () =>{
    setOpenMenu((prevState) => {
      return !prevState
    })
  }

  document.body.style.backgroundColor = mainColor;

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
          <Route path='/' exact 
            render={(props) => 
            <Home 
              appContainer={appContainer} 
              colors={{mainColor, accentColor, textColor, shadow}}
              />}
            />
          <Route path='/portfolio' exact 
            render={(props) => 
              <Portfolio 
              colors={{mainColor, accentColor, textColor, shadow}} 
              projects={projects}
              />}
          />
          <Route path='/about' exact
            render={(props) =>
              <AboutMe 
                appContainer={appContainer} 
                projects={projects} 
                colors={{mainColor,accentColor,textColor,shadow}}
              />}
          />
          <Route path='/contact' exact
            render={(props) =>
              <Contact 
                appContainer={appContainer} 
                projects={projects} 
                colors={{mainColor,accentColor,textColor,shadow}}
              />}
          />
          <Switch location={location} key={location.pathname}>
            <Route 
              path='/portfolio/:projectName/:page' exact 
              render={(props) =>
                <ProjectPage
                {...props}
                colors={{mainColor, accentColor, textColor, shadow}}
                projects={projects}
              />}
            /> 
          </Switch>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
