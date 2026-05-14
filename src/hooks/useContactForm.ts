import { useState, useEffect } from 'react'
import localServices from '@data/services.json'

interface ContactFormData {
    nome: string
    email: string
    telefone: string
    empresa: string
    servico_id: number
    mensagem: string
}

interface Servico {
    id: number
    nome: string
    descricao: string
}

interface ServicosApiResponse {
    success: boolean
    result: Array<{
        id: number
        nome: string
        descricao: string
        preco: number
        ativo: boolean
        created_at: string
        updated_at: string
    }>
    result_info: {
        count: number
        page: number
        per_page: number
        total_count: number
    }
}

interface UseContactFormReturn {
    isSubmitting: boolean
    submitForm: (data: ContactFormData) => Promise<boolean>
    error: string | null
    servicos: Servico[]
    isLoadingServicos: boolean
    servicosError: string | null
}

const fallbackServicos: Servico[] = localServices.map((servico, index) => ({
    id: index + 1,
    nome: servico.title,
    descricao: servico.description
}))

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.contabilidadeigrejinha.com.br/api/v1'

const isLocalDevelopment = (): boolean => {
    if (typeof window === 'undefined') return false

    return ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)
}

/**
 * Hook personalizado para gerenciar o envio do formulário de contato
 * Envia os dados para a API da Contabilidade Igrejinha
 * Também busca a lista de serviços disponíveis
 */
export const useContactForm = (): UseContactFormReturn => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [servicos, setServicos] = useState<Servico[]>(fallbackServicos)
    const [isLoadingServicos, setIsLoadingServicos] = useState(false)
    const [servicosError, setServicosError] = useState<string | null>(null)

    /**
     * Busca a lista de serviços disponíveis da API
     */
    const fetchServicos = async (): Promise<void> => {
        if (isLocalDevelopment()) {
            setServicos(fallbackServicos)
            setServicosError(null)
            return
        }

        setIsLoadingServicos(true)
        setServicosError(null)

        try {
            const response = await fetch(`${API_BASE_URL}/servicos`)

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`)
            }

            const result: ServicosApiResponse = await response.json()

            if (result.success && result.result) {
                // Mapeia apenas os campos necessários e filtra serviços ativos
                const servicosAtivos = result.result
                    .filter(servico => servico.ativo)
                    .map(servico => ({
                        id: servico.id,
                        nome: servico.nome,
                        descricao: servico.descricao
                    }))

                setServicos(servicosAtivos)
            } else {
                throw new Error('Erro ao processar a lista de serviços')
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido ao buscar serviços'
            setServicosError(errorMessage)
            setServicos(fallbackServicos)
        } finally {
            setIsLoadingServicos(false)
        }
    }

    /**
     * Carrega os serviços quando o hook é inicializado
     */
    useEffect(() => {
        fetchServicos()
    }, [])

    const submitForm = async (data: ContactFormData): Promise<boolean> => {
        setIsSubmitting(true)
        setError(null)

        if (isLocalDevelopment()) {
            setIsSubmitting(false)
            setError('Envio pela API desativado no ambiente local para evitar bloqueio de CORS.')
            return false
        }

        try {
            const response = await fetch(`${API_BASE_URL}/contatos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`)
            }

            const result = await response.json()

            if (result.success) {
                return true
            } else {
                throw new Error('Erro ao processar a solicitação')
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
            setError(errorMessage)
            return false
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        isSubmitting,
        submitForm,
        error,
        servicos,
        isLoadingServicos,
        servicosError
    }
}
