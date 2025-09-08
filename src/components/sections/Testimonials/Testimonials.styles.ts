import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface CarouselDotProps {
  isActive: boolean
}

export const TestimonialsContainer = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.neutral.gray50};
`

export const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const TestimonialsTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.dark};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const TestimonialsSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TestimonialsCarousel = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.lg};
  }
`

export const TestimonialCard = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.lg};
  text-align: center;
  min-height: 300px;
  display: flex;
  align-items: center;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl};
    min-height: 250px;
  }
`

export const TestimonialContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`

export const TestimonialRating = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.xs};
`

export const TestimonialMessage = styled.blockquote`
  font-size: ${theme.typography.fontSize.lg};
  font-style: italic;
  color: ${theme.colors.neutral.gray700};
  line-height: 1.7;
  margin: 0;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
  }
`

export const AuthorPhoto = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${theme.borderRadius.full};
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`

export const AuthorInfo = styled.div`
  text-align: left;
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    text-align: center;
  }
`

export const AuthorName = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary.dark};
  margin: 0 0 ${theme.spacing.xs} 0;
`

export const AuthorCompany = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.neutral.gray500};
  margin: 0;
`

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;
`

export const CarouselButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.neutral.white};
  border: 2px solid ${theme.colors.primary.main};
  color: ${theme.colors.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  pointer-events: all;
  box-shadow: ${theme.shadows.md};
  
  &:hover {
    background: ${theme.colors.primary.main};
    color: ${theme.colors.neutral.white};
    transform: scale(1.1);
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xl};
`

export const CarouselDot = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive'
})<CarouselDotProps>`
  width: 12px;
  height: 12px;
  border-radius: ${theme.borderRadius.full};
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  
  ${({ isActive }) => isActive ? css`
    background: ${theme.colors.primary.main};
    transform: scale(1.2);
  ` : css`
    background: ${theme.colors.neutral.gray300};
    
    &:hover {
      background: ${theme.colors.primary.light};
    }
  `}
`