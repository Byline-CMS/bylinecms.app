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

export const SearchIcon = ({ className, svgClassName, ...rest }: IconProps): React.JSX.Element => {
  const applied = cx(styles['fill-contrast'], styles['stroke-none'], svgClassName)

  return (
    <IconElement className={cx('search-icon', className)} {...rest}>
      <svg
        className={applied}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
    </IconElement>
  )
}

SearchIcon.displayName = 'SearchIcon'
