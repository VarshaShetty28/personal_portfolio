import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import projectOne from "../../assets/images/projectOne.jpg";
import healthGrid from "../../assets/images/lap_home.png";
import nugget from "../../assets/images/nugget.png";
import CS3 from "../../assets/images/CS3.jpeg";
import { motion } from "framer-motion";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }} // Start invisible
      whileInView={{ opacity: 1 }} // Fade in when in view
      transition={{ duration: 0.6 }} // Smooth transition
      viewport={{ once: true }} // Runs only once
      className="w-full pt-8 xs:pt-10 md:pt-8 lg:pt-10 pb-12 xs:pb-16 md:pb-16 lg:pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center px-3 xs:px-4 md:px-0 mb-8 xs:mb-10 md:mb-8">
        <Title
          title="VISIT MY PORTFOLIO AND FEEL FREE TO SHARE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xs:gap-10 md:gap-8 lg:gap-14 px-3 xs:px-4 md:px-8 lg:px-0">
        <ProjectsCard
          title="HEALTH GRID"
          des="A full-stack MERN application for booking doctor appointments. It enables patients to book and pay for appointments, doctors to manage schedules, and admins to oversee users and appointments — all through a responsive and user-friendly interface."
          src={healthGrid}
          githubLink="https://github.com/VarshaShetty28/health_grid.git"
          liveLink="https://health-grid-frontend.onrender.com"
        />
        <ProjectsCard
          title="NUGGETS"
          des="Nugget is a smart news platform that delivers bite-sized, AI-generated summaries of the day’s top stories, tailored to user interests. Instead of information overload, it provides concise and personalized updates from multiple domains like Technology, Business, Sports, Politics, and more."
          src={nugget}
          githubLink="https://github.com/VarshaShetty28/nuggets.git"
          liveLink="https://nuggets-375.pages.dev/"
        />
       
        <ProjectsCard
          title="TUNETREK"
          des="TuneTrek is a React-based web application built with Framer Motion, MouseFollower, and Tailwind CSS, providing a seamless and interactive experience for exploring, filtering, and comparing headphones based on brand, features, and budget. 🚀🎧"
          src={p1}
          githubLink="https://github.com/VarshaShetty28/tunetrek"
          liveLink="https://tunetrek-theta.vercel.app/"
        />
        <ProjectsCard
          title="PORTFOLIO"
          des="My Portfolio is a React-based personal website built to showcase my skills, interests, and projects while offering a clean, modern design with well-structured content and easy navigation for a seamless browsing experience. 🚀💼"
          src={p2}
          githubLink="https://github.com/VarshaShetty28/personal_portfolio"
          liveLink="https://personal-portfolio-pi-lac.vercel.app/"
        />
        <ProjectsCard
          title="TravelBliss"
          des="TravelBliss is a Figma-designed travel website that evokes peace and relaxation. It features an elegant UI, smooth navigation, and a stress-free booking experience. From exploring destinations to planning getaways, every detail is designed for ease. ✨🌍"
          src={p3}
          githubLink="https://www.figma.com/design/bK3DXfYqrATbirIOYONLPc/TravelBliss_Pro1?t=itJQnIITOlFQr7ge-1"
          liveLink="https://www.figma.com/proto/bK3DXfYqrATbirIOYONLPc/TravelBliss_Pro1?t=WSrzkvTinLHNLmCY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
        />
        
        {/* <ProjectsCard
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
  );
};

export default Projects;
