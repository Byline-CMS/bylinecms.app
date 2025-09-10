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

import type { Meta } from '@storybook/react-vite'

import { UserIcon } from '../../icons/user-icon.js'
import { size } from '../@types/shared.js'
import { variant } from './@types/button.js'
import { IconButton } from './icon-button.js'

const getUserIconSize = (size: string) => {
  switch (size) {
    case 'xs':
      return { width: '16px', height: '16px' }
    case 'sm':
      return { width: '18px', height: '18px' }
    case 'md':
      return { width: '22px', height: '22px' }
    case 'lg':
      return { width: '26px', height: '26px' }
    case 'xl':
      return { width: '30px', height: '30px' }
    default:
      return { width: '28px', height: '28px' }
  }
}

export const IconButtonsRound = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {variant.map((variant: any) => {
        return (
          <div
            key={variant}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '32px',
              marginBottom: '32px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {size.map((size: any) => {
              const iconSize = getUserIconSize(size)
              return (
                <div
                  key={`${variant}=${size}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton size={size} variant={variant}>
                    <UserIcon width={iconSize.width} height={iconSize.height} />
                  </IconButton>
                </div>
              )
            })}
            <div
              key={`${variant}=${size}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton disabled variant={variant}>
                <UserIcon width="22px" height="22px" />
              </IconButton>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export const IconButtonsSquare = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {variant.map((variant: any) => {
        return (
          <div
            key={variant}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '32px',
              marginBottom: '32px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {size.map((size: any) => {
              const iconSize = getUserIconSize(size)
              return (
                <div
                  key={`${variant}=${size}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <IconButton size={size} square={true} variant={variant}>
                    <UserIcon width={iconSize.width} height={iconSize.height} />
                  </IconButton>
                </div>
              )
            })}
            <div
              key={`${variant}=${size}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconButton disabled square={true} variant={variant}>
                <UserIcon width="22px" height="22px" />
              </IconButton>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const meta: Meta<typeof IconButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Button',
  component: IconButton,
}

export default meta
