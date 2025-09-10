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

import { ChevronDownIcon } from '@radix-ui/react-icons'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion as AccordionComponent } from './accordion.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: AccordionComponent.Root,
}

export default meta

type Story = StoryObj<typeof AccordionComponent.Root>

export const Accordion: Story = {
  args: {
    type: 'single',
    asChild: true,
    defaultValue: 'item-1',
    collapsible: true,
    className: 'accordion-root border',
  },
  render: (args) => (
    <>
      <style>
        {`
      .accordion-root {
        border-radius: 6px;
        padding: 12px 6px;
        width: 300px;
        background-color: white;
        box-shadow: var(--shadow-md);
      }
  
      .accordion-header {
        border-radius: 6px;
        padding: 12px;
      }

      .accordion-header:hover {
        background-color: var(--gray-25);
      }

      .accordion-chevron {
        transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
      }

      .accordion-trigger[data-state="open"] + .accordion-chevron {
        transform: rotate(180deg);
      }

      .accordion-content {
        padding: 0 12px;
      }

      .dark .accordion-root {
        background-color: var(--canvas-700);
      }

      .dark .accordion-header:hover {
        background-color: var(--canvas-600);
      }

      
    `}
      </style>
      <AccordionComponent.Root {...args}>
        <nav>
          <AccordionComponent.Item value="item-1" className="accordion-item">
            <AccordionComponent.Header className="accordion-header">
              <AccordionComponent.Trigger className="accordion-trigger">
                Is it accessible?
              </AccordionComponent.Trigger>
              <ChevronDownIcon className="accordion-chevron" />
            </AccordionComponent.Header>
            <AccordionComponent.Content className="accordion-content">
              <p>Yes. It adheres to the WAI-ARIA design pattern.</p>
            </AccordionComponent.Content>
          </AccordionComponent.Item>

          <AccordionComponent.Item value="item-2">
            <AccordionComponent.Header className="accordion-header">
              <AccordionComponent.Trigger className="accordion-trigger">
                Is it unstyled?
              </AccordionComponent.Trigger>
              <ChevronDownIcon className="accordion-chevron" />
            </AccordionComponent.Header>
            <AccordionComponent.Content className="accordion-content">
              <ul>
                <li>Submenu Item One</li>
                <li>Submenu Item Two</li>
                <li>Submenu Item Three</li>
              </ul>
            </AccordionComponent.Content>
          </AccordionComponent.Item>

          <AccordionComponent.Item value="item-3">
            <AccordionComponent.Header className="accordion-header">
              <AccordionComponent.Trigger className="accordion-trigger">
                Can it be animated?
              </AccordionComponent.Trigger>
              <ChevronDownIcon className="accordion-chevron" />
            </AccordionComponent.Header>
            <AccordionComponent.Content className="accordion-content">
              <p> Yes! You can animate the Accordion with CSS or JavaScript.</p>
            </AccordionComponent.Content>
          </AccordionComponent.Item>
        </nav>
      </AccordionComponent.Root>
    </>
  ),
}
