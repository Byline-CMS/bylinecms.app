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

import styles from './table.module.css'

export type TableProps = React.JSX.IntrinsicElements['table']

function Table({
  ref,
  className,
  children,
  ...rest
}: TableProps & {
  ref?: React.RefObject<HTMLTableElement>
}): React.JSX.Element {
  const classes = cx(styles.table, 'table', className)

  return (
    <table ref={ref} className={classes} {...rest}>
      {children}
    </table>
  )
}

export type TableContainerProps = React.JSX.IntrinsicElements['div']

function Container({
  ref,
  className,
  children,
  ...rest
}: TableContainerProps & {
  ref?: React.RefObject<HTMLDivElement>
}) {
  const classes = cx(styles['table-container'], 'table-container', className)
  return (
    <div ref={ref} className={classes} {...rest}>
      <div className={cx('table--scroller', styles['table-scroller'])}>{children}</div>
    </div>
  )
}

export type TableBodyProps = React.JSX.IntrinsicElements['tbody']

function Body({
  ref,
  className,
  children,
  ...rest
}: TableBodyProps & {
  ref?: React.RefObject<HTMLTableSectionElement>
}): React.JSX.Element {
  return (
    <tbody ref={ref} className={className} {...rest}>
      {children}
    </tbody>
  )
}

export type TableHeaderProps = React.JSX.IntrinsicElements['thead']

function Header({
  ref,
  className,
  children,
  ...rest
}: TableHeaderProps & {
  ref?: React.RefObject<HTMLTableSectionElement>
}): React.JSX.Element {
  const classes = cx(styles['table-header'], 'table-header', className)

  return (
    <thead ref={ref} className={classes} {...rest}>
      {children}
    </thead>
  )
}

export type TableRowProps = React.JSX.IntrinsicElements['tr']

function Row({
  ref,
  className,
  children,
  ...rest
}: TableRowProps & {
  ref?: React.RefObject<HTMLTableRowElement>
}): React.JSX.Element {
  const classes = cx(styles['table-row'], 'table-row', className)

  return (
    <tr ref={ref} className={classes} {...rest}>
      {children}
    </tr>
  )
}

export type TableHeadingCellProps = React.JSX.IntrinsicElements['th']

function HeadingCell({
  ref,
  className,
  children,
  ...rest
}: TableHeadingCellProps & {
  ref?: React.RefObject<HTMLTableCellElement>
}): React.JSX.Element {
  const classes = cx(styles['table-heading-cell'], 'table-heading-cell', 'not-prose', className)
  return (
    <th ref={ref} className={classes} {...rest}>
      {children}
    </th>
  )
}

export type TableCellProps = React.JSX.IntrinsicElements['td']

function Cell({
  ref,
  className,
  children,
  ...rest
}: TableCellProps & {
  ref?: React.RefObject<HTMLTableCellElement>
}): React.JSX.Element {
  const classes = cx(styles['table-cell'], 'table-cell', className)

  return (
    <td ref={ref} className={classes} {...rest}>
      {children}
    </td>
  )
}

export type TableFooterProps = React.JSX.IntrinsicElements['tfoot']

function Footer({
  ref,
  className,
  children,
  ...rest
}: TableFooterProps & {
  ref?: React.RefObject<HTMLTableSectionElement>
}): React.JSX.Element {
  const classes = cx(
    'text-xs text-gray-700 uppercase bg-canvas-100 dark:bg-canvas-700 dark:text-gray-400',
    className
  )

  return (
    <tfoot ref={ref} className={classes} {...rest}>
      {children}
    </tfoot>
  )
}

Table.Container = Container
Table.Body = Body
Table.Header = Header
Table.Row = Row
Table.HeadingCell = HeadingCell
Table.Cell = Cell
Table.Footer = Footer

export { Table }
