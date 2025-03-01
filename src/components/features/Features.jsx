// Features.jsx - Updated with responsive grid
import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { AiFillAppstore} from 'react-icons/ai';
import { SiProgress,SiAntdesign } from 'react-icons/si';
import { FaGlobe,FaMobile,FaBars  } from 'react-icons/fa';
import { motion } from "framer-motion";

export const fadeUp = (delay) =>{
  return{
    hidden:{
      opacity:0,
      y:100,
    },
    show: {
        opacity:1,
        y:0,
        transition: {
          duration:0.5,
          delay: delay,

        },
    },
  };
};
const Features = () => {
  return (
    <motion.section 
    variants={fadeUp(0.2)}
      initial="hidden"
      whileInView="show"
    id='features' className='w-full pt-10 pb-20 border-b-[1px] border-b-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
     <Title title="Features" des="What I do"/> 
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
        <Card 
        variants={fadeUp(0.2)}
        initial="hidden"
        whileInView="show"
          title="MERN Stack"
          des="Building responsive and interactive web applications using React and Tailwind CSS.& Learning backend technologies with Node.js, Express, and exploring Python for backend services. "
          icon={<FaBars/>}
        />
         <Card 
          title="App Developement "
          des="Flutter Development Worked on Flutter for cross-platform mobile app development. "
          icon={<SiProgress/>}
        />
         <Card 
          title="UI/UX Design"
          des="Designing user-friendly interfaces using Figma to create wireframes and prototypes. "
          icon={<FaMobile/>}
        />
         <Card 
          title="Database Management"
          des="Understanding and working with databases, SQL queries, and database design concepts. 🚀 "
          icon={<SiAntdesign/>}
        />
         <Card 
          title="Problem-Solving & Debugging"
          des="Identifying and resolving bugs in web and mobile applications to improve performance and efficiency. 🚀 "
          icon={<FaGlobe/>}
        />
         <Card 
          title="Data Structures & Algorithms (DSA)"
          des="Practicing problem-solving with DSA concepts to improve coding efficiency and logic building."
          icon={<AiFillAppstore/>}
        />
     </div>
    </motion.section>
  )
}
export default Features