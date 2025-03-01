import React from 'react'
import contactImg from "../../assets/images/contactImg.png";
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div className='w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23273b] p-8
    rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
        <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={contactImg} alt="conatactimg" />
        <div className='flex flex-col gap-4 mb-2'>
            <h3 className='text-3xl font-bold text-white'>Varsha Shetty</h3>
            <p className='text-lg font-normal text-gray-400'>MERN Stack Developer </p>
            <p className='text-base text-gray-400 tracking-wide'>As a MERN stack developer with a strong foundation 
                in Data Structures and Algorithms (DSA) and experience in Flutter,
                 I am eager to connect with innovative professionals to collaborate on cutting-edge projects </p>

            {/* <p className='text-base text-gray-400 flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                Phone: <span className='text-lightText'>+91-------</span>
            </p> */}
            <p className='text-base text-gray-400 flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                Email:{" "} <span className='text-lightText'>varshashetty289@gmail.com</span>
            </p>
        </div>
        <div className='flex flex-col gap-4'>
            <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
            <div className='flex gap-4'>
                   
                     <a 
                         href="https://www.linkedin.com/in/yourusername" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="banner-icon"
                         >
                         <FaLinkedinIn />
                     </a> 
                     <a 
                         href="https://x.com/Varsha1478?t=u5Lcsis8vXR_IEqc3dcaiQ&s=09" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="banner-icon"
                         >
                         <FaTwitter />
                     </a>
 
                     
                     <a 
                         href="https://www.instagram.com/yourusername" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="banner-icon"
                         >
                         <FaInstagram />
                     </a>         
            </div>
        </div>
    </div>
  )
}

export default ContactLeft
