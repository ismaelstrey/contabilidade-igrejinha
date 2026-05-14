import React from 'react'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Hero from '@components/sections/Hero'
import Services from '@components/sections/Services'
import About from '@components/sections/About'
import Testimonials from '@components/sections/Testimonials'
import Contact from '@components/sections/Contact'

const Home: React.FC = () => {
  return (
    <>
      <SEO />
      <div>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
