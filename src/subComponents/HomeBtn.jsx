import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
const HomeBtn = () => {
  return (
    <motion.div className="homeBtn"
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 1, delay: 1 }}>
      <div className="effect-1"></div>
      <div className="effect-2"></div>
      <div className="content">
      <div className="exercise">
      <NavLink to="/">
      <AiOutlineHome />
      </NavLink>
      </div>
    </div>
  </motion.div>
  )
}

export default HomeBtn