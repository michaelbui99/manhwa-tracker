"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleLanguage = void 0;
const type_graphql_1 = require("type-graphql");
var TitleLanguage;
(function (TitleLanguage) {
    TitleLanguage[TitleLanguage["EN"] = 0] = "EN";
    TitleLanguage[TitleLanguage["JP"] = 1] = "JP";
    TitleLanguage[TitleLanguage["KR"] = 2] = "KR";
    TitleLanguage[TitleLanguage["ZH"] = 3] = "ZH";
})(TitleLanguage = exports.TitleLanguage || (exports.TitleLanguage = {}));
(0, type_graphql_1.registerEnumType)(TitleLanguage, {
    name: "TitleLanguage",
});
//# sourceMappingURL=TitleLanguage.js.map