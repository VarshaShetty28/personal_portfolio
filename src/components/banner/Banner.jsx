import React, { useState, useEffect } from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { motion } from "framer-motion";

const Banner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchRipples, setTouchRipples] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop mouse tracking
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
      setMousePos(newPos);
      
      setTrail(prev => [
        newPos,
        ...prev.slice(0, 5) // Reduced trail length for cleaner look
      ]);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.getElementById("home")?.addEventListener("mouseenter", handleMouseEnter);
    document.getElementById("home")?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.getElementById("home")?.removeEventListener("mouseenter", handleMouseEnter);
      document.getElementById("home")?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile]);

  // Mobile touch effects
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      const newRipple = {
        id: Date.now(),
        x: touch.clientX,
        y: touch.clientY,
      };
      
      setTouchRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setTouchRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1500);
    };

    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, [isMobile]);

  // Subtle floating orbs for mobile
  const FloatingOrbs = () => (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(147, 51, 234, 0.05) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
          initial={{
            left: `${i * 20}%`,
            top: `${i * 15}%`,
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="relative w-full py-20 flex flex-col lg:flex-row pt-28 border-b-[1px] border-b-black font-titleFont px-4 md:px-6 lg:px-10 overflow-hidden"
    >
      {/* Mobile Effects */}
      {isMobile && (
        <>
          <FloatingOrbs />

          {/* Touch ripples - more subtle */}
          {touchRipples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="fixed pointer-events-none z-40"
              initial={{ 
                opacity: 0.3, 
                scale: 0,
                x: ripple.x - 30,
                y: ripple.y - 30,
              }}
              animate={{ 
                opacity: 0, 
                scale: 3,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400/10 to-transparent" />
            </motion.div>
          ))}
        </>
      )}

      {/* Desktop Effects - Professional and Subtle */}
      {!isMobile && isHovering && (
        <>
          {/* Main cursor - elegant glow */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen"
            animate={{
              x: mousePos.x - 15,
              y: mousePos.y - 15,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 28,
              mass: 0.5,
            }}
          >
            <motion.div
              className="relative w-8 h-8"
              animate={{
                scale: isClicked ? 0.8 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              {/* Core dot */}
              <div className="absolute inset-2 bg-purple-400/30 rounded-full" />
              
              {/* Outer glow */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
                  filter: 'blur(4px)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Subtle trail */}
          {trail.map((pos, index) => (
            <motion.div
              key={pos.id || index}
              className="fixed top-0 left-0 pointer-events-none z-40 mix-blend-screen"
              initial={{ opacity: 0 }}
              animate={{
                x: pos.x - 4,
                y: pos.y - 4,
                opacity: (trail.length - index) / trail.length * 0.15,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
            >
              <div 
                className="w-2 h-2 rounded-full bg-purple-400/20"
                style={{
                  filter: `blur(${index * 0.8}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Click effect - subtle pulse */}
          {isClicked && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-30"
              initial={{ opacity: 0.5, scale: 0 }}
              animate={{ 
                opacity: 0, 
                scale: 2,
                x: mousePos.x - 20,
                y: mousePos.y - 20,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div 
                className="w-10 h-10 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
                }}
              />
            </motion.div>
          )}

          {/* Ambient glow that follows cursor slowly */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-20"
            animate={{
              x: mousePos.x - 100,
              y: mousePos.y - 100,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 30,
              mass: 2,
            }}
          >
            <div 
              className="w-48 h-48 rounded-full opacity-20"
              style={{
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, transparent 50%)',
                filter: 'blur(60px)',
              }}
            />
          </motion.div>
        </>
      )}

      {/* Banner content */}
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;