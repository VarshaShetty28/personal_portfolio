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
        ...prev.slice(0, 8)
      ]);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
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
      
      // Remove ripple after animation
      setTimeout(() => {
        setTouchRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('touchstart', handleTouchStart);
    return () => window.removeEventListener('touchstart', handleTouchStart);
  }, [isMobile]);

  // Floating particles animation for mobile
  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-300/20 rounded-full backdrop-blur-sm"
          animate={{
            x: [0, Math.random() * window.innerWidth],
            y: [window.innerHeight + 50, -50],
            rotate: [0, 360],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
          style={{
            left: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );

  // Pulsing background gradient for mobile
  const PulsingBackground = () => (
    <motion.div
      className="absolute inset-0 opacity-10 pointer-events-none"
      animate={{
        background: [
          'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          'radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)',
          'radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.12) 0%, transparent 50%)',
          'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
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
          <PulsingBackground />
          <FloatingParticles />
          
          {/* Touch ripples */}
          {touchRipples.map((ripple) => (
            <motion.div
              key={ripple.id}
              className="fixed pointer-events-none z-40"
              initial={{ 
                opacity: 0.8, 
                scale: 0,
                x: ripple.x - 50,
                y: ripple.y - 50,
              }}
              animate={{ 
                opacity: 0, 
                scale: 4,
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-24 h-24 border border-purple-300/30 rounded-full backdrop-blur-sm" />
              <div className="absolute inset-4 border border-purple-400/20 rounded-full backdrop-blur-sm" />
              <div className="absolute inset-8 bg-purple-200/10 rounded-full backdrop-blur-md" />
            </motion.div>
          ))}

          {/* Animated corner decorations */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-purple-300/40 rounded-lg transform rotate-45 backdrop-blur-sm" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 opacity-15"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full border border-purple-400/30 rounded-full backdrop-blur-sm" />
          </motion.div>
        </>
      )}

      {/* Desktop Effects */}
      {!isMobile && (
        <>
          {/* Morphing blob cursor */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            animate={{
              x: mousePos.x - 20,
              y: mousePos.y - 20,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-purple-300/20 backdrop-blur-md border border-purple-200/30 shadow-lg shadow-purple-500/10"
              animate={{
                scale: isClicked ? 1.5 : 1,
                borderRadius: isClicked ? "20%" : "50%",
                rotate: mousePos.x * 0.1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
            
            {/* Orbiting particles */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-200/40 rounded-full backdrop-blur-sm"
                animate={{
                  x: Math.cos((mousePos.x + mousePos.y) * 0.01 + i * 2) * 25,
                  y: Math.sin((mousePos.x + mousePos.y) * 0.01 + i * 2) * 25,
                  scale: isClicked ? 1.5 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              />
            ))}
          </motion.div>

          {/* Trailing effect */}
          {trail.map((pos, index) => (
            <motion.div
              key={pos.id || index}
              className="fixed top-0 left-0 pointer-events-none z-40"
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{
                x: pos.x - 8,
                y: pos.y - 8,
                opacity: (trail.length - index) / trail.length * 0.6,
                scale: (trail.length - index) / trail.length * 0.8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div 
                className="w-4 h-4 rounded-full bg-purple-300/30 backdrop-blur-sm border border-purple-200/20"
                style={{
                  filter: `blur(${index * 0.5}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Click ripple effect */}
          {isClicked && (
            <motion.div
              className="fixed top-0 left-0 pointer-events-none z-30"
              initial={{ opacity: 1, scale: 0 }}
              animate={{ 
                opacity: 0, 
                scale: 3,
                x: mousePos.x - 40,
                y: mousePos.y - 40,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="w-20 h-20 border border-purple-300/40 rounded-full backdrop-blur-sm" />
            </motion.div>
          )}
        </>
      )}

      {/* Banner content */}
      <LeftBanner />
      <RightBanner />
    </motion.section>
  );
};

export default Banner;