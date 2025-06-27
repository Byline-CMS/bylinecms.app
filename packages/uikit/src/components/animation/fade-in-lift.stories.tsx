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
import { FadeInLift } from './fade-in-lift.js'

const meta: Meta<typeof FadeInLift> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Animation/FadeInLift',
  component: FadeInLift,
}

export default meta

type Story = StoryObj<typeof FadeInLift>

const DivDemo = (): React.JSX.Element => {
  return (
    <div style={{ marginLeft: '4rem', marginBottom: '4rem' }}>
      <Section style={{ height: '100vh' }}>
        <FadeInLift
          as="div"
          duration={1}
          delay={0.5}
          style={{
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--primary-500)',
          }}
        >
          <p style={{ color: 'black' }}>Fade me in 1!</p>
        </FadeInLift>
      </Section>
      <Section style={{ height: '100vh' }}>
        <FadeInLift
          as="span"
          duration={1}
          delay={0.2}
          style={{
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--secondary-500)',
          }}
        >
          <p style={{ color: 'black' }}>Fade me in 2!</p>
        </FadeInLift>
      </Section>
      <Section style={{ height: '100vh' }}>
        <FadeInLift
          duration={1}
          delay={0.2}
          style={{
            width: '400px',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--yellow-500)',
          }}
        >
          <p style={{ color: 'black' }}>Fade me in 3!</p>
        </FadeInLift>
      </Section>
    </div>
  )
}

export const Default: Story = {
  render: () => <DivDemo />,
}
