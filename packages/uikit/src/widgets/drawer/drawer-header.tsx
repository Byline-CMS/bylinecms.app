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

import styles from './drawer.module.css'

type DrawerHeaderIntrinsicProps = React.JSX.IntrinsicElements['div']
export interface DrawerHeaderProps extends DrawerHeaderIntrinsicProps {
  className?: string
}

export const DrawerHeader = function DrawerHeader({
  ref,
  children,
  className,
  ...rest
}: DrawerHeaderProps & {
  ref?: React.RefObject<HTMLDivElement>
}) {
  const classes = cx(styles['drawer-header'], className)
  return (
    <div style={{ overflowWrap: 'anywhere' }} ref={ref} {...rest} className={classes}>
      {children}
    </div>
  )
}
