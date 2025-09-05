import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Hero from '@components/sections/Hero'
import Services from '@components/sections/Services'
import About from '@components/sections/About'
import Testimonials from '@components/sections/Testimonials'
import GlobalStyles from '@/styles/globalStyles'

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO />
      <GlobalStyles />
      <div>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Home