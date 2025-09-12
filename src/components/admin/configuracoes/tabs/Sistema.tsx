import React from 'react';
import { AdminConfiguracao } from '../../../../types/admin';
import {
  TabContent,
  SystemGrid,
  SettingCard,
  SettingInfo,
  SettingTitle,
  SettingDescription,
  ToggleContainer,
  ToggleInput,
  ToggleSwitch
} from '../AdminConfiguracoes.styles';

interface SistemaProps {
  configuracoes: AdminConfiguracao;
  setConfiguracoes: React.Dispatch<React.SetStateAction<AdminConfiguracao>>;
  canEdit: boolean;
}

const Sistema: React.FC<SistemaProps> = ({
  configuracoes,
  setConfiguracoes,
  canEdit
}) => {
  const handleToggle = (field: keyof Pick<AdminConfiguracao, 'maintenanceMode' | 'allowRegistration' | 'requireEmailVerification'>) => {
    return (checked: boolean) => {
      setConfiguracoes((prev: AdminConfiguracao) => ({
        ...prev,
        [field]: checked
      }));
    };
  };

  return (
    <TabContent>
      <SystemGrid>
        <SettingCard>
          <SettingInfo>
            <SettingTitle>Modo de Manutenção</SettingTitle>
            <SettingDescription>Ativar para manutenção do sistema</SettingDescription>
          </SettingInfo>
          <ToggleContainer>
            <ToggleInput
              type="checkbox"
              checked={configuracoes.maintenanceMode}
              onChange={(e) => handleToggle('maintenanceMode')(e.target.checked)}
              disabled={!canEdit}
            />
            <ToggleSwitch $checked={configuracoes.maintenanceMode} />
          </ToggleContainer>
        </SettingCard>

        <SettingCard>
          <SettingInfo>
            <SettingTitle>Permitir Registro</SettingTitle>
            <SettingDescription>Permitir novos usuários se registrarem</SettingDescription>
          </SettingInfo>
          <ToggleContainer>
            <ToggleInput
              type="checkbox"
              checked={configuracoes.allowRegistration}
              onChange={(e) => handleToggle('allowRegistration')(e.target.checked)}
              disabled={!canEdit}
            />
            <ToggleSwitch $checked={configuracoes.allowRegistration} />
          </ToggleContainer>
        </SettingCard>

        <SettingCard>
          <SettingInfo>
            <SettingTitle>Verificação de Email</SettingTitle>
            <SettingDescription>Exigir verificação de email no registro</SettingDescription>
          </SettingInfo>
          <ToggleContainer>
            <ToggleInput
              type="checkbox"
              checked={configuracoes.requireEmailVerification}
              onChange={(e) => handleToggle('requireEmailVerification')(e.target.checked)}
              disabled={!canEdit}
            />
            <ToggleSwitch $checked={configuracoes.requireEmailVerification} />
          </ToggleContainer>
        </SettingCard>
      </SystemGrid>
    </TabContent>
  );
};

export default Sistema;