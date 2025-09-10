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

export const SettingsSlidersIcon = ({
  className,
  svgClassName,
  ...rest
}: IconProps): React.JSX.Element => {
  const applied = cx(styles['fill-none'], styles['stroke-contrast'], svgClassName)

  return (
    <IconElement className={cx('settings-sliders-icon', className)} {...rest}>
      <svg
        className={applied}
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M4 6l8 0" />
        <path d="M16 6l4 0" />
        <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M4 12l2 0" />
        <path d="M10 12l10 0" />
        <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M4 18l11 0" />
        <path d="M19 18l1 0" />
      </svg>
    </IconElement>
  )
}

SettingsSlidersIcon.displayName = 'SettingsSlidersIcon'
