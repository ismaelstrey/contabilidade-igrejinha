import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'
import Home from '@components/pages/Home/Home.tsx'
import { AppContainer } from './App.styles'

// Lazy loading para páginas não críticas
const TeamPage = React.lazy(() => import('@components/pages/TeamPage'))
const FAQPage = React.lazy(() => import('@components/pages/FAQPage'))
const ContactPage = React.lazy(() => import('@components/pages/ContactPage'))
const PostsPage = React.lazy(() => import('@components/pages/PostsPage'))
const PostPage = React.lazy(() => import('@components/pages/PostPage'))

// Componente de loading
const PageLoader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#666'
  }}>
    Carregando...
  </div>
)

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <AppContainer>
        <AnimatePresence mode="wait">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<TeamPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:slug" element={<PostPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </AppContainer>
    </HelmetProvider>
  )
}

export default App