// Card.jsx - Updated with responsive padding and height
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
const Card = ({title,des,icon}) => {
  return (
    <div className='w-full px-4 sm:px-8 lg:px-12 h-auto min-h-[320px] py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from 
    bodycolor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
    transition-colors duration-100 group'>
 <div className='h-full overflow-y-hidden'>
  <div className='flex flex-col gap-6 sm:gap-8 lg:gap-10 h-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500'>
  <div>
      <span className='text-4xl sm:text-5xl text-designColor'>{icon}</span>
    </div>
    <div className='flex flex-col gap-4 sm:gap-6'>
      <h2 className='text-xl sm:text-2xl font-titleFont font-bold text-gray-300'>{title}</h2>
      <p className='text-sm sm:text-base'>{des}</p>
      <span className='text-xl sm:text-2xl text-designColor'><HiArrowRight /></span>
    </div>
  </div>
 </div>
    </div>
  )
}
export default Card