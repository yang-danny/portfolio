import Particles from "react-particles";
import { loadFull } from "tsparticles";
import useLocalStorage from 'use-local-storage';
import ThemeToggle from "../subComponents/ThemeToggle";
import Logo from '../subComponents/Logo'
import SoundBar from '../subComponents/SoundBar';
import HomeBtn from '../subComponents/HomeBtn';
import CodingButton from '../subComponents/CodingButton';
import SocialMedia from '../subComponents/SocialMedia';
import { useCallback, useEffect, useState } from "react";
const Home = () => {
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
setBgColor('FFF')
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
                  fpsLimit: 60,
                  particles: {
                    number: {
                      value: 0
                    },
                    collisions: {
                      enable: false
                    },
                    color: {
                      value: "#ffffff"
                    },
                    shape: {
                      type: "circle"
                    },
                    opacity: {
                      value: { min: 0.1, max: 0.3 }
                    },
                    size: {
                      value: { min: 5, max: 20 }
                    },
                    move: {
                      enable: true,
                      size: true,
                      speed: 3,
                      direction: "none",
                      outModes: {
                        default: "destroy"
                      },
                      trail: {
                        enable: true,
                        fillColor: {bgColor},
                        length: 3
                      }
                    }
                  },
                  detectRetina: true,
                  background: {
                    color: {
                        value: {bgColor},
                    },
                },
                  emitters: {
                    direction: "none",
                    rate: {
                      delay: 0.25,
                      quantity: 3
                    },
                    position: {
                      x: 50,
                      y: 50
                    },
                    size: {
                      width: 0,
                      height: 0
                    },
                    spawnColor: {
                      value: "#ff0000",
                      animation: {
                        h: {
                          enable: true,
                          speed: 5
                        },
                        l: {
                          enable: true,
                          speed: 0,
                          offset: {
                            min: 20,
                            max: 80
                          }
                        }
                      }
                    }
                  }
            }}
        />
        <Logo />    
        <SoundBar/>
        <HomeBtn /> 
        <ThemeToggle />
        <CodingButton /> 
        <SocialMedia />  
        </div>
    </div>
  )
}

export default Home
