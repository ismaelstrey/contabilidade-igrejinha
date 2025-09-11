import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdminAuth } from '@hooks/admin/useAdminAuth'
import {
  LoginPageContainer,
  LoginCardContainer,
  LoginHeader,
  LogoContainer,
  LogoIcon,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  ErrorContainer,
  ErrorIcon,
  InputsContainer,
  InputGroup,
  InputLabel,
  InputContainer,
  StyledInput,
  PasswordToggleButton,
  PasswordToggleIcon,
  FieldError,
  SubmitButton,
  LoadingContainer,
  LoadingSpinner,
  BackLinkContainer,
  BackLink
} from './AdminLogin.styles'

/**
 * Componente de login administrativo
 * Fornece formulário de autenticação para área administrativa
 */
const AdminLogin: React.FC = () => {
  const navigate = useNavigate()
  const { login, isLoading, error, clearError, isAuthenticated } = useAdminAuth()
  
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [formErrors, setFormErrors] = useState<{ email?: string; senha?: string }>({})

  /**
   * Redireciona se já estiver autenticado
   */
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard', { replace: true })
    }
  }, [isAuthenticated, navigate])

  /**
   * Limpa erros quando o usuário começa a digitar
   */
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, clearError])

  /**
   * Valida os campos do formulário
   */
  const validateForm = (): boolean => {
    const errors: { email?: string; senha?: string } = {}

    // Validação do email
    if (!formData.email.trim()) {
      errors.email = 'Email é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Email inválido'
    }

    // Validação da senha
    if (!formData.senha.trim()) {
      errors.senha = 'Senha é obrigatória'
    } else if (formData.senha.length < 6) {
      errors.senha = 'Senha deve ter pelo menos 6 caracteres'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  /**
   * Manipula mudanças nos campos do formulário
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Limpa erro do campo quando usuário digita
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }))
    }
    
    // Limpa erro geral
    if (error) {
      clearError()
    }
  }

  /**
   * Manipula envio do formulário
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    const success = await login(formData.email, formData.senha)
    
    if (success) {
      navigate('/admin/dashboard', { replace: true })
    }
  }

  return (
    <LoginPageContainer>
      <LoginCardContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <LoginHeader>
          <LogoContainer
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <LogoIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </LogoIcon>
          </LogoContainer>
          <LoginTitle>
            Área Administrativa
          </LoginTitle>
          <LoginSubtitle>
            Faça login para acessar o painel administrativo
          </LoginSubtitle>
        </LoginHeader>

        {/* Formulário */}
        <LoginForm
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          {/* Erro geral */}
          {error && (
            <ErrorContainer
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <ErrorIcon fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </ErrorIcon>
              {error}
            </ErrorContainer>
          )}

          <InputsContainer>
            {/* Campo Email */}
            <InputGroup>
              <InputLabel htmlFor="email">
                Email
              </InputLabel>
              <StyledInput
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                hasError={!!formErrors.email}
                placeholder="seu@email.com"
                disabled={isLoading}
              />
              {formErrors.email && (
                <FieldError>{formErrors.email}</FieldError>
              )}
            </InputGroup>

            {/* Campo Senha */}
            <InputGroup>
              <InputLabel htmlFor="senha">
                Senha
              </InputLabel>
              <InputContainer>
                <StyledInput
                  id="senha"
                  name="senha"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.senha}
                  onChange={handleInputChange}
                  hasError={!!formErrors.senha}
                  placeholder="Sua senha"
                  disabled={isLoading}
                />
                <PasswordToggleButton
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <PasswordToggleIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                    </PasswordToggleIcon>
                  ) : (
                    <PasswordToggleIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </PasswordToggleIcon>
                  )}
                </PasswordToggleButton>
              </InputContainer>
              {formErrors.senha && (
                <FieldError>{formErrors.senha}</FieldError>
              )}
            </InputGroup>
          </InputsContainer>

          {/* Botão de Login */}
          <SubmitButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <LoadingContainer>
                <LoadingSpinner xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </LoadingSpinner>
                Entrando...
              </LoadingContainer>
            ) : (
              'Entrar'
            )}
          </SubmitButton>

          {/* Link para voltar */}
          <BackLinkContainer>
            <BackLink
              type="button"
              onClick={() => navigate('/')}
              disabled={isLoading}
            >
              ← Voltar ao site
            </BackLink>
          </BackLinkContainer>
        </LoginForm>
      </LoginCardContainer>
    </LoginPageContainer>
  )
}

export default AdminLogin