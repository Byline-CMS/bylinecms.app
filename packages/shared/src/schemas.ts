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

import { type RefinementCtx, z } from 'zod'

/**
 * integerFromStringSchema
 *
 */
export const integerFromStringSchema = z.coerce.number().int()

/**
 * urlSchema
 *
 * @description: Matches urls that lack a trailing slash (intended for
 * cases where we will append paths that begin with a slash onto this url)
 *
 */
export const urlSchema = z.url().refine((val) => !val.endsWith('/'))

/**
 * base64Schema
 *
 * @description: Matches base64-encoded strings and decodes them into a node Buffer
 *
 */
export const base64Schema = z.base64().transform((val) => Buffer.from(val, 'base64'))

/**
 * uuidSchema
 *
 * @description: Matches UUIDs in the format 123e4567-e89b-12d3-a456-426614174000
 */
export const uuidSchema = z.uuid({
  message:
    'Invalid UUID format. Must be a 36-character hex string with hyphens (e.g., 123e4567-e89b-12d3-a456-426614174000)',
})

/**
 * booleanSchema
 *
 * @description: Converts 'true'/'false' to the corresponding boolean value, and interprets an
 * undefined value as false.
 *
 * @param defaultValue
 * @returns
 */
export const booleanSchema = (defaultValue = false) =>
  z
    .preprocess((value) => {
      // If input is already a boolean, return it directly
      if (typeof value === 'boolean') {
        return value
      }
      // If input is a string, attempt to coerce it to a boolean
      if (typeof value === 'string') {
        if (value.toLowerCase() === 'true') return true
        if (value.toLowerCase() === 'false') return false
      }
      // If input is invalid or undefined, let validation handle it
      return value
    }, z.boolean())
    .optional()
    .default(defaultValue) // Default value provided as a parameter

/**
 * checkBoxAsBooleanSchema
 *
 * @description: Converts 'true'/'false' to the corresponding boolean value, and interprets an
 * undefined value as false.
 *
 * @param defaultValue
 * @returns
 */
export const checkBoxAsBooleanSchema = (defaultValue = false) =>
  z
    .preprocess((value) => {
      if (value == null) return false
      // If input is a string, attempt to coerce it to a boolean
      if (typeof value === 'string' && value.toLowerCase() === 'on') return true
      // If input is invalid or undefined, let validation handle it
      return defaultValue
    }, z.boolean())
    .optional()
    .default(defaultValue) // Default value provided as a parameter

/**
 * requireIfEnabled
 *
 * @description: Returns a Zod superRefine function that requires the given properties be defined
 * when the 'enabled' property is true.
 * @param properties
 * @param name
 * @returns
 */
export const requireIfEnabled =
  (properties: string[], name: string) => (data: any, ctx: RefinementCtx) => {
    if (data.enabled) {
      for (const prop of properties) {
        if (data[prop] === undefined || data[prop] === null || data[prop] === '') {
          ctx.addIssue({
            code: 'custom',
            message: `${prop} is required when ${name} is enabled.`,
            path: [prop],
          })
        }
      }
    }
  }

/**
 * passwordSchema
 *
 * @description: Matches passwords that meet the following criteria:
 * - At least 8 characters long
 * - No more than 32 characters
 * - Contains at least one uppercase letter, one lowercase letter, one number, and one character from the following: #?!@$%^&*-
 */
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters long.')
  .max(32, 'Password must be less than 32 characters.')
  .regex(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, one number, and one character from the following: #?!@$%^&*-'
  )

/**
 * safeNumber - take any invalid values and return 0
 */
export const safeNumber = z.preprocess((val) => {
  if (val === null || val === undefined || Number.isNaN(val)) {
    return 0
  }
  return val
}, z.number())

export const dateTimeSchema = z.preprocess(
  (val) => (val === '' || val == null ? null : val),
  z.coerce.date()
)
