import React from 'react'
import { motion } from 'framer-motion'
import services from '@data/services.json'
import ServiceHeader from './ServiceHeader'
import ServiceGrid from './ServiceGrid'
import { ServicesSection, ServicesContainer } from './Services.styles'

const Services: React.FC = () => {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ServicesSection id="services">
      <ServicesContainer
        as={motion.div}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <ServiceHeader
          subtitle="Serviços contábeis"
          title="Soluções para cada fase da sua empresa"
        />

        <ServiceGrid services={services} onContactClick={handleContactClick} />
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services
