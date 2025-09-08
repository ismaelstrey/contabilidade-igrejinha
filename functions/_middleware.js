// Middleware para Cloudflare Pages - resolve problemas de domínio customizado
export async function onRequest(context) {
  const { request, next, env } = context;
  
  // Obter a resposta original
  const response = await next();
  
  // Detectar se é domínio customizado
  const url = new URL(request.url);
  const isCustomDomain = url.hostname.includes('contabilidadeigrejinha.com.br');
  
  // Criar novos headers
  const newHeaders = new Headers(response.headers);
  
  // Se for arquivo JavaScript
  if (request.url.includes('.js')) {
    newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
    newHeaders.set('Content-Encoding', 'identity');
    newHeaders.set('X-Content-Type-Options', 'nosniff');
    
    // Para domínio customizado, adicionar headers específicos
    if (isCustomDomain) {
      newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
      newHeaders.set('X-Cloudflare-No-Compression', 'true');
    }
    
    // Remover headers problemáticos
    newHeaders.delete('Content-Encoding');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
  
  // Se for arquivo CSS
  if (request.url.includes('.css')) {
    newHeaders.set('Content-Type', 'text/css; charset=utf-8');
    newHeaders.set('Content-Encoding', 'identity');
    
    if (isCustomDomain) {
      newHeaders.set('X-Cloudflare-No-Compression', 'true');
    }
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
  
  // Para outros arquivos, retornar sem modificação
  return response;
}