import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import companyInfo from '@data/companyInfo.json'
import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroButtons,
  HeroImage,
  FloatingCard,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel
} from './Hero.styles'

const Hero: React.FC = () => {
  // Variantes de animação para framer-motion
  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + i * 0.2,
        duration: 1,
        ease: [0.68, -0.55, 0.265, 1.55] // back.out equivalent
      }
    }),
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { number: '500+', label: 'Empresas Atendidas' },
    { number: '15+', label: 'Anos de Experiência' },
    { number: '98%', label: 'Clientes Satisfeitos' },
    { number: '24h', label: 'Suporte Disponível' }
  ]

  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSubtitle>
              Contabilidade Especializada
            </HeroSubtitle>
            <HeroTitle>
              Sua empresa em
              <span> boas mãos</span>
            </HeroTitle>
            <HeroDescription>
              {companyInfo.description}
            </HeroDescription>
            
            <HeroButtons>
              <Button
                variant="primary"
                size="lg"
                href="/#servicos"
                onClick={() => scrollToSection('services')}
              >
                Nossos Serviços
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/#contato"
                onClick={() => scrollToSection('contact')}
              >
                Fale Conosco
              </Button>
            </HeroButtons>

            <StatsGrid>
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsGrid>
          </motion.div>

          <HeroImage>
            <FloatingCard
              as={motion.div}
              custom={0}
              initial="hidden"
              animate={["visible", "floating"]}
              variants={cardVariants}
              style={{ top: '10%', right: '10%' }}
            >
              <span>📊</span>
              <div>
                <strong>Relatórios</strong>
                <p>Mensais detalhados</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              as={motion.div}
              custom={1}
              initial="hidden"
              animate={["visible", "floating"]}
              variants={cardVariants}
              style={{ top: '40%', left: '5%' }}
            >
              <span>⚡</span>
              <div>
                <strong>Agilidade</strong>
                <p>Processos rápidos</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              as={motion.div}
              custom={2}
              initial="hidden"
              animate={["visible", "floating"]}
              variants={cardVariants}
              style={{ bottom: '20%', right: '5%' }}
            >
              <span>🛡️</span>
              <div>
                <strong>Segurança</strong>
                <p>Dados protegidos</p>
              </div>
            </FloatingCard>
          </HeroImage>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero