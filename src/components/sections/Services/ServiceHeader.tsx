import React from 'react'
import { SectionHeader, SectionSubtitle, SectionTitle, SectionLead } from './Services.styles'

interface ServiceHeaderProps {
  subtitle?: string
  title: string
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  subtitle = 'Serviços contábeis',
  title = 'Soluções completas em contabilidade'
}) => {
  return (
    <SectionHeader>
      <SectionSubtitle>{subtitle}</SectionSubtitle>
      <SectionTitle>{title}</SectionTitle>
      <SectionLead>
        Atendimento consultivo, rotina organizada e informações simples de entender para você tomar decisões melhores.
      </SectionLead>
    </SectionHeader>
  )
}

export default ServiceHeader
