import React from 'react'
import { motion } from 'framer-motion'
import Container from '@components/common/Container'
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
  return (
    <TeamContainer id="team">
      <Container>
        <TeamHeader
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TeamTitle>Nossa Equipe</TeamTitle>
          <TeamSubtitle>
            Profissionais qualificados e experientes para cuidar da sua empresa
          </TeamSubtitle>
        </TeamHeader>

        <TeamGrid>
          {teamData.map((member: TeamMember, index) => (
            <TeamCard
              key={member.id}
              as={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <TeamPhoto>
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
              </TeamPhoto>
              
              <TeamInfo>
                <TeamName>{member.name}</TeamName>
                <TeamPosition>{member.position}</TeamPosition>
                <TeamDescription>{member.description}</TeamDescription>
                
                <TeamQualifications>
                  {member.qualifications.map((qualification, qualIndex) => (
                    <QualificationItem key={qualIndex}>
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