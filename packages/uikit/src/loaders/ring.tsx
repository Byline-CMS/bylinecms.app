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

// https://github.com/JoshK2/react-spinners-css
import type React from 'react'

import classNames from 'classnames'

import type { LoaderProps } from './types/index.js'

export function LoaderRing({ color, size = 60, className, style }: LoaderProps): React.JSX.Element {
  const circles = [...Array(4)].map((_, index) => {
    return (
      <div
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        style={{
          borderColor: `${color || 'var(--loader-color)'} transparent transparent transparent`,
          width: size * 0.8,
          height: size * 0.8,
          margin: size * 0.1,
          borderWidth: size * 0.1,
        }}
      />
    )
  })

  return (
    <div
      className={classNames('lds-ring', className)}
      style={{ width: size, height: size, ...style }}
    >
      {circles}
    </div>
  )
}
