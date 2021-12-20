import Manhwa from "src/models/manhwa";

export interface ManhwaService {
  getByIdAsync(id: number): Promise<Manhwa>;
  getAllAsync(): Promise<Manhwa[]>;
}
