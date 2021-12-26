import { UserService } from "../services/user/user-service";
import { UserServiceImpl } from "../services/user/user-service-impl";
import { GenreService } from "../services/genre/genre-service";
import { GenreServiceImpl } from "../services/genre/genre-service-impl";
import { ManhwaService } from "../services/manhwa/manhwa-service";
import { ManhwaServiceImpl } from "../services/manhwa/manhwa-service-impl";
import { DAOFactory } from "./dao-factory";

export class ServiceFactory {
  private static manhwaService: ManhwaService;
  private static genreService: GenreService;
  private static userService: UserService;

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

  static getUserService(): UserService {
    if (!this.userService) {
      this.userService = new UserServiceImpl(DAOFactory.getUserDAO());
    }
    return this.userService;
  }
}
