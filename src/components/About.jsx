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
    words: [ "Full-Stack Developer","UI/UX Designer","Problem Solver"],
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
        Seasoned and solution-oriented Full Stack Developer with 6 years of experience specialising in mobile/web applications development.  Demonstrated a knack for success in conceiving and implementing innovative solutions to solve complex challenges. Passionate in continually expanding technological skill set to optimise user experiences, keeping web or app on the cutting edge. Implemented collaborative strategies within cross-functional teams to drive innovation and thrive in self-motivated settings. My goal is to continuously expand my skill set and play a key role in delivering dynamic projects that push the boundaries of project development, resulting in exceptional results. 
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