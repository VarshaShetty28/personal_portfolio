import React from 'react'
import { SiTailwindcss, SiFigma, SiNextdotjs, SiMongodb, SiNodedotjs } from 'react-icons/si';
import { FaGithub, FaLinkedinIn, FaPython, FaReact, FaTwitter } from 'react-icons/fa';

const LeftBanner = () => {
    return (
      <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-6 mt-8 lg:mt-4">
        
        {/* Main Content */}
        <div className="flex flex-col text-center lg:text-left gap-4 lg:gap-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 self-center lg:self-start">

            <p className="font-medium text-grey tracking-wide">
              Welcome to my portfolio
            </p>
          </div>

          {/* Name */}
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
              I'm Varsha Shetty
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-1xl font-medium text-gray-300">
              Full Stack Developer | Problem Solver | Agentic AI Developer
            </h2>
          </div>

          {/* Bio */}
          <p className="text-base md:text-lg font-normal leading-relaxed text-gray-400 max-w-[600px] mx-auto lg:mx-0">
            Building scalable web applications and AI-powered solutions with expertise in 
            <span className="text-gray-200"> React, Node.js, Python</span>, and modern cloud architectures. 
            Passionate about creating impactful products that solve real-world problems.
          </p>

          {/* Key Achievements */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-emerald-400">✓</span>
              <span>Hackathon Enthusiast</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-emerald-400">✓</span>
              <span>Open Source Contributor</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-emerald-400">✓</span>
              <span>Aspiring Freelancer</span>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-300">
              MERN Stack
            </span>
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-300">
              Product Design
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300">
              NLP
            </span>
          </div>
        </div>

        {/* Professional Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 w-full">
          <div className="text-center lg:text-left p-3 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="text-2xl font-bold text-white">5+</h3>
            <p className="text-xs text-gray-500 mt-0.5">Hackathons</p>
          </div>
          <div className="text-center lg:text-left p-3 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="text-2xl font-bold text-white">10+</h3>
            <p className="text-xs text-gray-500 mt-0.5">Projects Built</p>
          </div>
          <div className="text-center lg:text-left p-3 rounded-lg bg-gray-900/50 border border-gray-800">
            <h3 className="text-2xl font-bold text-white">100+</h3>
            <p className="text-xs text-gray-500 mt-0.5">LeetCode Problems</p>
          </div>
        </div>

        {/* Bottom Section - Single Line */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
          
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-400 hidden sm:block">Connect:</p>
            <a
              href="https://www.linkedin.com/in/varshashetty28/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://x.com/Varsha1478"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300"
            >
              <FaTwitter size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700 hidden md:block"></div>

          {/* Email */}
          <a
            href="mailto:varshashetty289@gmail.com"
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            varshashetty289@gmail.com
          </a>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-700 hidden md:block"></div>

          {/* Location */}
          <span className="text-sm text-gray-400">📍 Udupi, Karnataka, India</span>

        </div>
      </div>
    );
}

export default LeftBanner;
