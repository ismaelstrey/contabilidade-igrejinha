import React, { useState } from 'react';
import { AdminPermissao } from '../../../../types/admin';
import Button from '../../../common/Button/Button';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseButton,
  ModalBody,
  ModalForm,
  FieldContainer,
  FieldLabel,
  StyledInput,
  StyledTextarea,
  PermissionsGrid,
  PermissionCheckbox,
  ModalFooter
} from '../AdminConfiguracoes.styles';

interface RoleModalProps {
  role: AdminPermissao | null;
  permissoesDisponiveis: { key: string; label: string }[];
  onSave: (role: AdminPermissao) => void;
  onClose: () => void;
}

const RoleModal: React.FC<RoleModalProps> = ({ 
  role, 
  permissoesDisponiveis, 
  onSave, 
  onClose 
}) => {
  const [formData, setFormData] = useState<Omit<AdminPermissao, 'id'>>(
    role ? { 
      nome: role.nome, 
      descricao: role.descricao, 
      permissoes: [...role.permissoes] 
    } : {
      nome: '',
      descricao: '',
      permissoes: []
    }
  );

  const handlePermissaoToggle = (permissao: string) => {
    setFormData(prev => ({
      ...prev,
      permissoes: prev.permissoes.includes(permissao)
        ? prev.permissoes.filter((p: string) => p !== permissao)
        : [...prev.permissoes, permissao]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome.trim() || !formData.descricao.trim()) return;

    onSave({
      id: role?.id || '',
      ...formData
    });
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <ModalTitle>
            {role ? 'Editar Permissão' : 'Nova Permissão'}
          </ModalTitle>
          <ModalCloseButton
            type="button"
            onClick={onClose}
          >
            ×
          </ModalCloseButton>
        </ModalHeader>

        <ModalBody>
          <ModalForm onSubmit={handleSubmit}>
            <FieldContainer>
              <FieldLabel>Nome da Permissão</FieldLabel>
              <StyledInput
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  nome: e.target.value 
                }))}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <FieldLabel>Descrição</FieldLabel>
              <StyledTextarea
                value={formData.descricao}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  descricao: e.target.value 
                }))}
                rows={3}
                required
              />
            </FieldContainer>

            <FieldContainer>
              <FieldLabel>Permissões</FieldLabel>
              <PermissionsGrid>
                {permissoesDisponiveis.map((permissao) => (
                  <PermissionCheckbox key={permissao.key}>
                    <input
                      type="checkbox"
                      checked={formData.permissoes.includes(permissao.key)}
                      onChange={() => handlePermissaoToggle(permissao.key)}
                    />
                    <span>{permissao.label}</span>
                  </PermissionCheckbox>
                ))}
              </PermissionsGrid>
            </FieldContainer>

            <ModalFooter>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                variant="primary"
              >
                {role ? 'Salvar Alterações' : 'Criar Permissão'}
              </Button>
            </ModalFooter>
          </ModalForm>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default RoleModal;