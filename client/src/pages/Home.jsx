import React from 'react'
import Hero from '../components/Hero'
import EducationAndExperience from '../components/EducationAndExperience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Tools from '../components/Tools'
import Projects from '../components/Projects'
import Projects2 from '../components/Projects2'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <EducationAndExperience />
      <Skills />
      <Services />
      <Projects />
      <Projects2 />
      <Tools />
      <ContactUs />
    </div>
  )
}

export default Home
