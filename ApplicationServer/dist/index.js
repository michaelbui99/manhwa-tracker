"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const manhwa_resolver_1 = require("./resolvers/manhwa-resolver");
const main = async () => {
    const app = (0, express_1.default)();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({ resolvers: [manhwa_resolver_1.ManhwaResolver] }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(8080, () => {
        console.log("Server started on localhost:8080");
    });
};
main().catch((err) => console.log(err));
//# sourceMappingURL=index.js.map