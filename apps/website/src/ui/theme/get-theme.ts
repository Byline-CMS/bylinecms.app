import { DEFAULT_THEME, Theme, ThemeSource } from '@/ui/theme/theme-provider/utils.ts'

import { PREFERS_DARK_MQ } from './theme-provider/utils.ts'

export interface ThemeSettings {
  theme: Theme
  source: ThemeSource
}

export function getTheme(
): ThemeSettings {
  const localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme != null) {
    return {
      theme: localStorageTheme as Theme,
      source: ThemeSource.STORED,
    }
  }

  const darkThemeMq = window.matchMedia(PREFERS_DARK_MQ);
  if (darkThemeMq.matches) {
    return {
      theme: Theme.DARK,
      source: ThemeSource.HEADER,
    }
  }

  return {
    theme: DEFAULT_THEME,
    source: ThemeSource.DEFAULT,
  }
}
