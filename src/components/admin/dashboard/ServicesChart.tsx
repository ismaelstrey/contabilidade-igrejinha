import React from 'react'
import {
  ContentCard,
  ContentCardTitle,
  ContentCardList,
  ServiceItem,
  ServiceInfo,
  ServiceIndicator,
  ServiceName,
  ServiceCount
} from './AdminDashboard.styles'

/**
 * Tipo para serviço popular
 */
interface ServicoPopular {
  nome: string
  quantidade: number
}

/**
 * Propriedades do componente ServicesChart
 */
interface ServicesChartProps {
  servicosMaisPopulares: ServicoPopular[]
}

/**
 * Componente de gráfico de serviços mais populares
 */
const ServicesChart: React.FC<ServicesChartProps> = ({ servicosMaisPopulares }) => {
  return (
    <ContentCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <ContentCardTitle>Serviços Mais Populares</ContentCardTitle>
      <ContentCardList>
        {servicosMaisPopulares.map((servico, index) => (
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
  )
}

export default ServicesChart
export type { ServicesChartProps, ServicoPopular }