import React from 'react'
import {
  ActivityItem as StyledActivityItem,
  ActivityIconContainer,
  ActivityIcon,
  ActivityContent,
  ActivityMessage,
  ActivityTime
} from './AdminDashboard.styles'

/**
 * Propriedades do componente ActivityItem
 */
interface ActivityItemProps {
  type: 'user' | 'contact' | 'service'
  message: string
  time: string
}

/**
 * Componente de item de atividade
 */
const ActivityItem: React.FC<ActivityItemProps> = ({ type, message, time }) => {
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
    <StyledActivityItem>
      <ActivityIconContainer $type={type}>
        <ActivityIcon fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {iconMap[type]}
        </ActivityIcon>
      </ActivityIconContainer>
      <ActivityContent>
        <ActivityMessage>{message}</ActivityMessage>
        <ActivityTime>{time}</ActivityTime>
      </ActivityContent>
    </StyledActivityItem>
  )
}

export default ActivityItem
export type { ActivityItemProps }