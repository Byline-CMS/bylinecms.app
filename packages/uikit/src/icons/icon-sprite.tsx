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

import type React from 'react'
import ReactDOM from 'react-dom'

// keep a list of the icon ids we put in the symbol
const icons = ['icon-1', 'icon-2']

export interface IconSpriteProps {
  id: string
}

// then define an Icon component that references the
export function IconSprite({ id, ...props }: IconSpriteProps): React.JSX.Element {
  return (
    <svg {...props}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
