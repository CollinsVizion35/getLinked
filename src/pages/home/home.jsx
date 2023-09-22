import React from 'react'
import Nav from './components/nav'
import Hero from './components/hero'
import Intro from './components/intro'
import Rules from './components/rules'
import Criteria from './components/criteria'
import Faqs from './components/faqs'
import Timeline from './components/timeline'
import Prizes from './components/prizes'
import Partner from './components/partner'
import Privacy from './components/privacy'
import Footer from './components/footer'

function Home() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Intro/>
      <Rules/>
      <Criteria/>
      <Faqs/>
      <Timeline/>
      <Prizes/>
      <Partner/>
      <Privacy/>
      <Footer/>
    </div>
  )
}

export default Home
