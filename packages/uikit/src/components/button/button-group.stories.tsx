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
import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { ButtonGroup as ButtonGroupComponent, ButtonGroupItem } from './button-group.js'

const meta: Meta<typeof ButtonGroupComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: ButtonGroupComponent,
}

export default meta

type Story = StoryObj<typeof ButtonGroupComponent>

const ButtonGroupDemo = (): React.JSX.Element => {
  const [value, setValue] = useState<string | string[]>('one')
  const handleOnValueChange = (value: string | string[]) => {
    setValue(value)
  }
  return (
    <div className="ml-12 mb-6 max-w-[500px]">
      <ButtonGroupComponent
        type="single"
        expandToFit={true}
        value={value as string}
        onValueChange={handleOnValueChange}
      >
        <ButtonGroupItem value="one">One</ButtonGroupItem>
        <ButtonGroupItem value="two">Two</ButtonGroupItem>
        <ButtonGroupItem value="three">Three</ButtonGroupItem>
      </ButtonGroupComponent>
    </div>
  )
}

export const ButtonGroup: Story = {
  render: () => <ButtonGroupDemo />,
}
