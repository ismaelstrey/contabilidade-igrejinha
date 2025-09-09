import React from 'react'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import FAQ from '@components/sections/FAQ'
import { PageContainer, MainContent } from './FAQPage.styles'

const FAQPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Perguntas Frequentes - Contabiligrejinha | Contabilidade em Igrejinha RS"
        description="Encontre respostas para as principais dúvidas sobre contabilidade em Igrejinha RS. FAQ completo sobre serviços contábeis para pequenas empresas."
        keywords="FAQ contabilidade Igrejinha RS, dúvidas contábeis, perguntas frequentes contabilidade, escritório contábil Igrejinha"
      />
      <PageContainer>
        <Header />
        <MainContent>
          <FAQ />
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default FAQPage