import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3xl']};
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(340px, 1.05fr);
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
  gap: ${theme.spacing.lg};
`

export const AboutSubtitle = styled.p`
  margin-bottom: ${theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0;
`

export const AboutTitle = styled.h2`
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.05;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  span {
    color: ${({ theme }) => theme.colors.secondary.main};
  }
`

export const AboutDescription = styled.p`
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.75;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  min-height: 68px;
  padding: ${theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.paper};
`

export const FeatureIcon = styled.div`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.secondary.main};
  flex-shrink: 0;
`

export const FeatureText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  line-height: 1.4;
`

export const AboutImage = styled.div`
  position: relative;

  @media (max-width: ${theme.breakpoints.tablet}) {
    order: -1;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 58px rgba(0, 0, 0, 0.34)' : '0 24px 58px rgba(15, 23, 42, 0.12)'};

  img {
    display: block;
    width: 100%;
    height: 520px;
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    img {
      height: 340px;
    }
  }
`

export const FloatingCard = styled.div`
  position: absolute;
  right: ${theme.spacing.lg};
  bottom: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  max-width: 280px;
  padding: ${theme.spacing.md};
  border: 1px solid rgba(255, 255, 255, 0.64);
  border-radius: ${theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.92);
  color: ${theme.colors.neutral.gray900};
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(14px);

  > div:first-child {
    display: inline-flex;
    color: ${theme.colors.secondary.main};
  }

  strong,
  p {
    display: block;
    margin: 0;
  }

  strong {
    margin-bottom: 2px;
    font-size: ${theme.typography.fontSize.sm};
  }

  p {
    color: ${theme.colors.neutral.gray600};
    font-size: ${theme.typography.fontSize.xs};
  }
`

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: ${theme.spacing.md};
`

export const StatItem = styled.div`
  padding: ${theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
  text-align: center;
`

export const StatNumber = styled.div`
  margin-bottom: ${theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
`
