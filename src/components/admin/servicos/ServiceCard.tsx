import React from 'react'
import { motion } from 'framer-motion'
import { AdminServico } from '@/types/admin'
import {
  ServiceCard as StyledServiceCard,
  ServiceCardHeader,
  ServiceCheckbox,
  ServiceInfo,
  ServiceName,
  ServiceCategory,
  ServiceDescription,
  ServicePrice,
  ServiceBadges,
  ServiceBadge,
  ServiceActions,
  ServiceActionButton
} from './AdminServicos.styles'

/**
 * Props do componente ServiceCard
 */
interface ServiceCardProps {
  servico: AdminServico
  isSelected: boolean
  onSelect: (servicoId: number) => void
  onEdit: (servico: AdminServico) => void
  onDelete: (servicoId: number) => void
  onToggleStatus: (servicoId: number) => void
  onToggleDestaque: (servicoId: number) => void
}

/**
 * Componente para exibir um serviço individual
 * Inclui informações, badges, ações e seleção
 */
const ServiceCard: React.FC<ServiceCardProps> = ({
  servico,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
  onToggleStatus,
  onToggleDestaque
}) => {
  return (
    <StyledServiceCard
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      selected={isSelected}
    >
      {/* Header do Card */}
      <ServiceCardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <ServiceCheckbox
              type="checkbox"
              checked={isSelected}
              onChange={() => onSelect(servico.id)}
            />
            <ServiceInfo>
              <ServiceName>{servico.nome}</ServiceName>
              <ServiceCategory>
                {servico.categoria}
              </ServiceCategory>
            </ServiceInfo>
          </div>
          <ServiceBadges>
            {servico.destaque && (
              <ServiceBadge variant="destaque">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Destaque
              </ServiceBadge>
            )}
            <ServiceBadge
              variant={servico.ativo ? 'active' : 'inactive'}
              onClick={() => onToggleStatus(servico.id)}
            >
              {servico.ativo ? 'Ativo' : 'Inativo'}
            </ServiceBadge>
          </ServiceBadges>
        </div>
      </ServiceCardHeader>

      <ServiceInfo>
        <ServiceDescription>{servico.descricao}</ServiceDescription>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <ServicePrice>
            R$ {servico?.preco?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </ServicePrice>
          <ServiceActionButton
            onClick={() => onToggleDestaque(servico.id)}
            style={{ 
              color: servico.destaque ? '#eab308' : '#9ca3af',
              padding: '0.5rem',
              borderRadius: '50%'
            }}
            title={servico.destaque ? 'Remover destaque' : 'Destacar serviço'}
          >
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </ServiceActionButton>
        </div>

        <div className="text-xs text-gray-500 mb-4">
          Criado em: {new Date(servico.createdAt).toLocaleDateString('pt-BR')}
          {servico.updatedAt !== servico.createdAt && (
            <span className="block">
              Atualizado em: {new Date(servico.updatedAt).toLocaleDateString('pt-BR')}
            </span>
          )}
        </div>
      </ServiceInfo>

      {/* Ações */}
      <ServiceActions>
        <ServiceActionButton
          onClick={() => onEdit(servico)}
        >
          <svg style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Editar
        </ServiceActionButton>
        <ServiceActionButton
          variant="danger"
          onClick={() => onDelete(servico.id)}
        >
          <svg style={{ width: '1rem', height: '1rem', marginRight: '0.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Excluir
        </ServiceActionButton>
      </ServiceActions>
    </StyledServiceCard>
  )
}

export default ServiceCard