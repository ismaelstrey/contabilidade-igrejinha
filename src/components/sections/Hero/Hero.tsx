import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, CheckCircle2, MessageCircle, ShieldCheck, Zap } from 'lucide-react'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import companyInfo from '@data/companyInfo.json'
import {
  HeroSection,
  HeroContent,
  HeroCopy,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  HeroButtons,
  HeroVisual,
  HeroImageCard,
  HeroMetrics,
  MetricItem,
  MetricNumber,
  MetricLabel,
  FloatingCard,
  TrustStrip,
  TrustItem
} from './Hero.styles'

const stats = [
  { number: '500+', label: 'empresas atendidas' },
  { number: '15+', label: 'anos de experiência' },
  { number: '98%', label: 'clientes satisfeitos' }
]

const trustItems = [
  { icon: CheckCircle2, label: 'Rotina fiscal em dia' },
  { icon: ShieldCheck, label: 'Dados protegidos' },
  { icon: Zap, label: 'Resposta ágil' }
]

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection id="hero">
      <Container>
        <HeroContent>
          <HeroCopy
            as={motion.div}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <HeroEyebrow>Contabilidade em Igrejinha RS</HeroEyebrow>
            <HeroTitle>
              Gestão contábil clara para pequenas empresas crescerem com segurança
            </HeroTitle>
            <HeroDescription>{companyInfo.description}</HeroDescription>

            <HeroButtons>
              <Button
                variant="primary"
                size="lg"
                href="/#services"
                onClick={() => scrollToSection('services')}
              >
                Ver serviços <ArrowRight size={18} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/#contact"
                onClick={() => scrollToSection('contact')}
              >
                <MessageCircle size={18} /> Fale conosco
              </Button>
            </HeroButtons>

            <HeroMetrics>
              {stats.map((stat) => (
                <MetricItem key={stat.label}>
                  <MetricNumber>{stat.number}</MetricNumber>
                  <MetricLabel>{stat.label}</MetricLabel>
                </MetricItem>
              ))}
            </HeroMetrics>
          </HeroCopy>

          <HeroVisual
            as={motion.div}
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <HeroImageCard>
              <img
                src="/images/sobre_nos-convertido-de-png.webp"
                alt="Equipe da Contabiligrejinha em atendimento contábil"
                width="640"
                height="520"
              />
              <FloatingCard>
                <BarChart3 size={26} />
                <div>
                  <strong>Fechamento mensal</strong>
                  <span>Relatórios claros e acompanhamento próximo</span>
                </div>
              </FloatingCard>
            </HeroImageCard>

            <TrustStrip aria-label="Diferenciais da Contabiligrejinha">
              {trustItems.map(({ icon: Icon, label }) => (
                <TrustItem key={label}>
                  <Icon size={18} />
                  <span>{label}</span>
                </TrustItem>
              ))}
            </TrustStrip>
          </HeroVisual>
        </HeroContent>
      </Container>
    </HeroSection>
  )
}

export default Hero
