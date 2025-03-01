// Resume.js
import React, { useState } from 'react'
import Title from '../layouts/Title'
import Eduacation from './Eduacation'
import Skills from './Skills'

const Resume = () => {
    const [educationData, setEducation] = useState(true);
    const [skillData, setskillData] = useState(false);
    
  return (
    <section id='resume' className='w-full py-8 lg:pt-10 lg:pb-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center px-4 lg:px-0'>
        <Title 
          title=""
          des="My Resume"
        />
      </div>
      <div className="flex justify-center items-center px-4 lg:px-0">
        <ul className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0 justify-center items-center'>
          <li 
            onClick={()=>setEducation(true) & setskillData(false)} 
            className={`${educationData ? "border-designColor rounded-lg": "border-transparent"} resumeli text-center cursor-pointer p-4 sm:p-2`}
          >
            Education
          </li>
          <li 
            onClick={()=>setskillData(true) & setEducation(false)}
            className={`${skillData ? "border-designColor rounded-lg": "border-transparent"} resumeli text-center cursor-pointer p-4 sm:p-2`}
          >
            Professional Skills
          </li>
        </ul>
      </div>
      {educationData && <Eduacation/>}
      {skillData && <Skills/>}
    </section>
  )
}

export default Resume