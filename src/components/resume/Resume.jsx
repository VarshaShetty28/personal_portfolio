// Resume.js - With 4 separate tabs
import React, { useState } from 'react'
import Education from './Eduacation.jsx'
import Skills from './Skills.jsx'
import Achievements from './Achievement.jsx'
import Courses from './Courses.jsx'

const Resume = () => {
    const [activeTab, setActiveTab] = useState('education');
    
    return (
        <section id='resume' className='w-full py-20 border-b border-gray-800'>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                        Resume
                    </h2>
                    <p className='text-gray-400 max-w-2xl mx-auto'>
                        My educational background, skills, achievements, and continuous learning
                    </p>
                </div>

                {/* Tab Navigation - 4 tabs */}
                <div className='flex justify-center mb-12'>
                    <div className='inline-flex rounded-lg bg-gray-900/50 p-1 flex-wrap gap-1'>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeTab === 'education'
                                    ? 'bg-white text-gray-900'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Education
                        </button>
                        <button
                            onClick={() => setActiveTab('skills')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeTab === 'skills'
                                    ? 'bg-white text-gray-900'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Skills
                        </button>
                        <button
                            onClick={() => setActiveTab('achievements')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeTab === 'achievements'
                                    ? 'bg-white text-gray-900'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Achievements
                        </button>
                        <button
                            onClick={() => setActiveTab('courses')}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                activeTab === 'courses'
                                    ? 'bg-white text-gray-900'
                                    : 'text-gray-400 hover:text-white'
                            }`}
                        >
                            Courses
                        </button>
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