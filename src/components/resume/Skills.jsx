import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="px-4 lg:px-0"
    >
      <div className='py-6 lg:py-12 font-titleFont gap-4 mt-3 lg:mt-5'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>
          Professional Skills
        </h2>
      </div>
      <div className='flex flex-col lg:flex-row w-full gap-8 lg:gap-20'>
        <div className='w-full lg:w-1/2'>
          <div className='mt-6 lg:mt-10 w-full flex flex-col gap-6'>
            <SkillBar skill="Wordpress" percentage="100" />
            <SkillBar skill="Figma" percentage="90" />
            <SkillBar skill="Vs code" percentage="100" />
            <SkillBar skill="Android Studio" percentage="70" />
            <SkillBar skill="Flutter" percentage="60" />
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='mt-6 lg:mt-10 w-full flex flex-col gap-6'>
            <SkillBar skill="Python" percentage="100" />
            <SkillBar skill="C" percentage="90" />
            <SkillBar skill="React" percentage="100" />
            <SkillBar skill="CSS" percentage="70" />
            <SkillBar skill="Dart" percentage="60" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// New reusable SkillBar component
const SkillBar = ({ skill, percentage }) => (
  <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>{skill}</p>
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="h-2 bg-opacity-20 bg-gray-300 rounded-md mt-2"
      style={{ width: `${percentage}%` }}  // ✅ Fixed width issue
    >
      <div className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-600 to-red-500 rounded-md relative'>
        <span className='absolute -top-7 right-0 text-sm'>{percentage}%</span>
      </div>
    </motion.div>
  </div>
);

export default Skills;