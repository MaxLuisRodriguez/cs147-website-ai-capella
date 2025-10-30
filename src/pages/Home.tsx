import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Assignments from '../components/Assignments'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Assignments />
    </>
  )
}

export default Home
