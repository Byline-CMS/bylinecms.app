'use client'
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
import { Button } from './button'
import type { ButtonProps } from './button.js'

import styles from './button.module.css'

type IconButtonProps<C extends React.ElementType = 'button'> = ButtonProps<C> & {
  square?: boolean
  round?: boolean
}

export const IconButton = <C extends React.ElementType = 'button'>({
  square = false,
  round = true,
  variant,
  size = 'sm',
  intent,
  className,
  children,
  ...rest
}: IconButtonProps<C>) => {
  return (
    <Button
      variant={variant}
      size={size}
      intent={intent}
      className={cx({ [styles.square]: square }, { [styles.round]: !square && round }, className)}
      {...rest}
    >
      {children}
    </Button>
  )
}
