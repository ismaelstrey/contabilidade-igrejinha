import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #07111f 0%, #0f172a 54%, #12231f 100%);
  color: #f8fafc;
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
  color: #ffffff;
  margin-bottom: ${theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.xs};
    left: 0;
    width: 40px;
    height: 2px;
    background: #94a3b8;
  }
`

export const FooterText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: #cbd5e1;
  line-height: 1.6;
  margin-bottom: ${theme.spacing.md};
`

export const FooterLink = styled.a`
  font-size: ${theme.typography.fontSize.sm};
  color: #cbd5e1;
  text-decoration: none;
  transition: color ${theme.transitions.fast}, transform ${theme.transitions.fast};
  cursor: pointer;
  
  &:hover {
    color: #ffffff;
  }
`

export const FooterIconLink = styled(FooterLink)`
  display: inline-flex;
  align-items: flex-start;
  gap: ${theme.spacing.xs};
  line-height: 1.55;

  svg {
    margin-top: 0.12rem;
    color: #e2e8f0;
    flex-shrink: 0;
    transition: color ${theme.transitions.fast}, transform ${theme.transitions.fast};
  }

  &:hover svg {
    color: #ffffff;
    transform: translateY(-1px);
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
  background: rgba(148, 163, 184, 0.14);
  border: 1px solid rgba(226, 232, 240, 0.18);
  border-radius: ${theme.borderRadius.full};
  color: #e2e8f0;
  text-decoration: none;
  transition: background ${theme.transitions.normal}, border-color ${theme.transitions.normal}, color ${theme.transitions.normal}, transform ${theme.transitions.normal};
  
  &:hover {
    background: rgba(248, 250, 252, 0.14);
    border-color: rgba(248, 250, 252, 0.38);
    color: #ffffff;
    transform: translateY(-2px);
  }
`

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(226, 232, 240, 0.14);
  padding-top: ${theme.spacing.lg};
  text-align: center;
`

export const Copyright = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: #94a3b8;
  margin: 0;
`
