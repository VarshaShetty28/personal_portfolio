import React from 'react'
import { useState } from 'react'
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
             <Navbar/>
             <Banner/>
             <Features/>
             <Projects/>
             <Resume/>
             <Contact/>
             <Footer/>
             
          </div>
      </div>
    </>
  )
}

export default App
