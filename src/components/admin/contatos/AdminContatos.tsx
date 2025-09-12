import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';
import { IoAlert } from 'react-icons/io5';
import { AdminContato } from '../../../types/admin';
import ContactFilters from './ContactFilters';
import ContactActions from './ContactActions';
import ContactTable from './ContactTable';
import ContactModal from './ContactModal';
import {
  ContatosContainer,
  ContatosHeader,
  ContatosTitle,
  HeaderDescription,
  HeaderActions,
  RefreshButton,
  ExportButton,
  LoadingContainer,
  LoadingIcon,
  LoadingText,
  ErrorContainer,
  ErrorContent,
  ErrorText,
  ErrorCloseButton
} from './AdminContatos.styles';

interface AdminContatosProps { }

const AdminContatos: React.FC<AdminContatosProps> = () => {
  const [contatos, setContatos] = useState<AdminContato[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'novo' | 'lido' | 'respondido'>('all');
  const [selectedContatos, setSelectedContatos] = useState<number[]>([]);
  const [showDetails, setShowDetails] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data - substituir pela integração com a API
  const mockContatos: AdminContato[] = [
    {
      id: 1,
      nome: 'João Silva',
      email: 'joao@email.com',
      telefone: '(11) 99999-9999',
      assunto: 'Consultoria Contábil',
      mensagem: 'Gostaria de saber mais sobre os serviços de consultoria contábil para minha empresa.',
      status: 'novo',
      dataContato: '2024-01-15T10:30:00Z',
      servicoId: 1
    },
    {
      id: 2,
      nome: 'Maria Santos',
      email: 'maria@empresa.com',
      telefone: '(11) 88888-8888',
      assunto: 'Abertura de Empresa',
      mensagem: 'Preciso de ajuda para abrir minha empresa. Quais documentos são necessários?',
      status: 'lido',
      dataContato: '2024-01-14T14:20:00Z',
      servicoId: 1
    },
    {
      id: 3,
      nome: 'Pedro Oliveira',
      email: 'pedro@startup.com',
      telefone: '(11) 77777-7777',
      assunto: 'Planejamento Tributário',
      mensagem: 'Nossa startup precisa de um planejamento tributário eficiente. Podem nos ajudar?',
      status: 'respondido',
      dataContato: '2024-01-13T09:15:00Z',
      dataResposta: '2024-01-13T16:45:00Z',
      servicoId: 1
    }
  ];

  useEffect(() => {
    loadContatos();
  }, []);

  const loadContatos = async () => {
    try {
      setLoading(true);
      // Simular chamada à API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setContatos(mockContatos);
    } catch (err) {
      setError('Erro ao carregar contatos');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: number, newStatus: AdminContato['status']) => {
    try {
      // Simular chamada à API
      setContatos(prev => prev.map(contato =>
        contato.id === id
          ? {
            ...contato,
            status: newStatus,
            dataResposta: newStatus === 'respondido' ? new Date().toISOString() : contato.dataResposta
          }
          : contato
      ));
    } catch (err) {
      setError('Erro ao atualizar status do contato');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este contato?')) return;

    try {
      // Simular chamada à API
      setContatos(prev => prev.filter(contato => contato.id !== id));
    } catch (err) {
      setError('Erro ao excluir contato');
    }
  };

  const handleBulkAction = async (action: 'delete' | 'mark-read' | 'mark-responded') => {
    if (selectedContatos.length === 0) return;

    try {
      if (action === 'delete') {
        if (!confirm(`Tem certeza que deseja excluir ${selectedContatos.length} contato(s)?`)) return;
        setContatos(prev => prev.filter(contato => !selectedContatos.includes(contato.id)));
      } else {
        const newStatus = action === 'mark-read' ? 'lido' : 'respondido';
        setContatos(prev => prev.map(contato =>
          selectedContatos.includes(contato.id)
            ? {
              ...contato,
              status: newStatus,
              dataResposta: newStatus === 'respondido' ? new Date().toISOString() : contato.dataResposta
            }
            : contato
        ));
      }
      setSelectedContatos([]);
    } catch (err) {
      setError('Erro ao executar ação em lote');
    }
  };

  const filteredContatos = contatos.filter(contato => {
    const matchesSearch = contato.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contato.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contato?.assunto && contato.assunto.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || contato.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const paginatedContatos = filteredContatos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredContatos.length / itemsPerPage);



  if (loading) {
    return (
      <LoadingContainer>
        <LoadingIcon />
        <LoadingText>Carregando contatos...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <ContatosContainer>
      {/* Header */}
      <ContatosHeader>
        <div>
          <ContatosTitle>Gestão de Contatos</ContatosTitle>
          <HeaderDescription>Gerencie os contatos recebidos pelo site</HeaderDescription>
        </div>
        <HeaderActions>
          <RefreshButton
            onClick={loadContatos}
          >
            <FiRefreshCw />
            Atualizar
          </RefreshButton>
          <ExportButton>
            <FaDownload />
            Exportar
          </ExportButton>
        </HeaderActions>
      </ContatosHeader>

      {/* Filtros */}
      <ContactFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      {/* Ações em lote */}
      <ContactActions
        selectedCount={selectedContatos.length}
        onMarkAsRead={() => handleBulkAction('mark-read')}
        onMarkAsResponded={() => handleBulkAction('mark-responded')}
        onDelete={() => handleBulkAction('delete')}
      />

      {/* Lista de contatos */}
      <ContactTable
        contatos={paginatedContatos}
        selectedContatos={selectedContatos}
        onSelectAll={(checked) => {
          if (checked) {
            setSelectedContatos(paginatedContatos.map(c => c.id));
          } else {
            setSelectedContatos([]);
          }
        }}
        onSelectContact={(id, checked) => {
          if (checked) {
            setSelectedContatos(prev => [...prev, id]);
          } else {
            setSelectedContatos(prev => prev.filter(contactId => contactId !== id));
          }
        }}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        onViewDetails={setShowDetails}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={filteredContatos.length}
        onPageChange={setCurrentPage}
      />

      {/* Modal de detalhes */}
      <ContactModal
        contato={contatos.find(c => c.id === showDetails) || null}
        isOpen={showDetails !== null}
        onClose={() => setShowDetails(null)}
      />

      {/* Mensagem de erro */}
      {error && (
        <ErrorContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ErrorContent>
            <IoAlert className="w-5 h-5 text-red-500 mr-2" />
            <ErrorText>{error}</ErrorText>
            <ErrorCloseButton
              onClick={() => setError(null)}
            >
              ×
            </ErrorCloseButton>
          </ErrorContent>
        </ErrorContainer>
      )}
    </ContatosContainer>
  );
};

export default AdminContatos;