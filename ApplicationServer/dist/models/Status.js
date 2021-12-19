"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const type_graphql_1 = require("type-graphql");
var Status;
(function (Status) {
    Status[Status["NOT_YET_RELEASED"] = 0] = "NOT_YET_RELEASED";
    Status[Status["RELEASING"] = 1] = "RELEASING";
    Status[Status["FINISHED"] = 2] = "FINISHED";
    Status[Status["HIATUS"] = 3] = "HIATUS";
    Status[Status["CANCELLED"] = 4] = "CANCELLED";
})(Status = exports.Status || (exports.Status = {}));
(0, type_graphql_1.registerEnumType)(Status, {
    name: "Status",
    description: "The release status of the manhwa",
});
//# sourceMappingURL=Status.js.map