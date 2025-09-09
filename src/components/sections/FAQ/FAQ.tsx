import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@components/common/Container'
import { useTheme } from '@/contexts/ThemeContext'
import faqData from '@data/faq.json'
import {
  FAQContainer,
  FAQHeader,
  FAQTitle,
  FAQSubtitle,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from './FAQ.styles'

interface FAQItemType {
  id: string
  question: string
  answer: string
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([])
  const { themeMode } = useTheme()

  // Função para alternar a abertura/fechamento de um item do FAQ
  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  return (
    <FAQContainer id="faq" $themeMode={themeMode}>
      <Container>
        <FAQHeader
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          $themeMode={themeMode}
        >
          <FAQTitle>Perguntas Frequentes</FAQTitle>
          <FAQSubtitle>
            Tire suas dúvidas sobre nossos serviços contábeis
          </FAQSubtitle>
        </FAQHeader>

        <FAQList>
          {faqData.map((item: FAQItemType, index) => {
            const isOpen = openItems.includes(item.id)
            
            return (
              <FAQItem
                key={item.id}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                $themeMode={themeMode}
              >
                <FAQQuestion
                  onClick={() => toggleItem(item.id)}
                  isOpen={isOpen}
                  $themeMode={themeMode}
                >
                  <span>{item.question}</span>
                  <FAQIcon isOpen={isOpen} $themeMode={themeMode}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </FAQIcon>
                </FAQQuestion>

                <AnimatePresence>
                  {isOpen && (
                    <FAQAnswer
                      as={motion.div}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      $themeMode={themeMode}
                    >
                      <p>{item.answer}</p>
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            )
          })}
        </FAQList>
      </Container>
    </FAQContainer>
  )
}

export default FAQ