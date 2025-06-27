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

import { Section } from '../section/section.js'
import { Container as ContainerComponent } from './container.js'

const meta: Meta<typeof ContainerComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Container',
  component: ContainerComponent,
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Container = (): React.JSX.Element => {
  return (
    <Section style={{ height: '100vh' }}>
      <ContainerComponent
        style={{
          backgroundColor: 'lightblue',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>I'm in a container</p>
      </ContainerComponent>
    </Section>
  )
}

// export const Default: Story = {
//   render: () => <DivDemo />,
// }
