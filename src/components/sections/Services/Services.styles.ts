import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`

export const ServiceCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.neutral.gray100};
  transition: all ${theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    border-color: ${theme.colors.primary.light};
  }
`

export const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
  text-align: center;
`

export const ServiceTitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.sm};
  text-align: center;
`

export const ServiceDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral.gray600};
  margin-bottom: ${theme.spacing.lg};
  line-height: 1.6;
  text-align: center;
  flex-grow: 1;
`

export const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: ${theme.spacing.lg};
`

export const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray700};
  margin-bottom: ${theme.spacing.xs};
  
  span {
    color: ${theme.colors.secondary.main};
    font-weight: ${theme.typography.fontWeight.bold};
    flex-shrink: 0;
  }
`

export const ServicePrice = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary.main};
  text-align: center;
  margin-bottom: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  background: ${theme.colors.primary.main}10;
  border-radius: ${theme.borderRadius.md};
`