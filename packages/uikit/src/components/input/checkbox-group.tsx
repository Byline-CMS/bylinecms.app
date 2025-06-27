'use client'

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
import { useEffect, useState } from 'react'

import { Checkbox } from './checkbox.js'

export interface CheckboxGroupProps {
  groupName: string
  checkBoxes: { id: string; label: string }[]
  defaultValues?: string[]
  controlledValue?: string
  disabled?: boolean
  onChange?: (selectedRoles: string[]) => void
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  groupName,
  checkBoxes,
  defaultValues,
  controlledValue,
  disabled = false,
  onChange,
}) => {
  let initialValue: string[] = []
  if (controlledValue !== undefined && controlledValue.length > 0) {
    initialValue = controlledValue.split(',')
  } else if (defaultValues !== undefined) {
    initialValue = defaultValues
  }

  const [selected, setSelected] = useState<string[]>(initialValue)

  // We have to call setSelected here in useEffect to
  // synchronize controlledValue - we can't rely on
  // initialValue alone
  useEffect(() => {
    if (controlledValue !== undefined && controlledValue.length > 0) {
      setSelected(controlledValue.split(','))
    } else if (defaultValues !== undefined) {
      setSelected(defaultValues)
    } else {
      setSelected([])
    }
  }, [controlledValue, defaultValues])

  const handleCheckboxChange = (id: string, checked: boolean | 'indeterminate') => {
    const s = [...selected]
    if (checked === true) {
      if (s.includes(id) === false) {
        s.push(id)
      }
    } else {
      const index = s.indexOf(id)
      if (index !== -1) {
        s.splice(index, 1)
      }
    }
    setSelected(s)
    onChange?.(s)
  }

  return (
    <div className="space-y-2">
      {checkBoxes.map((cb) => (
        <Checkbox
          key={cb.id}
          id={`${groupName}-${cb.id}`}
          name={`${groupName}-${cb.id}`}
          label={cb.label}
          checked={selected.includes(cb.id)}
          disabled={disabled}
          onCheckedChange={(checked) => handleCheckboxChange(cb.id, checked)}
        />
      ))}
    </div>
  )
}
