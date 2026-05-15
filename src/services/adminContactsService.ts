import { AdminContato } from '@/types/admin'
import { apiRequest } from '@/utils/api'

interface ContactsListResponse {
  success?: boolean
  result?: AdminContato[]
  data?: AdminContato[]
}

const normalizeContact = (contact: AdminContato & Record<string, unknown>): AdminContato => ({
  ...contact,
  servicoId: Number(contact.servico_id || contact.servicoId || 0),
  dataContato: String(contact.created_at || contact.dataContato || ''),
  createdAt: String(contact.created_at || contact.createdAt || ''),
  updatedAt: String(contact.updated_at || contact.updatedAt || ''),
  status: normalizeStatus(String(contact.status || 'novo')),
})

const normalizeStatus = (status: string): AdminContato['status'] => {
  if (status === 'em_andamento') return 'lido'
  if (status === 'finalizado') return 'arquivado'
  if (status === 'respondido') return 'respondido'
  return 'novo'
}

const toApiStatus = (status: AdminContato['status']): string => {
  if (status === 'lido') return 'em_andamento'
  if (status === 'arquivado') return 'finalizado'
  return status
}

export const loadAdminContacts = async (): Promise<AdminContato[]> => {
  const response = await apiRequest<ContactsListResponse>('/contatos', { auth: true })
  const contacts = response.result || response.data || []
  return contacts.map(contact => normalizeContact(contact as AdminContato & Record<string, unknown>))
}

export const updateAdminContactStatus = async (
  id: number,
  status: AdminContato['status'],
): Promise<void> => {
  await apiRequest(`/contatos/${id}/status`, {
    method: 'PUT',
    auth: true,
    body: JSON.stringify({ status: toApiStatus(status) }),
  })
}
