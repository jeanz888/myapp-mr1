// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import * as os from "node:os";
import * as process from "node:process";
/**
 * @internal
 */
export function getHeaderName() {
    return "User-Agent";
}
/**
 * @internal
 */
export function setPlatformSpecificData(map) {
    const versions = process.versions;
    if (versions.bun) {
        map.set("Bun", versions.bun);
    }
    else if (versions.deno) {
        map.set("Deno", versions.deno);
    }
    else if (versions.node) {
        map.set("Node", versions.node);
    }
    map.set("OS", `(${os.arch()}-${os.type()}-${os.release()})`);
}
//# sourceMappingURL=userAgentPlatform.js.map