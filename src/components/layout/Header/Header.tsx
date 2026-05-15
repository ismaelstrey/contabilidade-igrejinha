import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from '@components/common/Container'
import Button from '@components/common/Button'
import ThemeToggle from '@components/common/ThemeToggle'
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigation = (path: string, sectionId?: string) => {
    if (location.pathname === '/' && sectionId) {
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
    { label: 'Serviços', path: '/', sectionId: 'services', href: '/#services' },
    { label: 'Sobre', path: '/', sectionId: 'about', href: '/#sobre' },
    { label: 'Equipe', path: '/equipe', href: '/equipe' },
    { label: 'Posts', path: '/posts', href: '/posts' },
    { label: 'Depoimentos', path: '/', sectionId: 'testimonials', href: '/#testimonials' },
    { label: 'FAQ', path: '/faq', href: '/faq' },
    { label: 'Contato', path: '/', sectionId: 'contact', href: '/#contact' }
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
            <ThemeToggle />
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
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
