'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'

import {
  PREFERS_DARK_MQ,
  Theme,
  ThemeSource,
  setPrefersColorScheme,
  setPrefersTheme,
} from './utils.ts'
import { setTheme as setThemeApi } from '../set-theme.ts'

// ThemeContext
interface ThemeContextType {
  theme: Theme | null
  setTheme: (theme: Theme) => void
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  theme: Theme
  themeSource?: ThemeSource
}

// ThemeProvider
function ThemeProvider({
  children,
  theme,
  themeSource = ThemeSource.DEFAULT,
}: ThemeProviderProps): React.JSX.Element {
  const [themeInState, setThemeInState] = useState<Theme>(theme)
  // const initialState: SetThemeActionState = { message: undefined, status: 'idle' }
  // const [state, action, pending] = useActionState(setThemeAction, initialState)

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
    if (themeSource === ThemeSource.HEADER) {
      const mediaQuery = window.matchMedia(PREFERS_DARK_MQ)
      const handleChange = (ev: MediaQueryListEvent): void => {
        const prefers = ev.matches ? Theme.DARK : Theme.LIGHT
        setPrefersTheme(prefers)
        setPrefersColorScheme(prefers)
        setThemeInState(prefers)
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [theme, themeSource])

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
      setThemeInState(prefers)
    }
    return { theme: themeInState, setTheme }
  }, [themeInState])

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
