import type { Preview } from '@storybook/react-vite'
import React from 'react'
import '../src/styles/styles.css'
import '../src/styles/typography.css'

import { withThemeByClassName } from '@storybook/addon-themes'

import { Toast as ToastPrimitive } from 'radix-ui'
import { ThemeProvider } from '../src/theme/theme-provider'
import { DrawerProvider } from '../src/widgets/drawer/drawer-context'

const globalDecorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  return (
    <ThemeProvider theme={theme}>
      <DrawerProvider>
        <ToastPrimitive.Provider swipeDirection="right" duration={5000}>
          <div
            className="background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              padding: '12px',
              overflow: 'auto',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-8)' }}>
              <h1
                style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
                className="headings"
              >{`${context.title} - ${context.story}`}</h1>
              <hr className="text" />
            </div>
            <StoryFn />
          </div>
          <ToastPrimitive.Viewport className="toast-viewport" />
        </ToastPrimitive.Provider>
      </DrawerProvider>
    </ThemeProvider>
  )
}

export const decorators = [
  globalDecorator,
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    // attributeName: 'data-mode',
  }),
]

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Theme', 'Typography', 'Components', 'Animation', 'Icons', 'Loaders', 'Widgets'],
        locales: '',
      },
    },
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
