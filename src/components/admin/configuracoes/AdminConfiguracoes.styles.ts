import styled from 'styled-components';
import { motion } from 'framer-motion';

// Container principal
export const ConfiguracoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Header
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
  margin-top: 0.25rem;
`;

// Loading
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16rem;
  gap: 0.5rem;
`;

export const LoadingText = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

// Tabs
export const TabsContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const TabsNav = styled.nav`
  display: flex;
  gap: 2rem;
  margin-bottom: -1px;
`;

interface TabButtonProps {
  $isActive: boolean;
}

export const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.25rem;
  border-bottom: 2px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary.main : 'transparent'};
  font-medium: 500;
  font-size: 0.875rem;
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary.main : theme.colors.text.secondary};
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    border-bottom-color: ${({ theme }) => theme.colors.border.medium};
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

// Content Container
export const ContentContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
`;

export const TabContent = styled.div`
  padding: 1.5rem;
`;

// Form Elements
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary.light};
    border-color: transparent;
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.background.muted};
    cursor: not-allowed;
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.medium};
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.background.main};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;
  resize: vertical;
  min-height: 4rem;
  
  &:focus {
    outline: none;
    ring: 2px;
    ring-color: ${({ theme }) => theme.colors.primary.light};
    border-color: transparent;
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.background.muted};
    cursor: not-allowed;
  }
`;

// Password Field
export const PasswordContainer = styled.div`
  position: relative;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.muted};
  padding: 0;
  display: flex;
  align-items: center;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// Section Headers
export const SectionHeader = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
`;

// Social Media Grid
export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Email Settings Grid
export const EmailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Permissions
export const PermissionsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const PermissionsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const RoleCard = styled(motion.div)`
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const RoleCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const RoleInfo = styled.div`
  flex: 1;
`;

export const RoleTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${({ theme }) => theme.colors.primary.main};
    margin-right: 0.5rem;
  }
`;

export const RoleName = styled.h4`
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  text-transform: capitalize;
`;

export const RoleDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 0.75rem 0;
`;

export const PermissionTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const PermissionTag = styled.span`
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};
  font-size: 0.75rem;
  border-radius: 9999px;
`;

export const RoleActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.muted};
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  &.edit {
    color: ${({ theme }) => theme.colors.primary.main};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
  
  &.delete {
    color: ${({ theme }) => theme.colors.error.main};
    
    &:hover {
      color: ${({ theme }) => theme.colors.error.dark};
    }
  }
`;

// System Settings
export const SystemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SettingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
`;

export const SettingInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingTitle = styled.h4`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const SettingDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`;

// Toggle Switch
export const ToggleContainer = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

interface ToggleSwitchProps {
  $checked: boolean;
}

export const ToggleSwitch = styled.div<ToggleSwitchProps>`
  width: 2.75rem;
  height: 1.5rem;
  background: ${({ $checked, theme }) => 
    $checked ? theme.colors.primary.main : theme.colors.background.muted};
  border-radius: 9999px;
  position: relative;
  transition: all 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${({ $checked }) => $checked ? 'calc(100% - 22px)' : '2px'};
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
`;

// Modal
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

export const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.paper};
  border-radius: 0.5rem;
  max-width: 42rem;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0 1.5rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const ModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 1.5rem;
  padding: 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PermissionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  max-height: 15rem;
  overflow-y: auto;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  padding: 0.75rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PermissionCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  input {
    margin-right: 0.5rem;
    border-radius: 0.25rem;
    border-color: ${({ theme }) => theme.colors.border.medium};
    color: ${({ theme }) => theme.colors.primary.main};
    
    &:focus {
      ring-color: ${({ theme }) => theme.colors.primary.light};
    }
  }
  
  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};
`;

// Feedback Messages
export const FeedbackMessage = styled(motion.div)`
  border-radius: 0.5rem;
  padding: 1rem;
  
  &.error {
    background: ${({ theme }) => theme.colors.error.light};
    border: 1px solid ${({ theme }) => theme.colors.error.main};
  }
  
  &.success {
    background: ${({ theme }) => theme.colors.success.light};
    border: 1px solid ${({ theme }) => theme.colors.success.main};
  }
`;

export const FeedbackContent = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
  }
  
  &.error {
    color: ${({ theme }) => theme.colors.error.dark};
    
    svg {
      color: ${({ theme }) => theme.colors.error.main};
    }
  }
  
  &.success {
    color: ${({ theme }) => theme.colors.success.dark};
    
    svg {
      color: ${({ theme }) => theme.colors.success.main};
    }
  }
`;

export const FeedbackCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 0;
  font-size: 1.25rem;
  
  &.error {
    color: ${({ theme }) => theme.colors.error.main};
    
    &:hover {
      color: ${({ theme }) => theme.colors.error.dark};
    }
  }
  
  &.success {
    color: ${({ theme }) => theme.colors.success.main};
    
    &:hover {
      color: ${({ theme }) => theme.colors.success.dark};
    }
  }
`;