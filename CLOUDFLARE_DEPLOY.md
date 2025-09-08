# Deploy no Cloudflare Pages

Guia completo para fazer deploy da aplicação React no Cloudflare Pages.

## Pré-requisitos

- Conta no Cloudflare
- Repositório no GitHub/GitLab
- Código commitado e enviado para o repositório

## Configuração do Projeto

### 1. Arquivo de Configuração para SPA

Crie o arquivo `public/_redirects` para configurar o roteamento de Single Page Application:

```
/*    /index.html   200
```

Este arquivo garante que todas as rotas sejam redirecionadas para o `index.html`, permitindo que o React Router funcione corretamente.

### 2. Configuração de Build

O projeto já está configurado com:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+ (recomendado)

## Passos para Deploy

### 1. Acesse o Cloudflare Dashboard

1. Faça login em [dash.cloudflare.com](https://dash.cloudflare.com)
2. Vá para **Pages** no menu lateral
3. Clique em **Create a project**

### 2. Conecte seu Repositório

1. Escolha **Connect to Git**
2. Autorize o Cloudflare a acessar seu GitHub/GitLab
3. Selecione o repositório `contabiligrejinha`
4. Clique em **Begin setup**

### 3. Configurações de Build

```yaml
Project name: contabiligrejinha
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: (leave blank)
Environment variables:
  NODE_VERSION: 18
  NPM_VERSION: 9
```

### 4. Configurações Importantes para Resolver Erros de MIME Type

O projeto inclui os seguintes arquivos de configuração:

#### `public/_headers`
- Configura MIME types corretos para arquivos JavaScript
- Define políticas de cache otimizadas
- Inclui headers de segurança

#### `public/_mimes`
- Mapeia extensões de arquivo para MIME types corretos
- Garante que arquivos .js sejam servidos como `application/javascript`

#### `wrangler.toml`
- Configuração específica do Cloudflare Workers
- Define regras de processamento para diferentes tipos de arquivo

### 5. Solução para Erros Comuns

**Erro: "Expected a JavaScript module script but server responded with MIME type 'application/octet-stream'"**

Este erro é resolvido pelos arquivos de configuração incluídos. Certifique-se de que:
1. Os arquivos `_headers`, `_mimes` e `wrangler.toml` estão no repositório
2. O deploy foi feito após adicionar estes arquivos
3. O cache do Cloudflare foi limpo (pode levar alguns minutos)

**Erro: "ERR_CONTENT_DECODING_FAILED"**

Este erro ocorre quando o Cloudflare aplica compressão automática nos arquivos. Para resolver:

1. **Desabilitar Auto Minify no Cloudflare**:
   - Vá para Speed > Optimization no painel do Cloudflare
   - Desabilite "Auto Minify" para JavaScript, CSS e HTML

2. **Configurar Headers Corretos**:
   - O arquivo `_headers` força `Content-Encoding: identity`
   - Isso instrui o Cloudflare a não aplicar compressão

3. **Usar Middleware Personalizado**:
   - O arquivo `functions/_middleware.js` garante MIME types corretos
   - Remove headers de compressão problemáticos

4. **Configurações de Deploy**:
   - Use as configurações em `cloudflare-pages.toml`
   - Defina variáveis de ambiente: `DISABLE_COMPRESSION=true`

### Passos Críticos para Resolver o Erro:

1. **No Dashboard do Cloudflare**:
   ```
   Speed > Optimization > Auto Minify: OFF
   Speed > Optimization > Brotli: OFF (temporariamente)
   ```

2. **Limpar Cache Completamente**:
   ```
   Caching > Configuration > Purge Everything
   ```

3. **Aguardar Propagação**: 5-10 minutos após as mudanças

4. **Testar em Modo Incógnito**: Para evitar cache do navegadorBuild output directory: dist
Root directory: (deixe vazio)
```

### 4. Variáveis de Ambiente (se necessário)

Se você tiver variáveis de ambiente, adicione-as em:
- **Settings** → **Environment variables**

Exemplo:
```
VITE_API_URL=https://api.contabilidadeigrejinha.com.br
VITE_SITE_URL=https://contabilidadeigrejinha.com.br
```

### 5. Deploy

1. Clique em **Save and Deploy**
2. Aguarde o build ser concluído (geralmente 2-5 minutos)
3. Acesse a URL fornecida pelo Cloudflare

## Configuração de Domínio Personalizado

### 1. Adicionar Domínio

1. No dashboard do projeto, vá para **Custom domains**
2. Clique em **Set up a custom domain**
3. Digite: `contabilidadeigrejinha.com.br`
4. Siga as instruções para configurar os DNS

### 2. Configuração DNS

No seu provedor de domínio, configure:

```
Tipo: CNAME
Nome: @
Valor: [seu-projeto].pages.dev

Tipo: CNAME
Nome: www
Valor: [seu-projeto].pages.dev
```

## Configurações Avançadas

### 1. Headers Personalizados

Crie `public/_headers` para otimizar cache:

```
/static/*
  Cache-Control: public, max-age=31536000, immutable

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/posts/*
  Cache-Control: public, max-age=3600

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```

### 2. Configuração de Segurança

Em **Settings** → **Security**:
- Ative **Always Use HTTPS**
- Configure **Security Headers**
- Ative **Bot Fight Mode** se necessário

## URLs da Aplicação

Após o deploy, suas URLs serão:

- **Homepage**: `https://contabilidadeigrejinha.com.br/`
- **Posts**: `https://contabilidadeigrejinha.com.br/posts`
- **Post específico**: `https://contabilidadeigrejinha.com.br/posts/tecnologia-e-automacao-ferramentas-essenciais-na-era-da-nova-reforma-tributaria-9`
- **Serviços**: `https://contabilidadeigrejinha.com.br/#servicos`
- **Sobre**: `https://contabilidadeigrejinha.com.br/#sobre`
- **Contato**: `https://contabilidadeigrejinha.com.br/#contato`

## Funcionalidades Implementadas

✅ **URLs Amigáveis**: Slugs otimizados para SEO
✅ **Roteamento Dinâmico**: React Router configurado
✅ **SEO Otimizado**: Meta tags, Open Graph, Twitter Cards
✅ **Sitemap**: Gerado automaticamente
✅ **Breadcrumbs**: Navegação estruturada
✅ **Performance**: Build otimizado com Vite
✅ **Cache**: Headers configurados para assets estáticos

## Comandos Úteis

```bash
# Build local para testar
npm run build
npm run preview

# Verificar build
npm run build && ls -la dist/

# Testar URLs localmente
npm run dev
```

## Troubleshooting

### Problema: 404 em rotas dinâmicas
**Solução**: Verifique se o arquivo `public/_redirects` existe e está correto.

### Problema: Build falha
**Solução**: 
1. Verifique se todas as dependências estão no `package.json`
2. Teste o build localmente: `npm run build`
3. Verifique os logs de build no Cloudflare

### Problema: Assets não carregam
**Solução**: Verifique se o `base` no `vite.config.ts` está correto para produção.

### Problema: SEO não funciona
**Solução**: 
1. Verifique se o `sitemap.xml` está acessível
2. Teste as meta tags com ferramentas como Facebook Debugger
3. Verifique se o `robots.txt` permite indexação

## Monitoramento

- **Analytics**: Configure Cloudflare Analytics
- **Performance**: Use Lighthouse para auditorias
- **SEO**: Google Search Console para monitorar indexação
- **Uptime**: Configure alertas no Cloudflare

## Próximos Passos

1. Configure Google Analytics
2. Implemente PWA (Service Worker)
3. Configure CDN para imagens
4. Implemente lazy loading para posts
5. Configure backup automático

---

**Nota**: Este guia assume que você já tem o código pronto e testado localmente. Sempre teste as funcionalidades antes do deploy em produção.