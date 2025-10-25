import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Team from '../components/Team'
import Assignments from '../components/Assignments'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Team />
      <Assignments />
    </>
  )
}

export default Home
