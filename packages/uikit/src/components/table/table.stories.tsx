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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type React from 'react'

import type { Meta } from '@storybook/react-vite'

import { Table as TableComponent } from './table.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: TableComponent,
}

export default meta

export const Table = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      <TableComponent.Container>
        <TableComponent>
          <TableComponent.Header>
            <TableComponent.Row>
              <TableComponent.HeadingCell scope="col">
                <span>Check</span>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 1</p>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 2</p>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 3</p>
              </TableComponent.HeadingCell>
            </TableComponent.Row>
          </TableComponent.Header>

          <TableComponent.Body>
            <TableComponent.Row>
              <TableComponent.Cell>
                <span>Check</span>
              </TableComponent.Cell>
              <TableComponent.Cell>1</TableComponent.Cell>
              <TableComponent.Cell>2</TableComponent.Cell>
              <TableComponent.Cell>3</TableComponent.Cell>
            </TableComponent.Row>
            <TableComponent.Row>
              <TableComponent.Cell>
                <span>Check</span>
              </TableComponent.Cell>
              <TableComponent.Cell>1</TableComponent.Cell>
              <TableComponent.Cell>2</TableComponent.Cell>
              <TableComponent.Cell>3</TableComponent.Cell>
            </TableComponent.Row>
            <TableComponent.Row>
              <TableComponent.Cell>
                <span>Check</span>
              </TableComponent.Cell>
              <TableComponent.Cell>1</TableComponent.Cell>
              <TableComponent.Cell>2</TableComponent.Cell>
              <TableComponent.Cell>3</TableComponent.Cell>
            </TableComponent.Row>
            <TableComponent.Row>
              <TableComponent.Cell>
                <span>Check</span>
              </TableComponent.Cell>
              <TableComponent.Cell>1</TableComponent.Cell>
              <TableComponent.Cell>2</TableComponent.Cell>
              <TableComponent.Cell>3</TableComponent.Cell>
            </TableComponent.Row>
          </TableComponent.Body>
          <TableComponent.Footer>
            <TableComponent.Row>
              <TableComponent.HeadingCell scope="col">
                <span>Check</span>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 1</p>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 2</p>
              </TableComponent.HeadingCell>
              <TableComponent.HeadingCell scope="col">
                <p>Heading 3</p>
              </TableComponent.HeadingCell>
            </TableComponent.Row>
          </TableComponent.Footer>
        </TableComponent>
      </TableComponent.Container>
    </div>
  )
}
