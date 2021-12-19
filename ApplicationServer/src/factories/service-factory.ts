import { ManhwaService } from "../services/manhwa-service";
import { ManhwaServiceImpl } from "../services/manhwa-service-impl";
import { RepositoryFactory } from "./repository-factory";

export class ServiceFactory {
  private static manhwaService: ManhwaService;

  static getManhwaService() {
    if (!this.manhwaService) {
      this.manhwaService = new ManhwaServiceImpl(
        RepositoryFactory.getManhwaRepository()
      );
    }
    return this.manhwaService;
  }
}
