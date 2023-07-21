import { motion } from "framer-motion";
import { FiLinkedin,FiGithub,FiMail, FiFacebook } from "react-icons/fi";

const SocialMedia = () => {
  return (
  <motion.div className='socialMedia'
    initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 0.5 }}>
  <ul>
    <motion.li
    initial={{scale:0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 0.75 }}>
      <a href="#"><FiLinkedin /> </a>
    </motion.li>
    <motion.li
    initial={{scale:0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 1 }}>
      <a href="#"> <FiGithub /> </a>
    </motion.li>
    <motion.li
    initial={{scale:0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 1.25 }}>
      <a href="#"><FiFacebook /></a>
    </motion.li>
    <motion.li
    initial={{scale:0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay: 1.5 }}>
      <a href="#"><FiMail /> </a> 
    </motion.li>
  </ul>
  </motion.div>
  )
}

export default SocialMedia