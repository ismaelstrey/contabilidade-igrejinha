import React from 'react'
import {
  FiltersSection,
  FiltersGrid,
  SearchContainer,
  SearchInput,
  SearchIcon,
  RoleSelect
} from './AdminUsuarios.styles'

/**
 * Props do componente UserFilters
 */
interface UserFiltersProps {
  searchTerm: string
  selectedRole: string
  onSearchChange: (value: string) => void
  onRoleChange: (value: string) => void
}

/**
 * Componente para filtros de usuários
 * Contém busca por nome/email e filtro por role
 */
const UserFilters: React.FC<UserFiltersProps> = ({
  searchTerm,
  selectedRole,
  onSearchChange,
  onRoleChange
}) => {
  return (
    <FiltersSection>
      <FiltersGrid>
        {/* Busca */}
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar por nome ou email..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <SearchIcon>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </SearchIcon>
        </SearchContainer>

        {/* Filtro por Role */}
        <RoleSelect
          value={selectedRole}
          onChange={(e) => onRoleChange(e.target.value)}
        >
          <option value="all">Todos os roles</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuário</option>
          <option value="viewer">Visualizador</option>
        </RoleSelect>
      </FiltersGrid>
    </FiltersSection>
  )
}

export default UserFilters