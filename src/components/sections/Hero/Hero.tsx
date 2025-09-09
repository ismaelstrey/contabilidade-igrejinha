import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import { useTheme } from '@/contexts/ThemeContext'
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
  const { themeMode } = useTheme()
  
  // Variantes de animação otimizadas para melhor performance
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.2 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100
      }
    }),
    floating: {
      y: [-8, 8, -8],
      rotate: [-1, 1, -1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }
  
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }
  
  const subtitleVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: 'easeOut'
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.div
              variants={subtitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <HeroSubtitle>
                Escritório de Contabilidade em Igrejinha RS
              </HeroSubtitle>
            </motion.div>
            
            <motion.div
              variants={titleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <HeroTitle>
                Contabiligrejinha: Seu Escritório de
                <span> Contabilidade em Igrejinha RS</span>
              </HeroTitle>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <HeroDescription>
                {companyInfo.description}
              </HeroDescription>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <HeroButtons>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: themeMode === 'dark' 
                      ? '0 10px 30px rgba(96, 165, 250, 0.3)' 
                      : '0 10px 30px rgba(59, 130, 246, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    href="/#servicos"
                    onClick={() => scrollToSection('services')}
                  >
                    Nossos Serviços
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: themeMode === 'dark' 
                      ? '0 10px 30px rgba(96, 165, 250, 0.2)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    href="/#contato"
                    onClick={() => scrollToSection('contact')}
                  >
                    Fale Conosco
                  </Button>
                </motion.div>
              </HeroButtons>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <StatsGrid>
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    as={motion.div}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.9 + index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }}
                    viewport={{ once: true }}
                  >
                    <StatNumber>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </StatsGrid>
            </motion.div>
          </motion.div>

          <HeroImage>
            <FloatingCard
              as={motion.div}
              custom={0}
              initial="hidden"
              animate={["visible", "floating"]}
              variants={cardVariants}
              whileHover={{
                scale: 1.1,
                rotate: 2,
                boxShadow: themeMode === 'dark' 
                  ? '0 30px 40px -10px rgba(0, 0, 0, 0.5), 0 20px 20px -10px rgba(96, 165, 250, 0.2)'
                  : '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                transition: { type: 'spring', stiffness: 300 }
              }}
              style={{ top: '10%', right: '10%' }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                📊
              </motion.span>
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
              whileHover={{
                scale: 1.1,
                rotate: -2,
                boxShadow: themeMode === 'dark' 
                  ? '0 30px 40px -10px rgba(0, 0, 0, 0.5), 0 20px 20px -10px rgba(96, 165, 250, 0.2)'
                  : '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                transition: { type: 'spring', stiffness: 300 }
              }}
              style={{ top: '40%', left: '5%' }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                ⚡
              </motion.span>
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
              whileHover={{
                scale: 1.1,
                rotate: 1,
                boxShadow: themeMode === 'dark' 
                  ? '0 30px 40px -10px rgba(0, 0, 0, 0.5), 0 20px 20px -10px rgba(96, 165, 250, 0.2)'
                  : '0 30px 60px -12px rgba(0, 0, 0, 0.3)',
                transition: { type: 'spring', stiffness: 300 }
              }}
              style={{ bottom: '20%', right: '5%' }}
            >
              <motion.span
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                🛡️
              </motion.span>
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