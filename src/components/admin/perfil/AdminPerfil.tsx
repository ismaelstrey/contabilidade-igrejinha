import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAdminAuth } from '../../../hooks/admin/useAdminAuth';
import { AdminUser } from '../../../types/admin';

interface AdminPerfilProps {
  className?: string;
}

/**
 * Componente para gerenciar o perfil do administrador
 * Permite visualizar e editar informações pessoais do admin logado
 */
const AdminPerfil: React.FC<AdminPerfilProps> = ({ className = '' }) => {
  const { user, updateProfile, isLoading } = useAdminAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<AdminUser>>({
    nome: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Carrega os dados do usuário quando o componente monta
  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.nome || '',
        email: user.email || ''
      });
    }
  }, [user]);

  /**
   * Manipula mudanças nos campos do formulário
   */
  const handleInputChange = (field: keyof AdminUser, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Remove erro do campo quando o usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  /**
   * Valida os dados do formulário
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome?.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Salva as alterações do perfil
   */
  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
    }
  };

  /**
   * Cancela a edição e restaura os dados originais
   */
  const handleCancel = () => {
    if (user) {
      setFormData({
        nome: user.nome || '',
        email: user.email || ''
      });
    }
    setIsEditing(false);
    setErrors({});
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Carregando perfil...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Meu Perfil</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Editar Perfil
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Salvando...' : 'Salvar'}
            </button>
            <button
              onClick={handleCancel}
              disabled={isLoading}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nome */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome Completo
          </label>
          {isEditing ? (
            <div>
              <input
                type="text"
                value={formData.nome || ''}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.nome ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu nome completo"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
              )}
            </div>
          ) : (
            <p className="text-gray-900 py-2">{user.nome || 'Não informado'}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          {isEditing ? (
            <div>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          ) : (
            <p className="text-gray-900 py-2">{user.email || 'Não informado'}</p>
          )}
        </div>


      </div>

      {/* Informações adicionais */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações da Conta</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Função
            </label>
            <p className="text-gray-900 py-2">{user.role || 'Não definida'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
              user.ativo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {user.ativo ? 'Ativo' : 'Inativo'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AdminPerfil;