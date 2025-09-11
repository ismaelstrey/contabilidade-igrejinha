import styled from 'styled-components'
import { motion } from 'framer-motion'

/**
 * Container principal do layout administrativo
 */
export const LayoutContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  position: relative;
`

/**
 * Overlay para sidebar mobile
 */
export const SidebarOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  
  @media (min-width: 1024px) {
    display: none;
  }
`

/**
 * Container da sidebar mobile
 */
export const SidebarMobileContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 50;
  
  @media (min-width: 1024px) {
    display: none;
  }
`

/**
 * Container da sidebar desktop
 */
export const SidebarDesktopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 30;
  width: 16rem;
  
  @media (max-width: 1023px) {
    display: none;
  }
`

/**
 * Container do conteúdo principal
 */
export const MainContentContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    margin-left: 16rem;
  }
`

/**
 * Área principal de conteúdo
 */
export const MainContent = styled.main`
  flex: 1;
  padding: 1rem;
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
  }
`

/**
 * Container interno do conteúdo com animação
 */
export const ContentWrapper = styled(motion.div)`
  max-width: 80rem;
  margin: 0 auto;
`