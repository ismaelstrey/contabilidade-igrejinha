import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const StyledSection = styled.section`
  padding: ${theme.spacing['3xl']} 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing['2xl']} 0;
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.xl} 0;
  }
`