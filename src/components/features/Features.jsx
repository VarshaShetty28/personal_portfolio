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
          title="Web Development"
          des="Building modern, responsive, and interactive web applications using the MERN Stack (MongoDB, Express.js, React, Node.js) with a focus on performance and user experience. 🚀"
          icon={<FaBars/>}
        />
         <Card 
          title="UI/UX Design "
          des="Crafting intuitive and visually appealing user interfaces by applying design principles, accessibility standards, and user research to enhance user experience and engagement. 🎨"
          icon={<SiProgress/>}
        />
         <Card 
          title="Figma"
          des="Designing seamless wireframes, interactive prototypes, and high-fidelity UI elements using Figma, ensuring efficient collaboration, design consistency, and user-centered product development. ✨ "
          icon={<FaMobile/>}
        />
         <Card 
          title="Database Management Systems (DBMS) "
          des=" Understanding and working with relational and non-relational databases, writing optimized SQL queries, ensuring data integrity, and designing scalable database architectures. 🗄️"
          icon={<SiAntdesign/>}
        />
         <Card 
          title="Python Programming "
          des="Exploring backend development, automation, and data processing using Python, leveraging its extensive libraries and frameworks for web applications, scripting, and machine learning.  "
          icon={<FaGlobe/>}
        />
         <Card 
          title="Flutter App Development"
          des="Developing cross-platform mobile applications using Flutter and Dart, focusing on smooth UI/UX, optimized performance, and seamless integration of backend services. 📱"
          icon={<AiFillAppstore/>}
        />
     </div>
    </motion.section>
  )
}
export default Features