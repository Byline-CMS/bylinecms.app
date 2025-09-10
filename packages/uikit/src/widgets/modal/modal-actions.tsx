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

import styles from './modal.module.css'

type ModalActionsIntrinsicProps = React.JSX.IntrinsicElements['div']
export interface ModalActionsProps extends ModalActionsIntrinsicProps {
  className?: string
}

export const ModalActions = function ModalActions({
  ref,
  children,
  className,
  ...rest
}: ModalActionsProps & {
  ref?: React.RefObject<HTMLDivElement>
}) {
  return (
    <div ref={ref} {...rest} className={cx(styles['modal-actions'], className)}>
      {children}
    </div>
  )
}
