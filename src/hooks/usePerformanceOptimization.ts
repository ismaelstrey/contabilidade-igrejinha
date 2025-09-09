import { useEffect, useCallback, useState } from 'react';
import { PERFORMANCE_MONITORING } from '../config/performance';

// Tipos para métricas de performance
interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

// Declaração global para gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface UsePerformanceOptimizationReturn {
  metrics: PerformanceMetrics;
  isLoading: boolean;
  reportMetric: (name: string, value: number) => void;
}

/**
 * Hook para otimização de performance e monitoramento de Core Web Vitals
 * Implementa as recomendações do relatório de SEO
 */
export const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isLoading, setIsLoading] = useState(true);

  // Função para reportar métricas customizadas
  const reportMetric = useCallback((name: string, value: number) => {
    // Enviar para analytics (Google Analytics, etc.)
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        custom_parameter: true
      });
    }

    // Log para desenvolvimento
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}: ${value}ms`);
    }
  }, []);

  // Monitorar Core Web Vitals
  useEffect(() => {
    const observePerformance = () => {
      try {
        // Simular métricas de performance sem web-vitals
        // Em produção, você pode instalar: npm install web-vitals
        
        // Simular LCP usando PerformanceObserver
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.entryType === 'largest-contentful-paint') {
                const value = entry.startTime;
                setMetrics(prev => ({ ...prev, lcp: value }));
                reportMetric('LCP', value);
                
                if (value > PERFORMANCE_MONITORING.TARGETS.LCP) {
                  console.warn(`LCP acima do target: ${value}ms (target: ${PERFORMANCE_MONITORING.TARGETS.LCP}ms)`);
                }
              }
            });
          });
          
          try {
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.log('LCP observation não suportada');
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao observar performance:', error);
        setIsLoading(false);
      }
    };

    // Observar apenas em produção ou quando explicitamente habilitado
    if (process.env.NODE_ENV === 'production' || process.env.VITE_MONITOR_PERFORMANCE === 'true') {
      observePerformance();
    } else {
      setIsLoading(false);
    }
  }, [reportMetric]);

  // Monitorar performance de recursos
  useEffect(() => {
    const observeResourceTiming = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              
              // Monitorar recursos grandes
              if (resourceEntry.transferSize > 100000) { // > 100KB
                console.warn(`Recurso grande detectado: ${resourceEntry.name} (${Math.round(resourceEntry.transferSize / 1024)}KB)`);
              }
              
              // Monitorar recursos lentos
              if (resourceEntry.duration > 1000) { // > 1s
                console.warn(`Recurso lento detectado: ${resourceEntry.name} (${Math.round(resourceEntry.duration)}ms)`);
              }
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
        
        return () => observer.disconnect();
      }
    };

    if (process.env.NODE_ENV === 'development') {
      const cleanup = observeResourceTiming();
      return cleanup;
    }
  }, []);

  // Monitorar long tasks
  useEffect(() => {
    const observeLongTasks = () => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'longtask') {
              console.warn(`Long task detectada: ${Math.round(entry.duration)}ms`);
              reportMetric('long_task', entry.duration);
            }
          });
        });
        
        try {
          observer.observe({ entryTypes: ['longtask'] });
          return () => observer.disconnect();
        } catch (error) {
          // Long tasks não suportadas em todos os browsers
          console.log('Long tasks não suportadas neste browser');
        }
      }
    };

    const cleanup = observeLongTasks();
    return cleanup;
  }, [reportMetric]);

  return {
    metrics,
    isLoading,
    reportMetric
  };
};

// Hook para lazy loading de imagens
export const useLazyImage = (src: string, options?: IntersectionObserverInit) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const imgRef = useCallback((node: HTMLImageElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setImageSrc(src);
            observer.disconnect();
          }
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
          ...options
        }
      );
      
      observer.observe(node);
      
      return () => observer.disconnect();
    }
  }, [src, options]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return {
    imgRef,
    imageSrc,
    isLoaded,
    isInView,
    handleLoad
  };
};

// Hook para preload de recursos críticos
export const useResourcePreload = (resources: string[]) => {
  useEffect(() => {
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      // Determinar o tipo do recurso
      if (resource.endsWith('.woff2') || resource.endsWith('.woff')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.css')) {
        link.as = 'style';
      } else if (resource.endsWith('.js') || resource.endsWith('.tsx')) {
        link.as = 'script';
      } else if (resource.match(/\.(jpg|jpeg|png|webp|avif)$/)) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });
  }, [resources]);
};

export default usePerformanceOptimization;