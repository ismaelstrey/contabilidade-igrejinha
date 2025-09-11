/// <reference types="../../../vite-env.d.ts" />
import { useState, useEffect, useCallback } from 'react'
import { AdminUser, AdminLoginResponse, ApiResponse } from '../../types/admin'

/**
 * Interface de retorno do hook useAdminAuth
 */
export interface UseAdminAuthReturn {
  user: AdminUser | null
  token: string | null
  login: (email: string, senha: string) => Promise<boolean>
  logout: () => void
  refreshToken: () => Promise<boolean>
  updateProfile: (profileData: Partial<AdminUser>) => Promise<void>
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  clearError: () => void
}

/**
 * Chaves para localStorage
 */
const STORAGE_KEYS = {
  TOKEN: 'admin_token',
  REFRESH_TOKEN: 'admin_refresh_token',
  USER: 'admin_user'
}

/**
 * Função para acessar variáveis de ambiente
 */
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  try {
    return (globalThis as any).import?.meta?.env?.[key] || defaultValue
  } catch {
    return defaultValue
  }
}

/**
 * URL base da API
 */
const API_BASE_URL = getEnvVar('VITE_API_URL', 'https://api.contabilidadeigrejinha.com.br/api/v1')

/**
 * Hook para gerenciar autenticação administrativa
 * Fornece funcionalidades de login, logout, refresh de token e estado de autenticação
 */
export const useAdminAuth = (): UseAdminAuthReturn => {
  const [user, setUser] = useState<AdminUser | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  /**
   * Limpa o erro atual
   */
  const clearError = useCallback(() => {
    setError(null)
  }, [])

  /**
   * Salva dados de autenticação no localStorage
   */
  const saveAuthData = useCallback((authData: { user: AdminUser; token: string; refreshToken: string }) => {
    localStorage.setItem(STORAGE_KEYS.TOKEN, authData.token)
    localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, authData.refreshToken)
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(authData.user))

    setToken(authData.token)
    setUser(authData.user)
  }, [])

  /**
   * Remove dados de autenticação do localStorage
   */
  const clearAuthData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN)
    localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN)
    localStorage.removeItem(STORAGE_KEYS.USER)

    setToken(null)
    setUser(null)
  }, [])

  /**
   * Carrega dados de autenticação do localStorage
   */
  const loadAuthData = useCallback(() => {
    try {
      const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN)
      const storedUser = localStorage.getItem(STORAGE_KEYS.USER)

      if (storedToken && storedUser) {
        setToken(storedToken)
        setUser(JSON.parse(storedUser))
      }
    } catch (error) {
      console.error('Erro ao carregar dados de autenticação:', error)
      clearAuthData()
    }
  }, [clearAuthData])

  /**
   * Realiza login do usuário administrativo
   */
  const login = useCallback(async (email: string, senha: string): Promise<boolean> => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha })
      })

      const data: AdminLoginResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao fazer login')
      }

      if (data.success && data.data) {
        // Verifica se o usuário tem permissão administrativa
        if (!['admin', 'user'].includes(data.data.user.role)) {
          throw new Error('Usuário não possui permissões administrativas')
        }

        saveAuthData(data.data)
        return true
      } else {
        throw new Error(data.message || 'Credenciais inválidas')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao fazer login'
      setError(errorMessage)
      console.error('Erro no login:', error)
      return false
    } finally {
      setIsLoading(false)
    }
  }, [saveAuthData])

  /**
   * Realiza logout do usuário
   */
  const logout = useCallback(() => {
    clearAuthData()
    setError(null)
  }, [clearAuthData])

  /**
   * Renova o token de acesso usando o refresh token
   */
  const refreshToken = useCallback(async (): Promise<boolean> => {
    const storedRefreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN)

    if (!storedRefreshToken) {
      logout()
      return false
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedRefreshToken}`
        }
      })

      const data: ApiResponse<{ token: string; refreshToken: string; user: AdminUser }> = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao renovar token')
      }

      if (data.success && data.data) {
        saveAuthData({
          user: data.data.user,
          token: data.data.token,
          refreshToken: data.data.refreshToken
        })
        return true
      } else {
        throw new Error('Falha ao renovar token')
      }
    } catch (error) {
      console.error('Erro ao renovar token:', error)
      logout()
      return false
    }
  }, [saveAuthData, logout])

  /**
   * Atualiza o perfil do usuário administrativo
   */
  const updateProfile = useCallback(async (profileData: Partial<AdminUser>): Promise<void> => {
    if (!token || !user) {
      throw new Error('Usuário não autenticado')
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}/admin/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileData)
      })

      const data: ApiResponse<AdminUser> = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao atualizar perfil')
      }

      if (data.success && data.data) {
        // Atualiza o usuário no estado e no localStorage
        const updatedUser = { ...user, ...data.data }
        setUser(updatedUser)
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updatedUser))
      } else {
        throw new Error(data.message || 'Falha ao atualizar perfil')
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido ao atualizar perfil'
      setError(errorMessage)
      console.error('Erro ao atualizar perfil:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [token, user])

  /**
   * Verifica se o token ainda é válido
   */
  const validateToken = useCallback(async (): Promise<boolean> => {
    if (!token) return false

    try {
      const response = await fetch(`${API_BASE_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        return true
      } else if (response.status === 401) {
        // Token expirado, tenta renovar
        return await refreshToken()
      } else {
        throw new Error('Token inválido')
      }
    } catch (error) {
      console.error('Erro ao validar token:', error)
      logout()
      return false
    }
  }, [token, refreshToken, logout])

  /**
   * Inicializa o hook carregando dados salvos
   */
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true)
      loadAuthData()

      // Se há token salvo, valida
      const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN)
      if (storedToken) {
        await validateToken()
      }

      setIsLoading(false)
    }

    initAuth()
  }, [loadAuthData, validateToken])

  /**
   * Configura interceptador para renovação automática de token
   */
  useEffect(() => {
    if (!token) return

    const interceptor = setInterval(async () => {
      await validateToken()
    }, 5 * 60 * 1000) // Verifica a cada 5 minutos

    return () => clearInterval(interceptor)
  }, [token, validateToken])

  return {
    user,
    token,
    login,
    logout,
    refreshToken,
    updateProfile,
    isAuthenticated: !!user && !!token,
    isLoading,
    error,
    clearError
  }
}