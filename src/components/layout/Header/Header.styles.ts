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
  background: ${({ isScrolled }) => 
    isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ isScrolled }) => 
    isScrolled ? theme.colors.neutral.gray200 : 'transparent'};
  transition: all ${theme.transitions.normal};
  
  ${({ isScrolled }) => isScrolled && css`
    box-shadow: ${theme.shadows.md};
  `}
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xs} 0;
  }
`

export const Logo = styled.button`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  cursor: pointer;
  transition: color ${theme.transitions.fast};
  
  &:hover {
    color: ${theme.colors.primary.dark};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.xl};
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`

export const NavItem = styled.li`
  list-style: none;
`

export const NavLink = styled.button`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral.gray700};
  cursor: pointer;
  transition: color ${theme.transitions.fast};
  position: relative;
  
  &:hover {
    color: ${theme.colors.primary.main};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.primary.main};
    transition: width ${theme.transitions.fast};
  }
  
  &:hover::after {
    width: 100%;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: ${theme.spacing.xs};
  
  span {
    width: 24px;
    height: 2px;
    background: ${theme.colors.neutral.gray700};
    transition: all ${theme.transitions.fast};
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: flex;
  }
`

export const MobileMenu = styled.div`
  background: ${theme.colors.neutral.white};
  border-top: 1px solid ${theme.colors.neutral.gray200};
  padding: ${theme.spacing.md} 0;
  
  ${NavLink} {
    display: block;
    padding: ${theme.spacing.xs} 0;
    border-bottom: 1px solid ${theme.colors.neutral.gray100};
    
    &:last-of-type {
      border-bottom: none;
      margin-bottom: ${theme.spacing.sm};
    }
  }
  
  button {
    width: 100%;
  }
`