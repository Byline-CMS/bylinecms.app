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

import { Button } from '../button/button.js'
import { Tooltip as TooltipComponent } from './tooltip.js'

export const Tooltip = (): React.JSX.Element => {
  return (
    <div
      style={{
        maxWidth: '100px',
        marginLeft: '12rem',
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '46px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
    >
      <TooltipComponent text="I'm a tooltip" side="top" sideOffset={5}>
        <Button fullWidth={true} size="sm">
          Top
        </Button>
      </TooltipComponent>
      <TooltipComponent text="I'm a tooltip" side="left" sideOffset={5}>
        <Button fullWidth={true} size="sm">
          Left
        </Button>
      </TooltipComponent>
      <TooltipComponent text="I'm a tooltip" side="right" sideOffset={5}>
        <Button fullWidth={true} size="sm">
          Right
        </Button>
      </TooltipComponent>
      <TooltipComponent text="I'm a tooltip" side="bottom" sideOffset={5}>
        <Button fullWidth={true} size="sm">
          Bottom
        </Button>
      </TooltipComponent>
    </div>
  )
}

const meta: Meta<typeof TooltipComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components',
  component: TooltipComponent,
}

export default meta
