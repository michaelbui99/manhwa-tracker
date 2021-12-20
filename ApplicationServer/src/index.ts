import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { GenreResolver } from "./resolvers/genre-resolver";
import { ManhwaResolver } from "./resolvers/manhwa-resolver";

const main = async () => {
  // Server setup
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ManhwaResolver, GenreResolver],
    }),
  });

  const { url } = await apolloServer.listen(8080);
  console.log(`Server is running. GraphQL Playground available at ${url}`);
};

main().catch((err) => console.log(err));
