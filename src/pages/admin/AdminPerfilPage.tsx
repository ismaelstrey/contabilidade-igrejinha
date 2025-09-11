import * as React from 'react'

import AdminLayout from '@components/admin/layout/AdminLayout'
import AdminPerfil from '@/components/admin/perfil/AdminPerfil'

/**
 * Página de perfil do usuário administrativo
 * Permite editar informações pessoais, alterar senha e configurações
 */
const AdminPerfilPage: React.FC = () => {
  return (
    <AdminLayout>
      <AdminPerfil />
    </AdminLayout>
  )
}

export default AdminPerfilPage