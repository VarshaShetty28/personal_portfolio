import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';
import { FaInstagram, FaLinkedinIn, FaPython, FaReact, FaTwitter } from 'react-icons/fa';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Develeloper.", "Coder.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    
    return (
        <div className='w-full lg:w-1/2 flex flex-col gap-10 lg:gap-20 mt-2 lg:mt-10'>
            <div className='flex flex-col text-center lg:text-left gap-3 lg:gap-5'>
                <h4 className="text-lg md:text-xl lg:text-1.5xl font-titleFont uppercase text-col">Welcome To My World!</h4>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5.5xl font-bold text-white'>Hey, This is {" "}</h1>
                    <span className='text-designColor capitalize text-3xl md:text-4xl lg:text-5.5xl font-bold'>Varsha Shetty</span>
                </div>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white'>
                    a <span>{text}</span>
                    <Cursor 
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#9329C2'
                    />
                </h2>
                <p className='text-sm md:text-base font-bodyFont leading-6 tracking-wide max-w-[600px] mx-auto lg:mx-0'>
                    I approach coding as a means to simplify complex problems,
                    ensuring efficiency in every solution. It's not just about
                    writing code but crafting smarter, more impactful solutions 
                    that drive innovation and enhance user experiences.
                </p>
            </div>

            <div className='flex flex-col md:flex-row justify-center lg:justify-between gap-8 md:gap-0'>
                <div className='text-center lg:text-left'>
                    <h2 className='uppercase font-semibold text-sm lg:text-base font-titleFont mb-4 text-col'>Find me in </h2>
                    <div className='flex gap-4 justify-center lg:justify-start'>
                        <a 
                            href="https://www.linkedin.com/in/varshashetty28/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="banner-icon"
                            >
                            <FaLinkedinIn />
                        </a>
                        <a 
                            href="https://twitter.com/yourusername" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="banner-icon"
                            >
                            <FaTwitter />
                        </a>
                        <a 
                            href="https://www.instagram.com/_varsha___shetty" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="banner-icon"
                            >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div className='text-center lg:text-left'>
                    <h2 className='uppercase text-sm lg:text-base font-titleFont mb-4 text-col font-semibold'>Best Skill on </h2>
                    <div className='flex gap-4 justify-center lg:justify-start'>
                    <div className="relative group">
                            <span className='banner-icon'>
                            <FaReact />
                            </span>
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            React
                            </span>
                        </div>

                        {/* Tailwind Icon with Tooltip */}
                        <div className="relative group">
                            <span className='banner-icon'>
                            <SiTailwindcss />
                            </span>
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tailwind CSS
                            </span>
                        </div>

                        {/* Figma Icon with Tooltip */}
                        <div className="relative group">
                            <span className='banner-icon'>
                            <SiFigma />
                            </span>
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Figma
                            </span>
                        </div>

                        {/* Python Icon with Tooltip */}
                        <div className="relative group">
                            <span className='banner-icon'>
                            <FaPython />
                            </span>
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Python
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftBanner