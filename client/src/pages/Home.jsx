import React from 'react'
import Hero from '../components/Hero'
import EducationAndExperience from '../components/EducationAndExperience'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
      <EducationAndExperience />
      <Skills />
    </div>
  )
}

export default Home
