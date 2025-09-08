import { createGlobalStyle } from 'styled-components'
import { theme } from './theme.ts'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    line-height: 1.6;
    color: ${theme.colors.neutral.gray800};
    background-color: ${theme.colors.neutral.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.primary};
    font-weight: ${theme.typography.fontWeight.semibold};
    line-height: 1.2;
    color: ${theme.colors.primary.dark};
  }

  h1 {
    font-size: ${theme.typography.fontSize['4xl']};
  }

  h2 {
    font-size: ${theme.typography.fontSize['3xl']};
  }

  h3 {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  a {
    color: ${theme.colors.primary.main};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primary.dark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
    transition: all 0.3s ease;
  }

  input, textarea {
    font-family: inherit;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  /* Scrollbar customization */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.neutral.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary.main};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.primary.dark};
  }
`

export default GlobalStyles