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
        title="Fale Conosco - Contabiligrejinha"
        description="Entre em contato conosco para esclarecer dúvidas ou solicitar nossos serviços de contabilidade para igrejas."
        keywords="contato contabilidade, fale conosco, atendimento igreja"
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