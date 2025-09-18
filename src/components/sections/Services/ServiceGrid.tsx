import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { ServicesGrid } from './Services.styles'

interface ServiceData {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

interface ServiceGridProps {
  services: ServiceData[]
  onContactClick: () => void
}

/**
 * Componente responsável por gerenciar o grid de serviços
 * Controla o layout, animações em sequência e responsividade
 */
const ServiceGrid: React.FC<ServiceGridProps> = ({ services, onContactClick }) => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const gridVariants = {
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <ServicesGrid
        as={motion.div}
        variants={gridVariants}
        style={{
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 100,
              rotateX: -30,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: 'spring',
              stiffness: 100,
              damping: 15
            }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <ServiceCard
              service={service}
              index={index}
              onContactClick={onContactClick}
            />
          </motion.div>
        ))}
      </ServicesGrid>

      {/* Elemento decorativo de fundo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{
          delay: 1.5,
          duration: 2,
          ease: "easeOut"
        }}
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      />

      {/* Partículas flutuantes decorativas */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200
          }}
          animate={{
            opacity: [0, 0.3, 0],
            scale: [0, 1, 0],
            x: Math.random() * 600 - 300,
            y: Math.random() * 600 - 300,
            rotate: 360
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: `linear-gradient(45deg, #3b82f6, #8b5cf6)`,
            borderRadius: '50%',
            zIndex: -1,
            pointerEvents: 'none'
          }}
        />
      ))}
    </motion.div>
  )
}

export default ServiceGrid