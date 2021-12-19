import Manhwa from "../models/Manhwa";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class ManhwaResolver {
  @Query(() => [Manhwa])
  allManhwas() {
    return null;
  }
}
