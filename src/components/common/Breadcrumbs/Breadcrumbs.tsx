import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const BreadcrumbsContainer = styled(motion.nav)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 2rem;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`

const BreadcrumbLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
    text-decoration: underline;
  }
`

const BreadcrumbText = styled.span`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
`

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 14px;
`

const HomeIcon = styled.span`
  font-size: 16px;
  margin-right: 4px;
`

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  if (!items || items.length === 0) return null

  return (
    <BreadcrumbsContainer
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && <HomeIcon>🏠</HomeIcon>}
          
          {index < items.length - 1 ? (
            <BreadcrumbLink to={item.url}>
              {item.name}
            </BreadcrumbLink>
          ) : (
            <BreadcrumbText>{item.name}</BreadcrumbText>
          )}
          
          {index < items.length - 1 && (
            <Separator>›</Separator>
          )}
        </React.Fragment>
      ))}
    </BreadcrumbsContainer>
  )
}

export default Breadcrumbs