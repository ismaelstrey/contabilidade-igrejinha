import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { FiRefreshCw } from 'react-icons/fi'
import { IoAlert } from 'react-icons/io5'
import { AdminContato } from '../../../types/admin'
import ContactFilters from './ContactFilters'
import ContactActions from './ContactActions'
import ContactTable from './ContactTable'
import ContactModal from './ContactModal'
import { loadAdminContacts, updateAdminContactStatus } from '@/services/adminContactsService'
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
  ErrorCloseButton,
} from './AdminContatos.styles'

const itemsPerPage = 10

const AdminContatos: React.FC = () => {
  const [contatos, setContatos] = useState<AdminContato[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'novo' | 'lido' | 'respondido'>('all')
  const [selectedContatos, setSelectedContatos] = useState<number[]>([])
  const [showDetails, setShowDetails] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const loadContatos = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      setContatos(await loadAdminContacts())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar contatos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadContatos()
  }, [])

  const handleStatusChange = async (id: number, newStatus: AdminContato['status']): Promise<void> => {
    const previousContatos = contatos

    try {
      setContatos(prev => prev.map(contato =>
        contato.id === id
          ? {
            ...contato,
            status: newStatus,
            dataResposta: newStatus === 'respondido' ? new Date().toISOString() : contato.dataResposta,
          }
          : contato
      ))
      await updateAdminContactStatus(id, newStatus)
    } catch (err) {
      setContatos(previousContatos)
      setError(err instanceof Error ? err.message : 'Erro ao atualizar status do contato')
    }
  }

  const handleDelete = async (id: number): Promise<void> => {
    if (!confirm('Tem certeza que deseja remover este contato da visualizacao local?')) return
    setContatos(prev => prev.filter(contato => contato.id !== id))
  }

  const handleBulkAction = async (action: 'delete' | 'mark-read' | 'mark-responded'): Promise<void> => {
    if (selectedContatos.length === 0) return

    if (action === 'delete') {
      setContatos(prev => prev.filter(contato => !selectedContatos.includes(contato.id)))
      setSelectedContatos([])
      return
    }

    const newStatus = action === 'mark-read' ? 'lido' : 'respondido'
    await Promise.all(selectedContatos.map(id => handleStatusChange(id, newStatus)))
    setSelectedContatos([])
  }

  const filteredContatos = contatos.filter(contato => {
    const search = searchTerm.toLowerCase()
    const matchesSearch = contato.nome.toLowerCase().includes(search) ||
      contato.email.toLowerCase().includes(search) ||
      (contato.assunto || contato.empresa || '').toLowerCase().includes(search)
    const matchesStatus = statusFilter === 'all' || contato.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const paginatedContatos = filteredContatos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  const totalPages = Math.ceil(filteredContatos.length / itemsPerPage)

  const exportContacts = (): void => {
    const columns = ['nome', 'email', 'telefone', 'empresa', 'status', 'mensagem', 'data'] as const
    const rows = filteredContatos.map(contato => ({
      nome: contato.nome,
      email: contato.email,
      telefone: contato.telefone || '',
      empresa: contato.empresa || '',
      status: contato.status,
      mensagem: contato.mensagem,
      data: contato.dataContato || contato.createdAt || '',
    }))
    const csv = [
      columns.join(';'),
      ...rows.map(row => columns.map(column => `"${String(row[column]).replaceAll('"', '""')}"`).join(';')),
    ].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `contatos-${new Date().toISOString().slice(0, 10)}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingIcon />
        <LoadingText>Carregando contatos...</LoadingText>
      </LoadingContainer>
    )
  }

  return (
    <ContatosContainer>
      <ContatosHeader>
        <div>
          <ContatosTitle>Gestao de Solicitacoes</ContatosTitle>
          <HeaderDescription>Registro real dos formularios recebidos pelo site</HeaderDescription>
        </div>
        <HeaderActions>
          <RefreshButton onClick={loadContatos}>
            <FiRefreshCw />
            Atualizar
          </RefreshButton>
          <ExportButton onClick={exportContacts} disabled={filteredContatos.length === 0}>
            <FaDownload />
            Exportar
          </ExportButton>
        </HeaderActions>
      </ContatosHeader>

      <ContactFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
      />

      <ContactActions
        selectedCount={selectedContatos.length}
        onMarkAsRead={() => handleBulkAction('mark-read')}
        onMarkAsResponded={() => handleBulkAction('mark-responded')}
        onDelete={() => handleBulkAction('delete')}
      />

      <ContactTable
        contatos={paginatedContatos}
        selectedContatos={selectedContatos}
        onSelectAll={(checked) => {
          setSelectedContatos(checked ? paginatedContatos.map(contact => contact.id) : [])
        }}
        onSelectContact={(id, checked) => {
          setSelectedContatos(prev => checked ? [...prev, id] : prev.filter(contactId => contactId !== id))
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

      <ContactModal
        contato={contatos.find(contact => contact.id === showDetails) || null}
        isOpen={showDetails !== null}
        onClose={() => setShowDetails(null)}
      />

      {error && (
        <ErrorContainer initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ErrorContent>
            <IoAlert />
            <ErrorText>{error}</ErrorText>
            <ErrorCloseButton onClick={() => setError(null)}>x</ErrorCloseButton>
          </ErrorContent>
        </ErrorContainer>
      )}
    </ContatosContainer>
  )
}

export default AdminContatos
