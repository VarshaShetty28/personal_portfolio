// RightBanner.jsx
import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/images/img.png";

const RightBanner = () => {
  return (
    <div className="w-full pt-8 sm:pt-12 lg:pt-16 lg:w-1/2 flex justify-center items-center relative mt-6 sm:mt-8 lg:mt-10 perspective-[1200px]">
      
      {/* Curved Floating Animated Image with Effects */}
      <motion.img
        className="
          w-[90%] sm:w-[85%] lg:w-[100%] 
          min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[280px] sm:lg:min-w-[320px] md:lg:min-w-[400px]
          relative lg:-mt-20
          mx-auto sm:mx-auto md:mx-auto lg:ml-10 lg:mr-0
          z-10 drop-shadow-xl lg:drop-shadow-2xl
          rounded-[25px] sm:rounded-[30px] lg:rounded-[40px]
          [transform:perspective(800px)_rotateX(5deg)_rotateY(-4deg)] sm:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-6deg)] lg:[transform:perspective(1200px)_rotateX(10deg)_rotateY(-8deg)]
          border-[2px] sm:border-[2.5px] lg:border-[3px] border-white/30
        "
        src={bannerImg}
        alt="bannerimg"
        animate={{
          opacity: 1,
          y: [0, -8, 0], // Reduced floating for mobile
          boxShadow: [
            "0 15px 30px rgba(0,0,0,0.25)",
            "0 25px 50px rgba(0,0,0,0.4)",
            "0 15px 30px rgba(0,0,0,0.25)"
          ]
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      {/* Glow Effect Behind - responsive sizing */}
      <div className="absolute w-[60%] h-[60%] sm:w-[65%] sm:h-[65%] lg:w-[70%] lg:h-[70%] rounded-full blur-2xl sm:blur-3xl lg:blur-3xl bg-blue-500/25 sm:bg-blue-500/30 lg:bg-blue-500/30 animate-pulse" />
    </div>
  );
};

export default RightBanner