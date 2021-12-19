import Manhwa from "src/models/manhwa";

export interface ManhwaDAO {
  get(id: number): Manhwa;
  getAll(): Manhwa[];
  create(manhwa: Manhwa): Manhwa;
  delete(id: number): void;
}
