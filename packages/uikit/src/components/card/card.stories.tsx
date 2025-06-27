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

import { Button } from '../button/button.js'

import { Card as CardComponent } from './card.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: CardComponent,
}

export default meta

export const Card = (): React.JSX.Element => {
  return (
    <>
      <div style={{ marginBottom: '48px' }} className="mb-6">
        <div style={{ maxWidth: '400px', marginBottom: '24px' }}>
          <CardComponent>
            <CardComponent.Header>
              <CardComponent.Title>
                <h2>Normal Card</h2>
              </CardComponent.Title>
              <CardComponent.Description>
                <p>Card description here.</p>
              </CardComponent.Description>
            </CardComponent.Header>
            <CardComponent.Content>
              <p>Card body with some text here.</p>
            </CardComponent.Content>
            <CardComponent.Footer>
              <Button size="sm">A Button</Button>
            </CardComponent.Footer>
          </CardComponent>
        </div>
        <div style={{ maxWidth: '400px', marginBottom: '24px' }}>
          <CardComponent hover={true}>
            <CardComponent.Header>
              <CardComponent.Title>
                <h2>Card Hover</h2>
              </CardComponent.Title>
              <CardComponent.Description>
                <p>Card description here.</p>
              </CardComponent.Description>
            </CardComponent.Header>
            <CardComponent.Content>
              <p>Card body with some text here.</p>
            </CardComponent.Content>
            <CardComponent.Footer>
              <Button size="sm">A Button</Button>
            </CardComponent.Footer>
          </CardComponent>
        </div>
      </div>
    </>
  )
}
