import React, { useState } from 'react'
import { AdminUser } from '@/types/admin'
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalField,
  ModalLabel,
  ModalInput,
  ModalSelect,
  ModalCheckboxContainer,
  ModalCheckbox,
  ModalCheckboxLabel,
  ModalFooter,
  ModalButton
} from './AdminUsuarios.styles'

/**
 * Props do componente UserModal
 */
interface UserModalProps {
  user: AdminUser | null
  onClose: () => void
  onSave: (user: AdminUser) => void
}

/**
 * Modal para criar/editar usuário
 * Contém formulário completo para dados do usuário
 */
const UserModal: React.FC<UserModalProps> = ({ user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    nome: user?.nome || '',
    email: user?.email || '',
    role: user?.role || 'user',
    ativo: user?.ativo ?? true
  })
  const [loading, setLoading] = useState(false)

  /**
   * Manipula o envio do formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // TODO: Implementar chamada real para a API
      const userData: AdminUser = {
        id: user?.id || 0,
        nome: formData.nome,
        email: formData.email,
        role: formData.role as 'admin' | 'user' | 'viewer',
        ativo: formData.ativo,
        createdAt: user?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }

      onSave(userData)
    } catch (err) {
      console.error('Erro ao salvar usuário:', err)
      alert('Erro ao salvar usuário')
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
          <ModalTitle>
            {user ? 'Editar Usuário' : 'Novo Usuário'}
          </ModalTitle>
        </ModalHeader>

        <ModalBody onSubmit={handleSubmit}>
          <ModalField>
            <ModalLabel htmlFor="nome">
              Nome
            </ModalLabel>
            <ModalInput
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
          </ModalField>

          <ModalField>
            <ModalLabel htmlFor="email">
              Email
            </ModalLabel>
            <ModalInput
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </ModalField>

          <ModalField>
            <ModalLabel htmlFor="role">
              Função
            </ModalLabel>
            <ModalSelect
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as 'admin' | 'user' | 'viewer' })}
            >
              <option value="user">Usuário</option>
              <option value="admin">Administrador</option>
              <option value="viewer">Visualizador</option>
            </ModalSelect>
          </ModalField>

          <ModalCheckboxContainer>
            <ModalCheckbox
              type="checkbox"
              id="ativo"
              checked={formData.ativo}
              onChange={(e) => setFormData({ ...formData, ativo: e.target.checked })}
            />
            <ModalCheckboxLabel htmlFor="ativo">
              Usuário ativo
            </ModalCheckboxLabel>
          </ModalCheckboxContainer>

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

export default UserModal