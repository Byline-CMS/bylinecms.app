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

export const Default = (): React.JSX.Element => {
  return (
    <>
      <div style={{ marginBottom: '48px' }}>
        <div style={{ maxWidth: '700px', margin: 'auto' }} className="prose">
          <h1>Heading 1 - With Some More Text to Test on Mobile</h1>
          <p>
            This is a paragraph of text that we&apos;ll use for our typography storybook page. This
            is a paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page.
          </p>
          <h2>Heading 2 - With Some More Text to Test on Mobile</h2>
          <p>
            This is a paragraph of text that we&apos;ll use for our typography storybook page. This
            is a paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page.
          </p>
          <h3>Heading 3 - With Some More Text to Test on Mobile</h3>
          <p>
            This is a paragraph of text that we&apos;ll use for our typography storybook page. This
            is a paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page.
          </p>
          <h4>Heading 4 - With Some More Text to Test on Mobile</h4>
          <p>
            This is a paragraph of text that we&apos;ll use for our typography storybook page. This
            is a paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page. This is a
            paragraph of text that we&apos;ll use for our typography storybook page.
          </p>
        </div>
      </div>
    </>
  )
}

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography',
  component: Default,
}

export default meta
