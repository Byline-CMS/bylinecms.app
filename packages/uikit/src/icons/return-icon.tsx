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

export const ReturnIcon = ({ className, svgClassName, ...rest }: IconProps): React.JSX.Element => {
  const applied = cx(styles['fill-none'], styles['stroke-contrast'], svgClassName)

  return (
    <IconElement className={cx('return-icon', className)} {...rest}>
      <svg
        className={applied}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 14 14"
      >
        <path d="M5.46,1.43,2,4.36,5.46,7.79" fill="none" strokeLinecap="square" strokeWidth="1" />
        <path
          d="M2.59,4.45H9.12a4.06,4.06,0,1,1,0,8.12H3.81"
          fill="none"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </IconElement>
  )
}

ReturnIcon.displayName = 'ReturnIcon'
