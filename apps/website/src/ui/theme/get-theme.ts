import { DEFAULT_THEME, Theme, ThemeSource } from '@/ui/theme/theme-provider'

import { PREFERS_DARK_MQ } from './theme-provider/utils.ts'

export interface ThemeSettings {
  theme: Theme
  source: ThemeSource
}

export function getTheme(
): ThemeSettings {
  const themeSettings: ThemeSettings = {
    theme: DEFAULT_THEME,
    source: ThemeSource.DEFAULT,
  }
  const localStorageTheme = localStorage.getItem('theme')

  if (localStorageTheme != null) {
    themeSettings.theme = localStorageTheme as Theme
    themeSettings.source = ThemeSource.STORED
  } else {
    const darkThemeMq = window.matchMedia(PREFERS_DARK_MQ);
    if (darkThemeMq.matches) {
      themeSettings.theme = Theme.DARK
      themeSettings.source = ThemeSource.HEADER
    }
  }

  return themeSettings
}
