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

/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import type React from 'react'

import { DoubleArrowLeftIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'

import { usePager } from './pagination'
import styles from './pagination.module.css'
import type { PagerButtonProps, RefType } from './pagination'

export const FirstButton = ({
  ref,
  className,
  disabled,
  asChild,
  children,
  ...rest
}: PagerButtonProps & {
  ref?: React.RefObject<RefType>
}) => {
  const { variant } = usePager()

  const Comp = asChild != null ? Slot : ('button' as React.ElementType)

  const aria = disabled ? { 'aria-disabled': true } : { 'aria-label': 'First' }

  return (
    <li className={styles['mobile-toggle']}>
      <Comp
        ref={ref}
        className={cx(
          styles['first-button'],
          styles[variant],
          styles['rounded-left'],
          'pager-first',
          className
        )}
        disabled={disabled}
        data-testid="pager-first"
        title="First"
        {...aria}
        {...rest}
      >
        {(asChild ?? false) ? children : <DoubleArrowLeftIcon />}
      </Comp>
    </li>
  )
}

FirstButton.displayName = 'FirstButton'
