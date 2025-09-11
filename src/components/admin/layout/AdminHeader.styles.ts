import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Container principal do header
 */
export const HeaderContainer = styled.header`
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

/**
 * Container do conteúdo do header
 */
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

/**
 * Container da seção esquerda (menu + breadcrumbs)
 */
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

/**
 * Botão do menu mobile
 */
export const MobileMenuButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: #9ca3af;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: #4b5563;
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6366f1;
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`

/**
 * Container dos breadcrumbs
 */
export const BreadcrumbsContainer = styled.nav`
  display: none;
  
  @media (min-width: 640px) {
    display: flex;
  }
`

/**
 * Lista dos breadcrumbs
 */
export const BreadcrumbsList = styled.ol`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
`

/**
 * Item do breadcrumb
 */
export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`

/**
 * Link do breadcrumb
 */
export const BreadcrumbLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #4b5563;
  }
`

/**
 * Separador do breadcrumb
 */
export const BreadcrumbSeparator = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: #9ca3af;
`

/**
 * Título da página atual
 */
export const PageTitle = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`

/**
 * Container das ações do header
 */
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

/**
 * Container da busca
 */
export const SearchContainer = styled.div`
  display: none;
  position: relative;
  
  @media (min-width: 768px) {
    display: block;
  }
`

/**
 * Input de busca
 */
export const SearchInput = styled.input`
  width: 16rem;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6366f1;
    border-color: #6366f1;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

/**
 * Ícone da busca
 */
export const SearchIcon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
  }
`

/**
 * Container das notificações
 */
export const NotificationsContainer = styled.div`
  position: relative;
`

/**
 * Botão das notificações
 */
export const NotificationsButton = styled.button`
  padding: 0.5rem;
  color: #9ca3af;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  
  &:hover {
    color: #4b5563;
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6366f1;
  }
`

/**
 * Badge de notificações não lidas
 */
export const NotificationBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`

/**
 * Dropdown das notificações
 */
export const NotificationsDropdown = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 20rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  z-index: 50;
`

/**
 * Header do dropdown de notificações
 */
export const NotificationsHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #111827;
    margin: 0;
  }
`

/**
 * Lista de notificações
 */
export const NotificationsList = styled.div`
  max-height: 16rem;
  overflow-y: auto;
`

/**
 * Item de notificação
 */
interface NotificationItemProps {
  $unread: boolean
}

export const NotificationItem = styled.div<NotificationItemProps>`
  padding: 1rem;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${({ $unread }) => $unread ? '#eff6ff' : 'white'};
  
  &:hover {
    background-color: #f9fafb;
  }
`

/**
 * Conteúdo do item de notificação
 */
export const NotificationContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

/**
 * Indicador de notificação não lida
 */
interface NotificationIndicatorProps {
  $unread: boolean
}

export const NotificationIndicator = styled.div<NotificationIndicatorProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  margin-top: 0.5rem;
  background-color: ${({ $unread }) => $unread ? '#3b82f6' : '#d1d5db'};
`

/**
 * Texto da notificação
 */
export const NotificationText = styled.div`
  flex: 1;
`

/**
 * Título da notificação
 */
export const NotificationTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`

/**
 * Mensagem da notificação
 */
export const NotificationMessage = styled.p`
  font-size: 0.875rem;
  color: #4b5563;
  margin: 0.25rem 0 0 0;
`

/**
 * Tempo da notificação
 */
export const NotificationTime = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0.25rem 0 0 0;
`

/**
 * Footer do dropdown de notificações
 */
export const NotificationsFooter = styled.div`
  padding: 0.75rem;
  border-top: 1px solid #e5e7eb;
  
  button {
    width: 100%;
    font-size: 0.875rem;
    color: #6366f1;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: #4f46e5;
    }
  }
`

/**
 * Container do menu do usuário
 */
export const UserMenuContainer = styled.div`
  position: relative;
`

/**
 * Botão do menu do usuário
 */
export const UserMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6366f1;
  }
`

/**
 * Avatar do usuário
 */
export const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #e0e7ff;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6366f1;
  }
`

/**
 * Informações do usuário
 */
export const UserInfo = styled.div`
  display: none;
  text-align: left;
  
  @media (min-width: 640px) {
    display: block;
  }
`

/**
 * Nome do usuário
 */
export const UserName = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`

/**
 * Role do usuário
 */
export const UserRole = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
  text-transform: capitalize;
`

/**
 * Dropdown do menu do usuário
 */
export const UserMenuDropdown = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  z-index: 50;
`

/**
 * Lista do menu do usuário
 */
export const UserMenuList = styled.div`
  padding: 0.25rem 0;
`

/**
 * Item do menu do usuário
 */
export const UserMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #374151;
  text-decoration: none;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
  }
`

/**
 * Separador do menu
 */
export const MenuSeparator = styled.hr`
  margin: 0.25rem 0;
  border: none;
  border-top: 1px solid #e5e7eb;
`

/**
 * Botão de logout
 */
export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #dc2626;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #fef2f2;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
  }
`