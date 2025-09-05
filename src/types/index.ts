import React from 'react'

// Tipos para os dados do site
export interface CompanyInfo {
  name: string
  description: string
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  socialMedia: {
    facebook?: string
    instagram?: string
    linkedin?: string
    whatsapp?: string
  }
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  description: string
  photo: string
  qualifications: string[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  message: string
  rating: number
  photo?: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  category: string
  tags: string[]
  featuredImage: string
}

// Tipos para componentes
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export interface AnimationProps {
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}