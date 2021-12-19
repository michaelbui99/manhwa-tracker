"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManhwaResolver = void 0;
const Manhwa_1 = __importDefault(require("src/models/Manhwa"));
const type_graphql_1 = require("type-graphql");
let ManhwaResolver = class ManhwaResolver {
    allManhwas() {
        return null;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Manhwa_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ManhwaResolver.prototype, "allManhwas", null);
ManhwaResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ManhwaResolver);
exports.ManhwaResolver = ManhwaResolver;
//# sourceMappingURL=manhwa-resolver.js.map