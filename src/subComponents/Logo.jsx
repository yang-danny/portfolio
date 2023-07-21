import dy from '../assets/DY.png'
import { motion } from "framer-motion";
const Logo = () => {
  return (
    <motion.div
    initial={{ x:-250 }} 
    animate={{ x: 0 }} 
    transition={{ duration: 1.5, delay: 1 }} className='logo'>
    <img src={dy} alt="Logo" />
    </motion.div>
  )
}

export default Logo