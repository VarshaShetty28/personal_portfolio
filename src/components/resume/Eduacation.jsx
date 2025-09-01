// Education.jsx - Professional Redesign
import React from 'react'
import { motion } from 'framer-motion'

const Education = () => {
    const educationData = [
        {
            degree: "B.E. Computer Science & Engineering",
            institution: "Mangalore Institute of Technology and Engineering",
            period: "2022 - Present",
            grade: "9.38 CGPA",
            description: "Specializing in full-stack development, AI/ML, and software engineering principles."
        },
        {
            degree: "Pre-University Education (Science)",
            institution: "Government PU College Bailur",
            period: "2020 - 2022",
            grade: "86%",
            description: "Focused on Mathematics, Physics, and Chemistry with Computer Science."
        },
        {
            degree: "Secondary Education",
            institution: "Government PU College Bailur",
            period: "2018 - 2020",
            grade: "88%",
            description: "Foundation in core subjects with emphasis on Mathematics and Science."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='space-y-8'>
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className='relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-gray-700'
                    >
                        {/* Timeline dot */}
                        <div className='absolute left-0 top-6 w-2 h-2 -translate-x-1/2 rounded-full bg-gray-600'>
                            <div className='absolute inset-0 rounded-full bg-emerald-400 scale-0 group-hover:scale-100 transition-transform duration-300'></div>
                        </div>

                        {/* Content */}
                        <div className='group bg-gray-900/30 rounded-lg p-6 hover:bg-gray-900/50 transition-colors duration-300'>
                            <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
                                <div className='flex-1'>
                                    <h3 className='text-xl font-semibold text-white mb-1'>
                                        {item.degree}
                                    </h3>
                                    <p className='text-gray-400 text-sm mb-2'>
                                        {item.institution}
                                    </p>
                                    {/* <p className='text-gray-500 text-sm'>
                                        {item.description}
                                    </p> */}
                                </div>
                                <div className='flex flex-col sm:items-end gap-2'>
                                    <span className='text-sm text-gray-400'>
                                        {item.period}
                                    </span>
                                    <span className='inline-flex px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full'>
                                        {item.grade}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Education