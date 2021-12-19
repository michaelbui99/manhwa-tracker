import express from "express";
import { ApolloServer } from "apollo-server-express";
import { ManhwaResolver } from "./resolvers/manhwa-resolver";
import { buildSchema } from "type-graphql";

const main = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    schema: await buildSchema({ resolvers: [ManhwaResolver] }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(8080, () => {
    console.log("Server started on localhost:8080");
  });
};

main().catch((err) => console.log(err));
