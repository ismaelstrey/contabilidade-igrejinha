import styled from 'styled-components'
import { motion } from 'framer-motion'

/**
 * Container principal do dashboard
 */
export const DashboardContainer = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

/**
 * Container de loading
 */
export const LoadingContainer = styled.div`
  padding: 1.5rem;
`

export const LoadingContent = styled.div`
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export const LoadingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const LoadingCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 8rem;
  border-radius: 0.5rem;
`

export const LoadingChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const LoadingChart = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  height: 16rem;
  border-radius: 0.5rem;
`

/**
 * Container de erro
 */
export const ErrorContainer = styled.div`
  padding: 1.5rem;
`

export const ErrorContent = styled.div`
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  padding: 1rem;
`

export const ErrorInner = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ErrorIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  color: #f87171;
  flex-shrink: 0;
`

export const ErrorTextContainer = styled.div`
  margin-left: 0.75rem;
`

export const ErrorTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: #991b1b;
  margin: 0;
`

export const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #b91c1c;
  margin: 0.25rem 0 0 0;
`

/**
 * Header do dashboard
 */
export const DashboardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const DashboardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

export const DashboardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0.25rem 0 0 0;
  font-size: 0.875rem;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const RefreshButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border-radius: 0.5rem;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light};
  }
`

/**
 * Grid de estatísticas
 */
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

/**
 * Grid de gráficos
 */
export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

/**
 * Card de estatística
 */
interface StatCardContainerProps {
  $urgent?: boolean
}

export const StatCardContainer = styled(motion.div)<StatCardContainerProps>`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: 1.5rem;
  ${({ $urgent }) => $urgent && `
    box-shadow: 0 0 0 2px #fecaca;
  `}
`

export const StatCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StatCardInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatCardTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`

export const StatCardValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0.25rem 0 0 0;
`

interface StatCardChangeProps {
  $positive: boolean
}

export const StatCardChange = styled.p<StatCardChangeProps>`
  font-size: 0.875rem;
  margin: 0.25rem 0 0 0;
  color: ${({ $positive }) => $positive ? '#059669' : '#dc2626'};
`

interface StatCardIconContainerProps {
  $color: 'blue' | 'green' | 'yellow' | 'red'
}

const iconColors = {
  blue: 'background-color: #dbeafe; color: #2563eb;',
  green: 'background-color: #dcfce7; color: #16a34a;',
  yellow: 'background-color: #fef3c7; color: #d97706;',
  red: 'background-color: #fee2e2; color: #dc2626;'
}

export const StatCardIconContainer = styled.div<StatCardIconContainerProps>`
  padding: 0.75rem;
  border-radius: 0.5rem;
  ${({ $color }) => iconColors[$color]}
`

export const StatCardIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
`

/**
 * Cards de conteúdo
 */
export const ContentCard = styled(motion.div)`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  padding: 1.5rem;
`

export const ContentCardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 1rem 0;
`

export const ContentCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

/**
 * Serviços populares
 */
export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ServiceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface ServiceIndicatorProps {
  $index: number
}

const getServiceColor = (index: number) => {
  if (index === 0) return '#6366f1'
  if (index === 1) return '#3b82f6'
  return '#9ca3af'
}

export const ServiceIndicator = styled.div<ServiceIndicatorProps>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${({ $index }) => getServiceColor($index)};
`

export const ServiceName = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`

export const ServiceCount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`

/**
 * Atividade recente
 */
export const ActivityItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
`

interface ActivityIconContainerProps {
  $type: 'user' | 'contact' | 'service'
}

const activityColors = {
  user: 'background-color: #dbeafe; color: #2563eb;',
  contact: 'background-color: #dcfce7; color: #16a34a;',
  service: 'background-color: #fef3c7; color: #d97706;'
}

export const ActivityIconContainer = styled.div<ActivityIconContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  ${({ $type }) => activityColors[$type]}
`

export const ActivityIcon = styled.svg`
  width: 1rem;
  height: 1rem;
`



export const ActivityContent = styled.div`
  flex: 1;
`

export const ActivityMessage = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`

export const ActivityTime = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0.25rem 0 0 0;
`

export const ActivityFooter = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`

export const ViewAllButton = styled.button`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`

/**
 * Usuários ativos
 */
export const UsersActiveHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

export const UsersActiveCount = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 9999px;
  height: 0.5rem;
  overflow: hidden;
`

interface ProgressBarProps {
  $percentage: number
}

export const ProgressBar = styled.div<ProgressBarProps>`
  background-color: ${({ theme }) => theme.colors.primary.main};
  height: 100%;
  border-radius: 9999px;
  transition: width 0.5s ease;
  width: ${({ $percentage }) => $percentage}%;
`

export const ProgressText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0.5rem 0 0 0;
`