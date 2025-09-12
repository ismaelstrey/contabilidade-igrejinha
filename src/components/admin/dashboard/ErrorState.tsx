import React from 'react'
import { LoadingContainer } from './AdminDashboard.styles'

/**
 * Propriedades do componente ErrorState
 */
interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

/**
 * Componente de estado de erro
 */
const ErrorState: React.FC<ErrorStateProps> = ({ 
  message = 'Erro ao carregar dados do dashboard', 
  onRetry 
}) => {
  return (
    <LoadingContainer>
      <div className="text-red-500 text-4xl mb-4">⚠️</div>
      <p className="text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Tentar Novamente
        </button>
      )}
    </LoadingContainer>
  )
}

export default ErrorState
export type { ErrorStateProps }