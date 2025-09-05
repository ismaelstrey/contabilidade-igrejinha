import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import Section from '@components/common/Section'
import Button from '@components/common/Button'
import companyInfo from '@data/companyInfo.json'
import {
  ContactContent,
  ContactGrid,
  ContactInfo,
  ContactForm,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  ContactItem,
  ContactIcon,
  ContactDetails,
  ContactLabel,
  ContactValue,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormRow,
  MapContainer
} from './Contact.styles'

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    try {
      // Aqui você implementaria a lógica de envio real
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Criar mensagem para WhatsApp
      const message = `Olá! Gostaria de solicitar informações sobre os serviços contábeis.\n\n` +
        `Nome: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Telefone: ${formData.phone}\n` +
        `Empresa: ${formData.company}\n` +
        `Serviço: ${formData.service}\n` +
        `Mensagem: ${formData.message}`

      const whatsappUrl = `https://wa.me/${companyInfo.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const contactItems = [
    {
      icon: '📍',
      label: 'Endereço',
      value: `${companyInfo.address.street}, ${companyInfo.address.city} - ${companyInfo.address.state}, CEP: ${companyInfo.address.zipCode}`
    },
    {
      icon: '📞',
      label: 'Telefone',
      value: companyInfo.phone,
      href: `tel:${companyInfo.phone}`
    },
    {
      icon: '✉️',
      label: 'E-mail',
      value: companyInfo.email,
      href: `mailto:${companyInfo.email}`
    },
    {
      icon: '🕒',
      label: 'Horário de Funcionamento',
      value: `${companyInfo.workingHours.weekdays} | Sáb: ${companyInfo.workingHours.saturday} | Dom: ${companyInfo.workingHours.sunday}`
    }
  ]

  const serviceOptions = [
    'Contabilidade Geral',
    'Abertura de Empresa',
    'Departamento Pessoal',
    'Fiscal e Tributário',
    'Consultoria Empresarial',
    'MEI e Simples Nacional',
    'Outros'
  ]

  return (
    <Section id="contact">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeader>
            <motion.div variants={itemVariants}>
              <SectionSubtitle>Contato</SectionSubtitle>
              <SectionTitle>
                Entre em contato conosco
              </SectionTitle>
            </motion.div>
          </SectionHeader>

          <ContactContent>
            <ContactGrid>
              <ContactInfo
                as={motion.div}
                variants={itemVariants}
              >
                {contactItems.map((item, index) => (
                  <ContactItem key={index}>
                    <ContactIcon>{item.icon}</ContactIcon>
                    <ContactDetails>
                      <ContactLabel>{item.label}</ContactLabel>
                      {item.href ? (
                        <ContactValue as="a" href={item.href}>
                          {item.value}
                        </ContactValue>
                      ) : (
                        <ContactValue>{item.value}</ContactValue>
                      )}
                    </ContactDetails>
                  </ContactItem>
                ))}
              </ContactInfo>

              <ContactForm
                as={motion.form}
                variants={itemVariants}
                onSubmit={handleSubmit}
              >
                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="name">Nome Completo *</FormLabel>
                    <FormInput
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Seu nome completo"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="email">E-mail *</FormLabel>
                    <FormInput
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="seu@email.com"
                    />
                  </FormGroup>
                </FormRow>

                <FormRow>
                  <FormGroup>
                    <FormLabel htmlFor="phone">Telefone *</FormLabel>
                    <FormInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(11) 99999-9999"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel htmlFor="company">Empresa</FormLabel>
                    <FormInput
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                    />
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <FormLabel htmlFor="service">Serviço de Interesse</FormLabel>
                  <FormInput
                    as="select"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </FormInput>
                </FormGroup>

                <FormGroup>
                  <FormLabel htmlFor="message">Mensagem *</FormLabel>
                  <FormTextarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Descreva como podemos ajudá-lo..."
                  />
                </FormGroup>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </ContactForm>
            </ContactGrid>

            <MapContainer
              as={motion.div}
              variants={itemVariants}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4247.438629691536!2d-50.79724858849887!3d-29.575250414454583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951923b2a101823d%3A0xbae4d2a01d85a50c!2sR.%20Independ%C3%AAncia%2C%20120%20-%20Centro%2C%20Igrejinha%20-%20RS%2C%2095650-000!5e0!3m2!1spt-BR!2sbr!4v1757100274593!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da empresa"
              />
            </MapContainer>
          </ContactContent>
        </motion.div>
      </Container>
    </Section>
  )
}

export default Contact