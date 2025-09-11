import styled from 'styled-components'
import { motion } from 'framer-motion'

/**
 * Container principal da página de login
 * Responsável pelo layout geral e background
 */
export const LoginPageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.default};
  background-image: linear-gradient(135deg, 
    ${({ theme }) => theme.colors.background.default} 0%, 
    ${({ theme }) => theme.colors.background.secondary} 100%);
  padding: 3rem 1rem;

  @media (max-width: 640px) {
    padding: 1.5rem 1rem;
  }
`

/**
 * Container animado do formulário
 * Responsável pela animação e estrutura do card
 */
export const LoginCardContainer = styled(motion.div)`
  max-width: 28rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

/**
 * Header do login com logo e título
 * Responsável pela apresentação visual do topo
 */
export const LoginHeader = styled.div`
  text-align: center;
`

export const LogoContainer = styled(motion.div)`
  margin: 0 auto 1rem;
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`

export const LogoIcon = styled.svg`
  height: 2rem;
  width: 2rem;
  color: white;
`

export const LoginTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
  line-height: 1.2;
`

export const LoginSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1rem;
  line-height: 1.5;
`

/**
 * Formulário principal
 * Responsável pela estrutura e estilo do formulário
 */
export const LoginForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.background.paper || theme.colors.background.default};
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

/**
 * Container de erro geral
 * Responsável pela exibição de mensagens de erro
 */
export const ErrorContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.error?.light || '#fef2f2'};
  border: 1px solid ${({ theme }) => theme.colors.error?.light || '#fecaca'};
  color: ${({ theme }) => theme.colors.error?.main || '#dc2626'};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ErrorIcon = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
  flex-shrink: 0;
`

/**
 * Container dos campos de input
 * Responsável pelo agrupamento dos campos
 */
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

/**
 * Grupo de campo individual
 * Responsável pela estrutura de cada campo
 */
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.25rem;
`

/**
 * Container do input com ícone
 * Responsável pelo posicionamento relativo
 */
export const InputContainer = styled.div`
  position: relative;
`

/**
 * Campo de input estilizado
 * Responsável pela aparência e comportamento do input
 */
interface StyledInputProps {
  hasError?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.75rem;
  padding-right: ${props => props.type === 'password' ? '2.5rem' : '0.75rem'};
  border: 1px solid ${props => props.hasError ? (props.theme.colors.error?.light || '#fca5a5') : props.theme.colors.border.light};
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  background-color: ${props => props.hasError ? (props.theme.colors.error?.light || '#fef2f2') : (props.theme.colors.background.paper || props.theme.colors.background.default)};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.muted};
    cursor: not-allowed;
  }
`

/**
 * Botão de toggle da senha
 * Responsável pela funcionalidade de mostrar/ocultar senha
 */
export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 0 0.75rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.muted};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const PasswordToggleIcon = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
`

/**
 * Mensagem de erro do campo
 * Responsável pela exibição de erros específicos do campo
 */
export const FieldError = styled.p`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.error?.main || '#dc2626'};
`

/**
 * Botão de submit
 * Responsável pela ação de envio do formulário
 */
export const SubmitButton = styled(motion.button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary.main};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.primary.dark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`

/**
 * Container do loading
 * Responsável pela exibição do estado de carregamento
 */
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LoadingSpinner = styled.svg`
  height: 1.25rem;
  width: 1.25rem;
  color: white;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

/**
 * Link de volta
 * Responsável pela navegação de retorno
 */
export const BackLinkContainer = styled.div`
  text-align: center;
`

export const BackLink = styled.button`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary.main};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover:not(:disabled) {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`