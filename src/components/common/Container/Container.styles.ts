import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface StyledContainerProps {
  maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const maxWidthStyles = {
  sm: css`max-width: 640px;`,
  md: css`max-width: 768px;`,
  lg: css`max-width: 1024px;`,
  xl: css`max-width: 1280px;`,
  full: css`max-width: 100%;`
}

export const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'maxWidth'
})<StyledContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  
  ${({ maxWidth }) => maxWidthStyles[maxWidth]}
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.sm};
  }
`