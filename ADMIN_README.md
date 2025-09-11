# Área Administrativa - Contabilidade Igrejinha

## Visão Geral

Este projeto implementa uma área administrativa completa para o site da Contabilidade Igrejinha, permitindo o gerenciamento de usuários, serviços, contatos e configurações do sistema.

## Estrutura do Projeto

### Arquivos Criados

```
src/
├── types/
│   └── admin.ts                    # Interfaces TypeScript para área administrativa
├── hooks/
│   └── admin/
│       └── useAdminAuth.ts         # Hook de autenticação JWT
├── components/
│   └── admin/
│       ├── auth/
│       │   ├── AdminLogin.tsx      # Componente de login
│       │   └── AdminProtectedRoute.tsx # Proteção de rotas
│       ├── layout/
│       │   ├── AdminLayout.tsx     # Layout principal
│       │   ├── AdminSidebar.tsx    # Sidebar de navegação
│       │   └── AdminHeader.tsx     # Header com breadcrumbs
│       ├── dashboard/
│       │   └── AdminDashboard.tsx  # Dashboard com métricas
│       ├── usuarios/
│       │   └── AdminUsuarios.tsx   # Gestão de usuários
│       ├── servicos/
│       │   └── AdminServicos.tsx   # Gestão de serviços
│       ├── contatos/
│       │   └── AdminContatos.tsx   # Gestão de contatos
│       └── configuracoes/
│           └── AdminConfiguracoes.tsx # Configurações e permissões
└── routes/
    └── AdminRoutes.tsx             # Configuração de rotas
```

## Funcionalidades Implementadas

### 1. Autenticação e Autorização
- **Login JWT**: Sistema de autenticação com tokens JWT
- **Refresh Token**: Renovação automática de tokens
- **Proteção de Rotas**: Middleware para proteger rotas administrativas
- **Sistema de Permissões**: Controle de acesso baseado em roles (admin, user, viewer)

### 2. Dashboard Administrativo
- **Métricas do Sistema**: Estatísticas de usuários, serviços e contatos
- **Gráficos**: Visualização de dados com componentes responsivos
- **Atividades Recentes**: Log das últimas ações no sistema

### 3. Gestão de Usuários
- **CRUD Completo**: Criar, visualizar, editar e excluir usuários
- **Filtros Avançados**: Busca por nome, email e role
- **Paginação**: Navegação eficiente em grandes listas
- **Ações em Lote**: Operações múltiplas simultâneas

### 4. Gestão de Serviços
- **Catálogo de Serviços**: Gerenciamento completo dos serviços oferecidos
- **Categorização**: Organização por categorias
- **Formulários Validados**: Validação de dados em tempo real
- **Status de Publicação**: Controle de visibilidade dos serviços

### 5. Gestão de Contatos
- **Inbox de Contatos**: Visualização de mensagens recebidas
- **Sistema de Status**: Novo, Lido, Respondido
- **Filtros e Busca**: Localização rápida de contatos
- **Detalhes Completos**: Modal com informações completas

### 6. Configurações do Sistema
- **Configurações Gerais**: Nome do site, contatos, redes sociais
- **Configurações de Email**: SMTP para envio de emails
- **Sistema de Permissões**: Criação e edição de roles
- **Configurações de Sistema**: Modo manutenção, registro de usuários

## Tecnologias Utilizadas

- **React 18**: Framework principal
- **TypeScript**: Tipagem estática
- **React Router DOM**: Roteamento
- **Framer Motion**: Animações
- **Tailwind CSS**: Estilização
- **Lucide React**: Ícones
- **JWT**: Autenticação

## Sistema de Permissões

### Roles Disponíveis

1. **Admin**: Acesso total ao sistema
   - Todas as permissões disponíveis
   - Gerenciamento de usuários e configurações
   - Acesso a todas as funcionalidades

