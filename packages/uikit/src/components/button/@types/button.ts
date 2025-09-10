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

// generic types
import type { Size as s, Intent as t } from '../../@types/shared.js'

/**
 * This file contains the types and prop-types for Button and IconButton component.
 */

// typescript types
export const variant = ['filled', 'outlined', 'gradient', 'text'] as const
export type Variant = (typeof variant)[number]

export type Size = 'md' | s
export type Intent = 'primary' | t
export type FullWidth = boolean
export type EnableRipple = boolean
