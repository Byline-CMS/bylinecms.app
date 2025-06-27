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

import cx from 'classnames'

import { AnimatePresence, type FeatureBundle, LazyMotion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Overlay } from '../../components/overlay'
import { useMediaQuery } from '../../hooks/use-media-query'
import { getPortalRoot } from '../../utils/getPortalRoot'
import { useDrawer } from './drawer-context'

import { DrawerContainer } from './drawer-container'
import { DrawerContent } from './drawer-content'
import { DrawerHeader } from './drawer-header'
import { DrawerTopActions } from './drawer-top-actions'
import { DrawerWrapper } from './drawer-wrapper'

import type { ReactNode } from 'react'

import styles from './drawer.module.css'

type Styles = {
  [key: string]: string
}

const typedStyles: Styles = styles

const DomMax: () => Promise<FeatureBundle> = async () =>
  await import('./motionDomMax').then((mod) => mod.default)
const DomAnimation: () => Promise<FeatureBundle> = async () =>
  await import('./motionDomAnimation').then((mod) => mod.default)

export interface DrawerProps {
  id: string
  isOpen: boolean
  closeOnOverlayClick?: boolean
  onDismiss: () => void
  children: ReactNode
  width?: 'narrow' | 'medium' | 'wide'
  topOffset?: string
}

const Drawer = ({
  id,
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  children,
  width = 'narrow',
  topOffset = '0',
  ...rest
}: DrawerProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)') ?? false
  const { addDrawer, removeDrawer, drawers } = useDrawer()
  const depth = drawers.indexOf(id)

  const handleOverlayDismiss = (e: any): void => {
    e.stopPropagation()
    e.preventDefault()
    if (closeOnOverlayClick === true) {
      onDismiss?.()
    }
  }

  useEffect(() => {
    if (isOpen) {
      addDrawer(id)
    } else {
      removeDrawer(id)
    }
    return () => removeDrawer(id)
  }, [isOpen, id, addDrawer, removeDrawer])

  const portal = getPortalRoot()

  if (portal === false) return null

  return createPortal(
    <LazyMotion features={isMobile ? DomMax : DomAnimation}>
      <AnimatePresence>
        {isOpen === true && (
          <DrawerWrapper
            style={{ zIndex: 20 + depth, top: topOffset }}
            transition={{ duration: 0.2 }}
            onEscapeKey={handleOverlayDismiss}
            className={cx(
              typedStyles[`drawer-${width}`],
              typedStyles[`drawer-depth-${depth.toString()}`]
            )}
            {...rest}
          >
            <Overlay
              onClick={handleOverlayDismiss}
              style={{ top: topOffset }}
              isUnmounting={!(isOpen ?? false)}
            />
            {children}
          </DrawerWrapper>
        )}
      </AnimatePresence>
    </LazyMotion>,
    portal
  )
}

Drawer.displayName = 'Drawer'

Drawer.Container = DrawerContainer
Drawer.Content = DrawerContent
Drawer.Header = DrawerHeader
Drawer.TopActions = DrawerTopActions

export { Drawer }
