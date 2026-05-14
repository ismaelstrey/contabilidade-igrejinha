import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const HeroSection = styled.section`
  min-height: 96vh;
  display: flex;
  align-items: center;
  padding: 112px 0 72px;
  background: ${({ theme }) =>
    theme.mode === 'dark'
      ? 'linear-gradient(135deg, #08111f 0%, #0f172a 48%, #10251f 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #ffffff 46%, #ecfdf5 100%)'};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        ${({ theme }) => theme.mode === 'dark' ? 'rgba(148, 163, 184, 0.08)' : 'rgba(15, 23, 42, 0.045)'} 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        ${({ theme }) => theme.mode === 'dark' ? 'rgba(148, 163, 184, 0.08)' : 'rgba(15, 23, 42, 0.045)'} 1px,
        transparent 1px
      );
    background-size: 56px 56px;
    mask-image: linear-gradient(to bottom, black, transparent 88%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    min-height: auto;
    padding: 104px 0 56px;
  }
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
  gap: ${theme.spacing['3xl']};
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`

export const HeroCopy = styled.div`
  max-width: 680px;
`

export const HeroEyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  padding: 0.45rem 0.75rem;
  margin-bottom: ${theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.full};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const HeroTitle = styled.h1`
  max-width: 780px;
  margin-bottom: ${theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['6xl']};
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: 0;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const HeroDescription = styled.p`
  max-width: 620px;
  margin-bottom: ${theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.lg};
  line-height: 1.7;
`

export const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
`

export const HeroMetrics = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  max-width: 620px;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const MetricItem = styled.div`
  padding: ${theme.spacing.md};
  border-right: 1px solid ${({ theme }) => theme.colors.border.light};

  &:last-child {
    border-right: 0;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

    &:last-child {
      border-bottom: 0;
    }
  }
`

export const MetricNumber = styled.div`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const MetricLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`

export const HeroVisual = styled.div`
  position: relative;
`

export const HeroImageCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 28px 70px rgba(0, 0, 0, 0.45)' : '0 28px 70px rgba(15, 23, 42, 0.14)'};
  background: ${({ theme }) => theme.colors.background.paper};

  img {
    display: block;
    width: 100%;
    height: min(58vh, 560px);
    min-height: 420px;
    object-fit: cover;
  }

  &::after {
    content: '';
    position: absolute;
    inset: auto 0 0;
    height: 42%;
    background: linear-gradient(to top, rgba(8, 17, 31, 0.64), transparent);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    img {
      min-height: 320px;
      height: 360px;
    }
  }
`

export const FloatingCard = styled.div`
  position: absolute;
  left: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  bottom: ${theme.spacing.lg};
  z-index: 1;
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.lg};
  background: rgba(255, 255, 255, 0.92);
  color: ${theme.colors.neutral.gray900};
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(14px);

  svg {
    color: ${theme.colors.primary.main};
    flex-shrink: 0;
  }

  strong,
  span {
    display: block;
  }

  strong {
    margin-bottom: 0.2rem;
    font-size: ${theme.typography.fontSize.base};
  }

  span {
    color: ${theme.colors.neutral.gray600};
    font-size: ${theme.typography.fontSize.sm};
    line-height: 1.45;
  }
`

export const TrustStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const TrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  min-height: 56px;
  padding: ${theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};

  svg {
    color: ${({ theme }) => theme.colors.secondary.main};
    flex-shrink: 0;
  }
`
