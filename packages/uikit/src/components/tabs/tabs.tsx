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

import type * as React from 'react'

import cx from 'classnames'
import { Tabs as TabsPrimitive } from 'radix-ui'

import styles from './tabs.module.css'

const Tabs = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.Root>>
}) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cx(styles['tabs-root'], 'tabs-root', className)}
    {...props}
  />
)
Tabs.displayName = TabsPrimitive.Root.displayName

const TabsList = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.List>>
}) => (
  <TabsPrimitive.List
    ref={ref}
    className={cx(styles['tabs-list'], 'tabs-list', className)}
    {...props}
  />
)
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.Trigger>>
}) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cx(styles['tabs-trigger'], 'tabs-trigger', className)}
    {...props}
  />
)
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = ({
  ref,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
  ref?: React.RefObject<React.ComponentRef<typeof TabsPrimitive.Content>>
}) => (
  <TabsPrimitive.Content
    ref={ref}
    forceMount={true}
    className={cx(styles['tabs-content'], 'tabs-content', className)}
    {...props}
  />
)
TabsContent.displayName = TabsPrimitive.Content.displayName

Tabs.List = TabsList
Tabs.Trigger = TabsTrigger
Tabs.Content = TabsContent

export { Tabs }
