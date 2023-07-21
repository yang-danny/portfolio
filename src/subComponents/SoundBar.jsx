import { useState } from 'react'
import music from '../assets/SunsetDream.mp3'
import { TbMusic, TbMusicOff } from "react-icons/tb";
import { motion } from "framer-motion";
const SoundBar = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  return (
  <motion.div
    initial={{ y:200 }} 
    animate={{ y: 0 }} 
    transition={{ duration: 2, delay: 1 }} className='sound'>
    <button className='playBtn' onClick={togglePlay}>
      {isPlaying ? (
      <div className='playing'>
      <TbMusic size={28} color='green'/>
      </div>
       ): (
      <TbMusicOff size={28} color='gray'/>)}
    </button>
      {isPlaying && (
      <div>
        <audio src={music} autoPlay={isPlaying} />
      </div>
      )}
  </motion.div>
  )
}

export default SoundBar
