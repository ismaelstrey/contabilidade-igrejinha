import React from 'react'
import SEO from '@components/common/SEO'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import Contact from '@components/sections/Contact'
import { PageContainer, MainContent } from './ContactPage.styles'

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Fale Conosco - Contabiligrejinha | Contato Escritório Contábil Igrejinha RS"
        description="Entre em contato com nosso escritório de contabilidade em Igrejinha RS. Solicite orçamento para serviços contábeis para pequenas empresas."
        keywords="contato contabilidade Igrejinha RS, fale conosco escritório contábil, atendimento contabilidade Igrejinha, orçamento contabilidade"
      />
      <PageContainer>
        <Header />
        <MainContent>
          <Contact />
        </MainContent>
        <Footer />
      </PageContainer>
    </>
  )
}

export default ContactPage