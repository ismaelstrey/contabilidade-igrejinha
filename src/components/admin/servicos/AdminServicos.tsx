import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AdminServico } from '@/types/admin'
import ServiceFilters from './ServiceFilters'
import ServiceActions from './ServiceActions'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import {
  Container,
  Header,
  Title,
  Subtitle,
  CreateButton,
  ServicesGrid,
  EmptyState,
  EmptyStateButton,
  ErrorMessage,
  ErrorMessageContent,
  ErrorMessageClose
} from './AdminServicos.styles'

/**
 * Componente principal para gestão de serviços
 * Permite listagem, criação, edição e exclusão de serviços
 */
const AdminServicos: React.FC = () => {
  const [servicos, setServicos] = useState<AdminServico[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showModal, setShowModal] = useState(false)
  const [editingServico, setEditingServico] = useState<AdminServico | null>(null)
  const [selectedServicos, setSelectedServicos] = useState<number[]>([])

  /**
   * Carrega a lista de serviços
   */
  const loadServicos = async () => {
    try {
      setLoading(true)
      // TODO: Implementar chamada real para a API
      // const response = await fetch('/api/admin/servicos')
      // const data: AdminServico[] = await response.json()

      // Dados mockados temporariamente
      const mockServicos: AdminServico[] = [
        {
          id: 1,
          nome: 'Consultoria Fiscal',
          descricao: 'Consultoria especializada em questões fiscais e tributárias para empresas',
          categoria: 'Consultoria',
          preco: 500.00,
          ativo: true,
          destaque: true,
          createdAt: '2024-01-15T10:30:00Z',
          updatedAt: '2024-01-20T14:45:00Z'
        },
        {
          id: 2,
          nome: 'Contabilidade Empresarial',
          descricao: 'Serviços completos de contabilidade para pequenas e médias empresas',
          categoria: 'Contabilidade',
          preco: 800.00,
          ativo: true,
          destaque: false,
          createdAt: '2024-01-10T08:20:00Z',
          updatedAt: '2024-01-18T16:30:00Z'
        },
        {
          id: 3,
          nome: 'Declaração de Imposto de Renda',
          descricao: 'Elaboração e entrega da declaração de imposto de renda pessoa física',
          categoria: 'Declarações',
          preco: 150.00,
          ativo: true,
          destaque: true,
          createdAt: '2024-01-05T14:15:00Z',
          updatedAt: '2024-01-15T10:20:00Z'
        },
        {
          id: 4,
          nome: 'Abertura de Empresa',
          descricao: 'Processo completo de abertura de empresa com toda documentação necessária',
          categoria: 'Empresarial',
          preco: 1200.00,
          ativo: false,
          destaque: false,
          createdAt: '2024-01-01T12:00:00Z',
          updatedAt: '2024-01-10T09:30:00Z'
        }
      ]

      // Filtrar por busca e categoria
      let filteredServicos = mockServicos
      if (searchTerm) {
        filteredServicos = filteredServicos.filter(servico =>
          servico.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          servico.descricao.toLowerCase().includes(searchTerm.toLowerCase())
        )
      }
      if (selectedCategory !== 'all') {
        filteredServicos = filteredServicos.filter(servico => servico.categoria === selectedCategory)
      }

      setServicos(filteredServicos)
    } catch (err) {
      setError('Erro ao carregar serviços')
      console.error('Erro ao carregar serviços:', err)
    } finally {
      setLoading(false)
    }
  }

  /**
   * Carrega serviços na inicialização e quando filtros mudam
   */
  useEffect(() => {
    loadServicos()
  }, [searchTerm, selectedCategory])

  /**
   * Abre modal para criar novo serviço
   */
  const handleCreateServico = () => {
    setEditingServico(null)
    setShowModal(true)
  }

  /**
   * Abre modal para editar serviço
   */
  const handleEditServico = (servico: AdminServico) => {
    setEditingServico(servico)
    setShowModal(true)
  }

  /**
   * Exclui serviço
   */
  const handleDeleteServico = async (servicoId: number) => {
    if (!confirm('Tem certeza que deseja excluir este serviço?')) return

    try {
      // TODO: Implementar chamada real para a API
      // await fetch(`/api/admin/servicos/${servicoId}`, { method: 'DELETE' })

      setServicos(servicos.filter(servico => servico.id !== servicoId))
    } catch (err) {
      console.error('Erro ao excluir serviço:', err)
      alert('Erro ao excluir serviço')
    }
  }

  /**
   * Alterna status ativo/inativo do serviço
   */
  const handleToggleServicoStatus = async (servicoId: number) => {
    try {
      // TODO: Implementar chamada real para a API
      // await fetch(`/api/admin/servicos/${servicoId}/toggle-status`, { method: 'PATCH' })

      setServicos(servicos.map(servico =>
        servico.id === servicoId ? { ...servico, ativo: !servico.ativo } : servico
      ))
    } catch (err) {
      console.error('Erro ao alterar status do serviço:', err)
      alert('Erro ao alterar status do serviço')
    }
  }

  /**
   * Alterna destaque do serviço
   */
  const handleToggleDestaque = async (servicoId: number) => {
    try {
      // TODO: Implementar chamada real para a API
      // await fetch(`/api/admin/servicos/${servicoId}/toggle-destaque`, { method: 'PATCH' })

      setServicos(servicos.map(servico =>
        servico.id === servicoId ? { ...servico, destaque: !servico.destaque } : servico
      ))
    } catch (err) {
      console.error('Erro ao alterar destaque do serviço:', err)
      alert('Erro ao alterar destaque do serviço')
    }
  }

  /**
   * Seleciona/deseleciona serviço
   */
  const handleSelectServico = (servicoId: number) => {
    setSelectedServicos(prev =>
      prev.includes(servicoId)
        ? prev.filter(id => id !== servicoId)
        : [...prev, servicoId]
    )
  }

  /**
   * Seleciona/deseleciona todos os serviços
   */
  // const handleSelectAll = () => {
  //   setSelectedServicos(
  //     selectedServicos.length === servicos.length
  //       ? []
  //       : servicos.map(servico => servico.id)
  //   )
  // }

  /**
   * Exclui serviços selecionados
   */
  const handleDeleteSelected = async () => {
    if (selectedServicos.length === 0) return
    if (!confirm(`Tem certeza que deseja excluir ${selectedServicos.length} serviço(s)?`)) return

    try {
      // TODO: Implementar chamada real para a API
      // await Promise.all(selectedServicos.map(id => 
      //   fetch(`/api/admin/servicos/${id}`, { method: 'DELETE' })
      // ))

      setServicos(servicos.filter(servico => !selectedServicos.includes(servico.id)))
      setSelectedServicos([])
    } catch (err) {
      console.error('Erro ao excluir serviços:', err)
      alert('Erro ao excluir serviços')
    }
  }

  /**
   * Obtém categorias únicas
   */
  const categorias = Array.from(new Set(servicos.map(s => s.categoria)))

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Container>
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-48 bg-gray-200 rounded-lg"></div>
              ))}
            </Container>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Container>
      {/* Header */}
      <Header>
        <div>
          <Title>Serviços</Title>
          <Subtitle>Gerencie os serviços oferecidos</Subtitle>
        </div>
        <CreateButton onClick={handleCreateServico}>
          Novo Serviço
        </CreateButton>
      </Header>

      {/* Filtros e Busca */}
      <ServiceFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categorias={categorias}
      />

      {/* Ações em Lote */}
      <ServiceActions
        selectedCount={selectedServicos.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Grid de Serviços */}
      <ServicesGrid>
        <AnimatePresence>
          {servicos.map((servico) => (
            <ServiceCard
              key={servico.id}
              servico={servico}
              isSelected={selectedServicos.includes(servico.id)}
              onSelect={handleSelectServico}
              onEdit={handleEditServico}
              onDelete={handleDeleteServico}
              onToggleStatus={handleToggleServicoStatus}
              onToggleDestaque={handleToggleDestaque}
            />
          ))}
        </AnimatePresence>
      </ServicesGrid>

      {/* Mensagem quando não há serviços */}
      {servicos.length === 0 && !loading && (
        <EmptyState>
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum serviço encontrado</h3>
          <p className="mt-1 text-sm text-gray-500">
            {searchTerm || selectedCategory !== 'all'
              ? 'Tente ajustar os filtros de busca.'
              : 'Comece criando seu primeiro serviço.'
            }
          </p>
          {(!searchTerm && selectedCategory === 'all') && (
            <div className="mt-6">
              <EmptyStateButton onClick={handleCreateServico}>
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Novo Serviço
              </EmptyStateButton>
            </div>
          )}
        </EmptyState>
      )}

      {/* Modal de Serviço */}
      <AnimatePresence>
        {showModal && (
          <ServiceModal
            servico={editingServico}
            onClose={() => setShowModal(false)}
            onSave={(servico) => {
              if (editingServico) {
                setServicos(servicos.map(s => s.id === servico.id ? servico : s))
              } else {
                setServicos([...servicos, { ...servico }])
              }
              setShowModal(false)
            }}
          />
        )}
      </AnimatePresence>

      {/* Mensagem de erro */}
      {error && (
        <ErrorMessage>
          <ErrorMessageContent>
            <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <div className="ml-3">
              <p className="text-sm text-red-800">{error}</p>
            </div>
            <ErrorMessageClose onClick={() => setError(null)}>
              <svg className="w-5 h-5 text-red-400 hover:text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </ErrorMessageClose>
          </ErrorMessageContent>
        </ErrorMessage>
      )}
    </Container>
  )
}

export default AdminServicos