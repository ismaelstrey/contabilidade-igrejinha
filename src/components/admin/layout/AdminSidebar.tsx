import React from 'react'
import { useLocation } from 'react-router-dom'
import { useAdminAuth } from '@hooks/admin/useAdminAuth'
import {
  SidebarContainer,
  SidebarHeader,
  SidebarHeaderContent,
  LogoContainer,
  LogoIcon,
  LogoInfo,
  LogoTitle,
  LogoSubtitle,
  CloseButton,
  NavigationContainer,
  NavItem,
  NavItemContent,
  NavItemIcon,
  NavItemBadge,
  UserInfoContainer,
  UserInfoContent,
  UserAvatar,
  UserData,
  UserName,
  UserEmail,
  UserRoleBadge
} from './AdminSidebar.styles'

/**
 * Props do componente AdminSidebar
 */
interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Item de navegação da sidebar
 */
interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
  requiredRole?: 'admin' | 'user' | 'viewer'
  badge?: string
}

/**
 * Sidebar da área administrativa
 * Contém navegação principal e informações do usuário
 */
const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const { user } = useAdminAuth()

  console.log(isOpen)

  /**
   * Itens de navegação da sidebar
   */
  const navigationItems: NavItem[] = [
    {
      name: 'Dashboard',
      href: '/admin/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
        </svg>
      ),
      requiredRole: 'viewer'
    },
    {
      name: 'Usuários',
      href: '/admin/usuarios',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      requiredRole: 'user'
    },
    {
      name: 'Serviços',
      href: '/admin/servicos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      requiredRole: 'user'
    },
    {
      name: 'Contatos',
      href: '/admin/contatos',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      requiredRole: 'viewer',
      badge: 'Novo'
    },
    {
      name: 'Perfil',
      href: '/admin/perfil',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      requiredRole: 'viewer'
    }
  ]

  /**
   * Verifica se o usuário tem permissão para ver o item
   */
  const hasPermission = (requiredRole?: string): boolean => {
    if (!requiredRole || !user) return true

    const roleHierarchy = { 'viewer': 1, 'user': 2, 'admin': 3 }
    const userLevel = roleHierarchy[user.role as keyof typeof roleHierarchy] || 0
    const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0

    return userLevel >= requiredLevel
  }

  /**
   * Verifica se o item está ativo
   */
  const isActiveItem = (href: string): boolean => {
    return location.pathname === href
  }

  return (
    <SidebarContainer>
      {/* Header da Sidebar */}
      <SidebarHeader>
        <SidebarHeaderContent>
          <LogoContainer>
            <LogoIcon>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </LogoIcon>
            <LogoInfo>
              <LogoTitle>Admin</LogoTitle>
              <LogoSubtitle>Painel de Controle</LogoSubtitle>
            </LogoInfo>
          </LogoContainer>

          {/* Botão fechar (mobile) */}
          <CloseButton onClick={onClose}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </CloseButton>
        </SidebarHeaderContent>
      </SidebarHeader>

      {/* Navegação */}
      <NavigationContainer>
        {navigationItems
          .filter(item => hasPermission(item.requiredRole))
          .map((item) => {
            const isActive = isActiveItem(item.href)

            return (
              <NavItem
                key={item.name}
                to={item.href}
                $isActive={isActive}
              >
                <NavItemContent>
                  <NavItemIcon $isActive={isActive}>
                    {item.icon}
                  </NavItemIcon>
                  <span>{item.name}</span>
                </NavItemContent>

                {/* Badge */}
                {item.badge && (
                  <NavItemBadge>
                    {item.badge}
                  </NavItemBadge>
                )}
              </NavItem>
            )
          })
        }
      </NavigationContainer>

      {/* Informações do Usuário */}
      {user && (
        <UserInfoContainer>
          <UserInfoContent>
            <UserAvatar>
              <span>
                {user.nome.charAt(0).toUpperCase()}
              </span>
            </UserAvatar>
            <UserData>
              <UserName>
                {user.nome}
              </UserName>
              <UserEmail>
                {user.email}
              </UserEmail>
              <UserRoleBadge $role={user.role as 'admin' | 'user' | 'viewer'}>
                {user.role === 'admin' ? 'Administrador' :
                  user.role === 'user' ? 'Usuário' : 'Visualizador'}
              </UserRoleBadge>
            </UserData>
          </UserInfoContent>
        </UserInfoContainer>
      )}
    </SidebarContainer>
  )
}

export default AdminSidebar