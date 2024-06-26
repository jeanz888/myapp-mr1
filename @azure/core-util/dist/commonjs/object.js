"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
/**
 * Helper to determine when an input is a generic JS object.
 * @returns true when input is an object type that is not null, Array, RegExp, or Date.
 */
function isObject(input) {
    return (typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        !(input instanceof RegExp) &&
        !(input instanceof Date));
}
exports.isObject = isObject;
//# sourceMappingURL=object.js.map