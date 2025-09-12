import React from 'react';
import { FiEdit, FiPlus } from 'react-icons/fi';
import { GiShield } from 'react-icons/gi';
import { LuTrash2 } from 'react-icons/lu';
import { AdminPermissao } from '../../../../types/admin';
import Button from '../../../common/Button/Button';
import {
  TabContent,
  PermissionsHeader,
  PermissionsTitle,
  RoleCard,
  RoleCardHeader,
  RoleInfo,
  RoleTitle,
  RoleName,
  RoleDescription,
  PermissionTags,
  PermissionTag,
  RoleActions,
  ActionButton
} from '../AdminConfiguracoes.styles';

interface PermissoesProps {
  roles: AdminPermissao[];
  permissoesDisponiveis: { key: string; label: string }[];
  canEdit: boolean;
  onEditRole: (role: AdminPermissao) => void;
  onDeleteRole: (roleId: string) => void;
  onNewRole: () => void;
}

const Permissoes: React.FC<PermissoesProps> = ({
  roles,
  permissoesDisponiveis,
  canEdit,
  onEditRole,
  onDeleteRole,
  onNewRole
}) => {
  return (
    <TabContent>
      <PermissionsHeader>
        <PermissionsTitle>Gerenciar Permissões</PermissionsTitle>
        {canEdit && (
          <Button
            variant="primary"
            size="sm"
            onClick={onNewRole}
          >
            <FiPlus />
            Nova Permissão
          </Button>
        )}
      </PermissionsHeader>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {roles.map((role) => (
          <RoleCard
            key={role.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <RoleCardHeader>
              <RoleInfo>
                <RoleTitle>
                  <GiShield />
                  <RoleName>{role.nome}</RoleName>
                </RoleTitle>
                <RoleDescription>{role.descricao}</RoleDescription>
                <PermissionTags>
                  {role.permissoes.map((permissao: string) => {
                    const permissaoInfo = permissoesDisponiveis.find(p => p.key === permissao);
                    return (
                      <PermissionTag key={permissao}>
                        {permissaoInfo?.label || permissao}
                      </PermissionTag>
                    );
                  })}
                </PermissionTags>
              </RoleInfo>
              {canEdit && (
                <RoleActions>
                  <ActionButton
                    className="edit"
                    onClick={() => onEditRole(role)}
                    title="Editar"
                  >
                    <FiEdit />
                  </ActionButton>
                  {role.nome !== 'admin' && (
                    <ActionButton
                      className="delete"
                      onClick={() => onDeleteRole(role.id)}
                      title="Excluir"
                    >
                      <LuTrash2 />
                    </ActionButton>
                  )}
                </RoleActions>
              )}
            </RoleCardHeader>
          </RoleCard>
        ))}
      </div>
    </TabContent>
  );
};

export default Permissoes;