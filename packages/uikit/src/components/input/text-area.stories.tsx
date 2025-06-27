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

import { TextArea } from './index.js'

export default {
  title: 'Components/Input/TextArea',
  component: TextArea,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <TextArea
          required
          id="message"
          name="message"
          rows={5}
          label="Message"
          helpText="Please enter a message."
          disabled={false}
          error={false}
        />
      </div>
    </>
  )
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <TextArea
          required
          id="message"
          name="message"
          rows={5}
          label="Message"
          helpText="Please enter a message."
          disabled={false}
          error={true}
          errorText="Messages must be longer than 15 characers..."
        />
      </div>
    </>
  )
}
