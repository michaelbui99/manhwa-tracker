import Manhwa from "src/models/manhwa";
import { ManhwaService } from "./manhwa-service";
import { ManhwaRepository } from "src/repositories/manhwa-repository";

export class ManhwaServiceImpl implements ManhwaService {
  constructor(private readonly manhwaRepository: ManhwaRepository) {}

  async getByIdAsync(id: number): Promise<Manhwa> {
    const manhwa = await this.manhwaRepository.getById(id);
    return manhwa;
  }
}
