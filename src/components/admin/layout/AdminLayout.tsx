import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAdminAuth } from '@hooks/admin/useAdminAuth'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import {
  LayoutContainer,
  SidebarDesktopContainer,
  SidebarOverlay,
  SidebarMobileContainer,
  MainContentContainer,
  MainContent,
  ContentWrapper
} from './AdminLayout.styles'

/**
 * Props do componente AdminLayout
 */
interface AdminLayoutProps {
  children: React.ReactNode
}

/**
 * Layout principal da área administrativa
 * Contém sidebar, header e área de conteúdo
 */
const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAdminAuth()
  const location = useLocation()
  const navigate = useNavigate()

  /**
   * Manipula logout do usuário
   */
  const handleLogout = () => {
    logout()
    navigate('/admin/login')
  }

  /**
   * Fecha sidebar em mobile quando navega
   */
  React.useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  return (
    <LayoutContainer>
      {/* Sidebar Desktop */}
      <SidebarDesktopContainer>
        <AdminSidebar
          isOpen={true}
          onClose={() => setSidebarOpen(false)}
        />
      </SidebarDesktopContainer>

      {/* Sidebar Mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Overlay */}
            <SidebarOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
            />

            {/* Sidebar */}
            <SidebarMobileContainer
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <AdminSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
              />
            </SidebarMobileContainer>
          </>
        )}
      </AnimatePresence>

      {/* Conteúdo Principal */}
      <MainContentContainer>
        {/* Header */}
        <AdminHeader
          user={user}
          onMenuClick={() => setSidebarOpen(true)}
          onLogout={handleLogout}
        />

        {/* Área de Conteúdo */}
        <MainContent>
          <ContentWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </ContentWrapper>
        </MainContent>
      </MainContentContainer>
    </LayoutContainer>
  )
}

export default AdminLayout