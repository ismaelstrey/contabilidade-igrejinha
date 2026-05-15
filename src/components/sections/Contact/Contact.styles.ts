import styled from 'styled-components'
import { theme } from '@/styles/theme'

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing['3xl']};
`

export const SectionHeader = styled.div`
  max-width: 720px;
  margin: 0 auto ${theme.spacing['3xl']};
  text-align: center;
`

export const SectionSubtitle = styled.p`
  margin-bottom: ${theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  text-transform: uppercase;
  letter-spacing: 0;
`

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: 1.08;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1.18fr);
  gap: ${theme.spacing.xl};
  align-items: start;

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfo = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
`

export const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  background: ${({ theme }) => theme.colors.background.paper};
`

export const ContactIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.primary.background || theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.primary.main};
  flex-shrink: 0;
`

export const ContactDetails = styled.div`
  min-width: 0;
`

export const ContactLabel = styled.div`
  margin-bottom: ${theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
`

export const ContactValue = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
  line-height: 1.55;
  overflow-wrap: anywhere;

  &[href] {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  background: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 24px 58px rgba(0, 0, 0, 0.32)' : '0 24px 58px rgba(15, 23, 42, 0.08)'};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
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
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
`

export const FormInput = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 0 ${theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.base};
  transition: border-color ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}24;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`

export const FormTextarea = styled.textarea`
  min-height: 132px;
  padding: ${theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: ${theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: inherit;
  font-size: ${theme.typography.fontSize.base};
  resize: vertical;
  transition: border-color ${theme.transitions.fast}, box-shadow ${theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}24;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
`

export const MapContainer = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.mode === 'dark' ? '0 18px 44px rgba(0, 0, 0, 0.3)' : '0 18px 44px rgba(15, 23, 42, 0.08)'};

  iframe {
    display: block;
    width: 100%;
    height: 320px;
    border: none;
  }
`
