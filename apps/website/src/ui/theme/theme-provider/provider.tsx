'use client'

import type { ReactNode } from 'react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getTheme as getThemeApi, type ThemeSettings } from '../get-theme.ts'
import { setTheme as setThemeApi } from '../set-theme.ts'
import {
  DEFAULT_THEME,
  PREFERS_DARK_MQ,
  setPrefersColorScheme,
  setPrefersTheme,
  Theme,
  ThemeSource,
} from './utils.ts'

// ThemeContext
interface ThemeContextType {
  theme: Theme | undefined
  setTheme: (theme: Theme) => void
  getTheme: () => Theme
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

// ThemeProvider
function ThemeProvider({ children }: ThemeProviderProps): React.JSX.Element {
  const [themeSettings, setThemeSettings] = useState<ThemeSettings | null>(null)

  // This effect will install an event listener to react to browser
  // prefers-color-scheme changes, but only if the current theme is
  // based on the browser having sent the sec-ch-prefers-color-scheme header.
  // https://wicg.github.io/user-preference-media-features-headers/
  // https://caniuse.com/mdn-http_headers_sec-ch-prefers-color-scheme
  //
  // If the theme is based on stored (i.e. the user selected the theme
  // manually) we don't change themes here (when the theme is set manually,
  // and stored in localStorage, we don't base the theme on
  // prefers-color-scheme at all, so we shouldn't update the theme when
  // it changes).
  useEffect(() => {
    if (themeSettings == null) {
      const themeSettings = getThemeApi()
      setThemeSettings(themeSettings)
    } else if (themeSettings.source === ThemeSource.HEADER) {
      const mediaQuery = window.matchMedia(PREFERS_DARK_MQ)
      const handleChange = (ev: MediaQueryListEvent): void => {
        const prefers = ev.matches ? Theme.DARK : Theme.LIGHT
        setPrefersTheme(prefers)
        setPrefersColorScheme(prefers)
        setThemeSettings({ ...themeSettings, theme: prefers })
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [themeSettings])

  const contextValue = useMemo(() => {
    const setTheme = (prefers: Theme): void => {
      // Persist the theme choice via the /set-theme route.ts api call
      // which will set the theme cookie.
      void setThemeApi(prefers)
      // Update the theme in state.'
      // Optimistically set here so there is no delay in theme change
      // Even with 'action' above - there's a delay in receiving the response from
      // the server.
      setPrefersTheme(prefers)
      setPrefersColorScheme(prefers)
      // Then trigger the state change
      setThemeSettings({ theme: prefers, source: ThemeSource.STORED })
    }

    const getTheme = (): Theme => {
      return themeSettings?.theme ?? DEFAULT_THEME
    }

    return { theme: themeSettings?.theme, setTheme, getTheme }
  }, [themeSettings])

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

// Hook helper useTheme
function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { ThemeProvider, useTheme }
