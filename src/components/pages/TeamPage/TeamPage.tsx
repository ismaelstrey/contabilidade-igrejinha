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
        title="Nossa Equipe - Contabiligrejinha"
        description="Conheça nossa equipe de profissionais especializados em contabilidade para igrejas e organizações religiosas."
        keywords="equipe contabilidade, profissionais contábeis, contabilidade religiosa"
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