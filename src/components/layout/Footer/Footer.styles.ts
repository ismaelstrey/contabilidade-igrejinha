import styled, { DefaultTheme } from 'styled-components'
import { theme } from '@/styles/theme'

export const FooterContainer = styled.footer`
  background: ${({ theme }: { theme: DefaultTheme }) => 
    `linear-gradient(135deg, ${theme.colors?.background?.darker || theme.colors?.neutral?.gray900 || '#111827'} 0%, ${theme.colors?.background?.dark || theme.colors?.neutral?.gray800 || '#1f2937'} 100%)`
  };
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.primary || theme.colors?.neutral?.white || '#ffffff'};
  padding: ${theme.spacing['4xl']} 0 ${theme.spacing.lg} 0;
  margin-top: auto;
`

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.primary || theme.colors?.neutral?.white || '#ffffff'};
  margin-bottom: ${theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.xs};
    left: 0;
    width: 40px;
    height: 2px;
    background: ${theme.colors.primary.main};
  }
`

export const FooterText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.secondary || theme.colors?.neutral?.gray300 || '#d1d5db'};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`

export const FooterLink = styled.a`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.secondary || theme.colors?.neutral?.gray300 || '#d1d5db'};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.primary?.light || '#60a5fa'};
  }
`

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const FooterListItem = styled.li`
  margin-bottom: ${theme.spacing.sm};
`

export const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.background?.dark || theme.colors?.neutral?.gray700 || '#374151'};
  border-radius: ${theme.borderRadius.full};
  font-size: 1.2rem;
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.primary?.main || '#3b82f6'};
    transform: translateY(-2px);
  }
`

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors?.border?.dark || theme.colors?.neutral?.gray700 || '#374151'};
  padding-top: ${theme.spacing.lg};
  text-align: center;
`

export const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.muted || theme.colors?.neutral?.gray400 || '#9ca3af'};
  margin: 0;
`