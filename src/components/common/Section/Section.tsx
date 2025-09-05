import React from 'react'
import { motion } from 'framer-motion'
import { SectionProps } from '@/types'
import { StyledSection } from './Section.styles'

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  return (
    <StyledSection
      as={motion.section}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </StyledSection>
  )
}

export default Section