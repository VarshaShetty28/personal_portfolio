// Projects.jsx
import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import healthGrid from "../../assets/images/lap_home.png";
import nugget from "../../assets/images/nugget.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Health Grid",
      category: "Full Stack Application",
      description: "A full-stack MERN application for booking doctor appointments. It enables patients to book and pay for appointments, doctors to manage schedules, and admins to oversee users and appointments — all through a responsive and user-friendly interface.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: healthGrid,
      github: "https://github.com/VarshaShetty28/health_grid.git",
      live: "https://health-grid-frontend.onrender.com"
    },
    {
  title: "Monica AI",
  category: "AI-Powered Conversational Assistant",
  description: "A voice-enabled conversational AI assistant that supports both text and voice interactions, delivering real-time responses with a smooth and user-friendly interface.",
  tech: [
    "Python","JavaScript",
    "Web Speech API",
    "OpenAI & Groq Models",
    "FastAPI & LangChain",
    
  ],
  image: p4, // replace with your Monica AI image import
  github: "https://github.com/your-username/monica-ai", // replace with actual repo link
  live: "https://your-live-demo-link.com" // replace with actual live link
},


    {
      title: "Nuggets",
      category: "AI-Powered Platform",
      description: "Smart news aggregator using AI to deliver personalized, bite-sized summaries across multiple domains including Technology, Business, and Sports.",
      tech: [  "React",  "Python",  "newspaper3k",  "FastAPI",  "TailwindCSS",  "Pydantic"],
      image: nugget,
      github: "https://github.com/VarshaShetty28/nuggets.git",
      live: "https://nuggets-375.pages.dev/"
    },
    {
      title: "TuneTrek",
      category: "E-commerce Platform",
      description: "Interactive headphone marketplace with advanced filtering, comparison features, and smooth animations using Framer Motion.",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      image: p1,
      github: "https://github.com/VarshaShetty28/tunetrek",
      live: "https://tunetrek-theta.vercel.app/"
    },
    {
      title: "Portfolio Website",
      category: "Personal Project",
      description: "Modern portfolio showcasing skills and projects with clean design, smooth animations, and responsive layout.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: p2,
      github: "https://github.com/VarshaShetty28/personal_portfolio",
      live: "https://personal-portfolio-pi-lac.vercel.app/"
    },
    {
      title: "TravelBliss",
      category: "UI/UX Design",
      description: "Figma-designed travel platform focusing on user experience with elegant UI and stress-free booking flow.",
      tech: ["Figma", "Prototyping", "UI Design"],
      image: p3,
      github: "https://www.figma.com/design/bK3DXfYqrATbirIOYONLPc/TravelBliss_Pro1",
      live: "https://www.figma.com/proto/bK3DXfYqrATbirIOYONLPc/TravelBliss_Pro1"
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, AI integration, and design capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectsCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;