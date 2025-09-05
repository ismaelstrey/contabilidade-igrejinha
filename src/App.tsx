import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Home from '@components/pages/Home/Home.tsx'
import TeamPage from '@components/pages/TeamPage'
import FAQPage from '@components/pages/FAQPage'
import ContactPage from '@components/pages/ContactPage'
import { AppContainer } from './App.styles'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AppContainer>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </HelmetProvider>
  )
}

export default App