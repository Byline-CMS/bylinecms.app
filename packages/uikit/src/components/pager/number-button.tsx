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

import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'

import { useMediaQuery } from '../../hooks/use-media-query'
import { usePager } from './pagination'
import styles from './pagination.module.css'
import type { PagerButtonProps, RefType } from './pagination'

export type NumberButtonProps = PagerButtonProps & {
  page: number | null
  activeClassName?: string
  selected?: boolean
}

export const NumberButton = ({
  ref,
  page,
  className,
  disabled,
  activeClassName,
  asChild,
  children,
  ...rest
}: NumberButtonProps & {
  ref?: React.RefObject<RefType>
}) => {
  const mobile = useMediaQuery('(max-width: 640px)')
  const {
    variant,
    currentPage,
    count,
    showFirstButton,
    showLastButton,
    hideNextButton,
    hidePrevButton,
  } = usePager()

  const Comp = asChild != null ? Slot : ('button' as React.ElementType)

  const active = page === currentPage

  return (
    <li className="flex">
      <Comp
        ref={ref}
        className={cx(
          styles['number-button'],
          [styles[variant]],
          { [styles.active]: active === true, active: active === true },
          {
            [styles['rounded-left']]:
              page === 1 && ((!(showFirstButton ?? false) && (hidePrevButton ?? false)) || mobile),
          },
          {
            [styles['rounded-right']]:
              page === count &&
              ((!(showLastButton ?? false) && (hideNextButton ?? false)) || mobile),
          },
          'pager-number',
          className
        )}
        data-testid={
          cx({
            'pager-number-active': currentPage === page,
            [`pager-number-${page}`]: currentPage !== page,
          }).length > 0 || undefined
        }
        disabled={disabled}
        aria-current={currentPage === page}
        aria-label={currentPage === page ? `Current Page, Page ${page}` : `Page ${page}`}
        {...rest}
      >
        {(asChild ?? false) ? children : page}
      </Comp>
    </li>
  )
}

NumberButton.displayName = 'NumberButton'
