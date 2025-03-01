// Banner.jsx
import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.section id='home' 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1,delay:0.3}}
      className='w-full py-20 flex flex-col lg:flex-row pt-28 border-b-[1px] border-b-black font-titleFont px-4 md:px-6 lg:px-10'>
        <LeftBanner/>
        <RightBanner/>
    </motion.section>
  )
}

export default Banner