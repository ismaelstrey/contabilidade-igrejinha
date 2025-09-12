import * as React from 'react';
import { useState, useEffect } from 'react';
import { useAdminAuth } from '../../../hooks/admin/useAdminAuth';
import { AdminUser } from '../../../types/admin';
import Button from '../../common/Button';
import {
  PerfilContainer,
  PerfilHeader,
  PerfilTitle,
  ActionsContainer,
  FormGrid,
  FieldContainer,
  FieldLabel,
  StyledInput,
  FieldValue,
  ErrorMessage,
  InfoSection,
  SectionTitle,
  StatusBadge,
  LoadingContainer,
  LoadingText,
  LoadingSpinner
} from './AdminPerfil.styles';

interface AdminPerfilProps {
  className?: string;
}

/**
 * Componente para gerenciar o perfil do administrador
 * Permite visualizar e editar informações pessoais do admin logado
 */
const AdminPerfil: React.FC<AdminPerfilProps> = ({ className = '' }) => {
  const { user, updateProfile, isLoading } = useAdminAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<AdminUser>>({
    nome: '',
    email: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Carrega os dados do usuário quando o componente monta
  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.nome || '',
        email: user.email || ''
      });
    }
  }, [user]);

  /**
   * Manipula mudanças nos campos do formulário
   */
  const handleInputChange = (field: keyof AdminUser, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Remove erro do campo quando o usuário começa a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  /**
   * Valida os dados do formulário
   */
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome?.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email?.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Salva as alterações do perfil
   */
  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
    }
  };

  /**
   * Cancela a edição e restaura os dados originais
   */
  const handleCancel = () => {
    if (user) {
      setFormData({
        nome: user.nome || '',
        email: user.email || ''
      });
    }
    setIsEditing(false);
    setErrors({});
  };

  if (!user) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <LoadingText>Carregando perfil...</LoadingText>
      </LoadingContainer>
    );
  }

  return (
    <PerfilContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <PerfilHeader>
        <PerfilTitle>Meu Perfil</PerfilTitle>
        <ActionsContainer>
          {!isEditing ? (
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsEditing(true)}
            >
              Editar Perfil
            </Button>
          ) : (
            <>
              <Button
                variant="primary"
                size="md"
                onClick={handleSave}
                disabled={isLoading}
              >
                {isLoading ? 'Salvando...' : 'Salvar'}
              </Button>
              <Button
                variant="secondary"
                size="md"
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancelar
              </Button>
            </>
          )}
        </ActionsContainer>
      </PerfilHeader>

      <FormGrid>
        {/* Nome */}
        <FieldContainer>
          <FieldLabel>
            Nome Completo
          </FieldLabel>
          {isEditing ? (
            <>
              <StyledInput
                type="text"
                value={formData.nome || ''}
                onChange={(e) => handleInputChange('nome', e.target.value)}
                $hasError={!!errors.nome}
                placeholder="Digite seu nome completo"
              />
              {errors.nome && (
                <ErrorMessage>{errors.nome}</ErrorMessage>
              )}
            </>
          ) : (
            <FieldValue>{user.nome || 'Não informado'}</FieldValue>
          )}
        </FieldContainer>

        {/* Email */}
        <FieldContainer>
          <FieldLabel>
            Email
          </FieldLabel>
          {isEditing ? (
            <>
              <StyledInput
                type="email"
                value={formData.email || ''}
                onChange={(e) => handleInputChange('email', e.target.value)}
                $hasError={!!errors.email}
                placeholder="Digite seu email"
              />
              {errors.email && (
                <ErrorMessage>{errors.email}</ErrorMessage>
              )}
            </>
          ) : (
            <FieldValue>{user.email || 'Não informado'}</FieldValue>
          )}
        </FieldContainer>
      </FormGrid>

      {/* Informações adicionais */}
      <InfoSection>
        <SectionTitle>Informações da Conta</SectionTitle>
        <FormGrid>
          <FieldContainer>
            <FieldLabel>
              Função
            </FieldLabel>
            <FieldValue>{user.role || 'Não definida'}</FieldValue>
          </FieldContainer>
          <FieldContainer>
            <FieldLabel>
              Status
            </FieldLabel>
            <StatusBadge $isActive={user.ativo}>
              {user.ativo ? 'Ativo' : 'Inativo'}
            </StatusBadge>
          </FieldContainer>
        </FormGrid>
      </InfoSection>
    </PerfilContainer>
  );
};

export default AdminPerfil;