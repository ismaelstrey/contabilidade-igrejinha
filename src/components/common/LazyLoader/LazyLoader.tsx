import React, { Suspense } from 'react';
import styled, { keyframes, DefaultTheme } from 'styled-components';

// Animação de loading
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors?.border?.light || '#f3f3f3'};
  border-top: 3px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors?.primary?.main || '#007bff'};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-left: 1rem;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors?.text?.secondary || '#666'};
  font-size: 0.9rem;
`;

// Componente de loading personalizado
const LoadingFallback: React.FC = () => (
  <LoadingContainer>
    <Spinner />
    <LoadingText>Carregando...</LoadingText>
  </LoadingContainer>
);

// Props do LazyLoader
interface LazyLoaderProps {
  children: React.ReactNode;
  fallback?: React.ComponentType;
}

/**
 * Componente para implementar lazy loading com fallback personalizado
 * Melhora a performance ao carregar componentes sob demanda
 */
const LazyLoader: React.FC<LazyLoaderProps> = ({ 
  children, 
  fallback: CustomFallback = LoadingFallback 
}) => {
  return (
    <Suspense fallback={<CustomFallback />}>
      {children}
    </Suspense>
  );
};

export default LazyLoader;
export { LoadingFallback };

// Hook para criar componentes lazy
// eslint-disable-next-line react-refresh/only-export-components
export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  return React.lazy(importFn);
};

// Utilitário para preload de componentes
// eslint-disable-next-line react-refresh/only-export-components
export const preloadComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) => {
  // Precarrega o componente em background
  const componentImport = importFn();
  return componentImport;
};

// Hook para lazy loading com preload condicional
// eslint-disable-next-line react-refresh/only-export-components
export const useLazyComponent = <T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  shouldPreload: boolean = false
) => {
  const LazyComponent = React.useMemo(() => React.lazy(importFn), [importFn]);
  
  React.useEffect(() => {
    if (shouldPreload) {
      preloadComponent(importFn);
    }
  }, [importFn, shouldPreload]);
  
  return LazyComponent;
};