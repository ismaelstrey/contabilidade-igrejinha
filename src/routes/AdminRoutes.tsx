import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminProtectedRoute from '../components/admin/auth/AdminProtectedRoute';
import AdminLayout from '../components/admin/layout/AdminLayout';
import AdminLogin from '../components/admin/auth/AdminLogin';
import AdminDashboard from '../components/admin/dashboard/AdminDashboard';
import AdminUsuarios from '../components/admin/usuarios/AdminUsuarios';
import AdminServicos from '../components/admin/servicos/AdminServicos';
import AdminContatos from '../components/admin/contatos/AdminContatos';
import AdminConfiguracoes from '../components/admin/configuracoes/AdminConfiguracoes';
import AdminPerfil from '../components/admin/perfil/AdminPerfil';
import { useAdminAuth } from '../hooks/admin/useAdminAuth';

const AdminRoutes: React.FC = () => {
  const { isAuthenticated } = useAdminAuth();

  return (
    <Routes>
      {/* Rota de login */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/admin/dashboard" replace />
          ) : (
            <AdminLogin />
          )
        }
      />

      {/* Rotas protegidas */}
      <Route
        path="/*"
        element={
          <AdminProtectedRoute>
            <AdminLayout>
              <Routes>
                {/* Dashboard */}
                <Route
                  path="dashboard"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <AdminDashboard />
                    </AdminProtectedRoute>
                  }
                />

                {/* Gestão de Usuários */}
                <Route
                  path="usuarios"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <AdminUsuarios />
                    </AdminProtectedRoute>
                  }
                />

                {/* Gestão de Serviços */}
                <Route
                  path="servicos"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <AdminServicos />
                    </AdminProtectedRoute>
                  }
                />

                {/* Gestão de Contatos */}
                <Route
                  path="contatos"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <AdminContatos />
                    </AdminProtectedRoute>
                  }
                />

                {/* Perfil */}
                <Route
                  path="perfil"
                  element={
                    <AdminProtectedRoute requiredRole="viewer">
                      <AdminPerfil />
                    </AdminProtectedRoute>
                  }
                />

                <Route
                  path="status"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <div>Status</div>
                    </AdminProtectedRoute>
                  }
                />

                {/* Configurações */}
                <Route
                  path="configuracoes"
                  element={
                    <AdminProtectedRoute requiredRole="admin">
                      <AdminConfiguracoes />
                    </AdminProtectedRoute>
                  }
                />

                {/* Redirecionamento padrão */}
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="*" element={<Navigate to="dashboard" replace />} />
              </Routes>
            </AdminLayout>
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AdminRoutes;