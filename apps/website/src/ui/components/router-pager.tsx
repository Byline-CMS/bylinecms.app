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

import type { PaginationProps } from '@byline/uikit/react'
import {
  ChevronLeftDoubleIcon,
  ChevronLeftIcon,
  ChevronRightDoubleIcon,
  ChevronRightIcon,
  Pagination,
} from '@byline/uikit/react'

import { Link, useRouterState } from '@tanstack/react-router'

// import { useSearchParams } from 'next/navigation'

interface RouterPageProps extends PaginationProps {
  lng: string
  smoothScrollToTop?: boolean
}

/**
 * A convenience Next.js pager, wrapped around Pagination with
 * example render methods and 'asChild' props. 'asChild' will allow you
 * supply a new child to render while also merging the existing props
 * (including styles) of the default component (First, Previous, PageNumber,
 * Nest, Last buttons etc.)
 */
export function RouterPager({
  className,
  lng,
  smoothScrollToTop,
  'aria-label': ariaLabel,
  ...rest
}: RouterPageProps): React.JSX.Element {
  // Remix produces a read/write SearchParams object with its useSearchParams hook
  // Next.js only produces a readOnly object. Both produce a standard object as per
  // docs here...
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const location = useRouterState({ select: (s) => s.location })
  const searchParams = new URLSearchParams(location.search)

  return (
    <Pagination variant="dashboard" {...rest}>
      <Pagination.Root className={className} ariaLabel={ariaLabel}>
        <Pagination.Pager
          renderFirst={(key, item) => {
            searchParams.delete('page')
            return (
              <Pagination.First asChild key={key} disabled={item.disabled}>
                {item.disabled === true ? (
                  <div>
                    <ChevronLeftDoubleIcon />
                  </div>
                ) : (
                  <Link
                    // Special case empty query string. If so - our Link
                    // component will see the '.', which will send them to the current path
                    // without any query parameters, thereby creating the correct canonical
                    // url for this path.
                    to={location.pathname}
                    search={`${searchParams.toString() != null && searchParams.toString().length > 0 ? `?${searchParams.toString()}` : ''}`}
                  >
                    <ChevronLeftDoubleIcon />
                  </Link>
                )}
              </Pagination.First>
            )
          }}
          renderPrevious={(key, item) => {
            searchParams.set('page', item?.page?.toString())
            return (
              <Pagination.Previous asChild key={key} disabled={item.disabled}>
                {item.disabled === true ? (
                  <div>
                    <ChevronLeftIcon />
                  </div>
                ) : (
                  <Link to={location.pathname} search={searchParams?.toString()}>
                    <ChevronLeftIcon />
                  </Link>
                )}
              </Pagination.Previous>
            )
          }}
          renderPageNumber={(key, item) => {
            // Special the first page. If so - our Link
            // component will see the '.', which will send them to the current path
            // without any query parameters, thereby creating the correct canonical
            // url for this path.
            if (item?.page === 1) {
              searchParams.delete('page')
            } else {
              searchParams.set('page', item.page?.toString())
            }
            return (
              <Pagination.Number
                asChild
                key={key}
                page={item.page}
                selected={item.selected}
                disabled={item.disabled}
              >
                {item.disabled === true ? (
                  <div>{item.page}</div>
                ) : (
                  <Link
                    // Special case empty query string. If so - our Link
                    // component will see the '.', which will send them to the current path
                    // without any query parameters, thereby creating the correct canonical
                    // url for this path.
                    to={location.pathname}
                    search={`${searchParams.toString() != null && searchParams.toString().length > 0 ? `?${searchParams.toString()}` : ''}`}
                  >
                    {item.page}
                  </Link>
                )}
              </Pagination.Number>
            )
          }}
          renderNext={(key, item) => {
            searchParams.set('page', item?.page?.toString())
            return (
              <Pagination.Next asChild key={key} page={item.page} disabled={item.disabled}>
                {item.disabled === true ? (
                  <div>
                    <ChevronRightIcon />
                  </div>
                ) : (
                  <Link to={location.pathname} search={searchParams?.toString()}>
                    <ChevronRightIcon />
                  </Link>
                )}
              </Pagination.Next>
            )
          }}
          renderLast={(key, item, count) => {
            searchParams.set('page', count?.toString())
            return (
              <Pagination.Last asChild key={key} disabled={item.disabled} count={count}>
                {item.disabled === true ? (
                  <div>
                    <ChevronRightDoubleIcon />
                  </div>
                ) : (
                  <Link to={location.pathname} search={searchParams?.toString()}>
                    <ChevronRightDoubleIcon />
                  </Link>
                )}
              </Pagination.Last>
            )
          }}
          renderEllipses={(key) => {
            return <Pagination.Ellipses key={key} />
          }}
        />
      </Pagination.Root>
    </Pagination>
  )
}
