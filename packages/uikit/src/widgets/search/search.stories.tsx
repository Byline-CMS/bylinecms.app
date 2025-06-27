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

// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'

import { Search } from './search.js'

export default {
  title: 'Widgets/Search',
  component: Search,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Search variant="underlined" />
    </div>
  )
}
