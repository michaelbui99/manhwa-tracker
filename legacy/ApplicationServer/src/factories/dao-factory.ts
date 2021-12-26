import { UserDAO } from "../dataaccess/user/user-dao";
import { UserDAOImpl } from "../dataaccess/user/user-dao-impl";
import { GenreDAO } from "../dataaccess/genre/genre-dao";
import { GenreDAOImpl } from "../dataaccess/genre/genre-dao-impl";
import { ManhwaDAO } from "../dataaccess/manhwa/manhwa-dao";
import { ManhwaDAOImpl } from "../dataaccess/manhwa/manhwa-dao-impl";

export class DAOFactory {
  private static manhwaDAO: ManhwaDAO;
  private static genreDAO: GenreDAO;
  private static userDAO: UserDAO;

  static getManhwaDAO(): ManhwaDAO {
    if (!this.manhwaDAO) {
      this.manhwaDAO = new ManhwaDAOImpl();
    }
    return this.manhwaDAO;
  }

  static getGenreDAO(): GenreDAO {
    if (!this.genreDAO) {
      this.genreDAO = new GenreDAOImpl();
    }
    return this.genreDAO;
  }

  static getUserDAO(): UserDAO {
    if (!this.userDAO) {
      this.userDAO = new UserDAOImpl();
    }
    return this.userDAO;
  }
}
