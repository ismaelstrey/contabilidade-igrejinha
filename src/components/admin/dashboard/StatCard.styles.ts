import styled from 'styled-components'
import { motion } from 'framer-motion'

/**
 * Container do card de estatística
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