import React from 'react'
import { DashboardHeader as StyledDashboardHeader } from './AdminDashboard.styles'

/**
 * Propriedades do componente DashboardHeader
 */
interface DashboardHeaderProps {
  title?: string
  children?: React.ReactNode
}

/**
 * Componente de cabeçalho do dashboard
 */
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ 
  title = 'Dashboard', 
  children 
}) => {
  return (
    <StyledDashboardHeader>
      <h1>{title}</h1>
      {children}
    </StyledDashboardHeader>
  )
}

export default DashboardHeader
export type { DashboardHeaderProps }