import styled from 'styled-components'
import { motion } from 'framer-motion'

// Container principal
export const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

// Loading
export const LoadingContainer = styled.div`
  padding: 1.5rem;
`

export const LoadingContent = styled.div`
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const LoadingItem = styled.div<{ width?: string }>`
  height: ${props => props.width === 'header' ? '2rem' : props.width === 'search' ? '2.5rem' : '4rem'};
  background-color: #e5e7eb;
  border-radius: 0.5rem;
  width: ${props => props.width === 'header' ? '25%' : '100%'};
`

// Header
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  line-height: 2rem;
`

export const Subtitle = styled.p`
  color: #4b5563;
  margin-top: 0.25rem;
`

export const CreateButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4f46e5;
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #4338ca;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a5b4fc;
  }
`

// Filtros
export const FiltersSection = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  padding: 1rem;
`

export const FiltersGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`

export const SearchContainer = styled.div`
  flex: 1;
  position: relative;
`

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 2.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a5b4fc;
    border-color: #4f46e5;
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  inset-y: 0;
  left: 0;
  padding-left: 0.75rem;
  display: flex;
  align-items: center;
  pointer-events: none;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
  }
`

export const RoleSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  
  @media (min-width: 640px) {
    width: 12rem;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #a5b4fc;
    border-color: #4f46e5;
  }
`

// Ações em lote
export const BatchActions = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eef2ff;
  border-radius: 0.5rem;
  padding: 0.75rem;
`

export const BatchText = styled.span`
  font-size: 0.875rem;
  color: #3730a3;
`

export const BatchDeleteButton = styled.button`
  padding: 0.25rem 0.75rem;
  background-color: #dc2626;
  color: white;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #b91c1c;
  }
`

// Tabela
export const TableContainer = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
  overflow: hidden;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
`

export const TableHead = styled.thead`
  background-color: #f9fafb;
`

export const TableRow = styled(motion.tr)`
  &:hover {
    background-color: #f9fafb;
  }
`

export const TableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const TableCell = styled.td`
  padding: 1.5rem 1.5rem;
  vertical-align: middle;
`

export const TableBody = styled.tbody`
  background-color: white;
  
  tr:not(:last-child) {
    border-bottom: 1px solid #e5e7eb;
  }
`

export const Checkbox = styled.input`
  border-radius: 0.25rem;
  border-color: #d1d5db;
  color: #4f46e5;
  
  &:focus {
    box-shadow: 0 0 0 2px #a5b4fc;
  }
`

// User Info
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`

export const UserAvatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #e0e7ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6366f1;
  }
`

export const UserDetails = styled.div`
  margin-left: 1rem;
`

export const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #111827;
`

export const UserEmail = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`

// Badges
export const RoleBadge = styled.span<{ role: 'admin' | 'user' | 'viewer' }>`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  
  ${props => {
    switch (props.role) {
      case 'admin':
        return `
          background-color: #f3e8ff;
          color: #7c3aed;
        `
      case 'user':
        return `
          background-color: #dbeafe;
          color: #1d4ed8;
        `
      case 'viewer':
        return `
          background-color: #f3f4f6;
          color: #374151;
        `
      default:
        return ''
    }
  }}
`

export const StatusBadge = styled.button<{ active: boolean }>`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  ${props => props.active ? `
    background-color: #d1fae5;
    color: #065f46;
    
    &:hover {
      background-color: #a7f3d0;
    }
  ` : `
    background-color: #fee2e2;
    color: #991b1b;
    
    &:hover {
      background-color: #fecaca;
    }
  `}
`

// Actions
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ActionButton = styled.button<{ variant?: 'edit' | 'delete' }>`
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.2s;
  
  ${props => props.variant === 'delete' ? `
    color: #dc2626;
    
    &:hover {
      color: #991b1b;
    }
  ` : `
    color: #6366f1;
    
    &:hover {
      color: #4338ca;
    }
  `}
`

// Paginação
export const PaginationContainer = styled.div`
  background-color: white;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  
  @media (min-width: 640px) {
    padding: 0.75rem 1.5rem;
  }
`

export const PaginationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PaginationMobile = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 640px) {
    display: none;
  }
`

export const PaginationDesktop = styled.div`
  display: none;
  
  @media (min-width: 640px) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const PaginationButton = styled.button<{ active?: boolean; variant?: 'nav' | 'default' | 'active' }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  ${props => {
    if (props.variant === 'nav') {
      return `
        padding: 0.5rem;
        color: #6b7280;
        background-color: white;

        &:first-child {
          border-top-left-radius: 0.375rem;
          border-bottom-left-radius: 0.375rem;
        }

        &:last-child {
          border-top-right-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }

        &:hover:not(:disabled) {
          background-color: #f9fafb;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `;
    }

    if (props.active || props.variant === 'active') {
      return `
        z-index: 10;
        background-color: #eef2ff;
        border-color: #6366f1;
        color: #6366f1;
      `;
    }

    return `
      background-color: white;
      border-color: #d1d5db;
      color: #6b7280;

      &:hover {
        background-color: #f9fafb;
      }
    `;
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PaginationNav = styled.nav`
  position: relative;
  z-index: 0;
  display: inline-flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  button:not(:last-child) {
    margin-right: -1px;
  }
`

export const PaginationInfo = styled.p`
  font-size: 0.875rem;
  color: #374151;
  
  span {
    font-weight: 500;
  }
`

// Modal Components
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
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 28rem;
  width: 100%;
`;

export const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #111827;
  margin: 0;
`;

export const ModalBody = styled.form`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
`;

export const ModalSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: white;
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
`;

export const ModalCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ModalCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  color: #6366f1;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;

  &:focus {
    ring: 2px;
    ring-color: #6366f1;
  }
`;

export const ModalCheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: #374151;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding-top: 1rem;
`;

export const ModalButton = styled.button<{ variant: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s;
  cursor: pointer;

  ${props => props.variant === 'primary' ? `
    color: white;
    background-color: #6366f1;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: #5855eb;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  ` : `
    color: #374151;
    background-color: white;
    border: 1px solid #d1d5db;

    &:hover {
      background-color: #f9fafb;
    }
  `}

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
  }
`;

// Error Message
export const ErrorMessage = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`;

export const ErrorContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ErrorText = styled.p`
  font-size: 0.875rem;
  color: #991b1b;
  margin: 0;
`;

export const ErrorCloseButton = styled.button`
  margin-left: auto;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #dc2626;
  transition: color 0.2s;

  &:hover {
    color: #991b1b;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;