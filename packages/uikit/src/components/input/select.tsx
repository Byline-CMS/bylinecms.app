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
import type { ComponentPropsWithoutRef } from 'react'

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import cx from 'classnames'
import { Select as SelectPrimitive } from 'radix-ui'

import { Button } from '../button/button.js'
import { HelpText } from './help-text.js'
import styles from './select.module.css'
import type { Intent } from '../@types/shared.js'
import type { Size, Variant } from '../button/@types/button.js'

export interface SelectValue {
  label: string
  value: string
  prefix?: string
  suffix?: string
}

type SelectProps = ComponentPropsWithoutRef<typeof SelectPrimitive.Root> & {
  id?: string
  intent?: Intent
  variant?: Variant
  size?: Size
  placeholder?: string
  position?: 'item-aligned' | 'popper'
  containerClassName?: string
  className?: string
  disabledValue?: string
  ariaLabel?: string
  helpText?: string
}

export function Select({
  id,
  children,
  placeholder,
  disabledValue,
  intent,
  variant,
  size,
  position,
  containerClassName,
  className,
  ariaLabel,
  helpText,
  ...rest
}: SelectProps): React.JSX.Element {
  return (
    <div className={cx(containerClassName)}>
      <SelectPrimitive.Root {...rest}>
        <SelectPrimitive.Trigger asChild aria-label={ariaLabel ?? 'Select'}>
          <Button
            id={id}
            intent={intent}
            variant={variant}
            size={size}
            className={cx('whitespace-nowrap', className)}
          >
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon>
              <ChevronDownIcon />
            </SelectPrimitive.Icon>
          </Button>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position={position}
            className={styles.content}
            ref={(ref) => {
              if (ref == null) return
            }}
          >
            <SelectPrimitive.ScrollUpButton className={styles['scroll-button']}>
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className={styles.viewport}>
              <SelectPrimitive.Group className={styles.group}>{children}</SelectPrimitive.Group>
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className={styles['scroll-button']}>
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
      {helpText != null && helpText?.length > 0 && <HelpText text={helpText} />}
    </div>
  )
}

export const SelectItem = ({
  ref: forwardedRef,
  children,
  className,
  ...props
}: SelectPrimitive.SelectItemProps & {
  ref?: React.RefObject<React.ComponentRef<'div'>>
}) => {
  return (
    <SelectPrimitive.Item
      className={cx(styles['select-item'], className)}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={styles['select-item-indicator']}>
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

SelectItem.displayName = 'SelectItem'
