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

/**
 * NOTE: An accordion can be used in a variety of ways, including
 * simple FAQs, complex navigation, and more. As such, we minimally
 * style the accordion here in order to provide a base for customization.
 */

import type React from 'react'

import { Accordion as AccordionPrimitive } from 'radix-ui'

import cx from 'classnames'

import styles from './accordion.module.css'

export type AccordionRootElement = React.ComponentRef<'div'>

const Root = ({
  children,
  className,
  ref,
  ...props
}: {
  children: React.ReactNode
  className?: string
  ref?: React.RefObject<AccordionRootElement>
} & (AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps)) => {
  return (
    <AccordionPrimitive.Root ref={ref} className={className} {...props}>
      {children}
    </AccordionPrimitive.Root>
  )
}

export type AccordionItemElement = React.ComponentRef<'div'>
const Item = function AccordionItem({
  ref,
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps & {
  ref?: React.RefObject<AccordionItemElement>
}) {
  return (
    <AccordionPrimitive.Item className={className} {...props} ref={ref}>
      {children}
    </AccordionPrimitive.Item>
  )
}

export type AccordionHeaderElement = React.ComponentRef<'h2'>
const Header = function AccordionHeader({
  ref,
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionHeaderProps & {
  ref?: React.RefObject<AccordionHeaderElement>
}) {
  return (
    <AccordionPrimitive.Header className={cx(styles.header, className)} {...props} ref={ref}>
      {children}
    </AccordionPrimitive.Header>
  )
}

export type AccordionTriggerElement = React.ComponentRef<'button'>
const Trigger = function AccordionTrigger({
  ref,
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionTriggerProps & {
  ref?: React.RefObject<AccordionTriggerElement>
}) {
  return (
    <AccordionPrimitive.Trigger ref={ref} className={cx(styles.trigger, className)} {...props}>
      {children}
    </AccordionPrimitive.Trigger>
  )
}

export type AccordionContentElement = React.ComponentRef<'div'>
const Content = function AccordionContent({
  ref,
  children,
  className,
  ...props
}: AccordionPrimitive.AccordionContentProps & {
  ref?: React.RefObject<AccordionContentElement>
}) {
  return (
    <AccordionPrimitive.Content className={cx(styles.content, className)} {...props} ref={ref}>
      {children}
    </AccordionPrimitive.Content>
  )
}

export const Accordion = {
  Root,
  Item,
  Header,
  Trigger,
  Content,
}
