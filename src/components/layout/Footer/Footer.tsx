import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import companyInfo from '@data/companyInfo.json'
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterList,
  FooterListItem,
  SocialLinks,
  SocialLink,
  FooterBottom,
  Copyright
} from './Footer.styles'

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Início', href: 'hero', url: '/' },
    { label: 'Serviços', href: 'services', url: '/#servicos' },
    { label: 'Sobre Nós', href: 'about', url: '/#sobre' },
    { label: 'Equipe', href: 'team', url: '/equipe' },
    { label: 'Depoimentos', href: 'testimonials', url: '/#depoimentos' },
    { label: 'FAQ', href: 'faq', url: '/faq' }
  ]

  const services = [
    'Contabilidade Geral',
    'Abertura de Empresa',
    'Departamento Pessoal',
    'Fiscal e Tributário',
    'Consultoria Empresarial',
    'MEI e Simples Nacional'
  ]

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FooterTitle>{companyInfo.name}</FooterTitle>
            <FooterText>{companyInfo.description}</FooterText>
            
            <SocialLinks>
              {companyInfo.socialMedia.whatsapp && (
                <SocialLink
                  href={companyInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  📱
                </SocialLink>
              )}
              {companyInfo.socialMedia.instagram && (
                <SocialLink
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  📷
                </SocialLink>
              )}
              {companyInfo.socialMedia.linkedin && (
                <SocialLink
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  💼
                </SocialLink>
              )}
              {companyInfo.socialMedia.facebook && (
                <SocialLink
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  📘
                </SocialLink>
              )}
            </SocialLinks>
          </FooterSection>

          <FooterSection
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <FooterTitle>Links Rápidos</FooterTitle>
            <FooterList>
              {quickLinks.map((link) => (
                <FooterListItem key={link.href}>
                  <FooterLink 
                    href={link.url}
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                  >
                    {link.label}
                  </FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </FooterSection>

          <FooterSection
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FooterTitle>Serviços</FooterTitle>
            <FooterList>
              {services.map((service) => (
                <FooterListItem key={service}>
                  <FooterLink 
                    href="/#servicos"
                    onClick={(e: React.MouseEvent) => {
                      e.preventDefault()
                      scrollToSection('services')
                    }}
                  >
                    {service}
                  </FooterLink>
                </FooterListItem>
              ))}
            </FooterList>
          </FooterSection>

          <FooterSection
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FooterTitle>Contato</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterText>
                  📍 {companyInfo.address.street}<br />
                  {companyInfo.address.city}, {companyInfo.address.state}<br />
                  CEP: {companyInfo.address.zipCode}
                </FooterText>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href={`tel:${companyInfo.phone}`}>
                  📞 {companyInfo.phone}
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink href={`mailto:${companyInfo.email}`}>
                  ✉️ {companyInfo.email}
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {currentYear} {companyInfo.name}. Todos os direitos reservados.
          </Copyright>
        </FooterBottom>
      </Container>
    </FooterContainer>
  )
}

export default Footer