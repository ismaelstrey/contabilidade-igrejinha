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
  className
}) => {
  return (
    <StyledButton
      as={motion.button}
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={className}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </StyledButton>
  )
}

export default Button