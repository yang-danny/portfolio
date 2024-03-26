import { useCallback, useEffect, useRef, useState } from 'react'
import useLocalStorage from 'use-local-storage';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import BigTitlte from '../subComponents/BigTitle';
import SocialMedia from '../subComponents/SocialMedia';
import Logo from '../subComponents/Logo';
import SoundBar from '../subComponents/SoundBar';
import HomeBtn from '../subComponents/HomeBtn';
import ThemeToggle from '../subComponents/ThemeToggle';
import shakehand from '../assets/shake.gif'
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
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
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    // ========== Email Validation start here ==============
    const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };
    // ========== Email Validation end here ================
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();
    if (username === "") {
        setErrMsg("Username is required!");
      } else if (phoneNumber === "") {
        setErrMsg("Phone number is required!");
      } else if (email === "") {
        setErrMsg("Please give your Email!");
      } else if (!emailValidation(email)) {
        setErrMsg("Give a valid Email!");
      } else if (subject === "") {
        setErrMsg("Plese give your Subject!");
      } else if (message === "") {
        setErrMsg("Message is required!");
      } else {
       emailjs.sendForm(
        'service_aaol7w2',
        "template_i5wczki",
        form.current,
        "Jjfbo_BOFtN_6vF4v"
      )
      .then(
        (result) => {
          setSuccessMsg(`Thank you ${username}, Your Messages has been sent ${result.text}!`)
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
            setErrMsg(error.text);
        }
      );
      e.target.reset();
      }
      };
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
                    value: ["#3998D0", "#2EB6AF", "#A9BD33", "#FEC73B", "#F89930", "#F45623", "#D62E32", "#EB586E", "#9952CF"],
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "destroy",
                    },
                    speed: 3,
                    trail: {
                        fill: { color: {bgColor} },
                        length: 30,
                        enable: true,
                    },
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 0,
                },
                opacity: {
                    value: 1,
                },
                shape: {
                    type: "star",
                },
                size: {
                    value: {
                        min: 5,
                        max: 25,
                    },
                    animation: {
                        startValue: "min",
                        enable: true,
                        speed: 2,
                        destroy: "max",
                        sync: true,
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
      <div className='contact'>
      <motion.div
      initial={{ x:-900,opacity:0 }} 
      animate={{ x: 0,opacity: 1 }} 
      transition={{ type: 'spring', duration:2, delay:1 }} className="contactLeft code">
      <img src={shakehand} alt="contactImg" />
        <h3>Danny Yang</h3>
        <ul>  
          <li>Full-Stack developer</li>
          <li>Software Engineer</li>
          <li>JavaScript & TypeScript</li>
          <li>React & Redux</li>
          <li>Node JS & MERN Stack</li>
          <li>UI/UX Designer</li>
        </ul>
        <p> Phone: <span>+61 432 261 137</span></p>
        <p> Email: <span >yang_danny@hotmail.com</span></p>
      </motion.div>
      <motion.div
      initial={{ x:900,opacity:0 }}   
      animate={{ x: 0,opacity: 1 }}   
      transition={{ type: 'spring', duration:2, delay:1 }} className="contactRight code">
            <form ref={form} onSubmit={sendEmail}>
              {errMsg && ( <p className='error'> {errMsg} </p> )}
              {successMsg && ( <p className='success'> {successMsg} </p> )}
              <div className="contentCol">
                <div className="contentLine">
                  <p >Your name </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Contact name is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                    name="user_name"
                  />
                </div>
                <div className="contentLine">
                  <p > Phone Number </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="contentLine">
                <p >Email</p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="contentLine">
                <p> Subject</p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name="subject"
                  className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="contentLine">
                <p > Message</p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`}
                  cols="20"
                  rows="5"
                ></textarea>
              </div>
              <div className="contentLine">
                <button type="submit" >
                  Send Message
                </button>
              </div>
            </form>
      </motion.div>
    </div>
      <BigTitlte text="Contact Me" top="12%" left="37%" />
      <SocialMedia />  
    </div>
    </div>
  )
}

export default Contact