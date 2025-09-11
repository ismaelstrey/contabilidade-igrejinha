import * as React from 'react'
import { Suspense } from 'react'
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

// Lazy loading para páginas administrativas
const AdminLoginPage = React.lazy(() => import('@pages/admin/AdminLoginPage'))
const AdminDashboardPage = React.lazy(() => import('@pages/admin/AdminDashboardPage'))
const AdminUsuariosPage = React.lazy(() => import('@pages/admin/AdminUsuariosPage'))
const AdminServicosPage = React.lazy(() => import('@pages/admin/AdminServicosPage'))
const AdminContatosPage = React.lazy(() => import('@pages/admin/AdminContatosPage'))
const AdminPerfilPage = React.lazy(() => import('@pages/admin/AdminPerfilPage'))
const AdminProtectedRoute = React.lazy(() => import('@components/admin/auth/AdminProtectedRoute'))

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
              {/* Rotas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/equipe" element={<TeamPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="/posts/:slug" element={<PostPage />} />
              
              {/* Rotas administrativas */}
              <Route path="/admin/login" element={<AdminLoginPage />} />
              <Route path="/admin/dashboard" element={
                <AdminProtectedRoute>
                  <AdminDashboardPage />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/usuarios" element={
                <AdminProtectedRoute>
                  <AdminUsuariosPage />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/servicos" element={
                <AdminProtectedRoute>
                  <AdminServicosPage />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/contatos" element={
                <AdminProtectedRoute>
                  <AdminContatosPage />
                </AdminProtectedRoute>
              } />
              <Route path="/admin/perfil" element={
                <AdminProtectedRoute>
                  <AdminPerfilPage />
                </AdminProtectedRoute>
              } />
              
              {/* Rota de redirecionamento para admin */}
              <Route path="/admin" element={<AdminLoginPage />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </AppContainer>
    </HelmetProvider>
  )
}

export default App