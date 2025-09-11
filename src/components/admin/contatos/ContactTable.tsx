import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { AdminContato } from '../../../types/admin';
import { FaCalendar, FaCheckCircle, FaClock, FaEnvelope, FaEye, FaPhone, FaTrash, FaUser } from 'react-icons/fa';
import { IoAlert } from 'react-icons/io5';
import {
  TableContainer,
  TableWrapper,
  Table,
  TableHead,
  TableHeaderRow,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  ContactInfo,
  ContactAvatar,
  ContactDetails,
  ContactName,
  ContactEmail,
  ContactPhone,
  SubjectContainer,
  SubjectTitle,
  SubjectMessage,
  StatusContainer,
  StatusSelect,
  DateContainer,
  DateItem,
  ResponseDate,
  ActionsContainer,
  ActionButton,
  PaginationContainer,
  PaginationMobile,
  PaginationDesktop,
  PaginationInfo,
  PaginationNav,
  PaginationButton,
  Checkbox
} from './AdminContatos.styles';

/**
 * Interface para as props do componente ContactTable
 */
interface ContactTableProps {
  contatos: AdminContato[];
  selectedContatos: number[];
  onSelectAll: (checked: boolean) => void;
  onSelectContact: (id: number, checked: boolean) => void;
  onStatusChange: (id: number, status: AdminContato['status']) => void;
  onDelete: (id: number) => void;
  onViewDetails: (id: number) => void;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

/**
 * Componente para tabela de contatos
 */
const ContactTable: React.FC<ContactTableProps> = ({
  contatos,
  selectedContatos,
  onSelectAll,
  onSelectContact,
  onStatusChange,
  onDelete,
  onViewDetails,
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange
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

  return (
    <TableContainer>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableHeaderRow>
              <TableHeader>
                <Checkbox
                  checked={selectedContatos.length === contatos.length && contatos.length > 0}
                  onChange={(e) => onSelectAll(e.target.checked)}
                />
              </TableHeader>
              <TableHeader>
                Contato
              </TableHeader>
              <TableHeader>
                Assunto
              </TableHeader>
              <TableHeader>
                Status
              </TableHeader>
              <TableHeader>
                Data
              </TableHeader>
              <TableHeader>
                Ações
              </TableHeader>
            </TableHeaderRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {contatos.map((contato) => (
                <TableRow
                  key={contato.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TableCell>
                    <Checkbox
                      checked={selectedContatos.includes(contato.id)}
                      onChange={(e) => onSelectContact(contato.id, e.target.checked)}
                    />
                  </TableCell>
                  <TableCell>
                    <ContactInfo>
                      <ContactAvatar>
                        <FaUser className="w-5 h-5 text-gray-600" />
                      </ContactAvatar>
                      <ContactDetails>
                        <ContactName>{contato.nome}</ContactName>
                        <ContactEmail>
                          <FaEnvelope className="w-4 h-4" />
                          {contato.email}
                        </ContactEmail>
                        {contato.telefone && (
                          <ContactPhone>
                            <FaPhone className="w-4 h-4" />
                            {contato.telefone}
                          </ContactPhone>
                        )}
                      </ContactDetails>
                    </ContactInfo>
                  </TableCell>
                  <TableCell>
                    <SubjectContainer>
                      <SubjectTitle>{contato.assunto}</SubjectTitle>
                      <SubjectMessage>
                        {contato.mensagem}
                      </SubjectMessage>
                    </SubjectContainer>
                  </TableCell>
                  <TableCell>
                    <StatusContainer>
                      {getStatusIcon(contato.status)}
                      <StatusSelect
                        value={contato.status}
                        onChange={(e) => onStatusChange(contato.id, e.target.value as AdminContato['status'])}
                        $status={contato.status}
                      >
                        <option value="novo">Novo</option>
                        <option value="lido">Lido</option>
                        <option value="respondido">Respondido</option>
                      </StatusSelect>
                    </StatusContainer>
                  </TableCell>
                  <TableCell>
                    <DateContainer>
                      <DateItem>
                        <FaCalendar className="w-4 h-4" />
                        {formatDate(contato?.dataContato || '')}
                      </DateItem>
                      {contato.dataResposta && (
                        <ResponseDate>
                          Resp: {formatDate(contato.dataResposta)}
                        </ResponseDate>
                      )}
                    </DateContainer>
                  </TableCell>
                  <TableCell>
                    <ActionsContainer>
                      <ActionButton
                        $variant="view"
                        onClick={() => onViewDetails(contato.id)}
                        title="Ver detalhes"
                      >
                        <FaEye className="w-4 h-4" />
                      </ActionButton>
                      <ActionButton
                        $variant="delete"
                        onClick={() => onDelete(contato.id)}
                        title="Excluir"
                      >
                        <FaTrash className="w-4 h-4" />
                      </ActionButton>
                    </ActionsContainer>
                  </TableCell>
                </TableRow>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableWrapper>

      {/* Paginação */}
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationMobile>
            <PaginationButton
              onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
            >
              Anterior
            </PaginationButton>
            <PaginationButton
              onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Próximo
            </PaginationButton>
          </PaginationMobile>
          <PaginationDesktop>
            <div>
              <PaginationInfo>
                Mostrando <span style={{ fontWeight: 500 }}>{(currentPage - 1) * itemsPerPage + 1}</span> a{' '}
                <span style={{ fontWeight: 500 }}>
                  {Math.min(currentPage * itemsPerPage, totalItems)}
                </span>{' '}
                de <span style={{ fontWeight: 500 }}>{totalItems}</span> resultados
              </PaginationInfo>
            </div>
            <div>
              <PaginationNav>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationButton
                    key={page}
                    onClick={() => onPageChange(page)}
                    $active={page === currentPage}
                  >
                    {page}
                  </PaginationButton>
                ))}
              </PaginationNav>
            </div>
          </PaginationDesktop>
        </PaginationContainer>
      )}
    </TableContainer>
  );
};

export default ContactTable;