import React from 'react'
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
 * Propriedades do componente StatCard
 */
interface StatCardProps {
  title: string
  value: number
  change?: number
  icon: string
  color: 'blue' | 'green' | 'yellow' | 'red'
  urgent?: boolean
}

/**
 * Componente de card de estatística
 */
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

export default StatCard
export type { StatCardProps }