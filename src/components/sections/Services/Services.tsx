import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import { useTheme } from '@/contexts/ThemeContext'
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
  const { themeMode } = useTheme()

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
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
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
          viewport={{ once: true, margin: '-50px' }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              as={motion.div}
              variants={cardVariants}
              whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                boxShadow: themeMode === 'dark'
                  ? '0 30px 60px rgba(0, 0, 0, 0.6), 0 15px 30px rgba(59, 130, 246, 0.4), 0 5px 15px rgba(139, 92, 246, 0.3)'
                  : '0 25px 50px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(37, 99, 235, 0.2)'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.4,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  display: 'inline-block'
                }}
              >
                <ServiceIcon>{service.icon}</ServiceIcon>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceTitle>{service.title}</ServiceTitle>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ServiceFeatures>
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.7 + index * 0.1 + featureIndex * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        x: 8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <ServiceFeature>
                        <motion.span
                          whileHover={{
                            scale: 1.2,
                            rotate: 360,
                            transition: { duration: 0.3 }
                          }}
                        >
                          ✓
                        </motion.span>
                        {feature}
                      </ServiceFeature>
                    </motion.div>
                  ))}
                </ServiceFeatures>
              </motion.div>

              {service.price && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.6,
                    type: 'spring',
                    stiffness: 150
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <ServicePrice>{service.price}</ServicePrice>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.0 + index * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 120
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <Button
                  variant="outline"
                  size="sm"
                  href="/#contato"
                  onClick={() => scrollToSection('contact')}
                >
                  Solicitar Orçamento
                </Button>
              </motion.div>
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