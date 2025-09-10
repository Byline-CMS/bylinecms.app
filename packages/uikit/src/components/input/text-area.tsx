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

import type * as React from 'react'

import cx from 'classnames'

import { ErrorText } from './error-text.js'
import { HelpText } from './help-text.js'
import inputStyles from './input.module.css'
import { Label } from './label.js'
import styles from './text-area.module.css'
import type { Intent, Variant } from './@types/input.js'

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string
  name: string
  label: string
  required?: boolean
  variant?: Variant
  intent?: Intent
  rows: number
  placeHolder?: string
  autoComplete?: string
  error?: boolean
  helpText?: string
  errorText?: string
  className?: string
  ref?: React.RefCallback<HTMLTextAreaElement | null> | React.RefObject<HTMLTextAreaElement | null>
}

export const TextArea = function TextArea({
  ref,
  id,
  name,
  label,
  rows = 4,
  required = false,
  variant = 'outlined',
  intent = 'primary',
  placeHolder = '',
  autoComplete = 'off',
  error = false,
  helpText = '',
  errorText = '',
  className,
  ...rest
}: TextAreaProps): React.JSX.Element {
  return (
    <fieldset className={inputStyles.inputWrapper}>
      <Label id={id} htmlFor={id} required={required} label={label} />
      <textarea
        ref={ref}
        id={id}
        name={name}
        required={required}
        rows={rows}
        autoComplete={autoComplete}
        placeholder={placeHolder}
        aria-labelledby={`label-for-${id}`}
        aria-invalid={error}
        aria-required={required}
        aria-errormessage={errorText}
        aria-describedby={error ? `error-for-${id}` : undefined}
        className={cx(
          inputStyles.input,
          inputStyles[variant],
          inputStyles[intent],
          styles['text-area'],
          { [inputStyles.error]: error },
          className
        )}
        {...rest}
      />
      {error ? (
        <ErrorText id={`error-for-${id}`} text={errorText ?? helpText} />
      ) : (
        helpText?.length > 0 && <HelpText text={helpText} />
      )}
    </fieldset>
  )
}
