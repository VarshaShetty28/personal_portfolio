import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import projectOne from "../../assets/images/projectOne.jpg"
import CS1 from "../../assets/images/CS1.jpeg"
import CS2 from "../../assets/images/CS2.jpeg"
import CS3 from "../../assets/images/CS3.jpeg"
import { motion } from "framer-motion";
import p1 from "../../assets/images/p1.png"
import p2 from "../../assets/images/p2.png"

const Projects = () => {
  return (
    <motion.section id='projects' 
    initial={{ opacity: 0 }}  // Start invisible
    whileInView={{ opacity: 1 }}  // Fade in when in view
    transition={{ duration: 0.6 }} // Smooth transition
    viewport={{ once: true }} // Runs only once
    className='w-full pt-8 xs:pt-10 md:pt-8 lg:pt-10 pb-12 xs:pb-16 md:pb-16 lg:pb-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center px-3 xs:px-4 md:px-0 mb-8 xs:mb-10 md:mb-8'>
        <Title 
          title="VISIT MY PORTFOLIO AND FEEL FREE TO SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xs:gap-10 md:gap-8 lg:gap-14 px-3 xs:px-4 md:px-8 lg:px-0'>
      <ProjectsCard
        title="TUNETREK"
        des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={p1}
        githubLink="https://github.com/VarshaShetty28/tunetrek"
        liveLink="https://tunetrek-theta.vercel.app/"
      />
      <ProjectsCard
        title="Personal Portfolio"
        des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={p2}
        githubLink="https://github.com/yourusername/social-media-clone"
        liveLink="https://tunetrek-theta.vercel.app/"
      />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        {/* <ProjectsCard
          title="COMMING SOON..."
          des="Exciting Project building will update soon"
          src={CS1}
        />
        <ProjectsCard
          title="COMMING SOON..."
          des="comming soon "
          src={CS2}
        />
        <ProjectsCard
          title="COMMING SOON..."
          des="comming soon "
          src={CS3}
        /> */}
      </div>
    </motion.section>
  )
}

export default Projects