2. **User**: Usuário padrão
   - Visualização de dados
   - Acesso limitado às funcionalidades
   - Sem permissões de edição críticas

3. **Viewer**: Apenas visualização
   - Acesso somente ao dashboard
   - Permissões mínimas de leitura

### Permissões Granulares

- `usuarios.criar` - Criar novos usuários
- `usuarios.editar` - Editar usuários existentes
- `usuarios.excluir` - Excluir usuários
- `usuarios.visualizar` - Visualizar lista de usuários
- `servicos.criar` - Criar novos serviços
- `servicos.editar` - Editar serviços existentes
- `servicos.excluir` - Excluir serviços
- `servicos.visualizar` - Visualizar lista de serviços
- `contatos.visualizar` - Visualizar contatos recebidos
- `contatos.responder` - Marcar contatos como respondidos
- `contatos.excluir` - Excluir contatos
- `configuracoes.editar` - Editar configurações do sistema
- `dashboard.visualizar` - Acessar dashboard

## Configuração e Uso

### 1. Integração com a API

Todos os componentes estão preparados para integração com a API `https://api.contabilidadeigrejinha.com.br/openapi.json`. Atualmente utilizam dados mockados que devem ser substituídos pelas chamadas reais da API.

### 2. Variáveis de Ambiente

Adicione as seguintes variáveis ao arquivo `.env`:

```env
# API Configuration
VITE_API_BASE_URL=https://api.contabilidadeigrejinha.com.br
VITE_JWT_SECRET=your-jwt-secret-key
VITE_JWT_EXPIRES_IN=24h
VITE_REFRESH_TOKEN_EXPIRES_IN=7d

# Admin Configuration
VITE_ADMIN_DEFAULT_ROLE=user
VITE_ADMIN_SESSION_TIMEOUT=30
```

### 3. Rotas Administrativas

As rotas administrativas estão configuradas em `/admin`:

- `/admin/login` - Página de login
- `/admin/dashboard` - Dashboard principal
- `/admin/usuarios` - Gestão de usuários
- `/admin/servicos` - Gestão de serviços
- `/admin/contatos` - Gestão de contatos
- `/admin/configuracoes` - Configurações do sistema

### 4. Integração no App Principal

Para integrar as rotas administrativas no seu App.tsx:

```tsx
import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Suas rotas existentes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Próximos Passos

### 1. Integração com API Real
- Substituir dados mockados por chamadas reais à API
- Implementar tratamento de erros da API
- Configurar interceptors para tokens JWT

### 2. Melhorias de UX
- Implementar notificações toast
- Adicionar loading states mais elaborados
- Melhorar responsividade mobile

### 3. Funcionalidades Adicionais
- Sistema de logs de auditoria
- Backup e restore de dados
- Relatórios e exportação de dados
- Notificações em tempo real

### 4. Segurança
- Implementar rate limiting
- Adicionar validação de CSRF
- Configurar headers de segurança
- Implementar 2FA (autenticação de dois fatores)

## Estrutura de Dados

### Principais Interfaces TypeScript

```typescript
// Usuário administrativo
interface AdminUser {
  id: string;
  nome: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  ativo: boolean;
  ultimoLogin?: string;
  dataCriacao: string;
}

// Serviço
interface AdminServico {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  preco?: number;
  ativo: boolean;
  dataCriacao: string;
}

// Contato
interface AdminContato {
  id: string;
  nome: string;
  email: string;
  telefone?: string;
  assunto: string;
  mensagem: string;
  status: 'novo' | 'lido' | 'respondido';
  dataContato: string;
  dataResposta?: string;
}
```

## Suporte e Manutenção

Este sistema foi desenvolvido seguindo as melhores práticas de desenvolvimento React e TypeScript. Para suporte ou dúvidas sobre a implementação, consulte a documentação dos componentes individuais ou entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido para Contabilidade Igrejinha**  
*Sistema de Gestão Administrativa v1.0*