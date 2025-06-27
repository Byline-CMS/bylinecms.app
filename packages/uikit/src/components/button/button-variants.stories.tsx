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

import type { Meta, StoryObj } from '@storybook/react-vite'
import { capitalize } from '../../utils/capitalize.js'

import { size } from '../@types/shared.js'
import { variant } from './@types/button.js'
import { Button } from './button.js'

type Story = StoryObj<typeof Button>

const AllVariants = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {variant.map((variant: any) => {
          return (
            <div
              key={variant}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr)',
                gap: '32px',
                marginBottom: '32px',
                alignItems: 'center',
              }}
            >
              {size.map((size: any) => {
                return (
                  <Button key={`${variant}=${size}`} size={size} variant={variant}>
                    {`${capitalize(variant)} ${size.toUpperCase()}`}
                  </Button>
                )
              })}
              <Button key={`${variant}=${size}`} disabled variant={variant}>
                {`${capitalize(variant)} Disabled`}
              </Button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const Variants: Story = {
  render: () => <AllVariants />,
}

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: Button,
}

export default meta
