import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container principal
export const ContatosContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 100vh;
  background-color: #f8fafc;
`;

// Header
export const ContatosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ContatosTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
`;

export const ContatosStats = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StatCard = styled.div`
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StatNumber = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  color: #1f2937;
`;

export const StatLabel = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Filtros
export const FiltersContainer = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

export const FiltersContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const FiltersActions = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const FilterSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  cursor: pointer;
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }
`;

// Ações em lote
export const BulkActionsContainer = styled(motion.div)`
  background-color: #eff6ff;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #bfdbfe;
`;

export const BulkActionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BulkActionsText = styled.span`
  color: #1e40af;
  font-weight: 500;
`;

export const BulkActionsButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BulkActionButton = styled.button<{ $variant: 'read' | 'responded' | 'delete' }>`
  padding: 0.25rem 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  color: white;

  ${props => {
    switch (props.$variant) {
      case 'read':
        return `
          background-color: #d97706;
          &:hover { background-color: #b45309; }
        `;
      case 'responded':
        return `
          background-color: #059669;
          &:hover { background-color: #047857; }
        `;
      case 'delete':
        return `
          background-color: #dc2626;
          &:hover { background-color: #b91c1c; }
        `;
      default:
        return '';
    }
  }}
`;

// Tabela
export const TableContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #f9fafb;
`;

export const TableHeaderRow = styled.tr``;

export const TableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TableBody = styled.tbody`
  background: white;
  divide-y: 1px solid #e5e7eb;
`;

export const TableRow = styled(motion.tr)`
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }
`;

export const TableCell = styled.td`
  padding: 1rem 1.5rem;
  vertical-align: top;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactAvatar = styled.div`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactDetails = styled.div`
  margin-left: 1rem;
`;

export const ContactName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`;

export const ContactEmail = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ContactPhone = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const SubjectContainer = styled.div``;

export const SubjectTitle = styled.div`
  font-size: 0.875rem;
  color: #111827;
  margin-bottom: 0.25rem;
`;

export const SubjectMessage = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  max-width: 20rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatusSelect = styled.select<{ $status: string }>`
  margin-left: 0.5rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  
  ${props => {
    switch (props.$status) {
      case 'novo':
        return `
          background-color: #fef3c7;
          color: #92400e;
        `;
      case 'lido':
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `;
      case 'respondido':
        return `
          background-color: #d1fae5;
          color: #065f46;
        `;
      default:
        return `
          background-color: #f3f4f6;
          color: #374151;
        `;
    }
  }}
`;

export const DateContainer = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const DateItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ResponseDate = styled.div`
  font-size: 0.75rem;
  color: #059669;
  margin-top: 0.25rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ActionButton = styled.button<{ $variant: 'view' | 'delete' }>`
  padding: 0.25rem;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => {
    switch (props.$variant) {
      case 'view':
        return `
          color: #2563eb;
          &:hover { color: #1d4ed8; }
        `;
      case 'delete':
        return `
          color: #dc2626;
          &:hover { color: #b91c1c; }
        `;
      default:
        return '';
    }
  }}
`;

// Paginação
export const PaginationContainer = styled.div`
  background: white;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
`;

export const PaginationMobile = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const PaginationDesktop = styled.div`
  display: none;

  @media (min-width: 640px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const PaginationInfo = styled.p`
  font-size: 0.875rem;
  color: #374151;
  margin: 0;
`;

export const PaginationNav = styled.nav`
  position: relative;
  z-index: 0;
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-left: -1px;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.$active ? `
    z-index: 10;
    background-color: #eff6ff;
    border-color: #3b82f6;
    color: #2563eb;
  ` : `
    background-color: white;
    color: #6b7280;
    
    &:hover:not(:disabled) {
      background-color: #f9fafb;
    }
  `}
`;

// Modal
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 12px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

export const ModalCloseButton = styled.button`
  color: #9ca3af;
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #4b5563;
  }
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`;

export const ModalValue = styled.p`
  color: #111827;
  margin: 0;
`;

export const ModalMessageContainer = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 8px;
`;

export const ModalMessage = styled.p`
  color: #111827;
  white-space: pre-wrap;
  margin: 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

export const ModalButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;

  ${props => props.$variant === 'primary' ? `
    background-color: #059669;
    color: white;
    border: none;

    &:hover {
      background-color: #047857;
    }
  ` : `
    background-color: white;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background-color: #f9fafb;
    }
  `}
`;



// Mensagem de erro
export const ErrorContainer = styled(motion.div)`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const ErrorContent = styled.div`
  display: flex;
  align-items: center;
`;

export const ErrorText = styled.span`
  color: #b91c1c;
  margin-left: 0.5rem;
`;

export const ErrorCloseButton = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  color: #dc2626;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #b91c1c;
  }
`;

// Checkbox personalizado
export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  color: #2563eb;
  
  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
  }
`;