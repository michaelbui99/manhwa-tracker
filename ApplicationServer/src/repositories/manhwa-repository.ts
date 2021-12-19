import Manhwa from "src/models/manhwa";

export interface ManhwaRepository {
  getById(id: number): Promise<Manhwa>;
  getAll(): Promise<Manhwa[]>;
}
