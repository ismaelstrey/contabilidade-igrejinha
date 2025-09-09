import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Team from '@components/sections/Team'
import GlobalStyles from '@/styles/globalStyles'
import { PageContainer, MainContent } from './TeamPage.styles'

const TeamPage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SEO 
        title="Nossa Equipe - Contabiligrejinha | Contadores em Igrejinha RS"
        description="Conheça nossa equipe de contadores especializados em Igrejinha RS. Profissionais qualificados para atender pequenas empresas."
        keywords="equipe contabilidade Igrejinha RS, contadores Igrejinha, profissionais contábeis, escritório contábil Igrejinha"
      />
      <GlobalStyles />
      <PageContainer>
        <Header />
        <MainContent>
          <Team />
        </MainContent>
        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default TeamPage