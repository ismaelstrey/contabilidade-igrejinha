import * as React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AdminPermissao, AdminConfiguracao } from '../../../types/admin';
import { useAdminAuth } from '../../../hooks/admin/useAdminAuth';
import { FiRefreshCw, FiSave } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import { BiShield } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import Button from '../../common/Button/Button';
import ConfiguracoesGerais from './tabs/ConfiguracoesGerais';
import Permissoes from './tabs/Permissoes';
import Sistema from './tabs/Sistema';
import RoleModal from './modals/RoleModal';
import FeedbackMessages from './components/FeedbackMessages';
import {
  ConfiguracoesContainer,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  LoadingContainer,
  LoadingText,
  TabsContainer,
  TabsNav,
  TabButton,
  ContentContainer
} from './AdminConfiguracoes.styles';

interface AdminConfiguracoesProps { }

const AdminConfiguracoes: React.FC<AdminConfiguracoesProps> = () => {
  const { user } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<'geral' | 'permissoes' | 'sistema'>('geral');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  console.log("config")
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
      <LoadingContainer>
        <FiRefreshCw style={{ width: '2rem', height: '2rem', animation: 'spin 1s linear infinite', color: '#2563eb' }} />
        <LoadingText>Carregando configurações...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <ConfiguracoesContainer>
      {/* Header */}
      <Header>
        <HeaderContent>
          <Title>Configurações</Title>
          <Subtitle>Gerencie as configurações do sistema e permissões</Subtitle>
        </HeaderContent>
        {canEditConfiguracoes && (
          <Button
            onClick={handleSaveConfiguracoes}
            disabled={loading}
            variant="primary"
            size="md"
          >
            {loading ? (
              <FiRefreshCw style={{ animation: 'spin 1s linear infinite' }} />
            ) : (
              <FiSave />
            )}
            Salvar Alterações
          </Button>
        )}
      </Header>

      {/* Tabs */}
      <TabsContainer>
        <TabsNav>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabButton
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                $isActive={activeTab === tab.id}
              >
                <Icon />
                {tab.label}
              </TabButton>
            );
          })}
        </TabsNav>
      </TabsContainer>

      {/* Conteúdo das tabs */}
      <ContentContainer>
        {activeTab === 'geral' && (
          <ConfiguracoesGerais
            configuracoes={configuracoes}
            setConfiguracoes={setConfiguracoes}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            canEdit={canEditConfiguracoes}
          />
        )}

        {activeTab === 'permissoes' && (
          <Permissoes
            roles={roles}
            permissoesDisponiveis={permissoesDisponiveis}
            canEdit={canEditConfiguracoes}
            onEditRole={(role) => {
              setEditingRole(role);
              setShowRoleModal(true);
            }}
            onNewRole={() => {
              setEditingRole(null);
              setShowRoleModal(true);
            }}
            onDeleteRole={handleDeleteRole}
          />
        )}

        {activeTab === 'sistema' && (
          <Sistema
            configuracoes={configuracoes}
            setConfiguracoes={setConfiguracoes}
            canEdit={canEditConfiguracoes}
          />
        )}
      </ContentContainer>

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
      <FeedbackMessages
        error={error}
        success={success}
        onClearError={() => setError(null)}
        onClearSuccess={() => setSuccess(null)}
      />
    </ConfiguracoesContainer>
  );
};




export default AdminConfiguracoes;