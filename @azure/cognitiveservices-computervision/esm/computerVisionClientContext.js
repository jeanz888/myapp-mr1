/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import { __extends } from "tslib";
import * as msRest from "@azure/ms-rest-js";
var packageName = "@azure/cognitiveservices-computervision";
var packageVersion = "8.2.0";
var ComputerVisionClientContext = /** @class */ (function (_super) {
    __extends(ComputerVisionClientContext, _super);
    /**
     * Initializes a new instance of the ComputerVisionClientContext class.
     * @param endpoint Supported Cognitive Services endpoints.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    function ComputerVisionClientContext(credentials, endpoint, options) {
        var _this = this;
        if (endpoint == undefined) {
            throw new Error("'endpoint' cannot be null.");
        }
        if (credentials == undefined) {
            throw new Error("'credentials' cannot be null.");
        }
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            var defaultUserAgent = msRest.getDefaultUserAgentValue();
            options.userAgent = packageName + "/" + packageVersion + " " + defaultUserAgent;
        }
        _this = _super.call(this, credentials, options) || this;
        _this.baseUri = "{Endpoint}/vision/v3.2";
        _this.requestContentType = "application/json; charset=utf-8";
        _this.endpoint = endpoint;
        _this.credentials = credentials;
        return _this;
    }
    return ComputerVisionClientContext;
}(msRest.ServiceClient));
export { ComputerVisionClientContext };
//# sourceMappingURL=computerVisionClientContext.js.map