import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@components/common/Container'
import testimonialsData from '@data/testimonials.json'
import {
  TestimonialsContainer,
  TestimonialsHeader,
  TestimonialsTitle,
  TestimonialsSubtitle,
  TestimonialsCarousel,
  TestimonialCard,
  TestimonialContent,
  TestimonialMessage,
  TestimonialAuthor,
  AuthorPhoto,
  AuthorInfo,
  AuthorName,
  AuthorCompany,
  TestimonialRating,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot
} from './Testimonials.styles'



const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Função para ir para o próximo depoimento
  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    )
  }

  // Função para ir para o depoimento anterior
  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    )
  }

  // Função para ir para um depoimento específico
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play dos depoimentos
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Muda a cada 5 segundos

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  // Renderizar estrelas de avaliação
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill={index < rating ? "#eab308" : "#e5e7eb"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <TestimonialsContainer id="testimonials">
      <Container>
        <TestimonialsHeader
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TestimonialsTitle>O que nossos clientes dizem</TestimonialsTitle>
          <TestimonialsSubtitle>
            Veja os depoimentos de quem confia em nossos serviços
          </TestimonialsSubtitle>
        </TestimonialsHeader>

        <TestimonialsCarousel
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <TestimonialCard
              key={currentTestimonial.id}
              as={motion.div}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialContent>
                <TestimonialRating>
                  {renderStars(currentTestimonial.rating)}
                </TestimonialRating>
                
                <TestimonialMessage>
                  "{currentTestimonial.message}"
                </TestimonialMessage>
                
                <TestimonialAuthor>
                  <AuthorPhoto>
                    {currentTestimonial.photo && currentTestimonial.photo !== null ? (
                      <img 
                        src={currentTestimonial.photo} 
                        alt={currentTestimonial.name}
                        onLoad={() => console.log('Imagem carregada:', currentTestimonial.photo)}
                        onError={(e) => console.error('Erro ao carregar imagem:', currentTestimonial.photo, e)}
                      />
                    ) : (
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="30" cy="30" r="30" fill="#e5e7eb" />
                        <circle cx="30" cy="22" r="10" fill="#9ca3af" />
                        <path
                          d="M10 50c0-11.046 8.954-20 20-20s20 8.954 20 20"
                          fill="#9ca3af"
                        />
                      </svg>
                    )}
                  </AuthorPhoto>
                  
                  <AuthorInfo>
                    <AuthorName>{currentTestimonial.name}</AuthorName>
                    <AuthorCompany>{currentTestimonial.company}</AuthorCompany>
                  </AuthorInfo>
                </TestimonialAuthor>
              </TestimonialContent>
            </TestimonialCard>
          </AnimatePresence>

          <CarouselControls>
            <CarouselButton onClick={prevTestimonial} aria-label="Depoimento anterior">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CarouselButton>
            
            <CarouselButton onClick={nextTestimonial} aria-label="Próximo depoimento">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </CarouselButton>
          </CarouselControls>
        </TestimonialsCarousel>

        <CarouselDots>
          {testimonialsData.map((_, index) => (
            <CarouselDot
              key={index}
              isActive={index === currentIndex}
              onClick={() => goToTestimonial(index)}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </CarouselDots>
      </Container>
    </TestimonialsContainer>
  )
}

export default Testimonials