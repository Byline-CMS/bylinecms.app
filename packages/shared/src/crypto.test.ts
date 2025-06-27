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

import {
  decrypt,
  decryptObject,
  encrypt,
  encryptObject,
  exportKeyToBase64,
  generateCryptoKey,
  importKeyFromBase64,
} from './crypto.js'

const base64SecretKey = 'VzA+jmOkv0mQ4KdEkNVKkqHF+B7bUm2zzWXUsPtJJ7U='

test('should encrypt and decrypt text', async () => {
  const text = 'Now is the time for all good men...'
  const encrypted = await encrypt(text, base64SecretKey)
  const decrypted = await decrypt(encrypted, base64SecretKey)
  expect(decrypted).toEqual('Now is the time for all good men...')
})

test('should encrypt and decrypt a JavaScript object', async () => {
  const user = { email: 'john@example.com', name: 'John' }
  const encrypted = await encryptObject(user, base64SecretKey)
  const decrypted = await decryptObject(encrypted, base64SecretKey)
  expect(decrypted?.email).toEqual(user.email)
})

test('should generate a secret CryptoKey', async () => {
  const cryptoKey = await generateCryptoKey()
  expect(cryptoKey.type).toEqual('secret')
  expect(cryptoKey.algorithm).toEqual({ name: 'AES-GCM', length: 256 })
  expect(cryptoKey.usages).toEqual(['encrypt', 'decrypt'])
  expect(cryptoKey.extractable).toEqual(true)
})

test('should export a CryptoKey as base64 string', async () => {
  const cryptoKey = await generateCryptoKey()
  const base64Key = await exportKeyToBase64(cryptoKey)
  expect(base64Key.length).toEqual(44)
})

test('should import a CryptoKey from base64 string', async () => {
  const cryptoKey = await generateCryptoKey()
  const exportedKey = await exportKeyToBase64(cryptoKey)
  const importedKey = await importKeyFromBase64(exportedKey)
  expect(importedKey.type).toEqual('secret')
  expect(importedKey.algorithm).toEqual({ name: 'AES-GCM', length: 256 })
  expect(importedKey.usages).toEqual(['encrypt', 'decrypt'])
  expect(importedKey.extractable).toEqual(true)
})
