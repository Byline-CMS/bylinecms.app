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

import type { Meta, StoryObj } from '@storybook/react-vite'

import { intent } from '../@types/shared.js'
import { variant } from './@types/button.js'
import { CopyButton } from './copy-button.js'

type Story = StoryObj<typeof CopyButton>

const CopyDemo = (): React.JSX.Element => {
  return (
    <div style={{ marginLeft: '12rem', marginTop: '4rem' }}>
      {intent.map((i) => {
        return (
          <div
            key={i}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}
          >
            {variant.map((v) => {
              return (
                <CopyButton
                  text="I should be in your clipboard."
                  key={`${i}-${v}`}
                  intent={i}
                  variant={v}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export const Copy: Story = {
  render: () => <CopyDemo />,
}

const meta: Meta<typeof CopyButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: CopyButton,
}

export default meta
