import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
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
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    // Animação GSAP para os cards flutuantes
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          delay: 0.5
        }
      )

      // Animação de flutuação contínua
      gsap.to(cardsRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        stagger: 0.3
      })
    }
  }, [])

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
    <HeroSection id="hero" ref={heroRef}>
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
              ref={(el) => el && (cardsRef.current[0] = el)}
              style={{ top: '10%', right: '10%' }}
            >
              <span>📊</span>
              <div>
                <strong>Relatórios</strong>
                <p>Mensais detalhados</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              ref={(el) => el && (cardsRef.current[1] = el)}
              style={{ top: '40%', left: '5%' }}
            >
              <span>⚡</span>
              <div>
                <strong>Agilidade</strong>
                <p>Processos rápidos</p>
              </div>
            </FloatingCard>
            
            <FloatingCard
              ref={(el) => el && (cardsRef.current[2] = el)}
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