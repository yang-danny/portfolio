import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import useLocalStorage from 'use-local-storage';
import ThemeToggle from "../subComponents/ThemeToggle";
import Logo from '../subComponents/Logo'
import SoundBar from '../subComponents/SoundBar';
import HomeBtn from '../subComponents/HomeBtn';
import SocialMedia from '../subComponents/SocialMedia';
import ux from '../assets/ux.png'
import code from '../assets/code.png';
import figma from '../assets/figma.png';
import miro from '../assets/miro.png'
import adobe from '../assets/adobe.png'
import canva from '../assets/canva.png'
import vscode from '../assets/vscode.png'
import github from '../assets/github.png'
import vite from '../assets/vite.png'
import codepen from '../assets/codepen.png'
import devtools from '../assets/devtools.png'
import { motion } from "framer-motion";
import BigTitlte from "../subComponents/BigTitle";
const Skills = () => {
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
                    color: {
                        value: "#AAA",
                    },
                    links: {
                        color: "#AAA",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
        <Logo />    
        <SoundBar/>
        <HomeBtn /> 
        <ThemeToggle />
        <div className="skills">
        <motion.div
        initial={{ x:-900,opacity:0 }} // Starting position above the viewport
        animate={{ x: 0,opacity: 1 }} // Ending position at the top of the viewport
        transition={{ type: 'spring', duration:2, delay:1 }}  className="design">
        <div className="title">
        <img src={ux} alt="" />
        <h2>UI/UX Designer</h2>
        </div>
        <div className="skillContent">
        <p className="code">Combine creative visuals with smart information 
        architecture and interactive design to create effective, intuitive 
        solutions that elevate user’s entire end-to-end journey.</p>
        <h2>Skills</h2>
        <ul className="code">
         <li>Conducting user research</li>
         <li>Creating user personas</li>
         <li>Determining information architecture</li>
         <li>Creating user flows and wireframes</li>
         <li>Prototyping and user testing</li>
         <li>Visual design</li>
        </ul>
        <h2>Tools</h2>
        <div className="toolLogo">
            <img src={figma} alt="" />
            <img src={miro} alt="" />
            <img src={adobe} alt="" />
            <img src={canva} alt="" />
        </div>
        </div>
        </motion.div>
        <motion.div
        initial={{ x:900,opacity:0 }} // Starting position above the viewport
         animate={{ x: 0,opacity: 1 }} // Ending position at the top of the viewport
        transition={{ type: 'spring', duration:2, delay:1 }}  className="develop">
        <div className="title">
        <img src={code} alt="" />
        <h2 >Front-ent Developer</h2>
        </div>
        <div className="skillContent">
        <p className="code">Deliver secure, fast, and easy-to-scale Webflow 
        front-end solutions. By implementing integrations & custom development ensure the highest usability and performance standards will be met.
        </p>
        <h2>Tech Stack</h2>
        <ul className="code">
            <li>HTML5</li>
            <li>CSS3/SASS/Bootstrap/Tailwind/MUI</li>
            <li>JavaScript/TypeScript</li>
            <li>React/Redux</li>
            <li>APIs/REST/Firebase</li>
            <li>Jest/Mocha/Vanilla</li>
            <li>Git/Github</li>
            <li>Jira/Slack/Trello</li>
        </ul>
        <h2>Tools</h2>
        <div className="toolLogo">
            <img src={vscode} alt="" />
            <img src={vite} alt="" />
            <img src={github} alt="" />
            <img src={codepen} alt="" />
            <img src={devtools} alt="" />
        </div>
        </div>
        </motion.div>
        </div>
        <BigTitlte text="Skills" top="12%" left="44%" />
        <SocialMedia />  
    </div>
    </div>
    );
}

export default Skills
