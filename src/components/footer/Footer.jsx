// Footer.jsx - Professional Redesign
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Simple tagline - no typewriter effect */}
          <p className="text-gray-400 text-sm mb-4">
            Building digital experiences that make a difference
          </p>
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Varsha Shetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;