# 📊 Contabiligrejinha

> Sistema de contabilidade especializado para igrejas e organizações religiosas

## 🎯 Sobre o Projeto

O **Contabiligrejinha** é uma aplicação web moderna desenvolvida especificamente para atender às necessidades contábeis de igrejas e organizações religiosas. O sistema oferece uma interface intuitiva e funcionalidades especializadas para gestão financeira transparente e eficiente.

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Hero Section**: Apresentação impactante dos serviços
- **Serviços**: Catálogo completo de soluções contábeis
- **Sobre Nós**: História e missão da empresa
- **Depoimentos**: Feedback de clientes satisfeitos

### 👥 Página da Equipe (`/equipe`)
- Apresentação da equipe de profissionais
- Qualificações e especializações
- Experiência em contabilidade religiosa

### ❓ Página FAQ (`/faq`)
- Perguntas frequentes sobre contabilidade para igrejas
- Respostas detalhadas e esclarecedoras
- Interface interativa com accordion

### 📞 Página Fale Conosco (`/contato`)
- Formulário de contato integrado
- Informações de localização e horários
- Múltiplos canais de comunicação

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Styled Components** - CSS-in-JS para estilização
- **Framer Motion** - Animações fluidas e interativas
- **React Router DOM** - Roteamento client-side
- **React Helmet Async** - Gerenciamento de meta tags para SEO

### Ferramentas de Desenvolvimento
- **ESLint** - Linting e padronização de código
- **npm** - Gerenciador de pacotes
- **Git** - Controle de versão

## 📁 Estrutura do Projeto

```
contabiligrejinha/
├── public/                 # Arquivos estáticos
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/         # Componentes React
│   │   ├── common/         # Componentes reutilizáveis
│   │   ├── layout/         # Componentes de layout
│   │   ├── pages/          # Páginas da aplicação
│   │   └── sections/       # Seções específicas
│   ├── data/              # Dados em JSON
│   │   ├── aboutFeatures.json
│   │   ├── aboutStats.json
│   │   ├── companyInfo.json
│   │   ├── faq.json
│   │   ├── services.json
│   │   ├── team.json
│   │   └── testimonials.json
│   ├── styles/            # Estilos globais e tema
│   │   ├── globalStyles.ts
│   │   └── theme.ts
│   ├── types/             # Definições de tipos TypeScript
│   ├── App.tsx            # Componente principal
│   └── main.tsx           # Ponto de entrada
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (versão 8 ou superior)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/contabiligrejinha.git
   cd contabiligrejinha
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra o navegador em `http://localhost:3000`

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run preview      # Visualiza build de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run lint:fix     # Corrige problemas do ESLint automaticamente

# Tipos TypeScript
npm run type-check   # Verifica tipos TypeScript
```

## 🎨 Características Técnicas

### 📱 Responsividade
- Design mobile-first
- Breakpoints otimizados para diferentes dispositivos
- Interface adaptável para tablets e desktops

### 🎭 Animações
- Transições suaves com Framer Motion
- Animações de entrada e saída
- Micro-interações para melhor UX

### 🔍 SEO Otimizado
- Meta tags dinâmicas por página
- Structured data para mecanismos de busca
- Sitemap.xml e robots.txt configurados
- URLs semânticas e amigáveis

### ♿ Acessibilidade
- Navegação por teclado
- Contraste adequado de cores
- Textos alternativos em imagens
- Estrutura semântica HTML

## 🗺️ Roteamento

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial com hero, serviços, sobre e depoimentos |
| `/equipe` | TeamPage | Apresentação da equipe profissional |
| `/faq` | FAQPage | Perguntas frequentes |
| `/contato` | ContactPage | Formulário e informações de contato |

## 🎯 Navegação Inteligente

O sistema possui navegação inteligente que:
- Faz scroll suave para seções quando na página inicial
- Navega entre páginas quando necessário
- Mantém contexto de navegação para melhor UX

## 📊 Dados e Conteúdo

Todos os dados são gerenciados através de arquivos JSON na pasta `src/data/`:
- **Informações da empresa**: `companyInfo.json`
- **Serviços oferecidos**: `services.json`
- **Equipe profissional**: `team.json`
- **Depoimentos de clientes**: `testimonials.json`
- **Perguntas frequentes**: `faq.json`
- **Estatísticas e recursos**: `aboutStats.json`, `aboutFeatures.json`

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

O build será gerado na pasta `dist/` e estará pronto para deploy em qualquer servidor web estático.

### Plataformas Recomendadas
- **Vercel** - Deploy automático com Git
- **Netlify** - Hospedagem com CI/CD
- **GitHub Pages** - Hospedagem gratuita
- **AWS S3 + CloudFront** - Solução escalável

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Padrões de Código

- **Nomenclatura**: camelCase para variáveis e funções
- **Componentes**: PascalCase
- **Arquivos**: camelCase
- **Comentários**: Em português brasileiro
- **Tipagem**: TypeScript obrigatório, evitar `any`
- **Estilização**: Styled Components com tema consistente

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Website**: [contabiligrejinha.com.br](https://contabiligrejinha.com.br)
- **Email**: contato@contabiligrejinha.com.br
- **Telefone**: (11) 9999-9999

---

**Desenvolvido com ❤️ para a comunidade religiosa brasileira**