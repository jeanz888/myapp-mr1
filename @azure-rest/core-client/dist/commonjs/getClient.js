"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClient = void 0;
const core_auth_1 = require("@azure/core-auth");
const clientHelpers_js_1 = require("./clientHelpers.js");
const sendRequest_js_1 = require("./sendRequest.js");
const urlHelpers_js_1 = require("./urlHelpers.js");
function getClient(endpoint, credentialsOrPipelineOptions, clientOptions = {}) {
    var _a, _b;
    let credentials;
    if (credentialsOrPipelineOptions) {
        if (isCredential(credentialsOrPipelineOptions)) {
            credentials = credentialsOrPipelineOptions;
        }
        else {
            clientOptions = credentialsOrPipelineOptions !== null && credentialsOrPipelineOptions !== void 0 ? credentialsOrPipelineOptions : {};
        }
    }
    const pipeline = (0, clientHelpers_js_1.createDefaultPipeline)(endpoint, credentials, clientOptions);
    if ((_a = clientOptions.additionalPolicies) === null || _a === void 0 ? void 0 : _a.length) {
        for (const { policy, position } of clientOptions.additionalPolicies) {
            // Sign happens after Retry and is commonly needed to occur
            // before policies that intercept post-retry.
            const afterPhase = position === "perRetry" ? "Sign" : undefined;
            pipeline.addPolicy(policy, {
                afterPhase,
            });
        }
    }
    const { allowInsecureConnection, httpClient } = clientOptions;
    const endpointUrl = (_b = clientOptions.endpoint) !== null && _b !== void 0 ? _b : endpoint;
    const client = (path, ...args) => {
        const getUrl = (requestOptions) => (0, urlHelpers_js_1.buildRequestUrl)(endpointUrl, path, args, Object.assign({ allowInsecureConnection }, requestOptions));
        return {
            get: (requestOptions = {}) => {
                return buildOperation("GET", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            post: (requestOptions = {}) => {
                return buildOperation("POST", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            put: (requestOptions = {}) => {
                return buildOperation("PUT", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            patch: (requestOptions = {}) => {
                return buildOperation("PATCH", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            delete: (requestOptions = {}) => {
                return buildOperation("DELETE", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            head: (requestOptions = {}) => {
                return buildOperation("HEAD", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            options: (requestOptions = {}) => {
                return buildOperation("OPTIONS", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
            trace: (requestOptions = {}) => {
                return buildOperation("TRACE", getUrl(requestOptions), pipeline, requestOptions, allowInsecureConnection, httpClient);
            },
        };
    };
    return {
        path: client,
        pathUnchecked: client,
        pipeline,
    };
}
exports.getClient = getClient;
function buildOperation(method, url, pipeline, options, allowInsecureConnection, httpClient) {
    var _a;
    allowInsecureConnection = (_a = options.allowInsecureConnection) !== null && _a !== void 0 ? _a : allowInsecureConnection;
    return {
        then: function (onFulfilled, onrejected) {
            return (0, sendRequest_js_1.sendRequest)(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection }), httpClient).then(onFulfilled, onrejected);
        },
        async asBrowserStream() {
            return (0, sendRequest_js_1.sendRequest)(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection, responseAsStream: true }), httpClient);
        },
        async asNodeStream() {
            return (0, sendRequest_js_1.sendRequest)(method, url, pipeline, Object.assign(Object.assign({}, options), { allowInsecureConnection, responseAsStream: true }), httpClient);
        },
    };
}
function isCredential(param) {
    if (param.key !== undefined || (0, core_auth_1.isTokenCredential)(param)) {
        return true;
    }
    return false;
}
//# sourceMappingURL=getClient.js.map