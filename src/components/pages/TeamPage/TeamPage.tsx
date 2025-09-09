import React from 'react'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Team from '@components/sections/Team'
import { PageContainer, MainContent } from './TeamPage.styles'

const TeamPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Nossa Equipe - Contabiligrejinha | Contadores em Igrejinha RS"
        description="Conheça nossa equipe de contadores especializados em Igrejinha RS. Profissionais qualificados para atender pequenas empresas."
        keywords="equipe contabilidade Igrejinha RS, contadores Igrejinha, profissionais contábeis, escritório contábil Igrejinha"
      />
      <PageContainer>
        <Header />
        <MainContent>
          <Team />
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default TeamPage