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

import type { Meta } from '@storybook/react-vite'

import { Button } from '../button/button.js'
import { Tabs as TabsComponent } from './tabs.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: TabsComponent,
}

export default meta

export const Tabs = (): React.JSX.Element => (
  <div
    style={{
      maxWidth: '700px',
      marginBottom: '24px',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <TabsComponent style={{ width: '400px', minHeight: '235px' }} defaultValue="detailsTab">
      <TabsComponent.List>
        <TabsComponent.Trigger asChild value="detailsTab">
          <Button size="sm">Details</Button>
        </TabsComponent.Trigger>
        <TabsComponent.Trigger asChild value="rolesTab">
          <Button size="sm">Roles</Button>
        </TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="detailsTab" forceMount={true}>
        <p>Details tab content here. Some more text to make this tab content area a bit longer.</p>
        <p>Details tab content here. Some more text to make this tab content area a bit longer.</p>
      </TabsComponent.Content>
      <TabsComponent.Content value="rolesTab">
        <p>Roles tab content here. Some more text to make this tab content area a bit longer.</p>
        <p>Roles tab content here. Some more text to make this tab content area a bit longer.</p>
      </TabsComponent.Content>
    </TabsComponent>
  </div>
)
