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
import { useEffect } from 'react'

import cx from 'classnames'

import styles from './overlay.module.css'

type OverlayIntrinsicProps = React.JSX.IntrinsicElements['div']
export interface OverlayProps extends OverlayIntrinsicProps {
  isUnmounting?: boolean
  className?: string
}

const BodyLock = (): null => {
  useEffect(() => {
    // a one off mediaMedia here is fine - no need to listen to events
    const mediaMatch = window.matchMedia('(min-width: 960px)')
    let appBar: HTMLElement | null
    if (mediaMatch.matches) {
      document.body.style.cssText = 'overflow: hidden; padding-right: 9px;'
      document.body.style.overflow = 'hidden'
      appBar = document.getElementById('app-bar')
      if (appBar != null) appBar.style.cssText = 'padding-right: 9px'
    } else {
      document.body.style.cssText = 'overflow: hidden;'
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.cssText = `
        overflow: visible;
        overflow: overlay;
      `
      if (mediaMatch.matches) {
        if (appBar != null) appBar.style.cssText = 'padding-right: 18px'
      }
    }
  }, [])

  return null
}

export function Overlay(props: OverlayProps): React.JSX.Element {
  const { isUnmounting, className, ...rest } = props
  const classes = cx(
    styles.overlay,
    // 'fixed top-0 left-0 w-full h-full backdrop-blur dark:bg-canvas-700/50 bg-canvas-500/50 z-20'
    'animate-fade-in',
    {
      'animate-fade-out': isUnmounting,
    }
  )

  return (
    <>
      <BodyLock />
      <div role="presentation" className={cx(classes, className)} {...rest} />
    </>
  )
}
