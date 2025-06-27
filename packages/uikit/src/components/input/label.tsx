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

import styles from './label.module.css'

interface LabelProps {
  className?: string
  id: string
  htmlFor: string
  label: string
  required?: boolean
}

export function Label({ className, id, htmlFor, label, required }: LabelProps): React.JSX.Element {
  return (
    <label id={`label-for-${id}`} htmlFor={htmlFor} className={cx(styles.label, className)}>
      {label}
      {required != null && <span className={styles.required}>&nbsp;*</span>}
    </label>
  )
}
