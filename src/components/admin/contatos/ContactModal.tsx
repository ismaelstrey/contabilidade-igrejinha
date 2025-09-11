import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { AdminContato } from '../../../types/admin';
import { FaCheckCircle, FaClock } from 'react-icons/fa';
import { IoAlert } from 'react-icons/io5';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalSection,
  ModalGrid,
  ModalField,
  ModalLabel,
  ModalValue,
  ModalMessageContainer,
  ModalMessage,
  ModalFooter,
  ModalButton
} from './AdminContatos.styles';

/**
 * Interface para as props do componente ContactModal
 */
interface ContactModalProps {
  contato: AdminContato | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Componente para modal de detalhes do contato
 */
const ContactModal: React.FC<ContactModalProps> = ({
  contato,
  isOpen,
  onClose
}) => {
  /**
   * Retorna o ícone do status
   */
  const getStatusIcon = (status: AdminContato['status']) => {
    switch (status) {
      case 'novo': return <IoAlert className="w-4 h-4 text-red-500" />;
      case 'lido': return <FaClock className="w-4 h-4 text-yellow-500" />;
      case 'respondido': return <FaCheckCircle className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  /**
   * Formata a data para exibição
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (!contato) return null;

  return (
    <AnimatePresence>
      {isOpen && (
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
            <ModalBody>
              <ModalHeader>
                <ModalTitle>Detalhes do Contato</ModalTitle>
                <ModalCloseButton onClick={onClose}>
                  ×
                </ModalCloseButton>
              </ModalHeader>

              <ModalSection>
                <ModalGrid>
                  <ModalField>
                    <ModalLabel>Nome</ModalLabel>
                    <ModalValue>{contato.nome}</ModalValue>
                  </ModalField>
                  <ModalField>
                    <ModalLabel>Email</ModalLabel>
                    <ModalValue>{contato.email}</ModalValue>
                  </ModalField>
                  {contato.telefone && (
                    <ModalField>
                      <ModalLabel>Telefone</ModalLabel>
                      <ModalValue>{contato.telefone}</ModalValue>
                    </ModalField>
                  )}
                  <ModalField>
                    <ModalLabel>Status</ModalLabel>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {getStatusIcon(contato.status)}
                      <span style={{
                        marginLeft: '0.5rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        ...(() => {
                          switch (contato.status) {
                            case 'novo': return { backgroundColor: '#fef3c7', color: '#92400e' };
                            case 'lido': return { backgroundColor: '#dbeafe', color: '#1e40af' };
                            case 'respondido': return { backgroundColor: '#d1fae5', color: '#065f46' };
                            default: return { backgroundColor: '#f3f4f6', color: '#374151' };
                          }
                        })()
                      }}>
                        {contato.status.charAt(0).toUpperCase() + contato.status.slice(1)}
                      </span>
                    </div>
                  </ModalField>
                </ModalGrid>

                <ModalField>
                  <ModalLabel>Assunto</ModalLabel>
                  <ModalValue>{contato.assunto}</ModalValue>
                </ModalField>

                <ModalField>
                  <ModalLabel>Mensagem</ModalLabel>
                  <ModalMessageContainer>
                    <ModalMessage>{contato.mensagem}</ModalMessage>
                  </ModalMessageContainer>
                </ModalField>

                <ModalGrid>
                  <ModalField>
                    <ModalLabel>Data do Contato</ModalLabel>
                    <ModalValue>{formatDate(contato?.dataContato || '')}</ModalValue>
                  </ModalField>
                  {contato.dataResposta && (
                    <ModalField>
                      <ModalLabel>Data da Resposta</ModalLabel>
                      <ModalValue>{formatDate(contato.dataResposta)}</ModalValue>
                    </ModalField>
                  )}
                </ModalGrid>
              </ModalSection>

              <ModalFooter>
                <ModalButton $variant='primary' onClick={onClose}>
                  Fechar
                </ModalButton>
              </ModalFooter>
            </ModalBody>
          </ModalContent>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;