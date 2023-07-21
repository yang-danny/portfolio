import '../style/style.css'
import Coding from '../assets/coding.gif'
import { AiOutlineUserAdd, AiOutlineContacts,AiOutlineProject,AiOutlineCode } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdOutlineWorkHistory } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";

const CodingButton = () => {
  return (
    <motion.div
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1.2 }}
    transition={{ type: "spring", duration: 2, delay: 1 }}
     className='orbit'>
      <div className="center-image">
      <img src={Coding} alt="Coding" />
      </div>
      <ul>
        <li>
        <div> <AiOutlineUserAdd size={40}/></div>
          <NavLink to="/about">About</NavLink>
        </li>
        <li >
        <div><AiOutlineCode size={40}/></div>
        <NavLink to="/skills">Skills</NavLink>
        </li>
        <li >
        <div><MdOutlineWorkHistory size={40} /></div>
        <NavLink to="/experience">Experience</NavLink>
        </li>
        <li  >
        <div><AiOutlineProject size={40}/></div>
        <NavLink to="/project">Project</NavLink>
        </li>
        <li >
        <div><HiOutlineAcademicCap size={40}/></div>
        <NavLink to="/edu">Education</NavLink>
        </li>
        <li>
        <div><AiOutlineContacts size={40}/></div>
        <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </motion.div>
   
  )
}

export default CodingButton
