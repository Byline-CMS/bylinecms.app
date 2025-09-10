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
import React from 'react'

import type { Meta } from '@storybook/react-vite'

import { Button } from '../button/button.js'
import { Toast as ToastComponent } from './toast.js'

export const Toast = (): React.JSX.Element => {
  const [toast, setToast] = React.useState(false)

  const handleOpenToastClick = (): void => {
    setToast(!toast)
  }

  return (
    <div className="mb-6 max-w-[600px]">
      <Button onClick={handleOpenToastClick}>Open Toast</Button>
      <ToastComponent
        title="Note"
        iconType="success"
        intent="success"
        position="bottom-right"
        message="This is a test Toast modal that should appear when the button is clicked."
        open={toast}
        onOpenChange={setToast}
      />
    </div>
  )
}

const meta: Meta<typeof Toast> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Toast',
  component: ToastComponent,
}

export default meta
