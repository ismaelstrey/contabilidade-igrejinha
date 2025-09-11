import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { AdminUser } from '@/types/admin'
import {
  TableContainer,
  TableWrapper,
  Table,
  TableHead,
  TableHeader,
  Checkbox,
  TableBody,
  TableRow,
  TableCell,
  UserInfo,
  UserAvatar,
  UserDetails,
  UserName,
  UserEmail,
  RoleBadge,
  StatusBadge,
  ActionsContainer,
  ActionButton,
  PaginationContainer,
  PaginationContent,
  PaginationMobile,
  PaginationDesktop,
  PaginationInfo,
  PaginationNav,
  PaginationButton
} from './AdminUsuarios.styles'

/**
 * Props do componente UserTable
 */
interface UserTableProps {
  usuarios: AdminUser[]
  selectedUsers: number[]
  currentPage: number
  totalPages: number
  onSelectUser: (userId: number) => void
  onSelectAll: () => void
  onEditUser: (user: AdminUser) => void
  onDeleteUser: (userId: number) => void
  onToggleUserStatus: (userId: number) => void
  onPageChange: (page: number) => void
}

/**
 * Componente da tabela de usuários
 * Contém a tabela com dados dos usuários e paginação
 */
const UserTable: React.FC<UserTableProps> = ({
  usuarios,
  selectedUsers,
  currentPage,
  totalPages,
  onSelectUser,
  onSelectAll,
  onEditUser,
  onDeleteUser,
  onToggleUserStatus,
  onPageChange
}) => {
  return (
    <>
      {/* Tabela de Usuários */}
      <TableContainer>
        <TableWrapper>
          <Table>
            <TableHead>
              <tr>
                <TableHeader>
                  <Checkbox
                    type="checkbox"
                    checked={selectedUsers.length === usuarios.length && usuarios.length > 0}
                    onChange={onSelectAll}
                  />
                </TableHeader>
                <TableHeader>
                  Usuário
                </TableHeader>
                <TableHeader>
                  Role
                </TableHeader>
                <TableHeader>
                  Status
                </TableHeader>
                <TableHeader>
                  Ações
                </TableHeader>
              </tr>
            </TableHead>
            <TableBody>
              <AnimatePresence>
                {usuarios.map((usuario) => (
                  <TableRow
                    key={usuario.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TableCell>
                      <Checkbox
                        type="checkbox"
                        checked={selectedUsers.includes(usuario.id)}
                        onChange={() => onSelectUser(usuario.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <UserInfo>
                        <UserAvatar>
                          <span>
                            {usuario.nome.charAt(0).toUpperCase()}
                          </span>
                        </UserAvatar>
                        <UserDetails>
                          <UserName>{usuario.nome}</UserName>
                          <UserEmail>{usuario.email}</UserEmail>
                        </UserDetails>
                      </UserInfo>
                    </TableCell>
                    <TableCell>
                      <RoleBadge role={usuario.role}>
                        {usuario.role === 'admin' ? 'Administrador' :
                          usuario.role === 'user' ? 'Usuário' : 'Visualizador'}
                      </RoleBadge>
                    </TableCell>
                    <TableCell>
                      <StatusBadge
                        active={usuario.ativo}
                        onClick={() => onToggleUserStatus(usuario.id)}
                      >
                        {usuario.ativo ? 'Ativo' : 'Inativo'}
                      </StatusBadge>
                    </TableCell>
                    <TableCell>
                      <ActionsContainer>
                        <ActionButton
                          variant="edit"
                          onClick={() => onEditUser(usuario)}
                        >
                          Editar
                        </ActionButton>
                        <ActionButton
                          variant="delete"
                          onClick={() => onDeleteUser(usuario.id)}
                        >
                          Excluir
                        </ActionButton>
                      </ActionsContainer>
                    </TableCell>
                  </TableRow>
                ))}
              </AnimatePresence>
            </TableBody>
          </Table>
        </TableWrapper>
      </TableContainer>

      {/* Paginação */}
      {totalPages > 1 && (
        <PaginationContainer>
          <PaginationContent>
            <PaginationMobile>
              <PaginationButton
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Anterior
              </PaginationButton>
              <PaginationButton
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Próximo
              </PaginationButton>
            </PaginationMobile>
            <PaginationDesktop>
              <PaginationInfo>
                <p>
                  Mostrando página <span>{currentPage}</span> de{' '}
                  <span>{totalPages}</span>
                </p>
              </PaginationInfo>
              <PaginationNav>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationButton
                    key={i + 1}
                    onClick={() => onPageChange(i + 1)}
                    active={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationButton>
                ))}
              </PaginationNav>
            </PaginationDesktop>
          </PaginationContent>
        </PaginationContainer>
      )}
    </>
  )
}

export default UserTable