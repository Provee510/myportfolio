import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import MySkill from '../components/MySkill'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Testimonial from '../components/Testimonial'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <MySkill/>
      <About/>
      <Portfolio/>
      <Testimonial/>
      <ContactMe/>
    </div>
  )
}

export default Home





