import { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import SocialMedia from '../subComponents/SocialMedia'
import ThemeToggle from '../subComponents/ThemeToggle'
import HomeBtn from '../subComponents/HomeBtn'
import SoundBar from '../subComponents/SoundBar'
import Logo from '../subComponents/Logo'
import BigTitlte from '../subComponents/BigTitle'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import InfoCard from '../subComponents/InfoCard'
import { motion } from "framer-motion";
import itsupport from '../assets/itsupport.png'
import webdeveloper from '../assets/webdeveloper.webp'
import admin from '../assets/admin.webp'
const Experience = () => {
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
          background: { 
            color: {bgColor}, 
          }, 
          fpsLimit: 60, 
          particles: {
            number: {
                value: 400,
                density: {
                    enable: true,
                },
            },
            color: {
                value: "#AAA",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 1,
            },
            size: {
                value: 10,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                straight: true,
            },
            wobble: {
                enable: true,
                distance: 10,
                speed: 10,
            },
            zIndex: {
                value: {
                    min: 0,
                    max: 100,
                },
                opacityRate: 10,
                sizeRate: 10,
                velocityRate: 10,
            },
        },
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
      <div className='eduLine1'> <span className='circle'> </span></div>
      <div className='eduLine2'> <span className='circle'> </span> </div>
      <div className='eduLine3'> <span className='circle'> </span></div>
      <motion.div
      initial={{ x:900,opacity:0 }} 
      animate={{ x: 0,opacity: 1 }} 
      transition={{ type: 'spring', duration:2, delay:1 }} className='eduBox'>
      <InfoCard 
      title='Web Developer & IT Support' 
      subTitle='Side By Side Advocacy - (2021 - Present)' 
      des='Designed and developed a user-friendly new version of the official website, and leveraged expertise in UI/UX design to increase user engagement by 40%.
      Oversee and maintain Side By Side Advocacy website, delight customers and deliver performance, scalability, and reliability.
      Provide comprehensive IT support and troubleshooting for Side By Side Advocacy IT infrastructure.' 
      src={itsupport} />
      </motion.div>
      <motion.div
      initial={{ x:900,opacity:0 }} // Starting position above the viewport
      animate={{ x: 0,opacity: 1 }} // Ending position at the top of the viewport
      transition={{ type: 'spring', duration:2, delay:1.5 }} className='eduBox'>
      <InfoCard 
      title='Full Stack Developer' 
      subTitle='Hiper Pty Ltd - (2014 - 2022)' 
      des='Collaborated with the technical team, responsible for delivering cross-functional, engaging designed and high-performing B2C eCommerce websites for Hiper, resulting in a significant increase in user clicks and boosting annual sales by over 30%.' 
      src={webdeveloper} />
      </motion.div>
      <motion.div
      initial={{ x:900,opacity:0 }} // Starting position above the viewport
      animate={{ x: 0,opacity: 1 }} // Ending position at the top of the viewport
      transition={{ type: 'spring', duration:2, delay:2 }} className='eduBox'>
      <InfoCard 
      title='System Administrator' 
      subTitle='Enovo Pty Ltd - (2011 - 2014)' 
      des='Monitored performance, performed troubleshooting, and maintained Enovo B2C eCommerce website, resulting in a 20% reduction in website crashes and downtime.
      Provided technical support and troubleshooting services to employees and customers, both on-site and via phone support.' 
      src={admin} />
      </motion.div>
   </motion.div>
    <BigTitlte text="Experience" top="12%" left="38%" />
    <SocialMedia /> 
    </div>
    </div>
  )
}

export default Experience