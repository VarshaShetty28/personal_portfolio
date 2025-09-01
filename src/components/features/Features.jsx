// Features.jsx - Professional Services Section
import React from 'react'
import { HiCode, HiLightningBolt, HiDatabase, HiDesktopComputer, HiCloud, HiCube } from 'react-icons/hi'
import { motion } from "framer-motion"

const Features = () => {
  const services = [
    {
      icon: <HiCode className="text-cyan-400" />,
      title: "Full Stack Development",
      description: "End-to-end web application development using MERN stack with focus on scalability and performance",
      skills: ["React.js", "Node.js", "MongoDB", "Express.js"]
    },
    {
      icon: <HiLightningBolt className="text-yellow-400" />,
      title: "AI/ML Integration",
      description: "Building intelligent features using Python, NLP, and modern AI frameworks for smart applications",
      skills: ["Python", "TensorFlow", "NLP", "LangChain"]
    },
    {
      icon: <HiDesktopComputer className="text-purple-400" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive user interfaces with modern frameworks and best practices",
      skills: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"]
    },
    {
      icon: <HiDatabase className="text-green-400" />,
      title: "Backend & APIs",
      description: "Designing robust server architectures, RESTful APIs, and database management systems",
      skills: ["Node.js", "Express", "MongoDB", "MySQL"]
    },
    {
      icon: <HiCloud className="text-blue-400" />,
      title: "Web Deployment",
      description: "Deploying and hosting web applications on modern platforms",
      skills: ["Vercel (Frontend)", "Render (Full-stack)","Netlify"]
    },
    {
      icon: <HiCube className="text-pink-400" />,
      title: "Problem Solving",
      description: "Strong DSA foundation with 100+ LeetCode problems solved and competitive programming experience",
      skills: ["Algorithms", "Data Structures", "System Design"]
    }
  ];

  return (
    <section id='features' className='w-full py-20 border-b border-gray-800'>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            What I Do
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Specialized services in web development, AI integration, and software engineering
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 bg-gray-900/30 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-800/50 text-gray-400 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features