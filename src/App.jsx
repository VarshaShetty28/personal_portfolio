import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Features from './components/features/Features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-screen h-auto bg-bodyColor text-lightText">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Navbar />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Banner />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Features />
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Projects />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Resume />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Contact />
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Footer />
          </motion.div>
          
        </div>
      </div>
    </>
  )
}

export default App
