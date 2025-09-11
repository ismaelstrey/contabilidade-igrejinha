import React, { useState, useEffect } from 'react'
import { AdminStats } from '@/types/admin'
import {
  DashboardContainer,
  LoadingContainer,
  LoadingContent,
  LoadingGrid,
  LoadingCard,
  LoadingChartsGrid,
  LoadingChart,
  ErrorContainer,
  ErrorContent,
  ErrorInner,
  ErrorIcon,
  ErrorTextContainer,
  ErrorTitle,
  ErrorMessage,
  DashboardHeader,
  HeaderContent,
  DashboardTitle,
  DashboardSubtitle,
  HeaderActions,
  RefreshButton,
  StatsGrid,
  ChartsGrid,
  ContentCard,
  ContentCardTitle,
  ContentCardList,
  ServiceItem,
  ServiceInfo,
  ServiceIndicator,
  ServiceName,
  ServiceCount,
  ActivityItem,
  ActivityIconContainer,
  ActivityIcon,
  ActivityContent,
  ActivityMessage,
  ActivityTime,
  ActivityFooter,
  ViewAllButton,
  UsersActiveHeader,
  UsersActiveCount,
  ProgressBarContainer,
  ProgressBar,
  ProgressText
} from './AdminDashboard.styles'
import {
  StatCardContainer,
  StatCardContent,
  StatCardInfo,
  StatCardTitle,
  StatCardValue,
  StatCardChange,
  StatCardIconContainer,
  StatCardIcon
} from './StatCard.styles'

/**
 * Componente principal do dashboard administrativo
 * Exibe métricas, estatísticas e visão geral do sistema
 */
const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<AdminStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  /**
   * Carrega as estatísticas do dashboard
   */
  useEffect(() => {
    const loadStats = async () => {
      try {
        setLoading(true)
        // TODO: Implementar chamada real para a API
        // const response = await fetch('/api/admin/stats')
        // const data = await response.json()

        // Dados mockados temporariamente
        const mockStats: AdminStats = {
          totalUsuarios: 1247,
          contatosHoje: 12,
          contatosSemana: 12,
          contatosMes: 12,
          contatosRecentes: [],
          usuariosRecentes: [],
          servicosAtivos: 2,
          totalServicos: 12,
          totalContatos: 89,
          contatosNaoLidos: 23,
          usuariosAtivos: 892,
          servicosMaisPopulares: [
            { nome: 'Consultoria Fiscal', quantidade: 156 },
            { nome: 'Contabilidade Empresarial', quantidade: 134 },
            { nome: 'Declaração de Imposto de Renda', quantidade: 98 }
          ],
          crescimentoMensal: {
            usuarios: 12.5,
            contatos: 8.3,
            servicos: 2.1
          }
        }

        setStats(mockStats)
      } catch (err) {
        setError('Erro ao carregar estatísticas')
        console.error('Erro ao carregar stats:', err)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingContent>
          <LoadingGrid>
            {[...Array(4)].map((_, i) => (
              <LoadingCard key={i} />
            ))}
          </LoadingGrid>
          <LoadingChartsGrid>
            <LoadingChart />
            <LoadingChart />
          </LoadingChartsGrid>
        </LoadingContent>
      </LoadingContainer>
    )
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorContent>
          <ErrorInner>
            <ErrorIcon fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </ErrorIcon>
            <ErrorTextContainer>
              <ErrorTitle>Erro</ErrorTitle>
              <ErrorMessage>{error}</ErrorMessage>
            </ErrorTextContainer>
          </ErrorInner>
        </ErrorContent>
      </ErrorContainer>
    )
  }

  return (
    <DashboardContainer>
      {/* Header */}
      <DashboardHeader>
        <HeaderContent>
          <DashboardTitle>Dashboard</DashboardTitle>
          <DashboardSubtitle>Visão geral do sistema</DashboardSubtitle>
        </HeaderContent>
        <HeaderActions>
          <RefreshButton>
            Atualizar Dados
          </RefreshButton>
        </HeaderActions>
      </DashboardHeader>

      {/* Cards de Estatísticas */}
      <StatsGrid>
        <StatCard
          title="Total de Usuários"
          value={stats?.totalUsuarios || 0}
          change={stats?.crescimentoMensal.usuarios || 0}
          icon="users"
          color="blue"
        />
        <StatCard
          title="Serviços Ativos"
          value={stats?.totalServicos || 0}
          change={stats?.crescimentoMensal.servicos || 0}
          icon="briefcase"
          color="green"
        />
        <StatCard
          title="Total de Contatos"
          value={stats?.totalContatos || 0}
          change={stats?.crescimentoMensal.contatos || 0}
          icon="mail"
          color="yellow"
        />
        <StatCard
          title="Contatos Não Lidos"
          value={stats?.contatosNaoLidos || 0}
          icon="bell"
          color="red"
          urgent={true}
        />
      </StatsGrid>

      {/* Gráficos e Tabelas */}
      <ChartsGrid>
        {/* Serviços Mais Populares */}
        <ContentCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <ContentCardTitle>Serviços Mais Populares</ContentCardTitle>
          <ContentCardList>
            {stats?.servicosMaisPopulares.map((servico, index) => (
              <ServiceItem key={index}>
                <ServiceInfo>
                  <ServiceIndicator $index={index} />
                  <ServiceName>{servico.nome}</ServiceName>
                </ServiceInfo>
                <ServiceCount>{servico.quantidade} solicitações</ServiceCount>
              </ServiceItem>
            ))}
          </ContentCardList>
        </ContentCard>

        {/* Atividade Recente */}
        <ContentCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ContentCardTitle>Atividade Recente</ContentCardTitle>
          <ContentCardList>
            <ActivityItemComponent
              type="user"
              message="Novo usuário cadastrado: Maria Silva"
              time="5 min atrás"
            />
            <ActivityItemComponent
              type="contact"
              message="Novo contato recebido de João Santos"
              time="12 min atrás"
            />
            <ActivityItemComponent
              type="service"
              message="Serviço 'Consultoria Fiscal' foi atualizado"
              time="1 hora atrás"
            />
            <ActivityItemComponent
              type="user"
              message="Usuário Pedro Costa fez login"
              time="2 horas atrás"
            />
          </ContentCardList>
          <ActivityFooter>
            <ViewAllButton>
              Ver todas as atividades
            </ViewAllButton>
          </ActivityFooter>
        </ContentCard>
      </ChartsGrid>

      {/* Usuários Ativos */}
      <ContentCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <UsersActiveHeader>
          <ContentCardTitle>Usuários Ativos</ContentCardTitle>
          <UsersActiveCount>
            {stats?.usuariosAtivos} de {stats?.totalUsuarios} usuários
          </UsersActiveCount>
        </UsersActiveHeader>
        <ProgressBarContainer>
          <ProgressBar
            $percentage={stats && stats.totalUsuarios && stats.usuariosAtivos ? (stats?.usuariosAtivos / stats.totalUsuarios) * 100 : 0}
          />
        </ProgressBarContainer>
        <ProgressText>
          {stats && stats.totalUsuarios && stats.usuariosAtivos ? Math.round((stats?.usuariosAtivos / stats.totalUsuarios) * 100) : 0}% dos usuários estão ativos
        </ProgressText>
      </ContentCard>
    </DashboardContainer>
  )
}

