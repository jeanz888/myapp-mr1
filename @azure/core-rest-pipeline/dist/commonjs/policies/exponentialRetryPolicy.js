"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.exponentialRetryPolicy = exports.exponentialRetryPolicyName = void 0;
const exponentialRetryStrategy_js_1 = require("../retryStrategies/exponentialRetryStrategy.js");
const retryPolicy_js_1 = require("./retryPolicy.js");
const constants_js_1 = require("../constants.js");
/**
 * The programmatic identifier of the exponentialRetryPolicy.
 */
exports.exponentialRetryPolicyName = "exponentialRetryPolicy";
/**
 * A policy that attempts to retry requests while introducing an exponentially increasing delay.
 * @param options - Options that configure retry logic.
 */
function exponentialRetryPolicy(options = {}) {
    var _a;
    return (0, retryPolicy_js_1.retryPolicy)([
        (0, exponentialRetryStrategy_js_1.exponentialRetryStrategy)(Object.assign(Object.assign({}, options), { ignoreSystemErrors: true })),
    ], {
        maxRetries: (_a = options.maxRetries) !== null && _a !== void 0 ? _a : constants_js_1.DEFAULT_RETRY_POLICY_COUNT,
    });
}
exports.exponentialRetryPolicy = exponentialRetryPolicy;
//# sourceMappingURL=exponentialRetryPolicy.js.map