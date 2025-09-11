import React from 'react'
import {
  FiltersSection,
  FiltersGrid,
  SearchContainer,
  SearchInput,
  CategorySelect
} from './AdminServicos.styles'

/**
 * Props do componente ServiceFilters
 */
interface ServiceFiltersProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  categorias: string[]
}

/**
 * Componente para filtros e busca de serviços
 * Permite buscar por nome/descrição e filtrar por categoria
 */
const ServiceFilters: React.FC<ServiceFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categorias
}) => {
  return (
    <FiltersSection>
      <FiltersGrid>
        {/* Busca */}
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Buscar por nome ou descrição..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </SearchContainer>

        {/* Filtro por Categoria */}
        <CategorySelect
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="all">Todas as categorias</option>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </CategorySelect>
      </FiltersGrid>
    </FiltersSection>
  )
}

export default ServiceFilters