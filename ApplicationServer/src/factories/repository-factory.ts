import { ManhwaRepository } from "../repositories/manhwa-repository";
import { ManhwaRepositoryImpl } from "../repositories/manhwa-repository-impl";
import { DAOFactory } from "./dao-factory";

export class RepositoryFactory {
  private static manhwaRepository: ManhwaRepository;

  static getManhwaRepository(): ManhwaRepository {
    if (!this.manhwaRepository) {
      this.manhwaRepository = new ManhwaRepositoryImpl(
        DAOFactory.getManhwaDAO()
      );
    }
    return this.manhwaRepository;
  }
}
