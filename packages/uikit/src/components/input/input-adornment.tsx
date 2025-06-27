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

import styles from './input-adornment.module.css'

type InputAdornmentIntrinsicProps = React.JSX.IntrinsicElements['div']
export interface InputAdornmentProps extends InputAdornmentIntrinsicProps {
  className?: string
  position?: 'start' | 'end'
  margins?: boolean
  children: React.ReactNode
}

export function InputAdornment({
  position = 'start',
  margins = true,
  className,
  children,
  ...rest
}: InputAdornmentProps): React.JSX.Element {
  return (
    <div
      className={cx(
        styles.adornment,
        { [styles.start]: position === 'start' },
        { [styles.end]: position === 'end' },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
