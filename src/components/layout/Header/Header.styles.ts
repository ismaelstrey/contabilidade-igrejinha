import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface HeaderContainerProps {
  isScrolled: boolean
}

export const HeaderContainer = styled.header.withConfig({
  shouldForwardProp: (prop) => prop !== 'isScrolled'
})<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, isScrolled }) => 
    isScrolled 
      ? theme.mode === 'dark' 
        ? 'rgba(31, 41, 55, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)'
      : theme.mode === 'dark'
        ? 'rgba(31, 41, 55, 0.9)'
        : 'rgba(255, 255, 255, 0.9)'
  };
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme, isScrolled }) => 
    isScrolled ? theme.colors.border.light : 'transparent'};
  transition: all ${theme.transitions.normal};
  
  ${({ isScrolled }) => isScrolled && css`
    box-shadow: ${theme.shadows.md};
  `}
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.xs} 0;
  }
`

export const Logo = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};
  background: none;
  border: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

export const NavItem = styled.li`
  list-style: none;
`

export const NavLink = styled.button`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;
  background: none;
  border: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: width ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover::after {
    width: 100%;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: none;
  
  span {
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.text.secondary};
    transition: all ${({ theme }) => theme.transitions.fast};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: ${({ theme }) => theme.spacing.md} 0;
  
  ${NavLink} {
    display: block;
    padding: ${({ theme }) => theme.spacing.xs} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
    
    &:last-of-type {
      border-bottom: none;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
    }
  }
  
  button {
    width: 100%;
  }
`