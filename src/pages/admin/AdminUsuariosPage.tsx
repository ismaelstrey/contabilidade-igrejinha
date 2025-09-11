import React from 'react'
import AdminUsuarios from '@components/admin/usuarios/AdminUsuarios'
import AdminLayout from '@components/admin/layout/AdminLayout'

/**
 * Página de gestão de usuários administrativos
 * Permite listar, criar, editar e gerenciar usuários do sistema
 */
const AdminUsuariosPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminUsuarios />
    </AdminLayout>
  )
}

export default AdminUsuariosPage