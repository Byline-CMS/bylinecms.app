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

import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'
// @ts-expect-error
import Ripple from 'material-ripple-effects'

import styles from './button.module.css'
import type { Intent, Size, Variant } from './@types/button.js'

export type ButtonRefType<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

type AsButton = { asChild?: false } & React.ComponentPropsWithoutRef<'button'>

interface AsSlot {
  asChild?: true
}

export type ButtonProps<C extends React.ElementType = 'button'> = {
  variant?: Variant
  size?: Size
  type?: 'submit' | 'reset' | 'button'
  intent?: Intent
  fullWidth?: boolean
  ripple?: boolean
  className?: string
  children: React.ReactNode
  ref?: React.RefObject<ButtonRefType<C>>
} & (AsButton | AsSlot) &
  React.HTMLAttributes<HTMLElement>

export const Button = <C extends React.ElementType = 'button'>({
  variant = 'filled',
  size = 'md',
  type = 'button',
  intent = 'primary',
  fullWidth = false,
  ripple = true,
  className,
  children,
  asChild,
  ref,
  ...rest
}: ButtonProps<C>) => {
  const Comp: React.ElementType = asChild != null && asChild === true ? Slot : 'button'

  let onMouseDown: React.MouseEventHandler<HTMLButtonElement> | undefined
  if (ripple === true) {
    const rippleEffect = new Ripple()
    onMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (rest.onMouseDown) {
        ;(rest.onMouseDown as React.MouseEventHandler<HTMLButtonElement>)(e)
      }
      rippleEffect.create(e, variant === 'filled' || variant === 'gradient' ? 'light' : 'dark')
    }
  }

  return (
    <Comp
      ref={ref}
      type={type}
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        styles[intent],
        { [styles.fullWidth]: fullWidth === true },
        className
      )}
      onMouseDown={onMouseDown}
      {...rest}
    >
      {children}
    </Comp>
  )
}
