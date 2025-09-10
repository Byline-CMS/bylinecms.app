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

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SignOutIcon } from '../../icons/sign-out-icon.js'
import { UserIcon } from '../../icons/user-icon.js'
import { Button } from '../button/button.js'
import { Dropdown as DropdownComponent } from './dropdown.js'

const meta: Meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Dropdown',
  component: DropdownComponent.Root,
}

export default meta

type Story = StoryObj<typeof DropdownComponent.Root>

export const Dropdown: Story = {
  args: {
    modal: false,
  },
  render: (args) => {
    return (
      <>
        <style>
          {`
          .dropdown-item-content {
            display: flex;
            align-items: center;
          }

          .dropdown-item-content-icon {
            display: inline-block;
            width: 28px;
          }

          .dropdown-item-content-text {
            text-align: left;
            display: inline-block;
            width: 100%;
            flex: 1;
          }

        `}
        </style>
        <div
          style={{
            maxWidth: '400px',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <DropdownComponent.Root {...args}>
            <DropdownComponent.Trigger asChild>
              <Button size="sm" variant="filled">
                +
              </Button>
            </DropdownComponent.Trigger>

            <DropdownComponent.Portal>
              <DropdownComponent.Content align="end" sideOffset={10}>
                <DropdownComponent.Item>
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-content-icon">
                      <UserIcon width="22px" height="22px" />
                    </span>
                    <span className="dropdown-item-content-text">Account</span>
                  </div>
                </DropdownComponent.Item>
                <DropdownComponent.Item>
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-content-icon" />
                    <span className="dropdown-item-content-text">Menu Item 2</span>
                  </div>
                </DropdownComponent.Item>
                <DropdownComponent.Separator />
                <DropdownComponent.Item>
                  <div className="dropdown-item-content">
                    <span className="dropdown-item-content-icon">
                      <SignOutIcon />
                    </span>
                    <span className="dropdown-item-content-text">
                      <button
                        type="button"
                        className="text-left inline-block w-full flex-1 leading-none text-black dark:text-gray-300"
                      >
                        Sign Out
                      </button>
                    </span>
                  </div>
                </DropdownComponent.Item>
              </DropdownComponent.Content>
            </DropdownComponent.Portal>
          </DropdownComponent.Root>
        </div>
      </>
    )
  },
}
