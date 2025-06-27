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

import type React from 'react'

import { CloseIcon, SearchIcon } from '../../icons/index.js'
import { capitalize } from '../../utils/capitalize.js'
import { intent } from '../@types/shared.js'
import { IconButton } from '../button/icon-button.js'
import { size, variant } from './@types/input.js'

import { Input, InputAdornment } from './index.js'

export default {
  title: 'Components/Input/TextInput',
  component: Input,
  argTypes: {},
}

export const Default = (): React.JSX.Element => {
  return (
    <>
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <Input
            variant="outlined"
            intent="primary"
            id="name"
            name="name"
            label="Name"
            placeHolder="Name"
            helpText="Please enter your name."
            disabled={false}
            error={false}
          />
          <Input
            variant="outlined"
            intent="secondary"
            required
            id="foo"
            name="foo"
            label="Foo Required"
            placeHolder="Foo"
            helpText="Please enter your foo."
            disabled={false}
            error={false}
          />
          <Input
            variant="outlined"
            intent="primary"
            label="Start and End Adornments"
            startAdornment={
              <InputAdornment>
                <IconButton role="button" intent="noeffect" variant="text" ripple={false} size="xs">
                  <SearchIcon width="20px" height="20px" />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment>
                <IconButton role="button" intent="noeffect" variant="text" size="xs">
                  <CloseIcon width="16px" height="16px" />
                </IconButton>
              </InputAdornment>
            }
            id="search"
            name="search"
            placeHolder="Search"
            disabled={false}
            error={false}
          />
        </div>
      </div>
    </>
  )
}

export const Variants = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {variant.map((variant) => {
          return (
            <div
              key={variant}
              style={{ marginBottom: '2rem' }}
              className="grid grid-cols-4 items-center gap-12"
            >
              {size.map((size) => {
                return (
                  <Input
                    key={`${variant}=${size}`}
                    variant={variant}
                    inputSize={size}
                    id={`${variant}-${size}`}
                    name={`${variant}-${size}`}
                    label={`${capitalize(variant)} ${size.toUpperCase()}`}
                    placeHolder={`${capitalize(variant)} ${size.toUpperCase()}`}
                    helpText={`Please enter your ${variant} ${size.toUpperCase()}.`}
                    disabled={false}
                    error={false}
                  />
                )
              })}
              <Input
                disabled={true}
                key={`${variant}=${size}`}
                variant={variant}
                id={`${variant}-${size}`}
                name={`${variant}-${size}`}
                label={`${capitalize(variant)} Disabled`}
                placeHolder={`${capitalize(variant)} disabled`}
                helpText={`Please enter your ${variant} disabled.`}
                error={false}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export const Intents = (): React.JSX.Element => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {intent.map((i) => {
        return (
          <div key={i} style={{ marginBottom: '12px' }}>
            <Input
              key={i}
              variant="outlined"
              intent={i}
              inputSize="md"
              id={i}
              name={i}
              label={capitalize(i)}
              placeHolder={capitalize(i)}
              helpText={`Please enter your ${i}`}
              disabled={false}
              error={false}
            />
          </div>
        )
      })}
    </div>
  )
}

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export const Error = (): React.JSX.Element => {
  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Input
          required
          id="name"
          name="name"
          label="Name"
          placeHolder="Name"
          helpText="Please enter your name."
          disabled={false}
          error={true}
          errorText="Please enter a valid name."
        />
      </div>
    </>
  )
}
