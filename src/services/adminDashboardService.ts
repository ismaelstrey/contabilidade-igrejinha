import { apiRequest } from '@/utils/api'
import { AdminContato } from '@/types/admin'

export interface AnalyticsMetric {
  label: string
  total: number
}

export interface ContactStatusMetric {
  status: string
  total: number
}

export interface AdminDashboardSummary {
  pageViews: number
  pageViewsToday: number
  uniqueVisitors: number
  postViews: number
  contactsTotal: number
  contactsToday: number
  contactsUnread: number
  servicesActive: number
  topPages: AnalyticsMetric[]
  topPosts: AnalyticsMetric[]
  contactStatus: ContactStatusMetric[]
  popularServices: AnalyticsMetric[]
  recentContacts: AdminContato[]
}

interface DashboardSummaryResponse {
  success: boolean
  message: string
  data: AdminDashboardSummary
}

const normalizeStatus = (status: string): AdminContato['status'] => {
  if (status === 'em_andamento') return 'lido'
  if (status === 'finalizado') return 'arquivado'
  if (status === 'respondido') return 'respondido'
  return 'novo'
}

const normalizeContact = (contact: AdminContato & Record<string, unknown>): AdminContato => ({
  ...contact,
  servicoId: Number(contact.servico_id || contact.servicoId || 0),
  dataContato: String(contact.created_at || contact.dataContato || ''),
  createdAt: String(contact.created_at || contact.createdAt || ''),
  updatedAt: String(contact.updated_at || contact.updatedAt || ''),
  status: normalizeStatus(String(contact.status || 'novo')),
})

export const loadDashboardSummary = async (): Promise<AdminDashboardSummary> => {
  const response = await apiRequest<DashboardSummaryResponse>('/analytics/summary', { auth: true })
  return {
    ...response.data,
    recentContacts: response.data.recentContacts.map(contact => (
      normalizeContact(contact as AdminContato & Record<string, unknown>)
    )),
  }
}
