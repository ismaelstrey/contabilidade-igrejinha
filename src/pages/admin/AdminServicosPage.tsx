import React from 'react'
import AdminServicos from '@components/admin/servicos/AdminServicos'
import AdminLayout from '@components/admin/layout/AdminLayout'

/**
 * Página de gestão de serviços administrativos
 * Permite listar, criar, editar e gerenciar serviços oferecidos
 */
const AdminServicosPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminServicos />
    </AdminLayout>
  )
}

export default AdminServicosPage