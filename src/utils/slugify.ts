/**
 * Gera um slug amigável para URLs a partir de um texto
 * @param text - Texto para converter em slug
 * @returns String formatada como slug
 */
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD') // Remove acentos
    .replace(/[\u0300-\u036f]/g, '') // Remove diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
    .trim()
    .replace(/\s+/g, '-') // Substitui espaços por hífens
    .replace(/-+/g, '-') // Remove hífens duplicados
    .replace(/^-|-$/g, '') // Remove hífens do início e fim
}

/**
 * Gera um slug único adicionando um ID se necessário
 * @param title - Título do post
 * @param id - ID do post para garantir unicidade
 * @returns Slug único
 */
export const generatePostSlug = (title: string, id: number): string => {
  const baseSlug = slugify(title)
  return `${baseSlug}-${id}`
}

/**
 * Extrai o ID do post a partir do slug
 * @param slug - Slug do post
 * @returns ID do post ou null se não encontrado
 */
export const extractIdFromSlug = (slug: string): number | null => {
  const match = slug.match(/-([0-9]+)$/)
  return match ? parseInt(match[1], 10) : null
}