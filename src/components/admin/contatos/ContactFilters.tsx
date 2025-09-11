import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {
  FiltersContainer,
  FiltersContent,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FiltersActions,
  FilterSelect
} from './AdminContatos.styles';

/**
 * Interface para as props do componente ContactFilters
 */
interface ContactFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: 'all' | 'novo' | 'lido' | 'respondido';
  onStatusFilterChange: (status: 'all' | 'novo' | 'lido' | 'respondido') => void;
}

/**
 * Componente para filtros de contatos
 */
const ContactFilters: React.FC<ContactFiltersProps> = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange
}) => {
  return (
    <FiltersContainer>
      <FiltersContent>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput
            type="text"
            placeholder="Buscar por nome, email ou assunto..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </SearchContainer>
        <FiltersActions>
          <FilterSelect
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value as any)}
          >
            <option value="all">Todos os Status</option>
            <option value="novo">Novo</option>
            <option value="lido">Lido</option>
            <option value="respondido">Respondido</option>
          </FilterSelect>
        </FiltersActions>
      </FiltersContent>
    </FiltersContainer>
  );
};

export default ContactFilters;