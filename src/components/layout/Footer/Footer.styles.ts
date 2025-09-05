import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, ${theme.colors.neutral.gray900} 0%, ${theme.colors.neutral.gray800} 100%);
  color: ${theme.colors.neutral.white};
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
  color: ${theme.colors.neutral.white};
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
  color: ${theme.colors.neutral.gray300};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`

export const FooterLink = styled.a`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray300};
  text-decoration: none;
  transition: color ${theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.primary.light};
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
  background: ${theme.colors.neutral.gray700};
  border-radius: ${theme.borderRadius.full};
  font-size: 1.2rem;
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.primary.main};
    transform: translateY(-2px);
  }
`

export const FooterBottom = styled.div`
  border-top: 1px solid ${theme.colors.neutral.gray700};
  padding-top: ${theme.spacing.lg};
  text-align: center;
`

export const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray400};
  margin: 0;
`