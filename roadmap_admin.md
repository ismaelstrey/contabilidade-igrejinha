# Roadmap - Área Administrativa (/admin)

## 📋 **Visão Geral**

Criação de uma área administrativa completa em `/admin` para gerenciar todos os dados do sistema de contabilidade, baseada na API documentada em `https://api.contabilidadeigrejinha.com.br/openapi.json`.

## 🎯 **Objetivos**

- Interface administrativa completa e responsiva
- Autenticação JWT integrada com a API
- Gestão completa de usuários, serviços e contatos
- Dashboard com métricas e relatórios
- Sistema de permissões por roles (admin, user, viewer)

---

## 🚀 **Fase 1: Estrutura Base e Autenticação**

### 1.1 Estrutura de Rotas
```
/admin
├── /login          # Página de login
├── /dashboard       # Dashboard principal
├── /usuarios        # Gestão de usuários
├── /servicos        # Gestão de serviços
├── /contatos        # Gestão de contatos
├── /perfil          # Perfil do usuário logado
└── /configuracoes   # Configurações do sistema
```

### 1.2 Componentes de Autenticação

#### **AdminLogin.tsx**
- Formulário de login com email/senha
- Integração com `POST /api/v1/auth/login`
- Validação de campos obrigatórios
- Tratamento de erros (401, 403)
- Redirecionamento após login

#### **useAdminAuth.ts** (Hook)
```typescript
interface AdminAuthReturn {
  user: User | null
  token: string | null
  login: (email: string, senha: string) => Promise<boolean>
  logout: () => void
  refreshToken: () => Promise<boolean>
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}
```

#### **AdminProtectedRoute.tsx**
- Componente para proteger rotas administrativas
- Verificação de token JWT
- Redirecionamento para login se não autenticado
- Verificação de roles (admin, user, viewer)

### 1.3 Layout Administrativo

#### **AdminLayout.tsx**
- Sidebar com navegação
- Header com informações do usuário
- Breadcrumbs
- Logout button
- Tema dark/light mode

---

## 📊 **Fase 2: Dashboard e Métricas**

### 2.1 Dashboard Principal

#### **AdminDashboard.tsx**
- Cards com estatísticas principais:
  - Total de usuários ativos
  - Total de serviços disponíveis
  - Contatos recebidos (hoje/semana/mês)
  - Usuários registrados recentemente

#### **useAdminStats.ts** (Hook)
```typescript
interface AdminStats {
  totalUsuarios: number
  totalServicos: number
  contatosHoje: number
  contatosSemana: number
  contatosMes: number
  usuariosRecentes: User[]
  servicosAtivos: number
}
```

### 2.2 Gráficos e Relatórios
- Gráfico de contatos por período
- Gráfico de serviços mais solicitados
- Tabela de atividades recentes

---

## 👥 **Fase 3: Gestão de Usuários**

### 3.1 Listagem de Usuários

#### **AdminUsuarios.tsx**
- Tabela com paginação
- Filtros por role e status (ativo/inativo)
- Busca por nome/email
- Ações: visualizar, editar, ativar/desativar

#### **useAdminUsuarios.ts** (Hook)
```typescript
interface AdminUsuariosReturn {
  usuarios: User[]
  totalCount: number
  currentPage: number
  isLoading: boolean
  error: string | null
  fetchUsuarios: (page: number, filters?: UsuarioFilters) => Promise<void>
  createUsuario: (data: CreateUsuarioData) => Promise<boolean>
  updateUsuario: (id: number, data: UpdateUsuarioData) => Promise<boolean>
  toggleUsuarioStatus: (id: number) => Promise<boolean>
}
```

### 3.2 Formulários de Usuário

#### **AdminUsuarioForm.tsx**
- Formulário para criar/editar usuários
- Campos: nome, email, senha, role
- Validações conforme API (nome 2-100 chars, senha forte)
- Integração com `POST /api/v1/auth/register`

#### **AdminUsuarioDetail.tsx**
- Visualização detalhada do usuário
- Histórico de atividades
- Opções de edição e gerenciamento

---

## 🛠️ **Fase 4: Gestão de Serviços**

### 4.1 Listagem de Serviços

#### **AdminServicos.tsx**
- Tabela com todos os serviços
- Filtros por status (ativo/inativo)
- Busca por nome/descrição
- Ações: criar, editar, ativar/desativar

