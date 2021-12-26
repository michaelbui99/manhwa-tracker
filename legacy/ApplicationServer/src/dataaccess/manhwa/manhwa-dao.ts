import Manhwa from "src/models/manhwa/manhwa";

export interface ManhwaDAO {
  getAsync(id: number): Promise<Manhwa>;
  getAllAsync(): Promise<Manhwa[]>;
  createAsync(manhwa: Manhwa): Promise<Manhwa>;
  deleteAsync(id: number): void;
}
