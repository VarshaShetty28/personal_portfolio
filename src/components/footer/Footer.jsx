import React from 'react';
import Typewriter from 'react-typewriter-effect';

const Footer = () => {
  const designColor = '#9329C2';
  const gratitudeColor = '#C0C0C0'; // Or '#B165D9'

  return (
    <section className="w-full h-auto pt-10 pb-10 border-b-[1px] border-b-black flex justify-center items-center">
      <div className="text-center px-4"> {/* Added px-4 for padding on smaller screens */}
        <div className="font-lobster text-3xl font-semibold text-center text-purple-600 mb-3">
          <Typewriter
            textStyle={{
              color: designColor,
            }}
            startDelay={500}
            cursorColor={designColor}
            text='Every Success story starts with a First Chapter!'
            typeSpeed={80}
            hideCursorAfterText={true}
          />
        </div>
        <p className="text-sm mb-2 gratitude-zoom" style={{ color: gratitudeColor }}>
          Thank you for visiting!
        </p>
        <p className="text-sm text-gray-600 mb-2">
          Full Stack Developer | Problem Solver | Lifelong Learner
        </p>
        <hr className="w-1/4 mx-auto mt-4 border-t border-gray-300" />
        <p className="mt-3 text-sm text-gray-500 mb-0">
          © {new Date().getFullYear()} Varsha Shetty. All rights reserved.
        </p>
      </div>
      <style jsx>{`
        .gratitude-zoom {
          animation: zoomInOut 3s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
        }

        @media (max-width: 768px) {
            .font-lobster {
                font-size: 2xl;
            }
        }
      `}</style>
    </section>
  );
};

export default Footer;