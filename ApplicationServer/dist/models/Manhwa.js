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
Object.defineProperty(exports, "__esModule", { value: true });
const Status_1 = require("./Status");
const SourceMaterial_1 = require("./SourceMaterial");
const Tag_1 = require("./Tag");
const Genre_1 = require("./Genre");
const Synonym_1 = require("./Synonym");
const type_graphql_1 = require("type-graphql");
let Manhwa = class Manhwa {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Manhwa.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Manhwa.prototype, "title", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Manhwa.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Manhwa.prototype, "format", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Status_1.Status),
    __metadata("design:type", Number)
], Manhwa.prototype, "status", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => SourceMaterial_1.SourceMaterial),
    __metadata("design:type", Number)
], Manhwa.prototype, "sourceMaterial", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Manhwa.prototype, "releaseDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Date)
], Manhwa.prototype, "endDate", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], Manhwa.prototype, "chapterCount", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Manhwa.prototype, "coverImage", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => [Tag_1.Tag]),
    __metadata("design:type", Array)
], Manhwa.prototype, "tags", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => [Genre_1.Genre]),
    __metadata("design:type", Array)
], Manhwa.prototype, "genres", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => [Synonym_1.Synonym]),
    __metadata("design:type", Array)
], Manhwa.prototype, "synonyms", void 0);
Manhwa = __decorate([
    (0, type_graphql_1.ObjectType)()
], Manhwa);
exports.default = Manhwa;
//# sourceMappingURL=Manhwa.js.map