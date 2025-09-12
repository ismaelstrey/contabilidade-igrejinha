import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SlArrowDown } from 'react-icons/sl'

/**
 * Container principal do header
 */
export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: 1rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
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
  color: ${({ theme }) => theme.colors.text.muted};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
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
  color: ${({ theme }) => theme.colors.text.muted};
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`

/**
 * Separador do breadcrumb
 */
export const BreadcrumbSeparator = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.muted};
`

/**
 * Título da página atual
 */
export const PageTitle = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
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
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
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
    color: ${({ theme }) => theme.colors.text.muted};
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
  color: ${({ theme }) => theme.colors.text.muted};
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-1px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
  }
  
  &:active {
    transform: translateY(0);
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
  background-color: ${({ theme }) => theme.colors.error?.main || '#ef4444'};
  color: white;
  font-size: 0.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.background.paper};
`
export const ShowIcomUserDetails = styled(SlArrowDown) <{ isActive?: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.text.muted};
  transition: transform 0.2s ease;
  transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : 'rotate(0)'};
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
    :active {
      transform: rotate(180deg);
    }
`
/**
 * Dropdown das notificações
 */
export const NotificationsDropdown = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 20rem;
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  z-index: 50;
`

/**
 * Header do dropdown de notificações
 */
export const NotificationsHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.primary};
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${({ $unread, theme }) => $unread ? (theme.colors.primary?.light || '#eff6ff') : (theme.colors.background.paper || theme.colors.background.default)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
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
  background-color: ${({ $unread, theme }) => $unread ? (theme.colors.primary?.main || '#3b82f6') : (theme.colors.border.light || '#d1d5db')};
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
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

/**
 * Mensagem da notificação
 */
export const NotificationMessage = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0.25rem 0 0 0;
`

/**
 * Tempo da notificação
 */
export const NotificationTime = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0.25rem 0 0 0;
`

/**
 * Footer do dropdown de notificações
 */
export const NotificationsFooter = styled.div`
  padding: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};

  button {
    width: 100%;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary?.dark || '#4f46e5'};
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
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  }
`

/**
 * Avatar do usuário
 */
export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  min-width: 2.5rem;
  min-height: 2.5rem;
  max-width: 2.5rem;
  max-height: 2.5rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary?.main || '#6366f1'}, ${({ theme }) => theme.colors.primary?.light || '#e0e7ff'});
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.background.paper};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-transform: uppercase;
    border-radius: 50%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    flex-shrink: 0;
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
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

/**
 * Role do usuário
 */
export const UserRole = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
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
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
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
  color: ${({ theme }) => theme.colors.text.secondary};
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
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
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`

/**
 * Botão de toggle de tema
 */
export const ThemeToggleButton = styled.button`
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text.muted};
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary}; 
    transform: rotate(180deg);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
  }
  
  &:active {
    transform: rotate(180deg) scale(0.95);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: all 0.3s ease;
  }
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
  color: ${({ theme }) => theme.colors.error?.main || '#dc2626'};
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error?.light || '#fef2f2'};
  }

  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.75rem;
  }
`