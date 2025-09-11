import styled from 'styled-components'
import { motion } from 'framer-motion'

// Container principal
export const Container = styled.div`
  padding: 1.5rem;
  max-width: 100%;
  margin: 0 auto;
`

// Cabeçalho
export const Header = styled.div`
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.p`
  color: #6b7280;
  font-size: 1rem;
`

// Seção de filtros e ações
export const FiltersSection = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto auto;
    align-items: center;
  }
`

export const SearchContainer = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem 0.5rem 2.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

export const CategorySelect = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  background: white;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
`

export const CreateButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: #4f46e5;
  }
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
  }
  
  svg {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`

// Ações em lote
export const BulkActions = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: space-between;
  background: #f3f4f6;
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
`

export const BulkActionsText = styled.span`
  font-size: 0.875rem;
  color: #374151;
`

export const BulkActionsButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const BulkActionButton = styled.button<{ variant?: 'danger' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.variant === 'danger' ? `
    background: #dc2626;
    color: white;
    border: 1px solid #dc2626;
    
    &:hover {
      background: #b91c1c;
    }
  ` : `
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #f9fafb;
    }
  `}
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`

// Loading
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`

export const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid #e5e7eb;
  border-top: 2px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

// Grid de serviços
export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

// Card de serviço
export const ServiceCard = styled(motion.div)<{ selected?: boolean }>`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: all 0.2s;
  border: 2px solid ${props => props.selected ? '#6366f1' : 'transparent'};
  
  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

export const ServiceCardHeader = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const ServiceCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #d1d5db;
  color: #6366f1;
  
  &:focus {
    ring: 2px;
    ring-color: #6366f1;
  }
`

export const ServiceInfo = styled.div`
  flex: 1;
  margin-left: 0.75rem;
`

export const ServiceName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`

export const ServiceCategory = styled.span`
  display: inline-block;
  background: #e0e7ff;
  color: #3730a3;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const ServiceDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
`

export const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #059669;
`

export const ServiceBadges = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const ServiceBadge = styled.span<{ variant: 'active' | 'inactive' | 'featured' | 'destaque' }>`
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: ${props => props.variant === 'active' || props.variant === 'inactive' ? 'pointer' : 'default'};
  transition: all 0.2s;
  
  ${props => {
    switch (props.variant) {
      case 'active':
        return `
          background: #d1fae5;
          color: #065f46;
          
          &:hover {
            background: #a7f3d0;
          }
        `
      case 'inactive':
        return `
          background: #fee2e2;
          color: #991b1b;
          
          &:hover {
            background: #fecaca;
          }
        `
      case 'featured':
      case 'destaque':
        return `
          background: #fef3c7;
          color: #92400e;
          display: inline-flex;
          align-items: center;
          
          svg {
            width: 0.75rem;
            height: 0.75rem;
            margin-right: 0.25rem;
          }
        `
      default:
        return ''
    }
  }}
`

export const ServiceActions = styled.div`
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ServiceActionButton = styled.button<{ variant?: 'danger' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  
  ${props => props.variant === 'danger' ? `
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
    
    &:hover {
      background: #fecaca;
    }
  ` : `
    background: #f3f4f6;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover {
      background: #e5e7eb;
    }
  `}
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
`

// Estado vazio
export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem 0;
  
  svg {
    margin: 0 auto 0.5rem;
    width: 3rem;
    height: 3rem;
    color: #9ca3af;
  }
  
  h3 {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
  }
  
  p {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    color: #6b7280;
  }
`

export const EmptyStateButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s;
  
  &:hover {
    background: #4f46e5;
  }
  
  svg {
    margin-right: 0.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`

// Mensagem de erro
export const ErrorMessage = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: flex-start;
  max-width: 20rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #f87171;
    flex-shrink: 0;
  }
`

export const ErrorMessageContent = styled.div`
  margin-left: 0.75rem;
  
  p {
    font-size: 0.875rem;
    color: #991b1b;
  }
`

export const ErrorMessageClose = styled.button`
  margin-left: auto;
  padding-left: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #f87171;
    transition: color 0.2s;
    
    &:hover {
      color: #dc2626;
    }
  }
`

// Modal
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-width: 42rem;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`

export const ModalHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #111827;
  }
`

export const ModalBody = styled.form`
  padding: 1.5rem;
`

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ModalField = styled.div<{ fullWidth?: boolean }>`
  ${props => props.fullWidth && `
    @media (min-width: 768px) {
      grid-column: span 2;
    }
  `}
`

export const ModalLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;
`

export const ModalInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.hasError ? '#fca5a5' : '#d1d5db'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

export const ModalTextarea = styled.textarea<{ hasError?: boolean }>`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.hasError ? '#fca5a5' : '#d1d5db'};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
    border-color: #6366f1;
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`

export const ModalError = styled.p`
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

export const ModalCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const ModalCheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  
  input {
    width: 1rem;
    height: 1rem;
    border-radius: 0.25rem;
    border: 1px solid #d1d5db;
    color: #6366f1;
    
    &:focus {
      ring: 2px;
      ring-color: #6366f1;
    }
  }
  
  label {
    margin-left: 0.5rem;
    font-size: 0.875rem;
    color: #374151;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
`

export const ModalButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: #6366f1;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${props => props.variant === 'primary' ? `
    background: #6366f1;
    color: white;
    border: 1px solid transparent;
    
    &:hover:not(:disabled) {
      background: #4f46e5;
    }
  ` : `
    background: white;
    color: #374151;
    border: 1px solid #d1d5db;
    
    &:hover:not(:disabled) {
      background: #f9fafb;
    }
  `}
`