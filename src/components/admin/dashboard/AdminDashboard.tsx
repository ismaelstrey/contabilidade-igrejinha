import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  DashboardContainer,
  ChartsGrid,
  StatsGrid,
  ContentCard,
  ContentCardTitle,
  ContentCardList,
  WideGrid,
  MetricList,
  MetricRow,
  MetricName,
  MetricValue,
  MetricBarTrack,
  MetricBar,
  StatusGrid,
  StatusPill,
  StatusLabel,
  StatusValue,
  ContactPreview,
  ContactPreviewTitle,
  ContactPreviewMeta,
} from './AdminDashboard.styles'
import StatCard from './StatCard'
import ServicesChart from './ServicesChart'
import DashboardHeader from './DashboardHeader'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import {
  AdminDashboardSummary,
  AnalyticsMetric,
  loadDashboardSummary,
} from '@/services/adminDashboardService'

const formatPathLabel = (value: string): string => {
  if (value === '/') return 'Pagina inicial'
  if (value === '/posts') return 'Lista de posts'

  return value
    .replace('/posts/', 'Post: ')
    .replaceAll('-', ' ')
    .replace(/\b\w/g, letter => letter.toUpperCase())
}

const formatDate = (value?: string): string => {
  if (!value) return 'Sem data'

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value))
}

const statusLabel: Record<string, string> = {
  novo: 'Novas',
  em_andamento: 'Em andamento',
  lido: 'Lidas',
  respondido: 'Respondidas',
  finalizado: 'Finalizadas',
  arquivado: 'Arquivadas',
}

const MetricRanking: React.FC<{
  title: string
  items: AnalyticsMetric[]
  emptyText: string
}> = ({ title, items, emptyText }) => {
  const max = useMemo(() => Math.max(...items.map(item => item.total), 1), [items])

  return (
    <ContentCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <ContentCardTitle>{title}</ContentCardTitle>
      {items.length === 0 ? (
        <ContactPreviewMeta>{emptyText}</ContactPreviewMeta>
      ) : (
        <MetricList>
          {items.map(item => (
            <MetricRow key={item.label}>
              <MetricName title={item.label}>{formatPathLabel(item.label)}</MetricName>
              <MetricValue>{item.total.toLocaleString('pt-BR')}</MetricValue>
              <MetricBarTrack>
                <MetricBar $percentage={(item.total / max) * 100} />
              </MetricBarTrack>
            </MetricRow>
          ))}
        </MetricList>
      )}
    </ContentCard>
  )
}

const AdminDashboard: React.FC = () => {
  const [summary, setSummary] = useState<AdminDashboardSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadStats = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      setSummary(await loadDashboardSummary())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar estatisticas')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadStats()
  }, [loadStats])

  if (loading) return <LoadingState />
  if (error) return <ErrorState message={error} />
  if (!summary) return <ErrorState message="Nenhum dado encontrado para o dashboard" />

  return (
    <DashboardContainer>
      <DashboardHeader title="Dashboard" />

      <StatsGrid>
        <StatCard
          title="Acessos em 30 dias"
          value={summary.pageViews}
          icon="users"
          color="blue"
        />
        <StatCard
          title="Visitantes unicos"
          value={summary.uniqueVisitors}
          icon="users"
          color="green"
        />
        <StatCard
          title="Solicitacoes"
          value={summary.contactsTotal}
          icon="mail"
          color="yellow"
        />
        <StatCard
          title="Pendentes"
          value={summary.contactsUnread}
          icon="bell"
          color="red"
          urgent={summary.contactsUnread > 0}
        />
      </StatsGrid>

      <StatsGrid>
        <StatCard title="Acessos hoje" value={summary.pageViewsToday} icon="users" color="blue" />
        <StatCard title="Posts acessados" value={summary.postViews} icon="briefcase" color="green" />
        <StatCard title="Contatos hoje" value={summary.contactsToday} icon="mail" color="yellow" />
        <StatCard title="Servicos ativos" value={summary.servicesActive} icon="briefcase" color="green" />
      </StatsGrid>

      <ChartsGrid>
        <MetricRanking
          title="Paginas mais acessadas"
          items={summary.topPages}
          emptyText="Os acessos comecarao a aparecer aqui conforme o site for navegado."
        />
        <MetricRanking
          title="Posts mais acessados"
          items={summary.topPosts}
          emptyText="Nenhum post acessado registrado ainda."
        />
      </ChartsGrid>

      <WideGrid>
        <ServicesChart
          servicosMaisPopulares={summary.popularServices.map(item => ({
            nome: item.label,
            quantidade: item.total,
          }))}
        />

        <ContentCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <ContentCardTitle>Status das solicitacoes</ContentCardTitle>
          <StatusGrid>
            {summary.contactStatus.map(item => (
              <StatusPill key={item.status}>
                <StatusLabel>{statusLabel[item.status] || item.status}</StatusLabel>
                <StatusValue>{item.total.toLocaleString('pt-BR')}</StatusValue>
              </StatusPill>
            ))}
          </StatusGrid>
        </ContentCard>
      </WideGrid>

      <ContentCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <ContentCardTitle>Solicitacoes recentes</ContentCardTitle>
        <ContentCardList>
          {summary.recentContacts.length === 0 ? (
            <ContactPreviewMeta>Nenhuma solicitacao recebida ainda.</ContactPreviewMeta>
          ) : (
            summary.recentContacts.map(contact => (
              <ContactPreview key={contact.id}>
                <ContactPreviewTitle>{contact.nome}</ContactPreviewTitle>
                <ContactPreviewMeta>
                  {contact.email} - {statusLabel[contact.status] || contact.status} - {formatDate(contact.createdAt || contact.dataContato)}
                </ContactPreviewMeta>
              </ContactPreview>
            ))
          )}
        </ContentCardList>
      </ContentCard>
    </DashboardContainer>
  )
}

export default AdminDashboard
