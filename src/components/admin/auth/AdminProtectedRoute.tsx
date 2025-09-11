import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAdminAuth } from '@hooks/admin/useAdminAuth'

/**
 * Props do componente AdminProtectedRoute
 */
interface AdminProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: 'admin' | 'user' | 'viewer'
  fallbackPath?: string
}

/**
 * Componente para proteger rotas administrativas
 * Verifica se o usuário está autenticado e possui as permissões necessárias
 */
const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({
  children,
  requiredRole = 'user',
  fallbackPath = '/admin/login'
}) => {
  const { isAuthenticated, isLoading, user } = useAdminAuth()
  const location = useLocation()

  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="text-gray-600 text-lg">Verificando permissões...</p>
        </div>
      </div>
    )
  }

  // Redireciona para login se não estiver autenticado
  if (!isAuthenticated || !user) {
    return (
      <Navigate 
        to={fallbackPath} 
        state={{ from: location.pathname }} 
        replace 
      />
    )
  }

  // Verifica se o usuário possui o role necessário
  const hasRequiredRole = checkUserRole(user.role, requiredRole)
  
  if (!hasRequiredRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mx-auto h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Acesso Negado
          </h2>
          <p className="text-gray-600 mb-6">
            Você não possui permissões suficientes para acessar esta área.
          </p>
          <div className="space-y-3">
            <p className="text-sm text-gray-500">
              Seu nível de acesso: <span className="font-medium capitalize">{user.role}</span>
            </p>
            <p className="text-sm text-gray-500">
              Nível necessário: <span className="font-medium capitalize">{requiredRole}</span>
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => window.history.back()}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              Voltar
            </button>
            <Navigate to="/admin/dashboard" replace />
          </div>
        </div>
      </div>
    )
  }

  // Se passou por todas as verificações, renderiza o conteúdo protegido
  return <>{children}</>
}

/**
 * Verifica se o usuário possui o role necessário
 * Hierarquia: admin > user > viewer
 */
const checkUserRole = (userRole: string, requiredRole: string): boolean => {
  const roleHierarchy = {
    'viewer': 1,
    'user': 2,
    'admin': 3
  }

  const userLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0
  const requiredLevel = roleHierarchy[requiredRole as keyof typeof roleHierarchy] || 0

  return userLevel >= requiredLevel
}

export default AdminProtectedRoute