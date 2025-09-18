import React from 'react'
import { motion } from 'framer-motion'
import ServiceHeader from './ServiceHeader'
import ServiceGrid from './ServiceGrid'
import {
  ServicesSection,
  ServicesContainer
} from './Services.styles'

/**
 * Componente principal da seção de serviços
 * Responsável por orquestrar os subcomponentes e gerenciar dados
 */
const Services: React.FC = () => {
  // Dados dos serviços - poderia vir de uma API ou contexto
  const services = [
    {
      id: 'contabilidade-geral',
      title: 'Contabilidade Geral',
      description: 'Serviços completos de contabilidade para manter sua empresa em dia com todas as obrigações fiscais e contábeis.',
      icon: '📊',
      features: [
        'Escrituração contábil',
        'Balancetes mensais',
        'Balanços anuais',
        'Análises financeiras',
        'Conciliação bancária',
        'Controle patrimonial'
      ],
      price: 'A partir de R$ 299/mês'
    },
    {
      id: 'abertura-empresa',
      title: 'Abertura de Empresa',
      description: 'Processo completo para abertura da sua empresa de forma rápida e descomplicada.',
      icon: '🏢',
      features: [
        'Consulta de viabilidade',
        'Registro na Junta Comercial',
        'Inscrição municipal',
        'Obtenção do CNPJ',
        'Inscrições fiscais (ICMS, IE, IM)',
        'Alvará de funcionamento'
      ],
      price: 'A partir de R$ 500'
    },
    {
      id: 'departamento-pessoal',
      title: 'Departamento Pessoal',
      description: 'Gestão completa de recursos humanos e folha de pagamento para sua empresa.',
      icon: '👥',
      features: [
        'Folha de pagamento',
        'Admissões e demissões',
        'Férias e 13º salário',
        'Obrigações trabalhistas',
        'Relatórios e FGTS',
        'eSocial e FGTS'
      ],
      price: 'A partir de R$ 35/funcionário'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  /**
   * Função para lidar com cliques no botão de contato
   * Faz scroll suave até a seção de contato
   */
  const handleContactClick = () => {
    const contactSection = document.getElementById('contato')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <ServicesSection id="servicos">
      <ServicesContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ServiceHeader
          subtitle="Nossos Serviços"
          title="Soluções Completas em Contabilidade"
        />

        <ServiceGrid
          services={services}
          onContactClick={handleContactClick}
        />
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services