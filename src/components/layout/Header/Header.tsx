import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import companyInfo from '@data/companyInfo.json'
import {
  HeaderContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  ContactInfo
} from './Header.styles'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // Detecta scroll para adicionar efeito no header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para navegação
  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === '/' && sectionId) {
      // Se estamos na home e há uma seção, faz scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navega para a página
      navigate(path)
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Início', path: '/', sectionId: 'hero', href: '/' },
    { label: 'Serviços', path: '/', sectionId: 'services', href: '/#servicos' },
    { label: 'Sobre', path: '/', sectionId: 'about', href: '/#sobre' },
    { label: 'Equipe', path: '/equipe', href: '/equipe' },
    { label: 'Posts', path: '/posts', href: '/posts' },
    { label: 'Depoimentos', path: '/', sectionId: 'testimonials', href: '/#depoimentos' },
    { label: 'FAQ', path: '/faq', href: '/faq' }
  ]

  return (
    <HeaderContainer
      as={motion.header}
      isScrolled={isScrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Nav>
          <Logo onClick={() => handleNavigation('/', 'hero')}>
            {companyInfo.name}
          </Logo>

          <NavList>
            {navItems.map((item) => (
              <NavItem key={item.path + (item.sectionId || '')}>
                <NavLink 
                  as="a"
                  href={item.href}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    handleNavigation(item.path, item.sectionId)
                  }}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            ))}
          </NavList>

          <ContactInfo>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavigation('/contato')}
            >
              Fale Conosco
            </Button>
          </ContactInfo>

          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </Nav>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Container>
              {navItems.map((item) => (
                <NavLink
                  key={item.path + (item.sectionId || '')}
                  as="a"
                  href={item.href}
                  onClick={(e: React.MouseEvent) => {
                    e.preventDefault()
                    handleNavigation(item.path, item.sectionId)
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button
                variant="primary"
                size="md"
                onClick={() => handleNavigation('/contato')}
              >
                Fale Conosco
              </Button>
            </Container>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  )
}

export default Header