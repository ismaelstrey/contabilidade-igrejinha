import React from 'react';
import {
  BulkActionsContainer,
  BulkActionsContent,
  BulkActionsText,
  BulkActionsButtons,
  BulkActionButton
} from './AdminContatos.styles';

/**
 * Interface para as props do componente ContactActions
 */
interface ContactActionsProps {
  selectedCount: number;
  onMarkAsRead: () => void;
  onMarkAsResponded: () => void;
  onDelete: () => void;
}

/**
 * Componente para ações em lote de contatos
 */
const ContactActions: React.FC<ContactActionsProps> = ({
  selectedCount,
  onMarkAsRead,
  onMarkAsResponded,
  onDelete
}) => {
  if (selectedCount === 0) return null;

  return (
    <BulkActionsContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <BulkActionsContent>
        <BulkActionsText>
          {selectedCount} contato(s) selecionado(s)
        </BulkActionsText>
        <BulkActionsButtons>
          <BulkActionButton
            $variant="read"
            onClick={onMarkAsRead}
          >
            Marcar como Lido
          </BulkActionButton>
          <BulkActionButton
            $variant="responded"
            onClick={onMarkAsResponded}
          >
            Marcar como Respondido
          </BulkActionButton>
          <BulkActionButton
            $variant="delete"
            onClick={onDelete}
          >
            Excluir
          </BulkActionButton>
        </BulkActionsButtons>
      </BulkActionsContent>
    </BulkActionsContainer>
  );
};

export default ContactActions;