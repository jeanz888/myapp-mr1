"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.auxiliaryAuthenticationHeaderPolicy = exports.auxiliaryAuthenticationHeaderPolicyName = void 0;
const tokenCycler_js_1 = require("../util/tokenCycler.js");
const log_js_1 = require("../log.js");
/**
 * The programmatic identifier of the auxiliaryAuthenticationHeaderPolicy.
 */
exports.auxiliaryAuthenticationHeaderPolicyName = "auxiliaryAuthenticationHeaderPolicy";
const AUTHORIZATION_AUXILIARY_HEADER = "x-ms-authorization-auxiliary";
async function sendAuthorizeRequest(options) {
    var _a, _b;
    const { scopes, getAccessToken, request } = options;
    const getTokenOptions = {
        abortSignal: request.abortSignal,
        tracingOptions: request.tracingOptions,
    };
    return (_b = (_a = (await getAccessToken(scopes, getTokenOptions))) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : "";
}
/**
 * A policy for external tokens to `x-ms-authorization-auxiliary` header.
 * This header will be used when creating a cross-tenant application we may need to handle authentication requests
 * for resources that are in different tenants.
 * You could see [ARM docs](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/authenticate-multi-tenant) for a rundown of how this feature works
 */
function auxiliaryAuthenticationHeaderPolicy(options) {
    const { credentials, scopes } = options;
    const logger = options.logger || log_js_1.logger;
    const tokenCyclerMap = new WeakMap();
    return {
        name: exports.auxiliaryAuthenticationHeaderPolicyName,
        async sendRequest(request, next) {
            if (!request.url.toLowerCase().startsWith("https://")) {
                throw new Error("Bearer token authentication for auxiliary header is not permitted for non-TLS protected (non-https) URLs.");
            }
            if (!credentials || credentials.length === 0) {
                logger.info(`${exports.auxiliaryAuthenticationHeaderPolicyName} header will not be set due to empty credentials.`);
                return next(request);
            }
            const tokenPromises = [];
            for (const credential of credentials) {
                let getAccessToken = tokenCyclerMap.get(credential);
                if (!getAccessToken) {
                    getAccessToken = (0, tokenCycler_js_1.createTokenCycler)(credential);
                    tokenCyclerMap.set(credential, getAccessToken);
                }
                tokenPromises.push(sendAuthorizeRequest({
                    scopes: Array.isArray(scopes) ? scopes : [scopes],
                    request,
                    getAccessToken,
                    logger,
                }));
            }
            const auxiliaryTokens = (await Promise.all(tokenPromises)).filter((token) => Boolean(token));
            if (auxiliaryTokens.length === 0) {
                logger.warning(`None of the auxiliary tokens are valid. ${AUTHORIZATION_AUXILIARY_HEADER} header will not be set.`);
                return next(request);
            }
            request.headers.set(AUTHORIZATION_AUXILIARY_HEADER, auxiliaryTokens.map((token) => `Bearer ${token}`).join(", "));
            return next(request);
        },
    };
}
exports.auxiliaryAuthenticationHeaderPolicy = auxiliaryAuthenticationHeaderPolicy;
//# sourceMappingURL=auxiliaryAuthenticationHeaderPolicy.js.map