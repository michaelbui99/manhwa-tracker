import { Genre } from "src/models/manhwa/genre";

export interface GenreDAO {
  getAllAsync(): Promise<Genre[]>;
}
