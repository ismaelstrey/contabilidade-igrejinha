import React from 'react'
import {
  ContentCard,
  ContentCardTitle,
  UsersActiveHeader,
  UsersActiveCount,
  ProgressBarContainer,
  ProgressBar,
  ProgressText
} from './AdminDashboard.styles'

/**
 * Propriedades do componente ActiveUsersCard
 */
interface ActiveUsersCardProps {
  usuariosAtivos: number
  totalUsuarios: number
}

/**
 * Componente de card de usuários ativos
 */
const ActiveUsersCard: React.FC<ActiveUsersCardProps> = ({ usuariosAtivos, totalUsuarios }) => {
  const percentage = totalUsuarios && usuariosAtivos ? (usuariosAtivos / totalUsuarios) * 100 : 0
  const roundedPercentage = Math.round(percentage)

  return (
    <ContentCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <UsersActiveHeader>
        <ContentCardTitle>Usuários Ativos</ContentCardTitle>
        <UsersActiveCount>
          {usuariosAtivos} de {totalUsuarios} usuários
        </UsersActiveCount>
      </UsersActiveHeader>
      <ProgressBarContainer>
        <ProgressBar $percentage={percentage} />
      </ProgressBarContainer>
      <ProgressText>
        {roundedPercentage}% dos usuários estão ativos
      </ProgressText>
    </ContentCard>
  )
}

export default ActiveUsersCard
export type { ActiveUsersCardProps }