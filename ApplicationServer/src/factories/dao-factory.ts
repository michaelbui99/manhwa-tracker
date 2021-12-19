import { ManhwaDAO } from "../dataaccess/manhwa/manhwa-dao";
import { ManhwaDAOImpl } from "../dataaccess/manhwa/manhwa-dao-impl";

export class DAOFactory {
  private static manhwaDAO: ManhwaDAO;

  static getManhwaDAO(): ManhwaDAO {
    if (!this.manhwaDAO) {
      this.manhwaDAO = new ManhwaDAOImpl();
    }
    return this.manhwaDAO;
  }
}
