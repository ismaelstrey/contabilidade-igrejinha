import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { ServicesGrid } from './Services.styles'

export interface ServiceData {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

interface ServiceGridProps {
  services: ServiceData[]
  onContactClick: () => void
}

const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onContactClick }) => {
  return (
    <ServicesGrid>
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <ServiceCard service={service} onContactClick={onContactClick} />
        </motion.div>
      ))}
    </ServicesGrid>
  )
}

export default ServiceGrid
