import React from 'react'
import { motion } from 'framer-motion'
import { ButtonProps } from '@/types'
import { StyledButton } from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  type = 'button',
  className,
  href,
  as
}) => {
  const elementType = href ? 'a' : (as || 'button')
  
  const props = href ? {
    href,
    onClick: (e: React.MouseEvent) => {
      if (onClick) {
        e.preventDefault()
        onClick(e)
      }
    }
  } : {
    onClick,
    disabled,
    type
  }

  return (
    <StyledButton
      as={motion[elementType as keyof typeof motion]}
      variant={variant}
      size={size}
      className={className}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export default Button