#### **useAdminServicos.ts** (Hook)
```typescript
interface AdminServicosReturn {
  servicos: Servico[]
  totalCount: number
  isLoading: boolean
  error: string | null
  fetchServicos: (filters?: ServicoFilters) => Promise<void>
  createServico: (data: CreateServicoData) => Promise<boolean>
  updateServico: (id: number, data: UpdateServicoData) => Promise<boolean>
  toggleServicoStatus: (id: number) => Promise<boolean>
}
```

### 4.2 Formulários de Serviço

#### **AdminServicoForm.tsx**
- Formulário para criar/editar serviços
- Campos: nome, descrição, preço, status
- Validações de campos obrigatórios
- Preview do serviço

---

## 📞 **Fase 5: Gestão de Contatos**

### 5.1 Listagem de Contatos

#### **AdminContatos.tsx**
- Tabela com todos os contatos recebidos
- Filtros por data, serviço, status
- Busca por nome/email/empresa
- Paginação e ordenação
- Ações: visualizar, responder, arquivar

#### **useAdminContatos.ts** (Hook)
```typescript
interface AdminContatosReturn {
  contatos: Contato[]
  totalCount: number
  currentPage: number
  isLoading: boolean
  error: string | null
  fetchContatos: (page: number, filters?: ContatoFilters) => Promise<void>
  updateContatoStatus: (id: number, status: string) => Promise<boolean>
  deleteContato: (id: number) => Promise<boolean>
}
```

### 5.2 Detalhes do Contato

#### **AdminContatoDetail.tsx**
- Visualização completa do contato
- Informações: nome, email, telefone, empresa, serviço, mensagem
- Histórico de interações
- Opções de resposta e gerenciamento

---

## 🔧 **Fase 6: Funcionalidades Avançadas**

### 6.1 Sistema de Permissões

#### **useAdminPermissions.ts** (Hook)
```typescript
interface AdminPermissions {
  canCreateUser: boolean
  canEditUser: boolean
  canDeleteUser: boolean
  canManageServices: boolean
  canViewContacts: boolean
  canManageSystem: boolean
}
```

### 6.2 Configurações do Sistema

#### **AdminConfiguracoes.tsx**
- Configurações gerais do sistema
- Gerenciamento de tokens JWT
- Configurações de email
- Logs do sistema

### 6.3 Perfil do Administrador

#### **AdminPerfil.tsx**
- Edição do perfil do usuário logado
- Alteração de senha
- Configurações pessoais
- Histórico de atividades

---

## 🎨 **Fase 7: Interface e UX**

### 7.1 Componentes Reutilizáveis

#### **AdminTable.tsx**
- Componente de tabela com paginação
- Filtros e busca integrados
- Ações customizáveis
- Responsivo

#### **AdminModal.tsx**
- Modal para confirmações e formulários
- Diferentes tamanhos e tipos
- Animações suaves

#### **AdminStats.tsx**
- Cards de estatísticas
- Gráficos integrados
- Indicadores visuais

### 7.2 Tema Administrativo

#### **adminTheme.ts**
```typescript
interface AdminTheme {
  colors: {
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
    background: string
    surface: string
    text: string
  }
  sidebar: {
    width: string
    background: string
    textColor: string
  }
  header: {
    height: string
    background: string
  }
}
```

---

## 🔒 **Fase 8: Segurança e Validações**

### 8.1 Validações de Formulário

#### **adminValidations.ts**
```typescript
// Validações específicas para área administrativa
const usuarioValidation = {
  nome: { required: true, minLength: 2, maxLength: 100 },
  email: { required: true, format: 'email', maxLength: 255 },
  senha: { required: true, minLength: 8, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/ },
  role: { required: true, enum: ['admin', 'user', 'viewer'] }
}

const servicoValidation = {
  nome: { required: true, minLength: 2, maxLength: 200 },
  descricao: { required: true, minLength: 10 },
  preco: { required: true, type: 'number', min: 0 }
}
```

### 8.2 Interceptadores de Requisição

#### **adminApiInterceptor.ts**
- Interceptador para adicionar token JWT
- Tratamento de erros 401/403
- Refresh automático de tokens
- Logs de requisições

---

## 📱 **Fase 9: Responsividade e Performance**

### 9.1 Design Responsivo
- Sidebar colapsável em mobile
- Tabelas com scroll horizontal
- Cards adaptáveis
- Menu mobile otimizado

### 9.2 Otimizações
- Lazy loading de componentes
- Paginação virtual para listas grandes
- Cache de dados frequentes
- Debounce em buscas

---

## 🧪 **Fase 10: Testes e Deploy**

