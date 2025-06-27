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

import cx from 'classnames'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import type React from 'react'
import type { Intent } from '../@types/shared'
import styles from './radio-group.module.css'

export interface RadioGroupValue {
  id: string
  value: string
  label: string
}

export const RadioGroupItem = ({
  intent = 'primary',
  className,
  id,
  value,
  label,
  ref: forwardedRef,
  ...props
}: RadioGroupPrimitive.RadioGroupItemProps & {
  intent?: Intent
  className?: string
  id: string
  value: string
  label: string
  ref?: React.RefObject<React.ComponentRef<'div'>>
}) => {
  return (
    <div ref={forwardedRef} className={styles['item-container']}>
      <RadioGroupPrimitive.Item
        {...props}
        className={cx(styles.item, styles[intent])}
        value={value}
        id={id}
      >
        <RadioGroupPrimitive.Indicator className={styles.indicator} />
      </RadioGroupPrimitive.Item>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export const RadioGroup = ({
  ref: forwardedRef,
  className,
  direction = 'column',
  children,
  ...props
}: RadioGroupPrimitive.RadioGroupProps & {
  direction?: 'row' | 'column'
  className?: string
  children: React.ReactNode
  ref?: React.RefObject<React.ComponentRef<'div'>>
}) => (
  <RadioGroupPrimitive.Root
    ref={forwardedRef}
    className={cx(styles[direction], className)}
    // aria-label="View density"
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Root>
)
