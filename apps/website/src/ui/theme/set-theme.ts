import type { Theme } from './theme-provider/utils'

export async function setTheme(theme: Theme): Promise<void> {
  localStorage.setItem('theme', theme as string)
}
