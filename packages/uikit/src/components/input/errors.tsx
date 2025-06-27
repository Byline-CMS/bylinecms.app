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

/**
 * NOTE: Not currently used
 * Adapted from https://remix-forms.seasoned.cc/conf/07
 */

import type { ZodType, z } from 'zod'

type FormattedErrors = z.inferFormattedError<ZodType<any, any, any>>

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export function Error(props: React.JSX.IntrinsicElements['div']): React.JSX.Element {
  return <div {...props} className="mt-1 text-red-700" role="alert" />
}

export function ServerError({
  name,
  errors,
}: {
  name: string
  errors: any
}): React.JSX.Element | null {
  if (errors != null) {
    const error = errors[name as keyof typeof errors] as FormattedErrors
    return error?._errors != null ? (
      <Error id={`error-for-${name}`}>{error._errors.join(' ')}</Error>
    ) : null
  }
  return null
}

export function FieldError({ name, errors }: { name: string; errors: any }): React.JSX.Element {
  const message = errors[name]?.message
  if (message != null) {
    return <Error id={`error-for-${name}`}>{message}</Error>
  }
  return <ServerError name={name} errors={errors} />
}
