import 'styled-components'
import { theme } from '../styles/theme'
import { ThemeMode } from '../contexts/ThemeContext'

type BaseTheme = typeof theme

interface ExtendedTheme extends BaseTheme {
  mode: ThemeMode
  colors: BaseTheme['colors'] | BaseTheme['darkColors']
}

declare module 'styled-components' {
  export interface DefaultTheme extends ExtendedTheme {}
}