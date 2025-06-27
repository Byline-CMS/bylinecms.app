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

import type { Meta } from '@storybook/react-vite'

import type { RadioGroupValue } from './radio-group.js'
import { RadioGroup as RadioGroupComponent, RadioGroupItem } from './radio-group.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/RadioGroup',
  component: RadioGroupComponent,
}

export default meta

const values1: RadioGroupValue[] = [
  { id: 'rg1', label: 'One', value: '1' },
  { id: 'rg2', label: 'Two', value: '2' },
  { id: 'rg3', label: 'Three', value: '3' },
]

const values2: RadioGroupValue[] = [
  { id: 'rg4', label: 'One', value: '1' },
  { id: 'rg5', label: 'Two', value: '2' },
  { id: 'rg6', label: 'Three', value: '3' },
]

const values3: RadioGroupValue[] = [
  { id: 'rg7', label: 'One', value: '1' },
  { id: 'rg8', label: 'Two', value: '2' },
  { id: 'rg9', label: 'Three', value: '3' },
]

export const RadioGroup = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <RadioGroupComponent direction="row" defaultValue="1">
          {values1.map((value) => (
            <RadioGroupItem key={value.id} value={value.value} id={value.id} label={value.label} />
          ))}
        </RadioGroupComponent>
      </div>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <RadioGroupComponent direction="row" defaultValue="2">
          {values2.map((value) => (
            <RadioGroupItem
              intent="secondary"
              key={value.id}
              value={value.value}
              id={value.id}
              label={value.label}
            />
          ))}
        </RadioGroupComponent>
      </div>
      <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
        <RadioGroupComponent direction="column" defaultValue="3">
          {values3.map((value) => (
            <RadioGroupItem
              intent="success"
              key={value.id}
              value={value.value}
              id={value.id}
              label={value.label}
            />
          ))}
        </RadioGroupComponent>
      </div>
    </>
  )
}
