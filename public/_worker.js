// Cloudflare Pages Worker para configurar MIME types corretos
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Configurar MIME types para arquivos JavaScript
    if (url.pathname.endsWith('.js') || url.pathname.endsWith('.mjs')) {
      const response = await env.ASSETS.fetch(request);
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: {
          ...response.headers,
          'Content-Type': 'application/javascript; charset=utf-8',
          'X-Content-Type-Options': 'nosniff'
        }
      });
      return newResponse;
    }
    
    // Para outros arquivos, usar o comportamento padrão
    return env.ASSETS.fetch(request);
  }
};