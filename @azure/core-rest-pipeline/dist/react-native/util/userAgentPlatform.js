// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
const { Platform } = await import("react-native");
/**
 * @internal
 */
export function getHeaderName() {
    return "x-ms-useragent";
}
/**
 * @internal
 */
export function setPlatformSpecificData(map) {
    var _a;
    if ((_a = Platform.constants) === null || _a === void 0 ? void 0 : _a.reactNativeVersion) {
        const { major, minor, patch } = Platform.constants.reactNativeVersion;
        map.set("react-native", `${major}.${minor}.${patch}`);
    }
    map.set("OS", `${Platform.OS}-${Platform.Version}`);
}
//# sourceMappingURL=userAgentPlatform-react-native.mjs.map