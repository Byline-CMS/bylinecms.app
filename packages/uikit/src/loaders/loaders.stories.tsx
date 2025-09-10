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

import { LoaderEllipsis } from './ellipses.js'
import { LoaderRing } from './ring.js'
import { LoaderSpinner } from './spinner.js'

interface LoaderProps {
  loader: React.JSX.Element
  label: string
}

function Loader({ loader, label }: LoaderProps): React.JSX.Element {
  return (
    <div className="flex flex-col items-center">
      {loader}
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}

const LoaderDemo = (): React.JSX.Element => (
  <div className="loader-demo grid grid-cols-4 gap-5">
    <Loader loader={<LoaderRing size={48} />} label="Ring" />
    <Loader loader={<LoaderEllipsis size={48} />} label="Ellipsis" />
    <Loader loader={<LoaderSpinner />} label="Spinner" />
  </div>
)

export default {
  title: 'Loaders/All',
  component: LoaderDemo,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  return (
    <div className="mb-6">
      <div className="max-w-[700px]">
        <LoaderDemo />
      </div>
    </div>
  )
}
