"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSha256Hash = exports.computeSha256Hmac = void 0;
const crypto_1 = require("crypto");
/**
 * Generates a SHA-256 HMAC signature.
 * @param key - The HMAC key represented as a base64 string, used to generate the cryptographic HMAC hash.
 * @param stringToSign - The data to be signed.
 * @param encoding - The textual encoding to use for the returned HMAC digest.
 */
async function computeSha256Hmac(key, stringToSign, encoding) {
    const decodedKey = Buffer.from(key, "base64");
    return (0, crypto_1.createHmac)("sha256", decodedKey).update(stringToSign).digest(encoding);
}
exports.computeSha256Hmac = computeSha256Hmac;
/**
 * Generates a SHA-256 hash.
 * @param content - The data to be included in the hash.
 * @param encoding - The textual encoding to use for the returned hash.
 */
async function computeSha256Hash(content, encoding) {
    return (0, crypto_1.createHash)("sha256").update(content).digest(encoding);
}
exports.computeSha256Hash = computeSha256Hash;
//# sourceMappingURL=sha256.js.map