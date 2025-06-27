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

import cx from 'classnames'
import type React from 'react'
import styles from './shimmer.module.css'

interface ShimmerProps {
  className?: string
  width?: string | number
  height?: string | number
  lineHeight?: string | number
  borderRadius?: string
  variant?: 'text' | 'rectangular' | 'circular'
  lines?: number
  children?: React.ReactNode
}

export function Shimmer({
  className,
  width = '100%',
  height = '30',
  lineHeight = '1rem',
  borderRadius,
  variant = 'rectangular',
  lines = 1,
  children,
  ...other
}: ShimmerProps): React.JSX.Element {
  const shimmerStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: borderRadius,
  }

  const shimmerLinesStyle = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight,
    borderRadius: borderRadius,
  }

  const getVariantClass = () => {
    switch (variant) {
      case 'text':
        return styles.text
      case 'circular':
        return styles.circular
      case 'rectangular':
      default:
        return styles.rectangular
    }
  }

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cx(styles.shimmerContainer, className)} {...other}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={`shimmer-line-${index}`}
            className={cx(styles.shimmer, styles.text)}
            style={{
              ...shimmerLinesStyle,
              width: index === lines - 1 ? '75%' : '100%',
              marginBottom: index === lines - 1 ? 0 : '0.5rem',
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cx(styles.shimmer, getVariantClass(), className)}
      style={shimmerStyle}
      {...other}
    >
      {children}
    </div>
  )
}
