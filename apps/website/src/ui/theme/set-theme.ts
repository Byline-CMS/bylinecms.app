import type { Theme } from './theme-provider'

export async function setTheme(theme: Theme): Promise<void> {
  localStorage.setItem('theme', theme as string)
}
