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

import styles from './control-buttons.module.css'
import type { Size } from './@types/button.js'

type ButtonType = React.JSX.IntrinsicElements['button']

interface ControlButtonProps extends ButtonType {
  size?: Size
  className?: string
  onClick?: () => void
  ref?: React.RefObject<HTMLButtonElement>
}

interface DirectionalButtonProps extends ControlButtonProps {
  direction: 'up' | 'down' | 'left' | 'right'
}

export const DirectionalButton = ({
  size = 'md',
  direction,
  className,
  onClick,
  ref,
  ...rest
}: DirectionalButtonProps) => {
  const handleClick = (): void => {
    if (onClick != null) {
      onClick()
    }
  }

  return (
    <button
      ref={ref}
      {...rest}
      onClick={handleClick}
      type="button"
      aria-label={direction}
      className={cx(styles['directional-button'], styles[direction], styles[size], className)}
    >
      <span>
        <svg className="icon" focusable="false" aria-hidden="true" viewBox="0 0 51 32">
          <path
            fill="currentColor"
            d="M25.4,9.8L45.6,30l4.5-4.5L25.4,0.8L0.8,25.4L5.3,30L25.4,9.8z"
          />
        </svg>
      </span>
    </button>
  )
}

export const PlayButton = ({
  size = 'md',
  className,
  onClick,
  ref,
  ...rest
}: ControlButtonProps) => {
  const handleClick = (): void => {
    if (onClick != null) {
      onClick()
    }
  }

  return (
    <button
      ref={ref}
      {...rest}
      onClick={handleClick}
      type="button"
      aria-label="play"
      className={cx(styles['play-button'], styles[size], className)}
    >
      <span>
        <svg className="icon" focusable="false" aria-hidden="true" viewBox="0 0 32 32">
          <path
            d="M12 8L26 16L12 24V8Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  )
}

export const StopButton = ({
  size = 'md',
  className,
  onClick,
  ref,
  ...rest
}: ControlButtonProps) => {
  const handleClick = (): void => {
    if (onClick != null) {
      onClick()
    }
  }

  return (
    <button
      ref={ref}
      {...rest}
      onClick={handleClick}
      type="button"
      aria-label="stop"
      className={cx(styles['stop-button'], styles[size], className)}
    >
      <span>
        <svg className="icon" focusable="false" aria-hidden="true" viewBox="0 0 32 32">
          <rect
            x="4"
            y="4"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </span>
    </button>
  )
}
