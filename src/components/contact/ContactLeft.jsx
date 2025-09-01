// ContactInfo.js - Cleaner Left Section
import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { HiMail, HiLocationMarker } from 'react-icons/hi'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <HiMail className="text-emerald-400" />,
      label: "Email",
      value: "varshashetty289@gmail.com",
      link: "mailto:varshashetty289@gmail.com"
    },
    {
      icon: <HiLocationMarker className="text-emerald-400" />,
      label: "Location",
      value: "Udupi, Karnataka, India"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/varshashetty28/",
      label: "LinkedIn"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/VarshaShetty28",
      label: "GitHub"
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/Varsha1478",
      label: "Twitter"
    }
  ];

  return (
    <div className='space-y-8'>
      {/* Quick Info */}
      <div>
        <h3 className='text-2xl font-semibold text-white mb-2'>
          Let's work together
        </h3>
        <p className='text-gray-400 text-sm leading-relaxed'>
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </div>

      {/* Contact Details */}
      <div className='space-y-4'>
        {contactDetails.map((item, index) => (
          <div key={index} className='flex items-start gap-4'>
            <div className='text-xl mt-1'>{item.icon}</div>
            <div>
              <p className='text-sm text-gray-500'>{item.label}</p>
              {item.link ? (
                <a 
                  href={item.link}
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  {item.value}
                </a>
              ) : (
                <p className='text-gray-300'>{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <p className='text-sm text-gray-500 mb-3'>Connect with me</p>
        <div className='flex gap-3'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className='w-10 h-10 rounded-lg bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-600 transition-all duration-300'
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo