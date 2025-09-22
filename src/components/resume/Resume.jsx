// Resume.js - Responsive Tabs
import React, { useState } from 'react'
import Education from './Eduacation.jsx'
import Skills from './Skills.jsx'
import Achievements from './Achievement.jsx'
import Courses from './Courses.jsx'

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education')

  return (
    <section id='resume' className='w-full py-20 border-b border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Resume
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            My educational background, skills, achievements, and continuous learning
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-12'>
          <div className='flex flex-wrap sm:inline-flex rounded-lg bg-gray-900/50 p-1 gap-2 sm:gap-1 w-full sm:w-auto justify-center'>
            {[
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'achievements', label: 'Achievements' },
              { id: 'courses', label: 'Courses' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none px-3 py-2 text-sm md:px-4 md:py-2 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='mt-8'>
          {activeTab === 'education' && <Education />}
          {activeTab === 'skills' && <Skills />}
          {activeTab === 'achievements' && <Achievements />}
          {activeTab === 'courses' && <Courses />}
        </div>
      </div>
    </section>
  )
}

export default Resume
