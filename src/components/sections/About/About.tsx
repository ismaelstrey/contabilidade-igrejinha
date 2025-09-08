import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import companyInfo from '@data/companyInfo.json'
import aboutStats from '@data/aboutStats.json'
import aboutFeatures from '@data/aboutFeatures.json'
import {
  AboutContent,
  AboutGrid,
  AboutText,
  AboutImage,
  AboutTitle,
  AboutSubtitle,
  AboutDescription,
  AboutStats,
  StatItem,
  StatNumber,
  StatLabel,
  AboutFeatures,
  FeatureItem,
  FeatureIcon,
  FeatureText,
  ImageContainer,
  FloatingCard
} from './About.styles'

const About: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }



  return (
    <Section id="about">
      <Container>
        <AboutContent
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutGrid>
            <AboutText>
              <motion.div variants={itemVariants}>
                <AboutSubtitle>Sobre Nós</AboutSubtitle>
                <AboutTitle>
                  Sua parceira de confiança em
                  <span> soluções contábeis</span>
                </AboutTitle>
                <AboutDescription>
                  {companyInfo.description}
                </AboutDescription>
                <AboutDescription>
                  Com mais de 15 anos de experiência no mercado, nossa equipe especializada
                  oferece soluções completas em contabilidade, sempre focando na excelência
                  e na satisfação dos nossos clientes.
                </AboutDescription>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AboutFeatures>
                  {aboutFeatures.map((feature, index) => (
                    <FeatureItem key={index}>
                      <FeatureIcon>{feature.icon}</FeatureIcon>
                      <FeatureText>{feature.text}</FeatureText>
                    </FeatureItem>
                  ))}
                </AboutFeatures>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  variant="primary"
                  size="lg"
                  href="/#contato"
                  onClick={() => scrollToSection('contact')}
                >
                  Fale Conosco
                </Button>
              </motion.div>
            </AboutText>

            <AboutImage>
              <motion.div variants={itemVariants}>
                <ImageContainer>
                  <img
                    src="/images/sobre_nos.png"
                    alt="Equipe de contabilidade trabalhando"
                  />

                  <FloatingCard
                    as={motion.div}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div>✅</div>
                    <div>
                      <strong>Certificação CRC</strong>
                      <p>Profissionais qualificados</p>
                    </div>
                  </FloatingCard>
                </ImageContainer>
              </motion.div>
            </AboutImage>
          </AboutGrid>

          <motion.div variants={itemVariants}>
            <AboutStats>
              {aboutStats.map((stat, index) => (
                <StatItem
                  key={index}
                  as={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </AboutStats>
          </motion.div>
        </AboutContent>
      </Container>
    </Section>
  )
}

export default About