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

import cx from 'classnames'

import { IconElement } from './icon-element.js'
import styles from './icons.module.css'
import type { IconProps } from './types/icon.js'

export const HomeIcon = ({ className, svgClassName, ...rest }: IconProps): React.JSX.Element => {
  const applied = cx(styles['fill-none'], styles['stroke-contrast'], svgClassName)

  return (
    <IconElement className={cx('home-icon', className)} {...rest}>
      <svg
        className={applied}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        strokeWidth={1.75}
      >
        <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>{' '}
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>{' '}
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>{' '}
      </svg>
    </IconElement>
  )
}

HomeIcon.displayName = 'HomeIcon'
