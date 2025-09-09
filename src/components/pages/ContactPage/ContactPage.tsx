import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Contact from '@components/sections/Contact'
import GlobalStyles from '@/styles/globalStyles'
import { PageContainer, MainContent } from './ContactPage.styles'

const ContactPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO 
        title="Fale Conosco - Contabiligrejinha | Contato Escritório Contábil Igrejinha RS"
        description="Entre em contato com nosso escritório de contabilidade em Igrejinha RS. Solicite orçamento para serviços contábeis para pequenas empresas."
        keywords="contato contabilidade Igrejinha RS, fale conosco escritório contábil, atendimento contabilidade Igrejinha, orçamento contabilidade"
      />
      <GlobalStyles />
      <PageContainer>
        <Header />
        <MainContent>
          <Contact />
        </MainContent>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default ContactPage