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

import { type Intent, intent } from '../@types/shared.js'

import { Alert as AlertComponent } from './alert.js'

export const Alerts = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {intent.map((intent: Intent) => {
          if (intent !== 'noeffect') {
            return (
              <div style={{ marginBottom: '1rem' }} key={intent}>
                <AlertComponent intent={intent}>
                  This is a {intent} alert - with some additional text here.
                </AlertComponent>
              </div>
            )
          }
          return null
        })}
        <AlertComponent intent="info" title="This is a title">
          This is an info alert with a title and with some additional text here.
        </AlertComponent>
      </div>
    </>
  )
}

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: Alerts,
}

export default meta
