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

import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'

import { usePager } from './pagination'
import styles from './pagination.module.css'
import type { PagerButtonProps, RefType } from './pagination'

export const PreviousButton = ({
  ref,
  className,
  disabled,
  asChild,
  children,
  ...rest
}: PagerButtonProps & {
  ref?: React.RefObject<RefType>
}) => {
  const Comp = asChild != null ? Slot : ('button' as React.ElementType)
  const { showFirstButton, variant } = usePager()

  const aria = disabled ? { 'aria-disabled': true } : { 'aria-label': 'Previous' }

  return (
    <li className={styles['mobile-toggle']}>
      <Comp
        ref={ref}
        className={cx(
          styles['previous-button'],
          styles[variant],

          { [styles['rounded-left']]: showFirstButton == null || showFirstButton === false },
          'pager-previous',
          className
        )}
        disabled={disabled}
        title="Previous"
        data-testid="pager-previous"
        {...aria}
        {...rest}
      >
        {(asChild ?? false) ? children : <ChevronLeftIcon />}
      </Comp>
    </li>
  )
}

PreviousButton.displayName = 'PreviousButton'
