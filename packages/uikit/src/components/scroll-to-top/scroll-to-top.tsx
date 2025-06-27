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
import { useEffect, useState } from 'react'

type ScrollToTopIntrinsicProps = React.JSX.IntrinsicElements['button']
interface ScrollToTopProps extends ScrollToTopIntrinsicProps {
  offset?: number
}

export type { ScrollToTopProps }

export const ScrollToTop = function ScrollToTop({
  ref,
  offset = -65,
  ...rest
}: ScrollToTopProps & {
  ref?: React.RefObject<HTMLButtonElement>
}) {
  const [show, setShow] = useState(false)

  const handleScrollToTopClick = (): void => {
    window.scrollTo({ top: offset, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const handleCheck = (): void => {
      const scrollTop = window.scrollY
      if (scrollTop > 200) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleCheck)
    }
    return () => {
      window.removeEventListener('scroll', handleCheck)
    }
  }, [])

  return (
    <button
      ref={ref}
      {...rest}
      onClick={handleScrollToTopClick}
      type="button"
      id="scroll-to-top"
      className={`btn-to-top ${show && 'btn-floating'}`}
    >
      <span>
        <svg className="icon" focusable="false" aria-hidden="true" viewBox="0 0 51 32">
          <path d="M25.4,9.8L45.6,30l4.5-4.5L25.4,0.8L0.8,25.4L5.3,30L25.4,9.8z" />
        </svg>
      </span>
    </button>
  )
}
