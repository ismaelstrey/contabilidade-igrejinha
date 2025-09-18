import React from 'react'
import { motion } from 'framer-motion'
import {
  SectionHeader,
  SectionSubtitle,
  SectionTitle
} from './Services.styles'

interface ServiceHeaderProps {
  subtitle?: string
  title: string
}

/**
 * Componente responsável pelo cabeçalho da seção de serviços
 * Inclui animações de entrada e tipografia responsiva
 */
const ServiceHeader: React.FC<ServiceHeaderProps> = ({
  subtitle = "Nossos Serviços",
  title = "Soluções Completas em Contabilidade"
}) => {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <SectionHeader
      as={motion.div}
      variants={headerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        variants={itemVariants}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        <SectionSubtitle>
          {subtitle}
        </SectionSubtitle>
      </motion.div>

      <motion.div
        variants={titleVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        <SectionTitle>
          {title}
        </SectionTitle>
      </motion.div>

      {/* Elemento decorativo animado */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        style={{
          height: '4px',
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
          borderRadius: '2px',
          margin: '1.5rem auto 0',
          position: 'relative'
        }}
      >
        <motion.div
          animate={{
            x: [-10, 10, -10],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '-2px',
            left: '50%',
            width: '8px',
            height: '8px',
            background: '#ffffff',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)'
          }}
        />
      </motion.div>
    </SectionHeader>
  )
}

export default ServiceHeader