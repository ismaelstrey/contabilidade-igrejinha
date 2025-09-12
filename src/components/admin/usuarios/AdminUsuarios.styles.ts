import styled, { DefaultTheme } from 'styled-components'
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
  background-color: ${({ theme }) => theme.colors.border.light};
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
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 2rem;
`

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 0.25rem;
`

export const CreateButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary?.main || '#4f46e5'};
  color: white;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary?.dark || '#4338ca'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary?.light || '#a5b4fc'};
  }
`

// Filtros
export const FiltersSection = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
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
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary?.light || '#a5b4fc'};
    border-color: ${({ theme }) => theme.colors.primary?.main || '#4f46e5'};
  }
`

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 1;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }
`

export const RoleSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};

  @media (min-width: 640px) {
    width: 12rem;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary?.light || '#a5b4fc'};
    border-color: ${({ theme }) => theme.colors.primary?.main || '#4f46e5'};
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
  color: ${({ theme }) => theme.colors.primary?.dark || '#3730a3'};
`

export const BatchDeleteButton = styled.button`
  padding: 0.25rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.error?.main || '#dc2626'};
  color: white;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.error?.dark || '#b91c1c'};
  }
`

// Tabela
export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default});
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  overflow: hidden;
`

export const TableWrapper = styled.div`
  overflow-x: auto;
`

export const Table = styled.table`
  width: 100%;
`

export const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.background.secondary};
`

export const TableRow = styled(motion.tr)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`

export const TableHeader = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`

export const TableCell = styled.td`
  padding: 1.5rem 1.5rem;
  vertical-align: middle;
`

export const TableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};

  tr:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  }
`

export const Checkbox = styled.input`
  border-radius: 0.25rem;
  border-color: ${({ theme }) => theme.colors.border.light};
  color: ${({ theme }) => theme.colors.primary?.main || '#4f46e5'};

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary?.light || '#a5b4fc'};
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
    color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  }
`

export const UserDetails = styled.div`
  margin-left: 1rem;
`

export const UserName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const UserEmail = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`

// Badges
const getRoleColors = (role: 'admin' | 'user' | 'viewer', theme: DefaultTheme) => {
  switch (role) {
    case 'admin':
      return `
        background-color: ${theme.colors.warning?.background || '#fef3c7'};
        color: ${theme.colors.warning?.dark || '#92400e'};
      `
    case 'user':
      return `
        background-color: ${theme.colors.primary?.background || '#dbeafe'};
        color: ${theme.colors.primary?.dark || '#1e40af'};
      `
    case 'viewer':
      return `
        background-color: ${theme.colors.background.secondary};
        color: ${theme.colors.text.secondary};
      `
    default:
      return `
        background-color: ${theme.colors.background.muted || '#f3f4f6'};
        color: ${theme.colors.text.muted};
      `
  }
}

export const RoleBadge = styled.span<{ role: 'admin' | 'user' | 'viewer' }>`
  display: inline-flex;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;

  ${props => getRoleColors(props.role, props.theme)}
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
    background-color: ${props.theme.colors.success?.background || '#d1fae5'};
    color: ${props.theme.colors.success?.dark || '#065f46'};

    &:hover {
      background-color: ${props.theme.colors.success?.light || '#a7f3d0'};
    }
  ` : `
    background-color: ${props.theme.colors.error?.main || '#fee2e2'};
    color: ${props.theme.colors.error?.dark || '#991b1b'};

    &:hover {
      background-color: ${props.theme.colors.error?.light || '#fecaca'};
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
    color: ${props.theme.colors.error?.main || '#dc2626'};

    &:hover {
      color: ${props.theme.colors.error?.dark || '#991b1b'};
    }
  ` : `
    color: ${props.theme.colors.primary?.main || '#6366f1'};

    &:hover {
      color: ${props.theme.colors.primary?.dark || '#4338ca'};
    }
  `}
`

// Paginação
export const PaginationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  padding: 0.75rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};

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
  color: ${({ theme }) => theme.colors.text.secondary};

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
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  border-radius: 0.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  max-width: 28rem;
  width: 100%;
`;

export const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
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
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.25rem;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
    border-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  }
`;

export const ModalSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
    border-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
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
  color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.25rem;

  &:focus {
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  }
`;

export const ModalCheckboxLabel = styled.label`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
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
    background-color: ${props.theme.colors.primary?.main || '#6366f1'};
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.primary?.dark || '#5855eb'};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  ` : `
    color: ${props.theme.colors.text.secondary};
    background-color: ${props.theme.colors.background.paper || 'white'};
    border: 1px solid ${props.theme.colors.border.light};

    &:hover {
      background-color: ${props.theme.colors.background.secondary};
    }
  `}

  &:focus {
    outline: none;
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary?.main || '#6366f1'};
  }
`;

// Error Message
export const ErrorMessage = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.colors.error?.main || '#fef2f2'};
  border: 1px solid ${({ theme }) => theme.colors.error?.dark || '#fecaca'};
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
  color: ${({ theme }) => theme.colors.error?.dark || '#991b1b'};
  margin: 0;
`;

export const ErrorCloseButton = styled.button`
  margin-left: auto;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.error?.main || '#dc2626'};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.error?.dark || '#991b1b'};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;