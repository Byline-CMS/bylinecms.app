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
import { useCallback, useEffect, useState } from 'react'

import cx from 'classnames'

interface HamburgerProps {
  className?: string
  color?: string
  activeBorderColor?: string
  open: boolean
  onChange: (event: React.MouseEvent<HTMLButtonElement> | null) => void
}

export function Hamburger({
  className,
  color = 'bg-white before:bg-white after:bg-white',
  activeBorderColor,
  open,
  onChange,
  ...other
}: HamburgerProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsOpen(!isOpen)
    onChange(event)
  }

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        if (isOpen) {
          setIsOpen(false)
          onChange(null)
        }
      }
    },
    [isOpen, onChange]
  )

  useEffect(() => {
    setIsOpen(open)
    document.addEventListener('keydown', handleEscapeKey, false)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey, false)
    }
  }, [open, handleEscapeKey])

  return (
    <button
      onClick={handleClick}
      className={cx(`component--hamburger ${isOpen ? 'is_active' : ''}`, className)}
      tabIndex={0}
      aria-label="Open main menu"
      aria-controls="main-menu"
      aria-haspopup="true"
      {...other}
    >
      <span className="box" aria-hidden="true">
        <span className={cx('inner', color)} />
      </span>
    </button>
  )
}
