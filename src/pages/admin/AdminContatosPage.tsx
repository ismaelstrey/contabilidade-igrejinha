import React from 'react'
import AdminContatos from '@components/admin/contatos/AdminContatos'
import AdminLayout from '@components/admin/layout/AdminLayout'

/**
 * Página de gestão de contatos recebidos
 * Permite visualizar, filtrar e gerenciar contatos enviados pelo formulário
 */
const AdminContatosPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminContatos />
    </AdminLayout>
  )
}

export default AdminContatosPage