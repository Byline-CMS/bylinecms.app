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

// typescript types

// Arrays make available an iterator for easy storybook layout

export const size = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type Size = (typeof size)[number]

export const intent = [
  'primary',
  'secondary',
  'noeffect',
  'success',
  'info',
  'warning',
  'danger',
] as const

export type Intent = (typeof intent)[number]

export const icons = ['success', 'info', 'success', 'warning', 'danger'] as const
export type Icons = (typeof icons)[number]

export const position = ['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const
export type Position = (typeof position)[number]
