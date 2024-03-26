import { useCallback, useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import BigTitlte from '../subComponents/BigTitle';
import SocialMedia from '../subComponents/SocialMedia';
import Logo from '../subComponents/Logo';
import SoundBar from '../subComponents/SoundBar';
import ThemeToggle from '../subComponents/ThemeToggle';
import HomeBtn from '../subComponents/HomeBtn';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ProjectCard from '../subComponents/ProjectCard';
import SBSA from '../assets/project/SBSA.png'
import hiper from '../assets/project/hiper.png'
import fitness from '../assets/project/fitness.png'
import weather from '../assets/project/weather.png'
import candy from '../assets/project/CandyCrush.png'
import grad_flow from '../assets/project/grad-flow.png'
import { motion } from "framer-motion";
import Mouse from '../subComponents/Mouse';

const Project = () => {
    const [theme] = useLocalStorage('theme')
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const [bgColor, setBgColor] = useState('')
    useEffect(() => {
    if(theme==='dark')
    setBgColor('#2d2c3e')
    else
    setBgColor('#FFF')
    }, [theme])
  return (
    <div className={theme}>
    <motion.div
      initial={{ y:-400,opacity:0 }}    
      animate={{ y: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:2}}>
    <Mouse />
    </motion.div>
    <div className="home background">
    <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: {bgColor},
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 1,
                        },
                    },
                },
                particles: {
                  number: {
                    value: 80,
                    density: {
                        enable: true,
                    },
                },
                color: {
                    value: "#ff0000",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.5,
                    },
                    animation: {
                        enable: true,
                        speed: 3,
                        sync: false,
                    },
                },
                size: {
                    value: {
                        min: 0.1,
                        max: 5,
                    },
                    animation: {
                        enable: true,
                        speed: 20,
                        sync: false,
                    },
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#AAA",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                },
                twinkle: {
                    particles: {
                        enable: true,
                        color: "#ffff00",
                        frequency: 0.05,
                        opacity: 1,
                    },
                    lines: {
                        enable: true,
                        color: "#ff0000",
                        frequency: 0.005,
                        opacity: 1,
                    },
                },
            },
                detectRetina: true,
            }}
        />
    <Logo />    
    <SoundBar/>
    <HomeBtn /> 
    <ThemeToggle />
    <div className='project'>
    <motion.div
      initial={{ x:860,opacity:0 }}     
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:0.5 }}>
    <ProjectCard name="Grad Flow Full Stack Web App" 
    imgSrc={grad_flow} 
    tech="HTML/SASS/React/JWT/Node.JS/Apollo/GraphQL/MongoDB" 
    figmaLink='https://www.figma.com/file/NN6q0t9DiDhjpYqvV0IsjR/Grad-Flow?type=design&node-id=0%3A1&mode=design&t=ubHlTdt5yp9UrQ4x-1'
    webLink='https://grad-flow-frontend.onrender.com/'
    gitHubLink='https://github.com/yang-danny/grad-flow'/>
    </motion.div>
    <motion.div
      initial={{ x:860,opacity:0 }}     
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:0.5 }}>
    <ProjectCard name="Side By Side Advocacy Official Website" 
    imgSrc={SBSA} 
    tech="HTML/SASS/React(Hooks)/TypeScript/Firebase" 
    webLink='https://yang-danny.github.io/sbsa/'
    gitHubLink='https://github.com/yang-danny/sbsa'/>
    </motion.div>
    <motion.div
      initial={{ x:860,opacity:0 }}     
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:1 }}>
    <ProjectCard name="Hiper eCommercial Online Website" 
    imgSrc={hiper} 
    tech="HTML/SASS/React(Hooks)/Redux/Firebase" 
    webLink='https://yang-danny.github.io/hiper/'
    gitHubLink='https://github.com/yang-danny/hiper'/>
    </motion.div>
    <motion.div
      initial={{ x:860,opacity:0 }} 
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:1.5 }}>
    <ProjectCard name="Hiper Fitness Official Website" 
    imgSrc={fitness} 
    tech="HTML/Tailwind/React(Hooks)/TypeScript" 
    webLink='https://yang-danny.github.io/ts-fitness/'
    gitHubLink='https://github.com/yang-danny/ts-fitness'/>
    </motion.div>
    <motion.div
      initial={{ x:860,opacity:0 }}     
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:2 }}>
    <ProjectCard name="React Weather App" 
    imgSrc={weather} 
    tech="HTML/Material-UI/React(Hooks)/APIs" 
    webLink='https://yang-danny.github.io/react-weather/'
    gitHubLink='https://github.com/yang-danny/react-weather'/>
    </motion.div>
    <motion.div
      initial={{ x:860,opacity:0 }}     
      animate={{ x: 0,opacity: 1 }}     
      transition={{ type: 'spring', duration:2, delay:2.5 }}>
    <ProjectCard name="Candy Crush Game" 
    imgSrc={candy} 
    tech="HTML/SASS/React(Hooks)/LocalStorage" 
    webLink='https://yang-danny.github.io/candy-crush/'
    gitHubLink='https://github.com/yang-danny/candy-crush'/>
    </motion.div>
    </div>
    <BigTitlte text="Project" top="12%" left="42%" />
    <SocialMedia />  
</div>
</div>
  )
}

export default Project
