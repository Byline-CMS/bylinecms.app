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

// NOTE: hashPassword and verifyPassword are not Next.js Middleware compatible
// due to argon's use of node:crypto
// typically be run in a server runtime - like Node.js
import argon2 from 'argon2'

/**
 * Hashes the provided password using Argon2.
 *
 * @param password - The plaintext password to hash.
 * @returns A promise that resolves to the hashed password.
 */
export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await argon2.hash(password)
  } catch (_error) {
    throw new Error('Error hashing the password')
  }
}

/**
 * Verifies a password against the hashed value.
 *
 * @param password - The plaintext password to verify.
 * @param hashedPassword - The hashed password to verify against.
 * @returns A promise that resolves to a boolean indicating if the password is valid.
 */
export const verifyPassword = async (
  password: string,
  hashedPassword: string | null | undefined
): Promise<boolean> => {
  if (hashedPassword == null) {
    return false
  }
  try {
    return await argon2.verify(hashedPassword, password)
  } catch (_error) {
    throw new Error('Error verifying the password')
  }
}
