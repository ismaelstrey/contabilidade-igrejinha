import styled from 'styled-components'

/**
 * Container da página de login
 * Responsável pelo layout principal e estado de loading
 */
export const LoginPageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`

/**
 * Container de loading
 * Responsável pela exibição do estado de carregamento
 */
export const LoadingWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`

export const LoadingText = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 500;
`