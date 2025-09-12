import React from 'react'
import { LoadingContainer } from './AdminDashboard.styles'

/**
 * Propriedades do componente LoadingState
 */
interface LoadingStateProps {
  message?: string
}

/**
 * Componente de estado de carregamento
 */
const LoadingState: React.FC<LoadingStateProps> = ({ 
  message = 'Carregando dados do dashboard...' 
}) => {
  return (
    <LoadingContainer>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p>{message}</p>
    </LoadingContainer>
  )
}

export default LoadingState
export type { LoadingStateProps }