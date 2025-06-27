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

// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js
// https://github.com/mui/material-ui/blob/master/LICENSE

import type * as React from 'react'

export interface UsePaginationProps {
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount?: number
  /**
   * The name of the component where this hook is used.
   */
  componentName?: string
  /**
   * The total number of pages.
   * @default 1
   */
  count: number
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage?: number
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton?: boolean
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton?: boolean
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void
  /**
   * The current page.
   */
  page: number
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton?: boolean
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton?: boolean
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount?: number
}

export interface UsePaginationItem {
  onClick: React.ReactEventHandler
  type: 'page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'
  page: number
  selected: boolean
  disabled: boolean
  'aria-current'?: string | undefined
}

export interface UsePaginationResult {
  items: UsePaginationItem[]
}
