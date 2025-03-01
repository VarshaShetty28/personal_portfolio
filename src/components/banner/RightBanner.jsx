// RightBanner.jsx
import React from 'react'
import bannerImg from '../../assets/images/bannerImgl_rev.png';

const RightBanner = () => {
  return (
    <div className='w-full pt-10 lg:w-1/2 flex justify-center items-center relative mt-10 lg:mt-0'>
      <img
        className='w-[100%] min-w-[380px] md:min-w-[450px] lg:w-auto relative lg:-mt-24 lg:-ml-5 z-10'
        src={bannerImg} 
        alt="bannerimg" 
      />
      <div className='absolute bottom-0 w-[100%] min-w-[380px] md:min-w-[450px] lg:w-[500px] h-[400px] md:h-[450px] lg:h-[480px] bg-gradient-to-r 
        from-[#1e2024] to-[#202327] shadow-shadowOne z-0'>
      </div>
    </div>
  )
}

export default RightBanner