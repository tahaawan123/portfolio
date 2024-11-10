import React from 'react'
import Hero from '@/components/Hero'
import About from './About/page'
import Contact from './Contact/page'
import Projects from './Projects/page'
function Homepage() {
  return (
    <div>
      <Hero/>
     <About/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default Homepage;
