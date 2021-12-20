import { ManhwaService } from "../services/manhwa-service";
import { ManhwaServiceImpl } from "../services/manhwa-service-impl";
import { DAOFactory } from "./dao-factory";
import { RepositoryFactory } from "./repository-factory";

export class ServiceFactory {
  private static manhwaService: ManhwaService;

  static getManhwaService() {
    if (!this.manhwaService) {
      this.manhwaService = new ManhwaServiceImpl(DAOFactory.getManhwaDAO());
    }
    return this.manhwaService;
  }
}
