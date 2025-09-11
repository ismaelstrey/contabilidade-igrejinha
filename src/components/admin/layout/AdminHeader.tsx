import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AdminUser } from '@/types/admin'
import { useTheme } from '@contexts/ThemeContext'
import {
  HeaderContainer,
  HeaderContent,
  HeaderLeft,
  MobileMenuButton,
  BreadcrumbsContainer,
  BreadcrumbsList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  PageTitle,
  HeaderActions,
  SearchContainer,
  SearchInput,
  SearchIcon,
  NotificationsContainer,
  NotificationsButton,
  NotificationBadge,
  NotificationsDropdown,
  NotificationsHeader,
  NotificationsList,
  NotificationItem,
  NotificationContent,
  NotificationIndicator,
  NotificationText,
  NotificationTitle,
  NotificationMessage,
  NotificationTime,
  NotificationsFooter,
  UserMenuContainer,
  UserMenuButton,
  UserAvatar,
  UserInfo,
  UserName,
  UserRole,
  UserMenuDropdown,
  UserMenuList,
  UserMenuItem,
  MenuSeparator,
  LogoutButton
} from './AdminHeader.styles'

/**
 * Props do componente AdminHeader
 */
interface AdminHeaderProps {
  user: AdminUser | null
  onMenuClick: () => void
  onLogout: () => void
}

/**
 * Header da área administrativa
 * Contém breadcrumbs, notificações e menu do usuário
 */
const AdminHeader: React.FC<AdminHeaderProps> = ({ user, onMenuClick, onLogout }) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const { themeMode, toggleTheme } = useTheme()

  /**
   * Fecha menus quando clica fora
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  /**
   * Notificações mockadas (substituir por dados reais)
   */
  const notifications = [
    {
      id: 1,
      title: 'Novo contato recebido',
      message: 'João Silva enviou uma mensagem',
      time: '5 min atrás',
      unread: true
    },
    {
      id: 2,
      title: 'Usuário cadastrado',
      message: 'Maria Santos se registrou no sistema',
      time: '1 hora atrás',
      unread: true
    },
    {
      id: 3,
      title: 'Serviço atualizado',
      message: 'Consultoria Fiscal foi modificado',
      time: '2 horas atrás',
      unread: false
    }
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  return (
    <HeaderContainer>
      <HeaderContent>
        {/* Menu Mobile + Breadcrumbs */}
        <HeaderLeft>
          {/* Botão Menu Mobile */}
          <MobileMenuButton onClick={onMenuClick}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </MobileMenuButton>

          {/* Breadcrumbs */}
          <BreadcrumbsContainer aria-label="Breadcrumb">
            <BreadcrumbsList>
              <BreadcrumbItem>
                <BreadcrumbLink to="/admin/dashboard">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbSeparator fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </BreadcrumbSeparator>
                <PageTitle>
                  {getPageTitle(window.location.pathname)}
                </PageTitle>
              </BreadcrumbItem>
            </BreadcrumbsList>
          </BreadcrumbsContainer>
        </HeaderLeft>

        {/* Ações do Header */}
        <HeaderActions>
          {/* Busca Rápida */}
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="Buscar..."
            />
            <SearchIcon>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </SearchIcon>
          </SearchContainer>

          {/* Notificações */}
          <NotificationsContainer ref={notificationsRef}>
            <NotificationsButton
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {unreadCount > 0 && (
                <NotificationBadge>
                  {unreadCount}
                </NotificationBadge>
              )}
            </NotificationsButton>

            {/* Dropdown Notificações */}
            <AnimatePresence>
              {notificationsOpen && (
                <NotificationsDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <NotificationsHeader>
                    <h3>Notificações</h3>
                  </NotificationsHeader>
                  <NotificationsList>
                    {notifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        $unread={notification.unread}
                      >
                        <NotificationContent>
                          <NotificationIndicator $unread={notification.unread} />
                          <NotificationText>
                            <NotificationTitle>
                              {notification.title}
                            </NotificationTitle>
                            <NotificationMessage>
                              {notification.message}
                            </NotificationMessage>
                            <NotificationTime>
                              {notification.time}
                            </NotificationTime>
                          </NotificationText>
                        </NotificationContent>
                      </NotificationItem>
                    ))}
                  </NotificationsList>
                  <NotificationsFooter>
                    <button>
                      Ver todas as notificações
                    </button>
                  </NotificationsFooter>
                </NotificationsDropdown>
              )}
            </AnimatePresence>
          </NotificationsContainer>

          {/* Toggle Dark Mode */}
          <NotificationsButton
            onClick={toggleTheme}
            title={themeMode === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
          >
            {themeMode === 'dark' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </NotificationsButton>

          {/* Menu do Usuário */}
          <UserMenuContainer ref={userMenuRef}>
            <UserMenuButton
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <UserAvatar>
                <span>
                  {user?.nome.charAt(0).toUpperCase()}
                </span>
              </UserAvatar>
              <UserInfo>
                <UserName>{user?.nome}</UserName>
                <UserRole>{user?.role}</UserRole>
              </UserInfo>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </UserMenuButton>

            {/* Dropdown Menu do Usuário */}
            <AnimatePresence>
              {userMenuOpen && (
                <UserMenuDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <UserMenuList>
                    <UserMenuItem
                      to="/admin/perfil"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Meu Perfil
                    </UserMenuItem>
                    <UserMenuItem
                      to="/"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver Site
                    </UserMenuItem>
                    <MenuSeparator />
                    <LogoutButton
                      onClick={() => {
                        setUserMenuOpen(false)
                        onLogout()
                      }}
                    >
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sair
                    </LogoutButton>
                  </UserMenuList>
                </UserMenuDropdown>
              )}
            </AnimatePresence>
          </UserMenuContainer>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  )
}

/**
 * Obtém o título da página baseado na rota
 */
const getPageTitle = (pathname: string): string => {
  const routes: { [key: string]: string } = {
    '/admin/dashboard': 'Dashboard',
    '/admin/usuarios': 'Usuários',
    '/admin/servicos': 'Serviços',
    '/admin/contatos': 'Contatos',
    '/admin/perfil': 'Perfil'
  }

  return routes[pathname] || 'Admin'
}

export default AdminHeader