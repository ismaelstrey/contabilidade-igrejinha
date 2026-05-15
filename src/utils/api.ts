const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.contabilidadeigrejinha.com.br/api/v1'

export const getApiBaseUrl = (): string => API_BASE_URL

export const getAdminToken = (): string | null => localStorage.getItem('admin_token')

type ApiOptions = {
  auth?: boolean
  method?: string
  headers?: Record<string, string>
  body?: string
}

export async function apiRequest<T>(path: string, options: ApiOptions = {}): Promise<T> {
  const { auth = false, headers, ...requestOptions } = options
  const token = auth ? getAdminToken() : null

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...requestOptions,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message = data?.message || data?.errors?.[0]?.message || 'Erro ao comunicar com a API'
    throw new Error(message)
  }

  return data as T
}
