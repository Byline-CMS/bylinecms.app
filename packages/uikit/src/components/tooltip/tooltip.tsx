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

import { Tooltip as TooltipPrimitive } from 'radix-ui'

type TooltipIntrinsicProps = React.JSX.IntrinsicElements['div']
export interface TooltipProps extends TooltipIntrinsicProps {
  text: string
  delay?: number
  side?: 'bottom' | 'top' | 'right' | 'left' | undefined
  sideOffset?: number
  disableHoverableContent?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

import styles from './tooltip.module.css'

export const Tooltip = function Tooltip({
  ref,
  text,
  delay = 500,
  side = 'top',
  sideOffset = 0,
  disableHoverableContent,
  open,
  onOpenChange,
  children,
}: TooltipProps & {
  ref?: React.RefObject<HTMLDivElement>
}): React.JSX.Element {
  return (
    <TooltipPrimitive.Provider
      delayDuration={delay}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          ref={ref}
          side={side}
          sideOffset={sideOffset}
          className={styles.tooltip}
        >
          {text}
          <TooltipPrimitive.Arrow className={styles['tooltip-arrow']} />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
