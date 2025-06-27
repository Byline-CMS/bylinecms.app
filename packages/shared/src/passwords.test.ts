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

import { expect, test } from 'vitest'

import { hashPassword, verifyPassword } from './passwords.js'

test('should hash a password', async () => {
  const password = 'Welcome100!222'
  const hashedPassword = await hashPassword(password)
  expect(hashedPassword.length).toEqual(97)
})

test('should verify a password', async () => {
  const password = 'Welcome100!'
  const hashedPassword = await hashPassword(password)
  const isValid = await verifyPassword(password, hashedPassword)
  expect(isValid).toEqual(true)
})
