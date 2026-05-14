import React from 'react'
import { ArrowRight, BriefcaseBusiness, Building2, Calculator, Check, FileText, Lightbulb, Store } from 'lucide-react'
import Button from '@components/common/Button'
import {
  ServiceCard as StyledServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  ServicePrice
} from './Services.styles'
import { ServiceData } from './ServiceGrid'

const iconMap = {
  'contabilidade-geral': Calculator,
  'abertura-empresa': Building2,
  'departamento-pessoal': BriefcaseBusiness,
  'fiscal-tributario': FileText,
  consultoria: Lightbulb,
  'mei-simples': Store
}

interface ServiceCardProps {
  service: ServiceData
  onContactClick: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContactClick }) => {
  const Icon = iconMap[service.id as keyof typeof iconMap] ?? Calculator

  return (
    <StyledServiceCard>
      <ServiceIcon>
        <Icon size={28} />
      </ServiceIcon>

      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDescription>{service.description}</ServiceDescription>

      <ServiceFeatures>
        {service.features.map((feature) => (
          <ServiceFeature key={feature}>
            <Check size={16} />
            {feature}
          </ServiceFeature>
        ))}
      </ServiceFeatures>

      {service.price && <ServicePrice>{service.price}</ServicePrice>}

      <Button variant="outline" size="sm" href="/#contact" onClick={onContactClick}>
        Solicitar orçamento <ArrowRight size={16} />
      </Button>
    </StyledServiceCard>
  )
}

export default ServiceCard