/**
 * Componente de card de estatística
 */
interface StatCardProps {
  title: string
  value: number
  change?: number
  icon: string
  color: 'blue' | 'green' | 'yellow' | 'red'
  urgent?: boolean
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color, urgent }) => {
  const iconMap = {
    users: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    ),
    briefcase: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
    ),
    mail: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
    bell: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    )
  }

  return (
    <StatCardContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      $urgent={urgent}
    >
      <StatCardContent>
        <StatCardInfo>
          <StatCardTitle>{title}</StatCardTitle>
          <StatCardValue>
            {value.toLocaleString('pt-BR')}
          </StatCardValue>
          {change !== undefined && (
            <StatCardChange $positive={change >= 0}>
              {change >= 0 ? '+' : ''}{change}% este mês
            </StatCardChange>
          )}
        </StatCardInfo>
        <StatCardIconContainer $color={color}>
          <StatCardIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {iconMap[icon as keyof typeof iconMap]}
          </StatCardIcon>
        </StatCardIconContainer>
      </StatCardContent>
    </StatCardContainer>
  )
}

/**
 * Componente de item de atividade
 */
interface ActivityItemProps {
  type: 'user' | 'contact' | 'service'
  message: string
  time: string
}

const ActivityItemComponent: React.FC<ActivityItemProps> = ({ type, message, time }) => {
  const iconMap = {
    user: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    service: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 00-2-2H10a2 2 0 00-2 2v2" />
    ),
    contact: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    )
  }

  return (
    <ActivityItem>
      <ActivityIconContainer $type={type}>
        <ActivityIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {iconMap[type]}
        </ActivityIcon>
      </ActivityIconContainer>
      <ActivityContent>
        <ActivityMessage>{message}</ActivityMessage>
        <ActivityTime>{time}</ActivityTime>
      </ActivityContent>
    </ActivityItem>
  )
}

export default AdminDashboard