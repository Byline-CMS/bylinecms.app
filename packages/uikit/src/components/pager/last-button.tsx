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

import { DoubleArrowRightIcon } from '@radix-ui/react-icons'
import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'

import { usePager } from './pagination'
import styles from './pagination.module.css'
import type { PagerButtonProps, RefType } from './pagination'

export type LastButtonProps = PagerButtonProps & {
  count: number
}

export const LastButton = ({
  ref,
  className,
  disabled,
  count,
  asChild,
  children,
  ...rest
}: LastButtonProps & {
  ref?: React.RefObject<RefType>
}) => {
  const { variant } = usePager()
  const Comp = asChild != null ? Slot : ('button' as React.ElementType)

  const aria = disabled ? { 'aria-disabled': true } : { 'aria-label': 'Last' }

  return (
    <li className={styles['mobile-toggle']}>
      <Comp
        ref={ref}
        className={cx(
          styles['last-button'],
          styles[variant],
          styles['rounded-right'],
          'pager-last',
          className
        )}
        disabled={disabled}
        title="Last"
        data-testid="pager-last"
        {...aria}
        {...rest}
      >
        {(asChild ?? false) ? children : <DoubleArrowRightIcon />}
      </Comp>
    </li>
  )
}

LastButton.displayName = 'LastButton'
