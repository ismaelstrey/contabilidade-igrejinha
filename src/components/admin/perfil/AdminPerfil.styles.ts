import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../../styles/theme';

// Container principal do perfil
export const PerfilContainer = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  padding: 1.5rem;
  transition: all ${theme.transitions.normal};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Cabeçalho do perfil
export const PerfilHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

// Título do perfil
export const PerfilTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

// Container dos botões de ação
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

// Grid de campos do formulário
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Container de campo individual
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Label dos campos
export const FieldLabel = styled.label`
  display: block;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 0.5rem;
`;

// Input reutilizável com suporte a erro
interface StyledInputProps {
  $hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${({ $hasError, theme }) => 
    $hasError ? theme.colors.error.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  background: ${({ theme }) => theme.colors.background.default};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all ${theme.transitions.normal};

  &:focus {
    outline: none;
    border-color: ${({ $hasError, theme }) => 
      $hasError ? theme.colors.error.main : theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ $hasError, theme }) => 
      $hasError ? `${theme.colors.error.main}20` : `${theme.colors.primary.main}20`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background.muted};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Texto de valor (modo visualização)
export const FieldValue = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.5rem 0;
  margin: 0;
  font-size: ${theme.typography.fontSize.base};
  min-height: 1.5rem;
`;

// Mensagem de erro
export const ErrorMessage = styled.p`
  color: ${theme.colors.error.main};
  font-size: ${theme.typography.fontSize.sm};
  margin: 0.25rem 0 0 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

// Seção de informações adicionais
export const InfoSection = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

// Título da seção
export const SectionTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 1rem 0;
`;

// Badge de status
interface StatusBadgeProps {
  $isActive: boolean;
}

export const StatusBadge = styled.span<StatusBadgeProps>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  border-radius: ${theme.borderRadius.full};
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.success.light : theme.colors.error.light};
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.success.dark : theme.colors.error.dark};
  transition: all ${theme.transitions.normal};
`;

// Container de loading
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16rem;
  flex-direction: column;
  gap: 1rem;
`;

// Texto de loading
export const LoadingText = styled.div`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${theme.typography.fontSize.base};
`;

// Spinner de loading
export const LoadingSpinner = styled.div`
  width: 2rem;
  height: 2rem;
  border: 3px solid ${({ theme }) => theme.colors.border.light};
  border-top: 3px solid ${theme.colors.primary.main};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;