import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const ServicesSection = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.background.main};
`

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }
`

export const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto ${theme.spacing['3xl']};
  text-align: center;
`

export const SectionSubtitle = styled.p`
  margin-bottom: ${theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0;
`

export const SectionTitle = styled.h2`
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.05;
  letter-spacing: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const SectionLead = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.7;
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: ${theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 18px 42px rgba(0, 0, 0, 0.24)' : '0 18px 42px rgba(15, 23, 42, 0.06)'};
  transition: transform ${theme.transitions.normal}, box-shadow ${theme.transitions.normal}, border-color ${theme.transitions.normal};

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.primary.light};
    box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 54px rgba(0, 0, 0, 0.34)' : '0 24px 54px rgba(15, 23, 42, 0.1)'};
  }
`

export const ServiceIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin-bottom: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.primary.background || theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.primary.main};
`

export const ServiceTitle = styled.h3`
  margin-bottom: ${theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const ServiceDescription = styled.p`
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.65;
`

export const ServiceFeatures = styled.ul`
  display: grid;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.lg};
`

export const ServiceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: 1.45;

  svg {
    margin-top: 0.16rem;
    color: ${({ theme }) => theme.colors.secondary.main};
    flex-shrink: 0;
  }
`

export const ServicePrice = styled.div`
  margin-top: auto;
  margin-bottom: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.bold};
`