### 10.1 Testes
- Testes unitários dos hooks
- Testes de integração com API
- Testes E2E dos fluxos principais
- Testes de acessibilidade

### 10.2 Deploy
- Build otimizado para produção
- Configuração de rotas no servidor
- Variáveis de ambiente
- Monitoramento de erros

---

## 📋 **Estrutura de Arquivos**

```
src/
├── components/
│   └── admin/
│       ├── layout/
│       │   ├── AdminLayout.tsx
│       │   ├── AdminSidebar.tsx
│       │   └── AdminHeader.tsx
│       ├── auth/
│       │   ├── AdminLogin.tsx
│       │   └── AdminProtectedRoute.tsx
│       ├── dashboard/
│       │   ├── AdminDashboard.tsx
│       │   └── AdminStats.tsx
│       ├── usuarios/
│       │   ├── AdminUsuarios.tsx
│       │   ├── AdminUsuarioForm.tsx
│       │   └── AdminUsuarioDetail.tsx
│       ├── servicos/
│       │   ├── AdminServicos.tsx
│       │   └── AdminServicoForm.tsx
│       ├── contatos/
│       │   ├── AdminContatos.tsx
│       │   └── AdminContatoDetail.tsx
│       └── common/
│           ├── AdminTable.tsx
│           ├── AdminModal.tsx
│           └── AdminPagination.tsx
├── hooks/
│   └── admin/
│       ├── useAdminAuth.ts
│       ├── useAdminUsuarios.ts
│       ├── useAdminServicos.ts
│       ├── useAdminContatos.ts
│       └── useAdminStats.ts
├── pages/
│   └── admin/
│       ├── AdminLoginPage.tsx
│       ├── AdminDashboardPage.tsx
│       ├── AdminUsuariosPage.tsx
│       ├── AdminServicosPage.tsx
│       └── AdminContatosPage.tsx
├── styles/
│   └── admin/
│       ├── adminTheme.ts
│       └── adminComponents.ts
├── types/
│   └── admin.ts
└── utils/
    └── admin/
        ├── adminValidations.ts
        └── adminApiInterceptor.ts
```

---

## 🎯 **Cronograma Estimado**

| Fase | Descrição | Tempo Estimado |
|------|-----------|----------------|
| 1 | Estrutura Base e Autenticação | 1 semana |
| 2 | Dashboard e Métricas | 3 dias |
| 3 | Gestão de Usuários | 1 semana |
| 4 | Gestão de Serviços | 4 dias |
| 5 | Gestão de Contatos | 4 dias |
| 6 | Funcionalidades Avançadas | 1 semana |
| 7 | Interface e UX | 1 semana |
| 8 | Segurança e Validações | 3 dias |
| 9 | Responsividade e Performance | 4 dias |
| 10 | Testes e Deploy | 1 semana |

**Total Estimado: 6-7 semanas**

---

## 🛠️ **Tecnologias e Dependências**

### Principais
- **React 18+** com TypeScript
- **React Router DOM** para roteamento
- **Styled Components** para estilização
- **Framer Motion** para animações
- **React Hook Form** para formulários
- **Zod** para validações
- **React Query** para cache de dados
- **Chart.js** ou **Recharts** para gráficos

### Utilitárias
- **date-fns** para manipulação de datas
- **react-table** para tabelas avançadas
- **react-select** para selects customizados
- **react-hot-toast** para notificações
- **axios** para requisições HTTP

---

## ✅ **Critérios de Sucesso**

- [ ] Autenticação JWT funcionando completamente
- [ ] CRUD completo para usuários, serviços e contatos
- [ ] Dashboard com métricas em tempo real
- [ ] Interface responsiva e acessível
- [ ] Sistema de permissões por roles
- [ ] Validações robustas em todos os formulários
- [ ] Performance otimizada (< 3s carregamento inicial)
- [ ] Cobertura de testes > 80%
- [ ] Deploy em produção funcionando
- [ ] Documentação completa para manutenção

---

## 📚 **Recursos Adicionais**

- **Documentação da API**: `https://api.contabilidadeigrejinha.com.br/openapi.json`
- **Design System**: Criar guia de componentes administrativos
- **Manual do Usuário**: Documentação para administradores
- **Logs de Auditoria**: Rastreamento de ações administrativas
- **Backup e Recuperação**: Estratégias de backup dos dados

---

*Este roadmap serve como guia completo para desenvolvimento da área administrativa, garantindo que todos os requisitos da API sejam atendidos com uma interface moderna, segura e eficiente.*