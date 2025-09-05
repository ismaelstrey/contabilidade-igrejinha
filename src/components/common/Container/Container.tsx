import React from 'react'
import { StyledContainer } from './Container.styles'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className, 
  maxWidth = 'xl' 
}) => {
  return (
    <StyledContainer className={className} maxWidth={maxWidth}>
      {children}
    </StyledContainer>
  )
}

export default Container