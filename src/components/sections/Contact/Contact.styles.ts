import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3xl']};
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};
`

export const SectionSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['4xl']};
  
  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.neutral.gray50};
  border-radius: ${theme.borderRadius.xl};
  border-left: 4px solid ${theme.colors.primary.main};
  transition: all ${theme.transitions.normal};
  
  &:hover {
    background: ${theme.colors.neutral.white};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }
`

export const ContactIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 2px;
`

export const ContactDetails = styled.div`
  flex: 1;
`

export const ContactLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.neutral.gray900};
  margin-bottom: ${theme.spacing.xs};
`

export const ContactValue = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.neutral.gray600};
  line-height: 1.5;
  
  &[href] {
    color: ${theme.colors.primary.main};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.primary.dark};
    }
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  background: ${theme.colors.neutral.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.lg};
  border: 1px solid ${theme.colors.neutral.gray100};
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

export const FormLabel = styled.label`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.neutral.gray700};
`

export const FormInput = styled.input`
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.neutral.gray300};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  transition: all ${theme.transitions.fast};
  background: ${theme.colors.neutral.white};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
  
  &::placeholder {
    color: ${theme.colors.neutral.gray400};
  }
  
  &:disabled {
    background: ${theme.colors.neutral.gray100};
    cursor: not-allowed;
  }
`

export const FormTextarea = styled.textarea`
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.neutral.gray300};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all ${theme.transitions.fast};
  background: ${theme.colors.neutral.white};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
  
  &::placeholder {
    color: ${theme.colors.neutral.gray400};
  }
  
  &:disabled {
    background: ${theme.colors.neutral.gray100};
    cursor: not-allowed;
  }
`

export const MapContainer = styled.div`
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};
  border: 1px solid ${theme.colors.neutral.gray100};
  
  iframe {
    width: 100%;
    height: 300px;
    border: none;
  }
`