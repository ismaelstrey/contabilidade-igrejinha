import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
import { useTheme } from '@/contexts/ThemeContext'
import teamData from '@data/team.json'
import {
  TeamContainer,
  TeamHeader,
  TeamTitle,
  TeamSubtitle,
  TeamGrid,
  TeamCard,
  TeamPhoto,
  TeamInfo,
  TeamName,
  TeamPosition,
  TeamDescription,
  TeamQualifications,
  QualificationItem
} from './Team.styles'

interface TeamMember {
  id: string
  name: string
  position: string
  description: string
  photo: string
  qualifications: string[]
}

const Team: React.FC = () => {
  const { themeMode } = useTheme()
  
  return (
    <TeamContainer id="team" $themeMode={themeMode}>
      <Container>
        <TeamHeader
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          $themeMode={themeMode}
        >
          <TeamTitle>Nossa Equipe</TeamTitle>
          <TeamSubtitle>
            Profissionais qualificados e experientes para cuidar da sua empresa
          </TeamSubtitle>
        </TeamHeader>

        <TeamGrid $themeMode={themeMode}>
          {teamData.map((member: TeamMember, index) => (
            <TeamCard
              key={member.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, scale: 1.05, rotateY: 5 }}
              $themeMode={themeMode}
            >
              <TeamPhoto $themeMode={themeMode}>
                {member.photo && member.photo !== null ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    onLoad={() => console.log(`Imagem carregada: ${member.name}`)}
                    onError={() => console.log(`Erro ao carregar imagem: ${member.name}`)}
                  />
                ) : (
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="60" cy="60" r="60" fill="#e5e7eb" />
                    <circle cx="60" cy="45" r="20" fill="#9ca3af" />
                    <path
                      d="M20 100c0-22.091 17.909-40 40-40s40 17.909 40 40"
                      fill="#9ca3af"
                    />
                  </svg>
                )}
              </TeamPhoto>
              
              <TeamInfo $themeMode={themeMode}>
                <TeamName $themeMode={themeMode}>{member.name}</TeamName>
                <TeamPosition $themeMode={themeMode}>{member.position}</TeamPosition>
                <TeamDescription $themeMode={themeMode}>{member.description}</TeamDescription>
                
                <TeamQualifications $themeMode={themeMode}>
                  {member.qualifications.map((qualification, qualIndex) => (
                    <QualificationItem key={qualIndex} $themeMode={themeMode}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                          fill="currentColor"
                        />
                      </svg>
                      {qualification}
                    </QualificationItem>
                  ))}
                </TeamQualifications>
              </TeamInfo>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamContainer>
  )
}

export default Team