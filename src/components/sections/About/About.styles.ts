import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['4xl']};
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`

export const AboutSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const AboutTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral.gray900};
  line-height: 1.2;
  margin-bottom: ${theme.spacing.md};
  
  span {
    background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const AboutDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  line-height: 1.7;
  margin-bottom: ${theme.spacing.md};
  
  &:last-of-type {
    margin-bottom: 0;
  }
`

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.md};
`

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  background: ${theme.colors.neutral.gray50};
  border-radius: ${theme.borderRadius.lg};
  border-left: 4px solid ${theme.colors.primary.main};
`

export const FeatureIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
`

export const FeatureText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray700};
  margin: 0;
  font-weight: ${theme.typography.fontWeight.medium};
`

export const AboutImage = styled.div`
  position: relative;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    order: -1;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};
  
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    display: block;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    img {
      height: 300px;
    }
  }
`

export const FloatingCard = styled.div`
  position: absolute;
  bottom: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  background: ${theme.colors.neutral.white};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.neutral.gray100};
  
  > div:first-child {
    font-size: 1.5rem;
  }
  
  > div:last-child {
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
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    bottom: ${theme.spacing.sm};
    right: ${theme.spacing.sm};
    padding: ${theme.spacing.sm};
  }
`

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl} 0;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.md};
  }
`

export const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.primary.main}10, ${theme.colors.secondary.main}10);
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.primary.light}20;
  cursor: pointer;
`

export const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, ${theme.colors.primary.main}, ${theme.colors.secondary.main});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${theme.spacing.xs};
`

export const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray600};
  font-weight: ${theme.typography.fontWeight.medium};
`