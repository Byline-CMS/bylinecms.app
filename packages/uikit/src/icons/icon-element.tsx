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
import type { ReactNode } from 'react'

import cx from 'classnames'

export interface IconElementProps extends React.ComponentProps<'div'> {
  width?: string
  height?: string
  menuItem?: boolean
  children: ReactNode
  className?: string
}

export const IconElement = (props: IconElementProps): React.JSX.Element => {
  const { className, children, width = '22px', height = '22px', menuItem = false, ...rest } = props
  return (
    <div
      style={{
        width,
        height,
        flex: `0 0 ${width}`,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: menuItem != null && menuItem ? '1.2rem' : '0',
      }}
      className={cx('component--icon-element-root', className)}
      {...rest}
    >
      {children}
    </div>
  )
}
