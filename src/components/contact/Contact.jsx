// Contact.js - Professional Redesign
import React from 'react'
import ContactInfo from './ContactLeft.jsx'
import ContactForm from './ContactRight.jsx'

const Contact = () => {
  return (
    <section id='contacts' className='w-full py-20 border-b border-gray-800'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Get In Touch
          </h2>
          <p className='text-gray-400 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <ContactInfo />
          <div className='lg:col-span-2'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact