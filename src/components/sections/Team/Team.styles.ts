import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const TeamContainer = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.neutral.white};
`

export const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const TeamTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.dark};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const TeamSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`

export const TeamCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.lg};
  text-align: center;
  transition: all ${theme.transitions.normal};
  border: 1px solid ${theme.colors.neutral.gray100};
  
  &:hover {
    box-shadow: ${theme.shadows.xl};
    border-color: ${theme.colors.primary.light};
  }
`

export const TeamPhoto = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${theme.spacing.lg};
  
  img {
    width: 120px;
    height: 120px;
    border-radius: ${theme.borderRadius.full};
    box-shadow: ${theme.shadows.md};
    object-fit: cover;
  }
  
  svg {
    border-radius: ${theme.borderRadius.full};
    box-shadow: ${theme.shadows.md};
  }
`

export const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`

export const TeamName = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.dark};
  margin: 0;
`

export const TeamPosition = styled.p`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary.main};
  margin: 0;
`

export const TeamDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray600};
  line-height: 1.6;
  margin: ${theme.spacing.sm} 0;
`

export const TeamQualifications = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.md};
  padding: 0;
  list-style: none;
`

export const QualificationItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray700};
  text-align: left;
  
  svg {
    color: ${theme.colors.secondary.main};
    flex-shrink: 0;
  }
`