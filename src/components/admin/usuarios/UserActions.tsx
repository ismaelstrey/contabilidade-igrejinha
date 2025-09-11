import React from 'react'
import {
  BatchActions,
  BatchText,
  BatchDeleteButton
} from './AdminUsuarios.styles'

/**
 * Props do componente UserActions
 */
interface UserActionsProps {
  selectedCount: number
  onDeleteSelected: () => void
}

/**
 * Componente para ações em lote de usuários
 * Exibe contador de selecionados e botão de exclusão
 */
const UserActions: React.FC<UserActionsProps> = ({
  selectedCount,
  onDeleteSelected
}) => {
  if (selectedCount === 0) {
    return null
  }

  return (
    <BatchActions>
      <BatchText>
        {selectedCount} usuário(s) selecionado(s)
      </BatchText>
      <BatchDeleteButton onClick={onDeleteSelected}>
        Excluir Selecionados
      </BatchDeleteButton>
    </BatchActions>
  )
}

export default UserActions