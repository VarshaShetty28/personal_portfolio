import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div   
      initial = {{opacity:0}}
      animate ={{opacity:1, transition:{duration:1.5}}}
      className="px-4 lg:px-0"
    >
      <div className='py-6 lg:py-12 font-titleFont gap-4 mt-3 lg:mt-5'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-center'>Education Info</h2>
      </div>
      <div>
        <div className='mt-6 lg:mt-10 w-full min-h-[600px] lg:h-[1000px] border-l-[6px] border-black flex flex-col gap-6 lg:gap-10'>
          <ResumeCard 
            title='BE-Computer Science & Engineering'
            subTitle="Managalore Institute of technology and engineering(2022-present)"
            result="9.38/10"
            des="An institute where I honed my technical skills and deepened my understanding of computer science and engineering."
          />
          <ResumeCard 
            title="Pre-University Education (PU)"
            subTitle="Government PU College Bailur (GPUC Bailur) | 2020-2022"
            result="86%"
            des="Pursued pre-university studies with a specialization in science, building a solid understanding of mathematics, physics, and chemistry."
          />
          <ResumeCard 
            title="Secondary Education (Class 10)"
            subTitle="Government PU College Bailur (GPUC Bailur) | 2018-2020"
            result="88%"
            des="Completed my 10th-grade education, gaining a foundational understanding of core subjects."
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Education