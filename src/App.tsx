import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Home from '@components/pages/Home/Home.tsx'
import TeamPage from '@components/pages/TeamPage'
import FAQPage from '@components/pages/FAQPage'
import ContactPage from '@components/pages/ContactPage'
import PostsPage from '@components/pages/PostsPage'
import PostPage from '@components/pages/PostPage'
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
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:slug" element={<PostPage />} />
          </Routes>
        </AnimatePresence>
      </AppContainer>
    </HelmetProvider>
  )
}

export default App