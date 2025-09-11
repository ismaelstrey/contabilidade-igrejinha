import React from 'react'
import AdminDashboard from '@components/admin/dashboard/AdminDashboard'
import AdminLayout from '@components/admin/layout/AdminLayout'

/**
 * Página principal do dashboard administrativo
 * Contém métricas, estatísticas e visão geral do sistema
 */
const AdminDashboardPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  )
}

export default AdminDashboardPage