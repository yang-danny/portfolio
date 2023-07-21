import useLocalStorage from 'use-local-storage';
import ThemeToggle from "../subComponents/ThemeToggle";
import Logo from '../subComponents/Logo'
import SoundBar from '../subComponents/SoundBar';
import HomeBtn from '../subComponents/HomeBtn';
import SocialMedia from '../subComponents/SocialMedia';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImg from '../assets/bannerImg.png';
import { motion } from "framer-motion";
import BigTitlte from '../subComponents/BigTitle';
const About = () => {
  const [theme] = useLocalStorage('theme')
  const [text] = useTypewriter({
    words: [ "Front-end Developer","UX Designer","Problem Solver"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000,
  });
  return (
  <div className={theme}>
      <div className="home background banner">
      <Logo />    
      <SoundBar/>
      <HomeBtn /> 
      <ThemeToggle />
      <div className="leftBanner">
      <motion.div
      initial={{ x:860,opacity:0 }} 
      animate={{ x: 0,opacity: 1 }} 
      transition={{ type: 'spring', duration:2, delay:0.5 }}  className="aboutMe">
        <h4 className="code">Talk is less, show me the code...</h4>
        <h1 className="sayHi"> Hi, I'm <span className="name">Danny</span></h1>
        <h2 className="typingText">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="."
            cursorColor="#ff014f"/>
        </h2>
        <h4 className="code">
        Since beginning my journey as a Front-End & Web Developer, 
        I possess an impressive arsenal of skills in HTML, CSS, 
        JavaScript, React, TypeScript, Tailwind, SCSS and UX Design.
        I excel in designing and maintaining responsive websites that 
        offer a smooth user experience. I am also a team player who 
        thrives in collaborating with cross-functional teams to produce
         outstanding web applications. I'm quietly confident, naturally 
         curious, and perpetually working on improving my problem solving 
         skills. I believe everything is an Art when you put your consciousness in it.
        </h4>
      </motion.div>
      </div>
      <div className="rightBanner ">
      <motion.div
      initial={{ x:-860,opacity: 0}} 
      animate={{ x: 0,opacity: 1 }} 
      transition={{ type: 'spring', duration:2, delay:0.5 }} className='bannerImg'>
       <motion.div
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ duration:1.5, delay:1.5 }} id='water'>
        <img src={bannerImg} alt="bannerImg"/>
        </motion.div>  
      </motion.div>
      </div>
      <BigTitlte text="About Me" top="12%" left="38%" />
      <SocialMedia />  
      </div>
  </div>
)}

export default About