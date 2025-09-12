// Tipos para área administrativa



/**
 * Interface do usuário administrativo
 */
export interface AdminUser {
  id: number
  nome: string
  email: string
  role: 'admin' | 'user' | 'viewer'
  avatar?: string
  ativo: boolean
  createdAt: string
  updatedAt: string
}

/**
 * Dados para login administrativo
 */
export interface AdminLoginData {
  email: string
  senha: string
}

/**
 * Resposta da API de login
 */
export interface AdminLoginResponse {
  success: boolean
  message: string
  data: {
    user: AdminUser
    token: string
    refreshToken: string
  }
}

/**
 * Dados para criação de usuário
 */
export interface CreateUsuarioData {
  nome: string
  email: string
  senha: string
  role: 'admin' | 'user' | 'viewer'
}

/**
 * Dados para atualização de usuário
 */
export interface UpdateUsuarioData {
  nome?: string
  email?: string
  senha?: string
  role?: 'admin' | 'user' | 'viewer'
  ativo?: boolean
}

/**
 * Filtros para listagem de usuários
 */
export interface UsuarioFilters {
  role?: 'admin' | 'user' | 'viewer'
  ativo?: boolean
  search?: string
}

/**
 * Interface do serviço
 */
export interface AdminServico {
  id: number
  nome: string
  descricao: string
  preco?: number
  destaque: boolean
  categoria: string
  ativo: boolean
  createdAt: string
  updatedAt: string
}

/**
 * Dados para criação de serviço
 */
export interface CreateServicoData {
  nome: string
  descricao: string
  preco?: number
  ativo?: boolean
}

/**
 * Dados para atualização de serviço
 */
export interface UpdateServicoData {
  nome?: string
  descricao?: string
  preco?: number
  ativo?: boolean
}

/**
 * Filtros para listagem de serviços
 */
export interface ServicoFilters {
  ativo?: boolean
  search?: string
}

/**
 * Interface do contato recebido
 */
export interface AdminContato {
  id: number
  nome: string
  email: string
  telefone?: string
  assunto?: string
  empresa?: string
  servicoId: number
  servico?: AdminServico
  mensagem: string
  status: 'novo' | 'lido' | 'respondido' | 'arquivado'
  dataContato?: string
  dataResposta?: string
  createdAt?: string
  updatedAt?: string
}

/**
 * Filtros para listagem de contatos
 */
export interface ContatoFilters {
  status?: 'novo' | 'lido' | 'respondido' | 'arquivado'
  servicoId?: number
  dataInicio?: string
  dataFim?: string
  search?: string
}

export interface ServicosMaisPopulares {
  nome: string
  quantidade: number
}

export interface CrescimentoMensal {
  usuarios: number,
  contatos: number,
  servicos: number
}
/**
 * Estatísticas do dashboard
 */
export interface AdminStats {
  totalUsuarios: number
  totalServicos: number
  totalContatos?: number
  contatosNaoLidos?: number
  usuariosAtivos?: number
  contatosHoje: number
  contatosSemana: number
  contatosMes: number
  usuariosRecentes: AdminUser[]
  servicosAtivos: number
  contatosRecentes: AdminContato[]
  servicosMaisPopulares: ServicosMaisPopulares[]
  crescimentoMensal: CrescimentoMensal
}



/**
 * Resposta padrão da API
 */
export interface ApiResponse<T = any> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}

/**
 * Resposta paginada da API
 */
export interface PaginatedResponse<T = any> {
  success: boolean
  message: string
  data: T[]
  pagination: {
    currentPage: number
    totalPages: number
    totalItems: number
    itemsPerPage: number
  }
}

/**
 * Permissões do usuário administrativo
 */
export interface AdminPermissions {
  canCreateUser: boolean
  canEditUser: boolean
  canDeleteUser: boolean
  canManageServices: boolean
  canViewContacts: boolean
  canManageSystem: boolean
}

/**
 * Configurações do sistema
 */
export interface SystemConfig {
  siteName: string
  siteUrl: string
  adminEmail: string
  maintenanceMode: boolean
  allowRegistration: boolean
}

/**
 * Permissão/Role do sistema administrativo
 */
export interface AdminPermissao {
  id: string
  nome: string
  descricao: string
  permissoes: string[]
}

/**
 * Configurações do sistema administrativo
 */
export interface AdminConfiguracao {
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  address: string
  socialMedia: {
    facebook: string
    instagram: string
    linkedin: string
  }
  emailSettings: {
    smtpHost: string
    smtpPort: number
    smtpUser: string
    smtpPassword: string
    fromName: string
    fromEmail: string
  }
  maintenanceMode: boolean
  allowRegistration: boolean
  requireEmailVerification: boolean
}

/**
 * Log de auditoria
 */
export interface AuditLog {
  id: number
  userId: number
  user?: AdminUser
  action: string
  resource: string
  resourceId?: number
  details?: string
  ipAddress: string
  userAgent: string
  createdAt: string
}