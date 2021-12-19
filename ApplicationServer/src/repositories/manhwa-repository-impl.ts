import { ManhwaDAO } from "src/dataaccess/manhwa/manhwa-dao";
import Manhwa from "src/models/manhwa";
import { ManhwaRepository } from "./manhwa-repository";
import { Service } from "typedi";

export class ManhwaRepositoryImpl implements ManhwaRepository {
  constructor(private readonly manhwaDAO: ManhwaDAO) {}
  async getById(id: number): Promise<Manhwa> {
    const manhwa = await this.manhwaDAO.getAsync(id);
    return manhwa;
  }
  async getAll(): Promise<Manhwa[]> {
    const allManhwas = await this.manhwaDAO.getAllAsync();
    return allManhwas;
  }
}
