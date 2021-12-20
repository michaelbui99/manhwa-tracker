import { ManhwaDAO } from "src/dataaccess/manhwa/manhwa-dao";
import Manhwa from "src/models/manhwa";
import { ManhwaService } from "./manhwa-service";

export class ManhwaServiceImpl implements ManhwaService {
  constructor(private readonly manhwaDAO: ManhwaDAO) {}
  async getAllAsync(): Promise<Manhwa[]> {
    const manhwas = await this.manhwaDAO.getAllAsync();
    return manhwas;
  }

  async getByIdAsync(id: number): Promise<Manhwa> {
    const manhwa = await this.manhwaDAO.getAsync(id);
    return manhwa;
  }
}
