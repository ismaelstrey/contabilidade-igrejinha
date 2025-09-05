import styled, { css } from 'styled-components'
import { theme } from '@/styles/theme'

interface StyledButtonProps {
  variant: 'primary' | 'secondary' | 'outline'
  size: 'sm' | 'md' | 'lg'
}

const sizeStyles = {
  sm: css`
    padding: 0.5rem 1rem;
    font-size: ${theme.typography.fontSize.sm};
    border-radius: ${theme.borderRadius.md};
  `,
  md: css`
    padding: 0.75rem 1.5rem;
    font-size: ${theme.typography.fontSize.base};
    border-radius: ${theme.borderRadius.md};
  `,
  lg: css`
    padding: 1rem 2rem;
    font-size: ${theme.typography.fontSize.lg};
    border-radius: ${theme.borderRadius.lg};
  `
}

const variantStyles = {
  primary: css`
    background: ${theme.colors.primary.gradient};
    color: ${theme.colors.neutral.white};
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: ${theme.colors.primary.dark};
      box-shadow: ${theme.shadows.md};
    }
  `,
  secondary: css`
    background: ${theme.colors.secondary.main};
    color: ${theme.colors.neutral.white};
    border: 2px solid transparent;
    
    &:hover:not(:disabled) {
      background: ${theme.colors.secondary.dark};
      box-shadow: ${theme.shadows.md};
    }
  `,
  outline: css`
    background: transparent;
    color: ${theme.colors.primary.main};
    border: 2px solid ${theme.colors.primary.main};
    
    &:hover:not(:disabled) {
      background: ${theme.colors.primary.main};
      color: ${theme.colors.neutral.white};
    }
  `
}

export const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size'].includes(prop)
})<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  text-decoration: none;
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  outline: none;
  
  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.primary.light};
    outline-offset: 2px;
  }
`