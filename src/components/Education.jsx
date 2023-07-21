import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import SocialMedia from '../subComponents/SocialMedia'
import ThemeToggle from '../subComponents/ThemeToggle'
import HomeBtn from '../subComponents/HomeBtn'
import SoundBar from '../subComponents/SoundBar'
import Logo from '../subComponents/Logo'
import BigTitlte from '../subComponents/BigTitle'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import InfoCard from '../subComponents/InfoCard'
import hat from '../assets/hat.png'
import cet from '../assets/cet.png'
import { motion } from "framer-motion";
const Education = () => {
    const [theme] = useLocalStorage('theme')
    const particlesInit = async (main) => { 
        await loadFull(main); 
      }; 
      const particlesLoaded = (container) => { 
        console.log(container); 
      }; 
      const [bgColor, setBgColor] = useState('')
      useEffect(() => {
      if(theme==='dark')
      setBgColor('#2d2c3e')
      else
      setBgColor('#FFF')
      }, [])
  return (
    <div className={theme}>
    <div className="home background">
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                backgroundMode: {
                    enable: true
                  },
                background: {
                    color: {
                        value: {bgColor},
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                      resize: true
                    }
                },
                particles: {
                    number: {
                      value: 0
                    },
                    bounce: {
                      vertical: {
                        value: 0
                      }
                    },
                    color: {
                      value: "#5bc0eb"
                    },
                    collisions: {
                      enable: false
                    },
                    life: {
                      duration: {
                        sync: true,
                        value: 10
                      },
                      count: 1
                    },
                    opacity: {
                      value: 0.8
                    },
                    size: {
                      value: 5,
                      random: {
                        enable: true,
                        minimumValue: 1
                      }
                    },
                    move: {
                      enable: true,
                      gravity: {
                        enable: true
                      },
                      angle: {
                        value: 30
                      },
                      speed: 10,
                      outModes: {
                        bottom: "bounce",
                        top: "none",
                        default: "destroy"
                      },
                      trail: {
                        enable: true,
                        fillColor: {bgColor},
                        length: 10
                      }
                    }
                  },
                detectRetina: true,
                emitters: {
                    direction: "top",
                    life: {
                      count: 0,
                      duration: 0,
                      delay: 0
                    },
                    position: {
                      x: 50,
                      y: 50
                    },
                    rate: {
                      delay: 0.1,
                      quantity: 5
                    },
                    size: {
                      width: 0,
                      height: 0
                    }
                  }
            }}
        />
    <Logo />    
    <SoundBar/>
    <HomeBtn /> 
    <ThemeToggle />
    <motion.div
      initial={{ x:-500,opacity:0 }}  
      animate={{ x: 0,opacity: 1 }}   
      transition={{ type: 'spring', duration:2, delay:1 }} className='education'>
      <div className='eduLine1'><span className='circle'> </span></div>
      <div className='eduLine2'><span className='circle'> </span></div>
      <div className='eduLine3'><span className='circle'> </span></div>
      <motion.div
      initial={{ x:900,opacity:0 }}   
      animate={{ x: 0,opacity: 1 }}   
      transition={{ type: 'spring', duration:2, delay:1 }} className='eduBox'>
      <InfoCard 
      title='Web Developer Program' 
      subTitle='Generation Australia (2022)' 
      des='This includes technical training combined with hands-on projects and employability skills in Web Development position.' 
      src={cet} />
      </motion.div>
      <motion.div
      initial={{ x:900,opacity:0 }}   
      animate={{ x: 0,opacity: 1 }}   
      transition={{ type: 'spring', duration:2, delay:1.5 }} className='eduBox'>
      <InfoCard 
      title='Master of Information Technology' 
      subTitle='University of Technology Sydney (2009 - 2010)' 
      des='This course is designed to achieve a comprehensive and greater understanding of Information Technology in specialised technical or management areas.' 
      src={hat} />
      </motion.div>
      <motion.div
      initial={{ x:900,opacity:0 }}   
      animate={{ x: 0,opacity: 1 }}   
      transition={{ type: 'spring', duration:2, delay:2 }} className='eduBox'>
      <InfoCard 
      title='Bachelor of Information Technology' 
      subTitle='University of Newcastle (2006 - 2008)' 
      des='This course delivers the skills needed to succeed in an interconnected society, concerned with the application of technology to solve problems faced by business and wider society.' 
      src={hat} />
      </motion.div>
     </motion.div>
    <BigTitlte text="Education" top="12%" left="38%" />
    <SocialMedia /> 
    </div>
    </div>
  )
}

export default Education