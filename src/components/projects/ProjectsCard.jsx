import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaGlobe } from 'react-icons/fa'

const ProjectsCard = ({ title, des, src, githubLink, liveLink }) => {
  return (
    <div className='w-full px-3 xs:px-6 md:px-8 lg:px-12 h-auto py-6 xs:py-8 md:py-8 lg:py-10 rounded-lg shadow-shadowOne
    flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group 
    hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors
    duration-1000
    '>
     <div className='w-full h-[80%] overflow-hidden rounded-lg flex items-center justify-center'>
      <img className='w-full md:w-auto h-full object-cover group-hover:scale-110 duration-300 cursor-pointer' src={src} alt='src'/>
     </div>
     <div className='w-full mt-4 xs:mt-6 md:mt-5 flex flex-col gap-3 xs:gap-4 md:gap-3'>
      
      {/* Title and Icons Container */}
      <div className='flex items-center justify-between'>
        {/* Title with flexible width */}
        <h3 className='text-designColor font-titleFont font-bold text-sm xs:text-base md:text-base lg:text-lg'>
          {title}
        </h3>
        
        {/* Icons aligned to the right */}
        <div className='flex gap-3'>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <span className='text-lg w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-designColor
              duration-300 cursor-pointer
              '>
              <BsGithub className="text-lg xs:text-xl"/>
            </span>
          </a>
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
            <span className='text-lg w-8 h-8 xs:w-9 xs:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex
              justify-center items-center text-gray-400 hover:text-designColor
              duration-300 cursor-pointer
              '>
              <FaGlobe className="text-lg xs:text-xl"/>
            </span>
          </a>
        </div>
      </div>

      {/* Description */}
      <div className="pb-2">
          <p className='text-sm md:text-sm tracking-wide hover:text-gray-100 duration-300 leading-6'>{des}</p>
      </div>
     </div>
    </div>
  )
}

export default ProjectsCard
