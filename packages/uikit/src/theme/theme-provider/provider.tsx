/**
 * Byline CMS
 *
 * Copyright © 2025 Anthony Bouch and contributors.
 *
 * This file is part of Byline CMS.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * NOTE: Not used in production. This is only here for
 * uikit development with the provider placed in
 * .storybook/preview.tsx
 */

import type { ReactNode } from 'react'
import { createContext, useContext, useMemo } from 'react'

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

// ThemeContext
interface ThemeContextType {
  theme: Theme | null
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
  theme: Theme
}

// ThemeProvider
function ThemeProvider({ children, theme }: ThemeProviderProps): React.JSX.Element {
  const contextValue = useMemo(() => {
    return { theme }
  }, [theme])

  return <ThemeContext value={contextValue}>{children}</ThemeContext>
}

// Hook helper useTheme
function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export { Theme, ThemeProvider, useTheme }
