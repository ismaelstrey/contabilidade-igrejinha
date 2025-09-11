import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdminPermissao, AdminConfiguracao } from '../../../types/admin';
import { useAdminAuth } from '../../../hooks/admin/useAdminAuth';
import { FiEdit, FiPlus, FiRefreshCw, FiSave } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { BiShield } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { CgGlobe } from 'react-icons/cg';
import { FaEnvelope } from 'react-icons/fa6';
import { HiEyeOff } from 'react-icons/hi';
import { HiEye } from 'react-icons/hi2';
import { GiShield } from 'react-icons/gi';
import { LuTrash2 } from 'react-icons/lu';
import { TbAlertCircle } from 'react-icons/tb';
import { PiCheckCircle } from 'react-icons/pi';

interface AdminConfiguracoesProps { }

const AdminConfiguracoes: React.FC<AdminConfiguracoesProps> = () => {
  const { user } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<'geral' | 'permissoes' | 'sistema'>('geral');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Estados para configurações gerais
  const [configuracoes, setConfiguracoes] = useState<AdminConfiguracao>({
    siteName: 'Contabilidade Igrejinha',
    siteDescription: 'Serviços contábeis especializados para igrejas',
    contactEmail: 'contato@contabilidadeigrejinha.com.br',
    contactPhone: '(51) 99999-9999',
    address: 'Rua das Flores, 123 - Igrejinha/RS',
    socialMedia: {
      facebook: 'https://facebook.com/contabilidadeigrejinha',
      instagram: 'https://instagram.com/contabilidadeigrejinha',
      linkedin: 'https://linkedin.com/company/contabilidadeigrejinha'
    },
    emailSettings: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: 587,
      smtpUser: 'noreply@contabilidadeigrejinha.com.br',
      smtpPassword: '',
      fromName: 'Contabilidade Igrejinha',
      fromEmail: 'noreply@contabilidadeigrejinha.com.br'
    },
    maintenanceMode: false,
    allowRegistration: true,
    requireEmailVerification: true
  });

  // Estados para permissões
  const [roles, setRoles] = useState<AdminPermissao[]>([
    {
      id: '1',
      nome: 'admin',
      descricao: 'Administrador com acesso total ao sistema',
      permissoes: [
        'usuarios.criar',
        'usuarios.editar',
        'usuarios.excluir',
        'usuarios.visualizar',
        'servicos.criar',
        'servicos.editar',
        'servicos.excluir',
        'servicos.visualizar',
        'contatos.visualizar',
        'contatos.responder',
        'contatos.excluir',
        'configuracoes.editar',
        'dashboard.visualizar'
      ]
    },
    {
      id: '2',
      nome: 'user',
      descricao: 'Usuário padrão com acesso limitado',
      permissoes: [
        'usuarios.visualizar',
        'servicos.visualizar',
        'contatos.visualizar',
        'dashboard.visualizar'
      ]
    },
    {
      id: '3',
      nome: 'viewer',
      descricao: 'Visualizador com acesso apenas de leitura',
      permissoes: [
        'dashboard.visualizar'
      ]
    }
  ]);

  const [editingRole, setEditingRole] = useState<AdminPermissao | null>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const permissoesDisponiveis = [
    { key: 'usuarios.criar', label: 'Criar Usuários' },
    { key: 'usuarios.editar', label: 'Editar Usuários' },
    { key: 'usuarios.excluir', label: 'Excluir Usuários' },
    { key: 'usuarios.visualizar', label: 'Visualizar Usuários' },
    { key: 'servicos.criar', label: 'Criar Serviços' },
    { key: 'servicos.editar', label: 'Editar Serviços' },
    { key: 'servicos.excluir', label: 'Excluir Serviços' },
    { key: 'servicos.visualizar', label: 'Visualizar Serviços' },
    { key: 'contatos.visualizar', label: 'Visualizar Contatos' },
    { key: 'contatos.responder', label: 'Responder Contatos' },
    { key: 'contatos.excluir', label: 'Excluir Contatos' },
    { key: 'configuracoes.editar', label: 'Editar Configurações' },
    { key: 'dashboard.visualizar', label: 'Visualizar Dashboard' }
  ];

  useEffect(() => {
    loadConfiguracoes();
  }, []);

  const loadConfiguracoes = async () => {
    try {
      setLoading(true);
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Configurações já estão no estado inicial
    } catch (err) {
      setError('Erro ao carregar configurações');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveConfiguracoes = async () => {
    try {
      setLoading(true);
      setError(null);

      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSuccess('Configurações salvas com sucesso!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Erro ao salvar configurações');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveRole = async (role: AdminPermissao) => {
    try {
      setLoading(true);

      if (editingRole) {
        // Editar role existente
        setRoles(prev => prev.map(r => r.id === role.id ? role : r));
      } else {
        // Criar nova role
        const newRole = { ...role, id: Date.now().toString() };
        setRoles(prev => [...prev, newRole]);
      }

      setShowRoleModal(false);
      setEditingRole(null);
      setSuccess('Permissão salva com sucesso!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Erro ao salvar permissão');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRole = async (roleId: string) => {
    if (!confirm('Tem certeza que deseja excluir esta permissão?')) return;

    try {
      setRoles(prev => prev.filter(r => r.id !== roleId));
      setSuccess('Permissão excluída com sucesso!');
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      setError('Erro ao excluir permissão');
    }
  };

  const canEditConfiguracoes = user?.role === 'admin';

  const tabs = [
    { id: 'geral', label: 'Configurações Gerais', icon: CiSettings },
    { id: 'permissoes', label: 'Permissões', icon: BiShield },
    { id: 'sistema', label: 'Sistema', icon: BsDatabase }
  ];

  if (loading && activeTab === 'geral') {
    return (
      <div className="flex items-center justify-center h-64">
        <FiRefreshCw className="w-8 h-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Carregando configurações...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
          <p className="text-gray-600">Gerencie as configurações do sistema e permissões</p>
        </div>
        {canEditConfiguracoes && (
          <button
            onClick={handleSaveConfiguracoes}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <FiRefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <FiSave className="w-4 h-4 mr-2" />
            )}
            Salvar Alterações
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center py-2 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Conteúdo das tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        {/* Tab Configurações Gerais */}
        {activeTab === 'geral' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nome do Site
                </label>
                <input
                  type="text"
                  value={configuracoes.siteName}
                  onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, siteName: e.target.value }))}
                  disabled={!canEditConfiguracoes}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email de Contato
                </label>
                <input
                  type="email"
                  value={configuracoes.contactEmail}
                  onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, contactEmail: e.target.value }))}
                  disabled={!canEditConfiguracoes}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição do Site
              </label>
              <textarea
                value={configuracoes.siteDescription}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, siteDescription: e.target.value }))}
                disabled={!canEditConfiguracoes}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone de Contato
                </label>
                <input
                  type="tel"
                  value={configuracoes.contactPhone}
                  onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, contactPhone: e.target.value }))}
                  disabled={!canEditConfiguracoes}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Endereço
                </label>
                <input
                  type="text"
                  value={configuracoes.address}
                  onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, address: e.target.value }))}
                  disabled={!canEditConfiguracoes}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                />
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CgGlobe className="w-5 h-5 mr-2" />
                Redes Sociais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facebook
                  </label>
                  <input
                    type="url"
                    value={configuracoes.socialMedia.facebook}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Instagram
                  </label>
                  <input
                    type="url"
                    value={configuracoes.socialMedia.instagram}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={configuracoes.socialMedia.linkedin}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      socialMedia: { ...prev.socialMedia, linkedin: e.target.value }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
              </div>
            </div>

            {/* Configurações de Email */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <FaEnvelope className="w-5 h-5 mr-2" />
                Configurações de Email
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servidor SMTP
                  </label>
                  <input
                    type="text"
                    value={configuracoes.emailSettings.smtpHost}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      emailSettings: { ...prev.emailSettings, smtpHost: e.target.value }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Porta SMTP
                  </label>
                  <input
                    type="number"
                    value={configuracoes.emailSettings.smtpPort}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      emailSettings: { ...prev.emailSettings, smtpPort: parseInt(e.target.value) }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usuário SMTP
                  </label>
                  <input
                    type="email"
                    value={configuracoes.emailSettings.smtpUser}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                      ...prev,
                      emailSettings: { ...prev.emailSettings, smtpUser: e.target.value }
                    }))}
                    disabled={!canEditConfiguracoes}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha SMTP
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={configuracoes.emailSettings.smtpPassword}
                      onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                        ...prev,
                        emailSettings: { ...prev.emailSettings, smtpPassword: e.target.value }
                      }))}
                      disabled={!canEditConfiguracoes}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <HiEyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <HiEye className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Permissões */}
        {activeTab === 'permissoes' && (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">Gerenciar Permissões</h3>
              {canEditConfiguracoes && (
                <button
                  onClick={() => {
                    setEditingRole(null);
                    setShowRoleModal(true);
                  }}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FiPlus className="w-4 h-4 mr-2" />
                  Nova Permissão
                </button>
              )}
            </div>

            <div className="space-y-4">
              {roles.map((role) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GiShield className="w-5 h-5 text-blue-600 mr-2" />
                        <h4 className="text-lg font-medium text-gray-900 capitalize">{role.nome}</h4>
                      </div>
                      <p className="text-gray-600 mb-3">{role.descricao}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.permissoes.map((permissao: string) => {
                          const permissaoInfo = permissoesDisponiveis.find(p => p.key === permissao);
                          return (
                            <span
                              key={permissao}
                              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                            >
                              {permissaoInfo?.label || permissao}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    {canEditConfiguracoes && (
                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => {
                            setEditingRole(role);
                            setShowRoleModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                          title="Editar"
                        >
                          <FiEdit className="w-4 h-4" />
                        </button>
                        {role.nome !== 'admin' && (
                          <button
                            onClick={() => handleDeleteRole(role.id)}
                            className="text-red-600 hover:text-red-900 transition-colors"
                            title="Excluir"
                          >
                            <LuTrash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Sistema */}
        {activeTab === 'sistema' && (
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Modo de Manutenção</h4>
                  <p className="text-sm text-gray-600">Ativar para manutenção do sistema</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={configuracoes.maintenanceMode}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, maintenanceMode: e.target.checked }))}
                    disabled={!canEditConfiguracoes}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Permitir Registro</h4>
                  <p className="text-sm text-gray-600">Permitir novos usuários se registrarem</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={configuracoes.allowRegistration}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, allowRegistration: e.target.checked }))}
                    disabled={!canEditConfiguracoes}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">Verificação de Email</h4>
                  <p className="text-sm text-gray-600">Exigir verificação de email no registro</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={configuracoes.requireEmailVerification}
                    onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ ...prev, requireEmailVerification: e.target.checked }))}
                    disabled={!canEditConfiguracoes}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de Permissões */}
      <AnimatePresence>
        {showRoleModal && (
          <RoleModal
            role={editingRole}
            permissoesDisponiveis={permissoesDisponiveis}
            onSave={handleSaveRole}
            onClose={() => {
              setShowRoleModal(false);
              setEditingRole(null);
            }}
          />
        )}
      </AnimatePresence>

      {/* Mensagens de feedback */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4"
        >
          <div className="flex items-center">
            <TbAlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700">{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-auto text-red-500 hover:text-red-700"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 rounded-lg p-4"
        >
          <div className="flex items-center">
            <PiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span className="text-green-700">{success}</span>
            <button
              onClick={() => setSuccess(null)}
              className="ml-auto text-green-500 hover:text-green-700"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Componente Modal para edição de permissões
interface RoleModalProps {
  role: AdminPermissao | null;
  permissoesDisponiveis: { key: string; label: string }[];
  onSave: (role: AdminPermissao) => void;
  onClose: () => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ role, permissoesDisponiveis, onSave, onClose }) => {
  const [formData, setFormData] = useState<Omit<AdminPermissao, 'id'>>(
    role ? { nome: role.nome, descricao: role.descricao, permissoes: [...role.permissoes] } : {
      nome: '',
      descricao: '',
      permissoes: []
    }
  );

  const handlePermissaoToggle = (permissao: string) => {
    setFormData(prev => ({
      ...prev,
      permissoes: prev.permissoes.includes(permissao)
        ? prev.permissoes.filter((p: string) => p !== permissao)
        : [...prev.permissoes, permissao]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.descricao.trim()) return;

    onSave({
      id: role?.id || '',
      ...formData
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              {role ? 'Editar Permissão' : 'Nova Permissão'}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome da Permissão
              </label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Permissões
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto border border-gray-200 rounded-lg p-3">
                {permissoesDisponiveis.map((permissao) => (
                  <label key={permissao.key} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.permissoes.includes(permissao.key)}
                      onChange={() => handlePermissaoToggle(permissao.key)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-2"
                    />
                    <span className="text-sm text-gray-700">{permissao.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6 pt-6 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {role ? 'Salvar Alterações' : 'Criar Permissão'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AdminConfiguracoes;