import Manhwa from "src/models/manhwa";

export interface ManhwaService {
  getById(id: number): Manhwa;
}
