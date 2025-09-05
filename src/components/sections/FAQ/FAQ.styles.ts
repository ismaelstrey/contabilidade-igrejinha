import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface FAQQuestionProps {
  isOpen: boolean
}

interface FAQIconProps {
  isOpen: boolean
}

export const FAQContainer = styled.section`
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.neutral.gray50};
`

export const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const FAQTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.dark};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const FAQSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.neutral.gray600};
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize.base};
  }
`

export const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`

export const FAQItem = styled.div`
  background: ${theme.colors.neutral.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  overflow: hidden;
  transition: box-shadow ${theme.transitions.normal};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`

export const FAQQuestion = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<FAQQuestionProps>`
  width: 100%;
  padding: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral.gray800};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  
  &:hover {
    background: ${theme.colors.neutral.gray50};
  }
  
  ${({ isOpen }) => isOpen && css`
    background: ${theme.colors.neutral.gray50};
    color: ${theme.colors.primary.main};
  `}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.base};
  }
`

export const FAQIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen'
})<FAQIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: ${theme.borderRadius.full};
  background: ${theme.colors.primary.main};
  color: ${theme.colors.neutral.white};
  transition: all ${theme.transitions.fast};
  flex-shrink: 0;
  
  svg {
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform ${theme.transitions.fast};
  }
  
  ${({ isOpen }) => isOpen && css`
    background: ${theme.colors.primary.dark};
  `}
`

export const FAQAnswer = styled.div`
  padding: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  
  p {
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.7;
    color: ${theme.colors.neutral.gray600};
    margin: 0;
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md} ${theme.spacing.md};
  }
`