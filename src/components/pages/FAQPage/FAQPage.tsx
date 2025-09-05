import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import FAQ from '@components/sections/FAQ'
import GlobalStyles from '@/styles/globalStyles'
import { PageContainer, MainContent } from './FAQPage.styles'

const FAQPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO 
        title="Perguntas Frequentes - Contabiligrejinha"
        description="Encontre respostas para as principais dúvidas sobre contabilidade para igrejas e organizações religiosas."
        keywords="FAQ contabilidade, dúvidas contábeis, perguntas frequentes igreja"
      />
      <GlobalStyles />
      <PageContainer>
        <Header />
        <MainContent>
          <FAQ />
        </MainContent>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default FAQPage