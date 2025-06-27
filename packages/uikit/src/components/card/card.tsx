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

import { Slot } from '@radix-ui/react-slot'
import cx from 'classnames'
import type React from 'react'

import styles from './card.module.css'

export type AsDiv = {
  asChild?: false
} & React.ComponentPropsWithoutRef<'div'>

export interface AsSlot {
  asChild?: true
}

export type CardRefType<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref']

export type CardProps<C extends React.ElementType = 'div'> = {
  children: React.ReactNode
  className?: string
  hover?: boolean
  asChild?: boolean
  ref?: CardRefType<C>
} & (AsSlot | AsDiv)

const Card = <C extends React.ElementType = 'div'>({
  className,
  hover,
  children,
  asChild,
  ref,
  ...rest
}: CardProps<C>) => {
  const Comp: React.ElementType = asChild === true ? Slot : 'div'
  const hoverClasses = hover != null && hover === true ? styles.cardHover : undefined
  const classes = cx(styles.card, hoverClasses, className)

  return (
    <Comp ref={ref} className={classes} {...rest}>
      {children}
    </Comp>
  )
}

Card.displayName = 'Card'

interface OtherProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>
}

const Header = ({ className, ref, ...props }: OtherProps) => (
  <div ref={ref} className={cx(styles.cardHeader, className)} {...props} />
)

Header.displayName = 'CardHeader'

const Title = ({ className, ref, ...props }: OtherProps) => (
  <div
    ref={ref as React.Ref<HTMLDivElement>}
    className={cx(styles.cardTitle, className)}
    {...props}
  />
)
Title.displayName = 'CardTitle'

const Description = ({ className, ref, ...props }: OtherProps) => (
  <div ref={ref} className={cx(styles.cardDescription, className)} {...props} />
)
Description.displayName = 'CardDescription'

const Content = ({ className, ref, ...props }: OtherProps) => (
  <div ref={ref} className={cx(styles.cardContent, className)} {...props} />
)
Content.displayName = 'CardContent'

const Footer = ({ className, ref, ...props }: OtherProps) => (
  <div ref={ref} className={cx(styles.cardFooter, className)} {...props} />
)
Footer.displayName = 'CardFooter'

Card.Header = Header
Card.Title = Title
Card.Description = Description
Card.Content = Content
Card.Footer = Footer

export { Card }
