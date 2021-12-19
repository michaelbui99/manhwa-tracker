import "reflect-metadata";
import Manhwa from "../models/manhwa";
import { Arg, Query, Resolver } from "type-graphql";

// TODO: Implement ManhwaService and use in Queries and Mutations

@Resolver()
export class ManhwaResolver {
  @Query(() => [Manhwa])
  allManhwas() {
    return null;
  }

  @Query(() => [Manhwa])
  manhwaByTitle(@Arg("title", { nullable: false }) title: string) {
    return null;
  }
}
