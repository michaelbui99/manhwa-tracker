import "reflect-metadata";
import { ServiceFactory } from "../factories/service-factory";
import { GenreService } from "../services/genre/genre-service";
import { Query, Resolver } from "type-graphql";
import { Genre } from "../models/manhwa/genre";

@Resolver((of) => Genre)
export class GenreResolver {
  private readonly genreService: GenreService =
    ServiceFactory.getGenreService();

  @Query(() => [Genre])
  async allGenres() {
    const genres = await this.genreService.getAllAsync();
    return genres;
  }
}
