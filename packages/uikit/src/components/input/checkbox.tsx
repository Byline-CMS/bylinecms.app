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

import { CheckIcon } from '@radix-ui/react-icons'
import cx from 'classnames'
import { Checkbox as CheckboxPrimitive, Label as LabelPrimitive } from 'radix-ui'
import type * as React from 'react'

import type { Intent, Size, Variant } from './@types/checkbox.js'
import styles from './checkbox.module.css'
import { ErrorText } from './error-text.js'
import { HelpText } from './help-text.js'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string
  name: string
  label: string
  variant?: Variant
  size?: Size
  intent?: Intent
  reverse?: boolean
  checked?: boolean
  className?: string
  containerClasses?: string
  labelClasses?: string
  error?: boolean
  helpText?: string
  errorText?: string
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
}

export const Checkbox = function Checkbox({
  ref,
  id,
  name,
  label,
  variant = 'outlined',
  size = 'md',
  intent = 'primary',
  reverse = false,
  className,
  containerClasses,
  labelClasses,
  error = false,
  helpText = '',
  errorText = '',
  ...rest
}: Props & {
  ref?: React.RefObject<HTMLButtonElement>
}): React.JSX.Element {
  return (
    <div>
      <div className={cx(styles.container, containerClasses, { [styles.reverse]: reverse })}>
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          name={name}
          className={cx(styles.checkbox, styles[variant], styles[size], styles[intent], className)}
          {...rest}
        >
          <CheckboxPrimitive.Indicator forceMount className={styles.indicator}>
            <CheckIcon className={styles.icon} />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        <LabelPrimitive.Label htmlFor={id} className={cx(styles.label, labelClasses)}>
          {label}
        </LabelPrimitive.Label>
      </div>
      {error ? (
        <ErrorText id={`error-for-${id}`} text={errorText ?? helpText} />
      ) : (
        helpText?.length > 0 && <HelpText text={helpText} />
      )}
    </div>
  )
}
