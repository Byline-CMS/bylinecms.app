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

import { Select, SelectItem, type SelectValue } from './select.js'

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {},
}

const values: SelectValue[] = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '4' },
  { label: 'Five', value: '5' },
]

export const Default = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <Select placeholder="Select one..." helpText="Select an item.">
        {values.map((value) => (
          <SelectItem key={value.value} value={value.value}>
            {value.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}
