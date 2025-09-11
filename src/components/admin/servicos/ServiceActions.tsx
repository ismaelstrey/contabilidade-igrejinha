import React from 'react'
import {
  BulkActions,
  BulkActionsText,
  BulkActionsButtons,
  BulkActionButton
} from './AdminServicos.styles'

/**
 * Props do componente ServiceActions
 */
interface ServiceActionsProps {
  selectedCount: number
  onDeleteSelected: () => void
}

/**
 * Componente para ações em lote de serviços
 * Exibe contagem de selecionados e botão para exclusão em massa
 */
const ServiceActions: React.FC<ServiceActionsProps> = ({
  selectedCount,
  onDeleteSelected
}) => {
  if (selectedCount === 0) {
    return null
  }

  return (
    <BulkActions show={selectedCount > 0}>
      <BulkActionsText>
        {selectedCount} serviço(s) selecionado(s)
      </BulkActionsText>
      <BulkActionsButtons>
        <BulkActionButton onClick={onDeleteSelected}>
          Excluir Selecionados
        </BulkActionButton>
      </BulkActionsButtons>
    </BulkActions>
  )
}

export default ServiceActions