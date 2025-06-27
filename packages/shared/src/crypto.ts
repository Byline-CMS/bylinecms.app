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

// NOTE: encrypt and decrypt function using jose are Next.js Middleware / Edge safe
// and can be used to retrieve encrypted objects like session cookies.

import * as jose from 'jose'

/**
 * exportKeyToBase64
 *
 * @param cryptoKey
 * @returns
 */
export async function exportKeyToBase64(cryptoKey: CryptoKey): Promise<string> {
  const exported = await crypto.subtle.exportKey('raw', cryptoKey)
  const buffer = new Uint8Array(exported)
  return Buffer.from(buffer).toString('base64')
}

/**
 * importKeyFromBase64
 *
 * @param base64Key
 * @returns
 */
export async function importKeyFromBase64(base64Key: string): Promise<CryptoKey> {
  const buffer = Buffer.from(base64Key, 'base64')
  const keyData = new Uint8Array(buffer)
  return await crypto.subtle.importKey('raw', keyData, { name: 'AES-GCM' }, true, [
    'encrypt',
    'decrypt',
  ])
}

/**
 * generateCryptoKey
 *
 * @returns
 */
export async function generateCryptoKey() {
  const key = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, [
    'encrypt',
    'decrypt',
  ])
  return key
}

/**
 * encrypt
 *
 * @param plaintext
 * @param base64SecretKey
 * @returns
 */
export async function encrypt(plaintext: string, base64SecretKey: string) {
  const secretKey = await importKeyFromBase64(base64SecretKey)
  const payload = new TextEncoder().encode(plaintext)
  const jwe = await new jose.CompactEncrypt(payload)
    .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
    .encrypt(secretKey)
  return jwe
}

/**
 * encryptObject
 *
 * @param obj
 * @param base64SecretKey
 * @returns
 */
export async function encryptObject(obj: any, base64SecretKey: string) {
  return await encrypt(JSON.stringify(obj), base64SecretKey)
}

/**
 * decrypt
 *
 * @param ciphertext
 * @param base64SecretKey
 * @returns
 */
export async function decrypt(ciphertext: string, base64SecretKey: string) {
  const secretKey = await importKeyFromBase64(base64SecretKey)
  const { plaintext, protectedHeader } = await jose.compactDecrypt(ciphertext, secretKey)
  return new TextDecoder().decode(plaintext)
}

/**
 * decryptObject
 *
 * @param ciphertext
 * @param base64SecretKey
 * @returns
 */
export async function decryptObject(ciphertext: any, base64SecretKey: string) {
  const plaintext = await decrypt(ciphertext, base64SecretKey)
  return JSON.parse(plaintext)
}

/**
 * jwtVerify
 *
 * @param token
 * @param options
 * @returns
 */
export async function jwtVerify(
  token: string,
  options: {
    alg: string
    spki: string
    iss: string
    aud: string
  }
) {
  const publicKey = await jose.importSPKI(options.spki, options.alg)
  const { payload, protectedHeader } = await jose.jwtVerify(token, publicKey, {
    issuer: options.iss,
    audience: options.aud,
  })

  return { payload, protectedHeader }
}
