"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAgentPolicy = exports.userAgentPolicyName = void 0;
const userAgent_js_1 = require("../util/userAgent.js");
const UserAgentHeaderName = (0, userAgent_js_1.getUserAgentHeaderName)();
/**
 * The programmatic identifier of the userAgentPolicy.
 */
exports.userAgentPolicyName = "userAgentPolicy";
/**
 * A policy that sets the User-Agent header (or equivalent) to reflect
 * the library version.
 * @param options - Options to customize the user agent value.
 */
function userAgentPolicy(options = {}) {
    const userAgentValue = (0, userAgent_js_1.getUserAgentValue)(options.userAgentPrefix);
    return {
        name: exports.userAgentPolicyName,
        async sendRequest(request, next) {
            if (!request.headers.has(UserAgentHeaderName)) {
                request.headers.set(UserAgentHeaderName, userAgentValue);
            }
            return next(request);
        },
    };
}
exports.userAgentPolicy = userAgentPolicy;
//# sourceMappingURL=userAgentPolicy.js.map