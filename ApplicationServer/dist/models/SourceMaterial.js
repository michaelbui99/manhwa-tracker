"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceMaterial = void 0;
const type_graphql_1 = require("type-graphql");
var SourceMaterial;
(function (SourceMaterial) {
    SourceMaterial[SourceMaterial["WEB_COMIC"] = 0] = "WEB_COMIC";
    SourceMaterial[SourceMaterial["LIGHT_NOVEL"] = 1] = "LIGHT_NOVEL";
    SourceMaterial[SourceMaterial["WEB_NOVEL"] = 2] = "WEB_NOVEL";
    SourceMaterial[SourceMaterial["ORIGINAL"] = 3] = "ORIGINAL";
})(SourceMaterial = exports.SourceMaterial || (exports.SourceMaterial = {}));
(0, type_graphql_1.registerEnumType)(SourceMaterial, {
    name: "SourceMaterial",
    description: "Source material that the manhwa is adapting",
});
//# sourceMappingURL=SourceMaterial.js.map