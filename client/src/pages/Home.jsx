import React from 'react'
import Hero from '../components/Hero'
import EducationAndExperience from '../components/EducationAndExperience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Services from '../components/Services'
import Tools from '../components/Tools'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <EducationAndExperience />
      <Skills />
      <Services />
      <Tools />
    </div>
  )
}

export default Home
