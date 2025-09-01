// Skills.jsx - Professional Redesign
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "HTML/CSS", level: 95 },
                { name: "Next.js", level: 75 }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: 80 },
                { name: "Express.js", level: 75 },
                { name: "Python", level: 70 },
                { name: "MongoDB", level: 75 },
                { name: "MySQL", level: 70 }
            ]
        },
        {
            title: "Tools & Others",
            skills: [
                { name: "Git/GitHub", level: 85 },
                { name: "Vercel/Render", level: 90 },
                { name: "Figma", level: 80 },
                { name: "VS Code", level: 90 },
                { name: "Postman", level: 85 }
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={categoryIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                        className='bg-gray-900/30 rounded-lg p-6'
                    >
                        <h3 className='text-lg font-semibold text-white mb-6'>
                            {category.title}
                        </h3>
                        <div className='space-y-4'>
                            {category.skills.map((skill, index) => (
                                <div key={index}>
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-sm text-gray-300'>{skill.name}</span>
                                        <span className='text-sm text-gray-500'>{skill.level}%</span>
                                    </div>
                                    <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: index * 0.1 }}
                                            className='h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full'
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Skills */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='mt-8 text-center'
            >
                <p className='text-gray-400 text-sm'>
                    Also familiar with: <span className='text-gray-300'>C, Dart, Flutter, AI/ML, REST APIs, Agile Methodology</span>
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Skills;