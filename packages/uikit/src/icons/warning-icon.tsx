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

import type { IconProps } from './types/icon.js'

import styles from './icons.module.css'

const spriteID = 'icon-warning'

export const WarningIcon = ({
  className,
  svgClassName,
  useSprite,
  ...rest
}: IconProps): React.JSX.Element => {
  const applied = cx(styles['fill-warning'], svgClassName)

  return (
    <IconElement className={cx('warning-icon', className)} {...rest}>
      <svg className={applied} focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        {useSprite === true ? (
          <use href={`/sprite.svg#${spriteID}`} />
        ) : (
          <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
        )}
      </svg>
    </IconElement>
  )
}
