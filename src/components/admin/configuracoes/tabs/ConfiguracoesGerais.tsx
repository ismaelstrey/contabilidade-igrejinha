import React from 'react';
import { CgGlobe } from 'react-icons/cg';
import { FaEnvelope } from 'react-icons/fa6';
import { HiEye } from 'react-icons/hi2';
import { HiEyeOff } from 'react-icons/hi';
import { AdminConfiguracao } from '../../../../types/admin';
import {
  TabContent,
  FormSection,
  FormGrid,
  FieldContainer,
  FieldLabel,
  StyledInput,
  StyledTextarea,
  SectionHeader,
  SocialGrid,
  EmailGrid,
  PasswordContainer,
  PasswordToggle
} from '../AdminConfiguracoes.styles';

interface ConfiguracoesGeraisProps {
  configuracoes: AdminConfiguracao;
  setConfiguracoes: React.Dispatch<React.SetStateAction<AdminConfiguracao>>;
  canEdit: boolean;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}

const ConfiguracoesGerais: React.FC<ConfiguracoesGeraisProps> = ({
  configuracoes,
  setConfiguracoes,
  canEdit,
  showPassword,
  setShowPassword
}) => {
  return (
    <TabContent>
      <FormSection>
        <FormGrid>
          <FieldContainer>
            <FieldLabel>Nome do Site</FieldLabel>
            <StyledInput
              type="text"
              value={configuracoes.siteName}
              onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ 
                ...prev, 
                siteName: e.target.value 
              }))}
              disabled={!canEdit}
            />
          </FieldContainer>
          
          <FieldContainer>
            <FieldLabel>Email de Contato</FieldLabel>
            <StyledInput
              type="email"
              value={configuracoes.contactEmail}
              onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ 
                ...prev, 
                contactEmail: e.target.value 
              }))}
              disabled={!canEdit}
            />
          </FieldContainer>
        </FormGrid>

        <FieldContainer>
          <FieldLabel>Descrição do Site</FieldLabel>
          <StyledTextarea
            value={configuracoes.siteDescription}
            onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ 
              ...prev, 
              siteDescription: e.target.value 
            }))}
            disabled={!canEdit}
            rows={3}
          />
        </FieldContainer>

        <FormGrid>
          <FieldContainer>
            <FieldLabel>Telefone de Contato</FieldLabel>
            <StyledInput
              type="tel"
              value={configuracoes.contactPhone}
              onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ 
                ...prev, 
                contactPhone: e.target.value 
              }))}
              disabled={!canEdit}
            />
          </FieldContainer>
          
          <FieldContainer>
            <FieldLabel>Endereço</FieldLabel>
            <StyledInput
              type="text"
              value={configuracoes.address}
              onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({ 
                ...prev, 
                address: e.target.value 
              }))}
              disabled={!canEdit}
            />
          </FieldContainer>
        </FormGrid>

        {/* Redes Sociais */}
        <div>
          <SectionHeader>
            <CgGlobe />
            Redes Sociais
          </SectionHeader>
          <SocialGrid>
            <FieldContainer>
              <FieldLabel>Facebook</FieldLabel>
              <StyledInput
                type="url"
                value={configuracoes.socialMedia.facebook}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, facebook: e.target.value }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
            
            <FieldContainer>
              <FieldLabel>Instagram</FieldLabel>
              <StyledInput
                type="url"
                value={configuracoes.socialMedia.instagram}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, instagram: e.target.value }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
            
            <FieldContainer>
              <FieldLabel>LinkedIn</FieldLabel>
              <StyledInput
                type="url"
                value={configuracoes.socialMedia.linkedin}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  socialMedia: { ...prev.socialMedia, linkedin: e.target.value }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
          </SocialGrid>
        </div>

        {/* Configurações de Email */}
        <div>
          <SectionHeader>
            <FaEnvelope />
            Configurações de Email
          </SectionHeader>
          <EmailGrid>
            <FieldContainer>
              <FieldLabel>Servidor SMTP</FieldLabel>
              <StyledInput
                type="text"
                value={configuracoes.emailSettings.smtpHost}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  emailSettings: { ...prev.emailSettings, smtpHost: e.target.value }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
            
            <FieldContainer>
              <FieldLabel>Porta SMTP</FieldLabel>
              <StyledInput
                type="number"
                value={configuracoes.emailSettings.smtpPort}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  emailSettings: { ...prev.emailSettings, smtpPort: parseInt(e.target.value) }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
            
            <FieldContainer>
              <FieldLabel>Usuário SMTP</FieldLabel>
              <StyledInput
                type="email"
                value={configuracoes.emailSettings.smtpUser}
                onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                  ...prev,
                  emailSettings: { ...prev.emailSettings, smtpUser: e.target.value }
                }))}
                disabled={!canEdit}
              />
            </FieldContainer>
            
            <FieldContainer>
              <FieldLabel>Senha SMTP</FieldLabel>
              <PasswordContainer>
                <StyledInput
                  type={showPassword ? 'text' : 'password'}
                  value={configuracoes.emailSettings.smtpPassword}
                  onChange={(e) => setConfiguracoes((prev: AdminConfiguracao) => ({
                    ...prev,
                    emailSettings: { ...prev.emailSettings, smtpPassword: e.target.value }
                  }))}
                  disabled={!canEdit}
                />
                <PasswordToggle
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </PasswordToggle>
              </PasswordContainer>
            </FieldContainer>
          </EmailGrid>
        </div>
      </FormSection>
    </TabContent>
  );
};

export default ConfiguracoesGerais;