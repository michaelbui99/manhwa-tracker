import { GenreService } from "src/services/genre/genre-service";
import { GenreServiceImpl } from "src/services/genre/genre-service-impl";
import { ManhwaService } from "../services/manhwa-service";
import { ManhwaServiceImpl } from "../services/manhwa/manhwa-service-impl";
import { DAOFactory } from "./dao-factory";

export class ServiceFactory {
  private static manhwaService: ManhwaService;
  private static genreService: GenreService;

  static getManhwaService(): ManhwaService {
    if (!this.manhwaService) {
      this.manhwaService = new ManhwaServiceImpl(DAOFactory.getManhwaDAO());
    }
    return this.manhwaService;
  }

  static getGenreService(): GenreService {
    if (!this.genreService) {
      this.genreService = new GenreServiceImpl(DAOFactory.getGenreDAO());
    }
    return this.genreService;
  }
}
