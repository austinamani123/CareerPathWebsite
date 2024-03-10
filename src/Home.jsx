import React from 'react'
import BgImage from './BgImage'
import Navbar from './Navbar'
import Hero from './Hero'
import Main from './Main'

const Home = () => {
  return (
    <div>
      <BgImage /> 
      <Navbar />
      <Hero />
      <Main/>  
    </div>
  )
}

export default Home