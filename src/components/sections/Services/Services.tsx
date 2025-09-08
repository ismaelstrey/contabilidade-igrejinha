import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import servicesData from '@data/services.json'
import {
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
  ServiceFeatures,
  ServiceFeature,
  ServicePrice,
  SectionHeader,
  SectionTitle,
  SectionSubtitle
} from './Services.styles'

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <Section id="services">
      <Container>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionSubtitle>Nossos Serviços</SectionSubtitle>
            <SectionTitle>
              Soluções completas para sua empresa
            </SectionTitle>
          </motion.div>
        </SectionHeader>

        <ServicesGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              as={motion.div}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ duration: 0.3 }}
            >
              <ServiceIcon>{service.icon}</ServiceIcon>
              
              <ServiceTitle>{service.title}</ServiceTitle>
              
              <ServiceDescription>
                {service.description}
              </ServiceDescription>
              
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index}>
                    <span>✓</span>
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              
              {service.price && (
                <ServicePrice>{service.price}</ServicePrice>
              )}
              
              <Button
                variant="outline"
                size="sm"
                href="/#contato"
                onClick={() => scrollToSection('contact')}
              >
                Solicitar Orçamento
              </Button>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <motion.div
          style={{ textAlign: 'center', marginTop: '3rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            variant="primary"
            size="lg"
            href="/#contato"
            onClick={() => scrollToSection('contact')}
          >
            Fale Conosco para Mais Informações
          </Button>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Services