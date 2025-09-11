import styled, { DefaultTheme } from 'styled-components'
import { Link } from 'react-router-dom'

/**
 * Container principal da sidebar
 */
export const SidebarContainer = styled.aside`
  width: 16rem;
  background-color: ${({ theme }) => theme.colors.background.sidebar || theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};
  
  &.open {
    transform: translateX(0);
  }
  
  @media (min-width: 1024px) {
    position: relative;
    transform: translateX(0);
  }
`

/**
 * Header da sidebar
 */
export const SidebarHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`

/**
 * Container do conteúdo do header
 */
export const SidebarHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

/**
 * Container do logo e título
 */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

/**
 * Container do ícone do logo
 */
export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #4f46e5;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: white;
  }
`

/**
 * Container das informações do logo
 */
export const LogoInfo = styled.div`
  display: flex;
  flex-direction: column;
`

/**
 * Título do logo
 */
export const LogoTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

/**
 * Subtítulo do logo
 */
export const LogoSubtitle = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
`

/**
 * Botão de fechar (mobile)
 */
export const CloseButton = styled.button`
  padding: 0.25rem;
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.text.muted};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`

/**
 * Container da navegação
 */
export const NavigationContainer = styled.nav`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

/**
 * Item de navegação
 */
interface NavItemProps {
  $isActive: boolean
}

export const NavItem = styled(Link) <NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  
  ${({ $isActive }) => $isActive ? `
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary.light};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary.main};
    border-right: 2px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary.main};
  ` : `
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.muted};
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.secondary};
    
    &:hover {
      background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.background.secondary};
      color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.secondary};
    }
  `}
`

/**
 * Container do conteúdo do item de navegação
 */
export const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

/**
 * Container do ícone do item de navegação
 */
export const NavItemIcon = styled.span<{ $isActive: boolean }>`
  transition: color 0.2s;
  
  ${({ $isActive, theme }) => $isActive ? `
    color: ${theme.colors.primary.main};
  ` : `
    color: ${theme.colors.text.muted};
    
    ${NavItem}:hover & {
      color: ${theme.colors.text.secondary};
    }
  `}
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: inherit;
  }
`

/**
 * Badge do item de navegação
 */
export const NavItemBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #fef2f2;
  color: #dc2626;
`

/**
 * Container das informações do usuário
 */
export const UserInfoContainer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
`

/**
 * Conteúdo das informações do usuário
 */
export const UserInfoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

/**
 * Avatar do usuário
 */
export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e0e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #4f46e5;
  }
`

/**
 * Container dos dados do usuário
 */
export const UserData = styled.div`
  flex: 1;
  min-width: 0;
`

/**
 * Nome do usuário
 */
export const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/**
 * Email do usuário
 */
export const UserEmail = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

/**
 * Badge do papel do usuário
 */
interface UserRoleBadgeProps {
  $role: 'admin' | 'user' | 'viewer'
}

export const UserRoleBadge = styled.span<UserRoleBadgeProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: 0.25rem;
  
  ${({ $role }) => {
    switch ($role) {
      case 'admin':
        return `
          background-color: #f3e8ff;
          color: #7c3aed;
        `
      case 'user':
        return `
          background-color: #dbeafe;
          color: #2563eb;
        `
      default:
        return `
          background-color: #f3f4f6;
          color: #374151;
        `
    }
  }}
`