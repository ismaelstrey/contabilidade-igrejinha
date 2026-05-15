import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import Container from '@components/common/Container'
import companyInfo from '@data/companyInfo.json'
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  FooterTitle,
  FooterText,
  FooterLink,
  FooterIconLink,
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
      return true
    }

    return false
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Início', href: 'hero', url: '/' },
    { label: 'Serviços', href: 'services', url: '/#services' },
    { label: 'Sobre Nós', href: 'about', url: '/#sobre' },
    { label: 'Equipe', href: 'team', url: '/equipe' },
    { label: 'Depoimentos', href: 'testimonials', url: '/#testimonials' },
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
                  <MessageCircle size={19} />
                </SocialLink>
              )}
              {companyInfo.socialMedia.instagram && (
                <SocialLink
                  href={companyInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={19} />
                </SocialLink>
              )}
              {companyInfo.socialMedia.linkedin && (
                <SocialLink
                  href={companyInfo.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={19} />
                </SocialLink>
              )}
              {companyInfo.socialMedia.facebook && (
                <SocialLink
                  href={companyInfo.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={19} />
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
                      if (!scrollToSection(link.href)) {
                        window.location.href = link.url
                      }
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
                    href="/#services"
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
                  <FooterIconLink as="span">
                    <MapPin size={17} />
                    <span>
                      {companyInfo.address.street}<br />
                      {companyInfo.address.city}, {companyInfo.address.state}<br />
                      CEP: {companyInfo.address.zipCode}
                    </span>
                  </FooterIconLink>
                </FooterText>
              </FooterListItem>
              <FooterListItem>
                <FooterIconLink href={`tel:${companyInfo.phone}`}>
                  <Phone size={17} />
                  <span>{companyInfo.phone}</span>
                </FooterIconLink>
              </FooterListItem>
              <FooterListItem>
                <FooterIconLink href={`mailto:${companyInfo.email}`}>
                  <Mail size={17} />
                  <span>{companyInfo.email}</span>
                </FooterIconLink>
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
