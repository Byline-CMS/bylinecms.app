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

/* eslint-disable @typescript-eslint/consistent-type-imports */
import type React from 'react'
import { createContext, useCallback, useState } from 'react'

import { AnimatePresence, type FeatureBundle, LazyMotion } from 'motion/react'
import { createPortal } from 'react-dom'

import { Overlay } from '../../components/overlay'
import { useMediaQuery } from '../../hooks/use-media-query'
import { getPortalRoot } from '../../utils/getPortalRoot'
import { ModalActions } from './modal-actions'
import { ModalContainer } from './modal-container'
import { ModalContent } from './modal-content'
import { ModalHeader } from './modal-header'
import { ModalWrapper } from './modal-wrapper'

const DomMax: () => Promise<FeatureBundle> = async () =>
  await import('./motionDomMax').then((mod) => mod.default)
const DomAnimation: () => Promise<FeatureBundle> = async () =>
  await import('./motionDomAnimation').then((mod) => mod.default)

export interface ModalProps {
  isOpen?: boolean
  onDismiss?: () => void
  closeOnOverlayClick?: boolean
  children?: React.ReactNode
}

export const ModalContext = createContext<{
  onDismiss?: () => void
}>({})

export type UseModalProps = ReturnType<typeof useModal>

export function useModal(): {
  onDismiss: () => void
  onOpen: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
} {
  const [isOpen, setIsOpen] = useState(false)

  const onDismiss = useCallback(() => {
    setIsOpen(false)
  }, [])

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  return {
    onDismiss,
    onOpen,
    isOpen,
    setIsOpen,
  }
}

function Modal({
  isOpen,
  onDismiss,
  closeOnOverlayClick,
  children,
  ...rest
}: ModalProps): React.ReactPortal | null {
  const isMobile = useMediaQuery('(max-width: 768px)') ?? false

  const handleOverlayDismiss = (e: any): void => {
    e.stopPropagation()
    e.preventDefault()
    if (closeOnOverlayClick === true) {
      onDismiss?.()
    }
  }

  const portal = getPortalRoot()

  if (portal === false) return null

  return createPortal(
    <ModalContext.Provider value={{ onDismiss }}>
      <LazyMotion features={isMobile ? DomMax : DomAnimation}>
        <AnimatePresence>
          {isOpen === true && (
            <ModalWrapper
              transition={{ duration: 0.2 }}
              onEscapeKey={handleOverlayDismiss}
              {...rest}
            >
              <Overlay onClick={handleOverlayDismiss} isUnmounting={!(isOpen ?? false)} />
              {children}
            </ModalWrapper>
          )}
        </AnimatePresence>
      </LazyMotion>
    </ModalContext.Provider>,
    portal
  )
}

Modal.displayName = 'Modal'

Modal.Container = ModalContainer
Modal.Header = ModalHeader
Modal.Content = ModalContent
Modal.Actions = ModalActions

export { Modal }
