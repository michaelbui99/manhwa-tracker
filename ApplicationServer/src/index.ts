import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { ManhwaResolver } from "./resolvers/manhwa-resolver";

const main = async () => {
  // Server setup
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ManhwaResolver],
    }),
  });

  const { url } = await apolloServer.listen(8080);
  console.log(`Server is running. GraphQL Playground available at ${url}`);
};

main().catch((err) => console.log(err));
