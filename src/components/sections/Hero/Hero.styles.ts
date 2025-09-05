import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, 
    ${theme.colors.neutral.gray50} 0%, 
    ${theme.colors.neutral.white} 50%, 
    ${theme.colors.primary.main}10 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23e5e7eb" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
    z-index: -1;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
    text-align: center;
  }
`

export const HeroSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const HeroTitle = styled.h1`
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.1;
  
  span {
    color: ${theme.colors.primary.main};
    background: ${theme.colors.primary.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const HeroDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;
  max-width: 500px;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    max-width: 600px;
    margin: 0 auto ${theme.spacing.xl};
  }
`

export const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing['2xl']};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }
`

export const StatItem = styled.div`
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    text-align: center;
  }
`

export const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.xs};
`

export const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray600};
  font-weight: ${theme.typography.fontWeight.medium};
`

export const HeroImage = styled.div`
  position: relative;
  height: 500px;
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    height: 300px;
    order: -1;
  }
`

export const FloatingCard = styled.div`
  position: absolute;
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-width: 180px;
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.neutral.gray100};
  
  span {
    font-size: ${theme.typography.fontSize['2xl']};
    flex-shrink: 0;
  }
  
  div {
    strong {
      display: block;
      font-size: ${theme.typography.fontSize.sm};
      font-weight: ${theme.typography.fontWeight.semibold};
      color: ${theme.colors.neutral.gray900};
      margin-bottom: 2px;
    }
    
    p {
      font-size: ${theme.typography.fontSize.xs};
      color: ${theme.colors.neutral.gray600};
      margin: 0;
    }
  }
  
  @media (max-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`