// Middleware para Cloudflare Pages - desabilita compressão automática
export async function onRequest(context) {
  const { request, next, env } = context;
  
  // Obter a resposta original
  const response = await next();
  
  // Se for um arquivo JavaScript, garantir MIME type correto e sem compressão
  if (request.url.includes('.js')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
    newHeaders.set('Content-Encoding', 'identity');
    newHeaders.delete('Content-Encoding');
    
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
  
  // Para outros arquivos, retornar sem modificação
  return response;
}