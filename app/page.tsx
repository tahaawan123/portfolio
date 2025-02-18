import React from 'react'
import Hero from '@/components/Hero'
import About from './About/page'
import Contact from './Contact/page'
import Projects from './Projects/page'
import Skills from '@/components/Skills'
import Services from '@/components/Service'
function Homepage() {
  return (
    <div>
      <Hero/>
     <About/>
     <Projects/>
     <Skills/>
     <Services/>
     <Contact/>
    </div>
  )
}

export default Homepage;
