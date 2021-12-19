import "reflect-metadata";
import Manhwa from "../models/manhwa";
import { Arg, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { ServiceFactory } from "../factories/service-factory";
// TODO: Implement ManhwaService and use in Queries and Mutations

@Resolver((of) => Manhwa)
export class ManhwaResolver {
  private readonly manhwaService = ServiceFactory.getManhwaService();

  @Query(() => [Manhwa])
  async allManhwas() {}

  @Query(() => [Manhwa])
  manhwaByTitle(@Arg("title", { nullable: false }) title: string) {
    return null;
  }

  @Query(() => Manhwa)
  async manhwaById(@Arg("id", { nullable: false }) id: number) {
    const manhwa = await this.manhwaService.getByIdAsync(id);
    return manhwa;
  }
}
