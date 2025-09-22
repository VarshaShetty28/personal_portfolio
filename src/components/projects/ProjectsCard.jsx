// ProjectsCard.jsx - Professional Redesign (Full Description + Full Tech + Equal Height)
import React from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';

const ProjectsCard = ({ title, category, description, tech, image, github, live }) => {
  return (
    <div className="group relative bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-800">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Category Badge */}
        <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mt-2 mb-3">
          {title}
        </h3>

        {/* Description (full, not clamped) */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Stack (full list) */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links (stick to bottom) */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-800 mt-auto">
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <HiCode size={18} />
            <span>Code</span>
          </a>
          <a 
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <HiExternalLink size={18} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
