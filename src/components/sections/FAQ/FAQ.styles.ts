import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface FAQQuestionProps {
  isOpen: boolean
  $themeMode: 'light' | 'dark'
}

interface FAQIconProps {
  isOpen: boolean
  $themeMode: 'light' | 'dark'
}

interface FAQContainerProps {
  $themeMode: 'light' | 'dark'
}

interface FAQHeaderProps {
  $themeMode: 'light' | 'dark'
}

interface FAQItemProps {
  $themeMode: 'light' | 'dark'
}

interface FAQAnswerProps {
  $themeMode: 'light' | 'dark'
}

export const FAQContainer = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<FAQContainerProps>`
  padding: ${theme.spacing['4xl']} 0;
  background: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
      : 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #e2e8f0 100%)'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
        : 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)'};
    pointer-events: none;
  }
`

export const FAQHeader = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<FAQHeaderProps>`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
  position: relative;
  z-index: 1;
`

export const FAQTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  opacity: 0.8;
  
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

export const FAQItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<FAQItemProps>`
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)'
      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)'};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1)'
      : '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(226, 232, 240, 0.5)'};
  overflow: hidden;
  transition: all ${theme.transitions.normal};
  backdrop-filter: blur(10px);
  border: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.1)' : 'rgba(226, 232, 240, 0.5)'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ $themeMode }) => 
      $themeMode === 'dark'
        ? '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2)'
        : '0 12px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.3)'};
  }
`

export const FAQQuestion = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== '$themeMode'
})<FAQQuestionProps>`
  width: 100%;
  padding: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ $themeMode }) => 
    $themeMode === 'dark' ? '#f1f5f9' : theme.colors.neutral.gray800};
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  position: relative;
  
  &:hover {
    background: ${({ $themeMode }) => 
      $themeMode === 'dark' 
        ? 'rgba(59, 130, 246, 0.1)' 
        : 'rgba(59, 130, 246, 0.05)'};
  }
  
  ${({ isOpen, $themeMode }) => isOpen && css`
    background: ${$themeMode === 'dark' 
      ? 'rgba(59, 130, 246, 0.15)' 
      : 'rgba(59, 130, 246, 0.08)'};
    color: ${$themeMode === 'dark' ? '#60a5fa' : theme.colors.primary.main};
  `}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.md};
    font-size: ${theme.typography.fontSize.base};
  }
`

export const FAQIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== '$themeMode'
})<FAQIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: ${theme.borderRadius.full};
  background: ${({ $themeMode, isOpen }) => {
    if ($themeMode === 'dark') {
      return isOpen 
        ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
        : 'linear-gradient(135deg, #475569 0%, #64748b 100%)';
    }
    return isOpen 
      ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
      : 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)';
  }};
  color: ${({ $themeMode, isOpen }) => {
    if ($themeMode === 'dark') {
      return isOpen ? '#ffffff' : '#cbd5e1';
    }
    return isOpen ? '#ffffff' : '#64748b';
  }};
  transition: all ${theme.transitions.fast};
  flex-shrink: 0;
  box-shadow: ${({ $themeMode }) => 
    $themeMode === 'dark' 
      ? '0 4px 12px rgba(0, 0, 0, 0.3)'
      : '0 2px 8px rgba(0, 0, 0, 0.1)'};
  
  svg {
    transform: ${({ isOpen }) => isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform ${theme.transitions.fast};
  }
  
  &:hover {
    transform: scale(1.1);
  }
`

export const FAQAnswer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$themeMode'
})<FAQAnswerProps>`
  padding: 0 ${theme.spacing.lg} ${theme.spacing.lg};
  background: ${({ $themeMode }) => 
    $themeMode === 'dark'
      ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.3) 0%, rgba(30, 41, 59, 0.2) 100%)'
      : 'linear-gradient(135deg, rgba(248, 250, 252, 0.5) 0%, rgba(241, 245, 249, 0.3) 100%)'};
  border-top: 1px solid ${({ $themeMode }) => 
    $themeMode === 'dark' ? 'rgba(148, 163, 184, 0.1)' : 'rgba(226, 232, 240, 0.5)'};
  
  p {
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.7;
    color: ${({ $themeMode }) => 
      $themeMode === 'dark' ? '#cbd5e1' : theme.colors.neutral.gray600};
    margin: 0;
    padding-top: ${theme.spacing.lg};
  }
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md} ${theme.spacing.md};
  }
`