import React, { useState } from 'react'
import { AdminServico } from '@/types/admin'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalGrid,
  ModalField,
  ModalLabel,
  ModalInput,
  ModalTextarea,
  ModalError,
  ModalCheckboxContainer,
  ModalCheckboxGroup,
  ModalFooter,
  ModalButton
} from './AdminServicos.styles'

/**
 * Props do componente ServiceModal
 */
interface ServiceModalProps {
  servico: AdminServico | null
  onClose: () => void
  onSave: (servico: AdminServico) => void
}

/**
 * Modal para criar/editar serviços
 * Inclui formulário completo com validação
 */
const ServiceModal: React.FC<ServiceModalProps> = ({ servico, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nome: servico?.nome || '',
    descricao: servico?.descricao || '',
    categoria: servico?.categoria || '',
    preco: servico?.preco || 0,
    ativo: servico?.ativo ?? true,
    destaque: servico?.destaque ?? false
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  /**
   * Valida o formulário
   */
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    }

    if (!formData.descricao.trim()) {
      newErrors.descricao = 'Descrição é obrigatória'
    }

    if (!formData.categoria.trim()) {
      newErrors.categoria = 'Categoria é obrigatória'
    }

    if (formData.preco <= 0) {
      newErrors.preco = 'Preço deve ser maior que zero'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * Submete o formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // TODO: Implementar chamada real para a API
      const servicoData: AdminServico = {
        id: servico?.id || 0,
        nome: formData.nome.trim(),
        descricao: formData.descricao.trim(),
        categoria: formData.categoria.trim(),
        preco: formData.preco,
        ativo: formData.ativo,
        destaque: formData.destaque,
        createdAt: servico?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      onSave(servicoData)
    } catch (err) {
      console.error('Erro ao salvar serviço:', err)
      alert('Erro ao salvar serviço')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h2 className="text-lg font-medium text-gray-900">
            {servico ? 'Editar Serviço' : 'Novo Serviço'}
          </h2>
        </ModalHeader>

        <ModalBody as="form" onSubmit={handleSubmit}>
          <ModalGrid>
            {/* Nome */}
            <ModalField>
              <ModalLabel htmlFor="nome">
                Nome *
              </ModalLabel>
              <ModalInput
                type="text"
                id="nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className={errors.nome ? 'border-red-300' : ''}
              />
              {errors.nome && (
                <ModalError>{errors.nome}</ModalError>
              )}
            </ModalField>

            {/* Categoria */}
            <ModalField>
              <ModalLabel htmlFor="categoria">
                Categoria *
              </ModalLabel>
              <ModalInput
                type="text"
                id="categoria"
                value={formData.categoria}
                onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                className={errors.categoria ? 'border-red-300' : ''}
              />
              {errors.categoria && (
                <ModalError>{errors.categoria}</ModalError>
              )}
            </ModalField>

            {/* Preço */}
            <ModalField>
              <ModalLabel htmlFor="preco">
                Preço (R$) *
              </ModalLabel>
              <ModalInput
                type="number"
                id="preco"
                min="0"
                step="0.01"
                value={formData.preco}
                onChange={(e) => setFormData({ ...formData, preco: parseFloat(e.target.value) || 0 })}
                className={errors.preco ? 'border-red-300' : ''}
              />
              {errors.preco && (
                <ModalError>{errors.preco}</ModalError>
              )}
            </ModalField>
          </ModalGrid>

          {/* Descrição */}
          <ModalField>
            <ModalLabel htmlFor="descricao">
              Descrição *
            </ModalLabel>
            <ModalTextarea
              id="descricao"
              rows={4}
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              className={errors.descricao ? 'border-red-300' : ''}
            />
            {errors.descricao && (
              <ModalError>{errors.descricao}</ModalError>
            )}
          </ModalField>

          {/* Checkboxes */}
          <ModalCheckboxGroup>
            <ModalCheckboxContainer>
              <input
                type="checkbox"
                id="ativo"
                checked={formData.ativo}
                onChange={(e) => setFormData({ ...formData, ativo: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <ModalLabel htmlFor="ativo" className="ml-2 text-sm text-gray-700">
                Serviço ativo
              </ModalLabel>
            </ModalCheckboxContainer>

            <ModalCheckboxContainer>
              <input
                type="checkbox"
                id="destaque"
                checked={formData.destaque}
                onChange={(e) => setFormData({ ...formData, destaque: e.target.checked })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <ModalLabel htmlFor="destaque" className="ml-2 text-sm text-gray-700">
                Destacar serviço
              </ModalLabel>
            </ModalCheckboxContainer>
          </ModalCheckboxGroup>

          <ModalFooter>
            <ModalButton
              type="button"
              variant="secondary"
              onClick={onClose}
            >
              Cancelar
            </ModalButton>
            <ModalButton
              type="submit"
              variant="primary"
              disabled={loading}
            >
              {loading ? 'Salvando...' : 'Salvar'}
            </ModalButton>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ServiceModal