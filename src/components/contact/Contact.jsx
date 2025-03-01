// Contact.js
import React from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
  return (
    <section id='contacts' className='w-full pt-10 pb-20 border-b-[1px] border-b-black'>
    <div className='flex justify-center items-center'>
        <Title 
          title=""
          des="Contact With Me!"
          />
   </div>
   <div className='w-full px-4 lg:px-0'>
        <div className='w-full h-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0'>
            <ContactLeft/>
            <div className='w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23273b] p-8
                rounded-lg shadow-shadowOne'>
                <ContactRight/>
            </div>
        </div>
   </div>
   </section>
  )
}

export default Contact