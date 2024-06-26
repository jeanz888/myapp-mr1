"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAll = exports.buildBaseUrl = exports.buildRequestUrl = void 0;
/**
 * Builds the request url, filling in query and path parameters
 * @param endpoint - base url which can be a template url
 * @param routePath - path to append to the endpoint
 * @param pathParameters - values of the path parameters
 * @param options - request parameters including query parameters
 * @returns a full url with path and query parameters
 */
function buildRequestUrl(endpoint, routePath, pathParameters, options = {}) {
    if (routePath.startsWith("https://") || routePath.startsWith("http://")) {
        return routePath;
    }
    endpoint = buildBaseUrl(endpoint, options);
    routePath = buildRoutePath(routePath, pathParameters, options);
    const requestUrl = appendQueryParams(`${endpoint}/${routePath}`, options);
    const url = new URL(requestUrl);
    return (url
        .toString()
        // Remove double forward slashes
        .replace(/([^:]\/)\/+/g, "$1"));
}
exports.buildRequestUrl = buildRequestUrl;
function appendQueryParams(url, options = {}) {
    if (!options.queryParameters) {
        return url;
    }
    let parsedUrl = new URL(url);
    const queryParams = options.queryParameters;
    for (const key of Object.keys(queryParams)) {
        const param = queryParams[key];
        if (param === undefined || param === null) {
            continue;
        }
        if (!param.toString || typeof param.toString !== "function") {
            throw new Error(`Query parameters must be able to be represented as string, ${key} can't`);
        }
        const value = param.toISOString !== undefined ? param.toISOString() : param.toString();
        parsedUrl.searchParams.append(key, value);
    }
    if (options.skipUrlEncoding) {
        parsedUrl = skipQueryParameterEncoding(parsedUrl);
    }
    return parsedUrl.toString();
}
function skipQueryParameterEncoding(url) {
    if (!url) {
        return url;
    }
    const searchPieces = [];
    for (const [name, value] of url.searchParams) {
        // QUIRK: searchParams.get retrieves the values decoded
        searchPieces.push(`${name}=${value}`);
    }
    // QUIRK: we have to set search manually as searchParams will encode comma when it shouldn't.
    url.search = searchPieces.length ? `?${searchPieces.join("&")}` : "";
    return url;
}
function buildBaseUrl(endpoint, options) {
    var _a;
    if (!options.pathParameters) {
        return endpoint;
    }
    const pathParams = options.pathParameters;
    for (const [key, param] of Object.entries(pathParams)) {
        if (param === undefined || param === null) {
            throw new Error(`Path parameters ${key} must not be undefined or null`);
        }
        if (!param.toString || typeof param.toString !== "function") {
            throw new Error(`Path parameters must be able to be represented as string, ${key} can't`);
        }
        let value = param.toISOString !== undefined ? param.toISOString() : String(param);
        if (!options.skipUrlEncoding) {
            value = encodeURIComponent(param);
        }
        endpoint = (_a = replaceAll(endpoint, `{${key}}`, value)) !== null && _a !== void 0 ? _a : "";
    }
    return endpoint;
}
exports.buildBaseUrl = buildBaseUrl;
function buildRoutePath(routePath, pathParameters, options = {}) {
    for (const pathParam of pathParameters) {
        let value = pathParam;
        if (!options.skipUrlEncoding) {
            value = encodeURIComponent(pathParam);
        }
        routePath = routePath.replace(/\{\w+\}/, value);
    }
    return routePath;
}
/**
 * Replace all of the instances of searchValue in value with the provided replaceValue.
 * @param value - The value to search and replace in.
 * @param searchValue - The value to search for in the value argument.
 * @param replaceValue - The value to replace searchValue with in the value argument.
 * @returns The value where each instance of searchValue was replaced with replacedValue.
 */
function replaceAll(value, searchValue, replaceValue) {
    return !value || !searchValue ? value : value.split(searchValue).join(replaceValue || "");
}
exports.replaceAll = replaceAll;
//# sourceMappingURL=urlHelpers.js.map