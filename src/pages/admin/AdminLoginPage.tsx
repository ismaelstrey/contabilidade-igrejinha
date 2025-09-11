import React from 'react'
import { Navigate } from 'react-router-dom'
import AdminLogin from '@components/admin/auth/AdminLogin'
import { useAdminAuth } from '@hooks/admin/useAdminAuth'
import { LoginPageWrapper, LoadingWrapper, LoadingText } from './AdminLoginPage.styles'

/**
 * Página de login administrativo
 * Redireciona para dashboard se já estiver autenticado
 */
const AdminLoginPage: React.FC = () => {
  const { isAuthenticated, isLoading } = useAdminAuth()

  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <LoadingWrapper>
        <LoadingText>Verificando autenticação...</LoadingText>
      </LoadingWrapper>
    )
  }

  // Redireciona se já estiver autenticado
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />
  }

  return (
    <LoginPageWrapper>
      <AdminLogin />
    </LoginPageWrapper>
  )
}

export default AdminLoginPage