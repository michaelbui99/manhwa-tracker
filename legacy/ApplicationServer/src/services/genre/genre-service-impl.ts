import { GenreDAO } from "src/dataaccess/genre/genre-dao";
import { Genre } from "src/models/manhwa/genre";
import { GenreService } from "./genre-service";

export class GenreServiceImpl implements GenreService {
  genreDAO: GenreDAO;

  constructor(genreDAO: GenreDAO) {
    this.genreDAO = genreDAO;
  }

  async getAllAsync(): Promise<Genre[]> {
    const genres = await this.genreDAO.getAllAsync();
    return genres;
  }
}
