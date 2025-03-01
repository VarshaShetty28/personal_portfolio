import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import { FiDownload } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/images/logoI.png';
import { navLinksdata } from '../../constants';
import resumeFile from '../../assets/MITE_CSE_VARSHA.pdf';
import { motion } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [showMenu, setShowMenu] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleOpenResume = () => {
    window.open(resumeFile, '_blank');
  };

  return (
    <motion.div className="fixed top-0 left-0 right-0 h-24 z-50 bg-bodyColor flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 transition-colors duration-500" data-theme={theme}
    initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1,delay:0.5}}
            >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-18 flex justify-between items-center h-full">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="flex items-center gap-4">
          {/* Download icon for mobile */}
          <div className="mdl:hidden">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 cursor-pointer relative"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={handleOpenResume}
            >
              <FiDownload className="text-gray-400 hover:text-white" />
              {showTooltip && (
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap">
                  View my Resume
                </div>
              )}
            </div>
          </div>

          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
            {/* Download icon for desktop */}
            <li className="inline-flex items-center">
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600 hover:bg-purple-600 cursor-pointer relative"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={handleOpenResume}
              >
                <FiDownload className="text-gray-200 hover:text-white text-2xl" />
                {showTooltip && (
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs py-1 px-2 rounded-md whitespace-nowrap">
                    View my Resume
                  </div>
                )}
              </div>
            </li>
          </ul>

          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen fixed top-0 left-0 bg-gray-900 p-4 overflow-y-auto">
              <div className="flex flex-col gap-8 py-2 relative">
                <div>
                  <div className='flex'>
                    <img className="w-28" src={logo} alt="logo" />
                    <h1 className='mt-12 text-2xl text-gray-400 font-titleFont font-semibold'>Varsha Shetty</h1>
                  </div>
                  <p className="text-sm text-gray-400 mt-10 tracking-wide">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum soluta perspiciatis molestias enim cum repellat, magnam
                    exercitationem distinctio aliquid nam.
                  </p>
                </div>
                <ul className="flex flex-col gap-4">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="banner-icon"
                  >
                    <FaInstagram />
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
                        href="https://www.linkedin.com/in/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="banner-icon"
                      >
                        <FaLinkedinIn />
                      </a>
                  </div>
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;