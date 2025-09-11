import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AdminUser } from '@/types/admin'
import UserFilters from './UserFilters'
import UserActions from './UserActions'
import UserTable from './UserTable'
import UserModal from './UserModal'
import {
  Container,
  LoadingContainer,
  LoadingContent,
  LoadingItem,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  CreateButton,
  ErrorMessage,
  ErrorContent,
  ErrorText,
  ErrorCloseButton
} from './AdminUsuarios.styles'

/**
 * Componente principal para gestão de usuários
 * Permite listagem, criação, edição e exclusão de usuários
 */
const AdminUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState<string>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  /**
   * Carrega a lista de usuários
   */
  const loadUsuarios = async (page = 1, search = '', role = 'all') => {
    try {
      setLoading(true)
      // TODO: Implementar chamada real para a API
      // const response = await fetch(`/api/admin/usuarios?page=${page}&search=${search}&role=${role}`)
      // const data: AdminPaginatedResponse<AdminUser> = await response.json()
      console.log(page)
      // Dados mockados temporariamente
      const mockUsuarios: AdminUser[] = [
        {
          id: 1,
          nome: 'João Silva',
          email: 'joao@email.com',
          role: 'admin',
          ativo: true,
          createdAt: '2024-01-15T10:30:00Z',
          updatedAt: '2024-01-20T14:45:00Z'
        },
        {
          id: 2,
          nome: 'Maria Santos',
          email: 'maria@email.com',
          role: 'user',
          ativo: true,
          createdAt: '2024-01-10T08:20:00Z',
          updatedAt: '2024-01-18T16:30:00Z'
        },
        {
          id: 3,
          nome: 'Pedro Costa',
          email: 'pedro@email.com',
          role: 'viewer',
          ativo: false,
          createdAt: '2024-01-05T14:15:00Z',
          updatedAt: '2024-01-15T10:20:00Z'
        }
      ]

      // Filtrar por busca e role
      let filteredUsers = mockUsuarios
      if (search) {
        filteredUsers = filteredUsers.filter(user =>
          user.nome.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
        )
      }
      if (role !== 'all') {
        filteredUsers = filteredUsers.filter(user => user.role === role)
      }

      setUsuarios(filteredUsers)
      setTotalPages(Math.ceil(filteredUsers.length / 10))
    } catch (err) {
      setError('Erro ao carregar usuários')
      console.error('Erro ao carregar usuários:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * Carrega usuários na inicialização e quando filtros mudam
   */
  useEffect(() => {
    loadUsuarios(currentPage, searchTerm, selectedRole)
  }, [currentPage, searchTerm, selectedRole])

  /**
   * Abre modal para criar novo usuário
   */
  const handleCreateUser = () => {
    setEditingUser(null)
    setShowModal(true)
  }

  /**
   * Abre modal para editar usuário
   */
  const handleEditUser = (user: AdminUser) => {
    setEditingUser(user)
    setShowModal(true)
  }

  /**
   * Exclui usuário
   */
  const handleDeleteUser = async (userId: number) => {
    if (!confirm('Tem certeza que deseja excluir este usuário?')) return

    try {
      // TODO: Implementar chamada real para a API
      // await fetch(`/api/admin/usuarios/${userId}`, { method: 'DELETE' })

      setUsuarios(usuarios.filter(user => user.id !== userId))
    } catch (err) {
      console.error('Erro ao excluir usuário:', err)
      alert('Erro ao excluir usuário')
    }
  }

  /**
   * Alterna status ativo/inativo do usuário
   */
  const handleToggleUserStatus = async (userId: number) => {
    try {
      // TODO: Implementar chamada real para a API
      // await fetch(`/api/admin/usuarios/${userId}/toggle-status`, { method: 'PATCH' })

      setUsuarios(usuarios.map(user =>
        user.id === userId ? { ...user, ativo: !user.ativo } : user
      ))
    } catch (err) {
      console.error('Erro ao alterar status do usuário:', err)
      alert('Erro ao alterar status do usuário')
    }
  }

  /**
   * Seleciona/deseleciona usuário
   */
  const handleSelectUser = (userId: number) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  /**
   * Seleciona/deseleciona todos os usuários
   */
  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === usuarios.length
        ? []
        : usuarios.map(user => user.id)
    )
  }

  /**
   * Exclui usuários selecionados
   */
  const handleDeleteSelected = async () => {
    if (selectedUsers.length === 0) return
    if (!confirm(`Tem certeza que deseja excluir ${selectedUsers.length} usuário(s)?`)) return

    try {
      // TODO: Implementar chamada real para a API
      // await Promise.all(selectedUsers.map(id => 
      //   fetch(`/api/admin/usuarios/${id}`, { method: 'DELETE' })
      // ))

      setUsuarios(usuarios.filter(user => !selectedUsers.includes(user.id)))
      setSelectedUsers([])
    } catch (err) {
      console.error('Erro ao excluir usuários:', err)
      alert('Erro ao excluir usuários')
    }
  }

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <LoadingItem width="header" />
          <LoadingItem width="search" />
          {[...Array(5)].map((_, i) => (
            <LoadingItem key={i} />
          ))}
        </LoadingContent>
      </LoadingContainer>
    )
  }

  return (
    <Container>
      {/* Header */}
      <Header>
        <HeaderContent>
          <Title>Usuários</Title>
          <Subtitle>Gerencie os usuários do sistema</Subtitle>
        </HeaderContent>
        <CreateButton onClick={handleCreateUser}>
          Novo Usuário
        </CreateButton>
      </Header>

      {/* Filtros e Busca */}
      <UserFilters
        searchTerm={searchTerm}
        selectedRole={selectedRole}
        onSearchChange={setSearchTerm}
        onRoleChange={setSelectedRole}
      />

      {/* Ações em Lote */}
      <UserActions
        selectedCount={selectedUsers.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Tabela de Usuários */}
      <UserTable
        usuarios={usuarios}
        selectedUsers={selectedUsers}
        currentPage={currentPage}
        totalPages={totalPages}
        onSelectUser={handleSelectUser}
        onSelectAll={handleSelectAll}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
        onToggleUserStatus={handleToggleUserStatus}
        onPageChange={setCurrentPage}
      />

      {/* Modal de Usuário */}
      <AnimatePresence>
        {showModal && (
          <UserModal
            user={editingUser}
            onClose={() => setShowModal(false)}
            onSave={(user) => {
              if (editingUser) {
                setUsuarios(usuarios.map(u => u.id === user.id ? user : u))
              } else {
                setUsuarios([...usuarios, { ...user }])
              }
              setShowModal(false)
            }}
          />
        )}
      </AnimatePresence>

      {/* Mensagem de erro */}
      {error && (
        <ErrorMessage>
          <ErrorContent>
            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <ErrorText>{error}</ErrorText>
            <ErrorCloseButton
              onClick={() => setError(null)}
            >
              <svg className="w-5 h-5 text-red-400 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </ErrorCloseButton>
          </ErrorContent>
        </ErrorMessage>
      )}
    </Container>
  )
}

export default AdminUsuarios