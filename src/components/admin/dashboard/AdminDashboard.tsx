import React, { useEffect, useState } from 'react'
import {
  DashboardContainer,
  ChartsGrid,
  StatsGrid,
  ContentCard,
  ContentCardTitle,
  ContentCardList,
  ActivityFooter,
  ViewAllButton
} from './AdminDashboard.styles'
import StatCard from './StatCard'
import ActivityItem from './ActivityItem'
import ServicesChart from './ServicesChart'
import ActiveUsersCard from './ActiveUsersCard'
import DashboardHeader from './DashboardHeader'
import LoadingState from './LoadingState'
import ErrorState from './ErrorState'
import { AdminStats } from '@/types/admin'

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
    return <LoadingState />
  }

  if (error) {
    return <ErrorState message={error} />
  }

  return (
    <DashboardContainer>
      {/* Header */}
      <DashboardHeader title="Dashboard" />

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
        <ServicesChart servicosMaisPopulares={stats?.servicosMaisPopulares || []} />

        {/* Atividade Recente */}
        <ContentCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <ContentCardTitle>Atividade Recente</ContentCardTitle>
          <ContentCardList>
            <ActivityItem
              type="user"
              message="Novo usuário cadastrado: Maria Silva"
              time="5 min atrás"
            />
            <ActivityItem
              type="contact"
              message="Novo contato recebido de João Santos"
              time="12 min atrás"
            />
            <ActivityItem
              type="service"
              message="Serviço 'Consultoria Fiscal' foi atualizado"
              time="1 hora atrás"
            />
            <ActivityItem
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
      <ActiveUsersCard
        usuariosAtivos={stats?.usuariosAtivos || 0}
        totalUsuarios={stats?.totalUsuarios || 0}
      />
    </DashboardContainer>
  )
}



export default AdminDashboard